"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { MessageCircle, Truck, Wallet, RotateCcw } from "lucide-react";
import { whatsappHref } from "@/lib/contact/site";

// "SYM Jet" by yuchinglin on Sketchfab. It is embed-only (not downloadable), so it is shown in
// Sketchfab's own viewer with the credit visible, and we steer the camera as the page scrolls.
const MODEL_UID = "4a14849724d8445e8d7e91eb1baae0c8";
const MODEL_URL = "https://sketchfab.com/3d-models/sym-jet-4a14849724d8445e8d7e91eb1baae0c8";
const POSTER =
  "https://media.sketchfab.com/models/4a14849724d8445e8d7e91eb1baae0c8/thumbnails/143d41a5eb94448a8e84caf2f84fd241/11970c9eda594869b07356e41984a69f.jpeg";
const VIEWER_JS = "https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js";

// Where the camera sits for each step: turn around the scooter (degrees) and how close it gets.
const VIEWS = [
  { yaw: 0, zoom: 1 },
  { yaw: 75, zoom: 0.9 },
  { yaw: 165, zoom: 0.95 },
  { yaw: 255, zoom: 0.85 },
];

const STEPS = [
  {
    title: "Tell us your dates",
    desc: "Reach out with your window, pickup preference, and scooter tier (50cc or 125cc).",
    Icon: MessageCircle,
  },
  {
    title: "Collect or we deliver",
    desc: "Free pickup from Tewantin, or $40 delivery within 20km (further away is quoted individually).",
    Icon: Truck,
  },
  {
    title: "Pay weekly + bond",
    desc: "Pay week 1 + bond upfront, then weekly as you go. Minimum 2 weeks. 500 km/week included; extra at $0.23/km.",
    Icon: Wallet,
  },
  {
    title: "Ride & return",
    desc: "Enjoy Noosa to Caloundra. Return on time; we refund your bond minus any km extras.",
    Icon: RotateCcw,
  },
];

type Vec3 = [number, number, number];
type SketchfabApi = {
  start: () => void;
  addEventListener: (name: string, cb: () => void) => void;
  getCameraLookAt: (cb: (err: unknown, cam: { position: Vec3; target: Vec3 }) => void) => void;
  setCameraLookAt: (position: Vec3, target: Vec3, duration?: number) => void;
};
type SketchfabCtor = new (iframe: HTMLIFrameElement) => { init: (uid: string, opts: Record<string, unknown>) => void };
declare global {
  interface Window {
    Sketchfab?: SketchfabCtor;
  }
}

function loadViewerScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Sketchfab) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${VIEWER_JS}"]`);
    const script = existing ?? document.createElement("script");
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => reject(new Error("viewer failed")));
    if (!existing) {
      script.src = VIEWER_JS;
      script.async = true;
      document.head.appendChild(script);
    }
  });
}

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const apiRef = useRef<SketchfabApi | null>(null);
  const baseRef = useRef<{ position: Vec3; target: Vec3 } | null>(null);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const near = useInView(sectionRef, { once: true, margin: "600px 0px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  const aim = useCallback((index: number) => {
    const api = apiRef.current;
    const base = baseRef.current;
    if (!api || !base) return;
    const { yaw, zoom } = VIEWS[index];
    const a = (yaw * Math.PI) / 180;
    const [px, py, pz] = base.position;
    const [tx, ty, tz] = base.target;
    const dx = (px - tx) * zoom;
    const dz = (pz - tz) * zoom;
    const position: Vec3 = [tx + dx * Math.cos(a) - dz * Math.sin(a), ty + (py - ty) * zoom, tz + dx * Math.sin(a) + dz * Math.cos(a)];
    api.setCameraLookAt(position, base.target, 1.8);
  }, []);

  // Start the viewer only once the section is close to the screen: the model is large.
  useEffect(() => {
    if (!near || !iframeRef.current) return;
    let cancelled = false;
    loadViewerScript()
      .then(() => {
        if (cancelled || !iframeRef.current || !window.Sketchfab) return;
        const client = new window.Sketchfab(iframeRef.current);
        client.init(MODEL_UID, {
          autostart: 1,
          preload: 1,
          ui_controls: 0,
          ui_infos: 0,
          ui_stop: 0,
          ui_inspector: 0,
          ui_settings: 0,
          ui_vr: 0,
          ui_fullscreen: 0,
          ui_help: 0,
          ui_annotations: 0,
          ui_ar: 0,
          ui_hint: 2,
          camera: 0,
          dnt: 1,
          success: (api: SketchfabApi) => {
            apiRef.current = api;
            api.addEventListener("viewerready", () => {
              api.getCameraLookAt((_err, cam) => {
                baseRef.current = cam;
                setReady(true);
              });
            });
          },
          error: () => setFailed(true),
        });
      })
      .catch(() => setFailed(true));
    return () => {
      cancelled = true;
    };
  }, [near]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(STEPS.length - 1, Math.max(0, Math.floor(value * STEPS.length)));
    setActive((current) => (current === next ? current : next));
  });

  useEffect(() => {
    if (ready) aim(active);
  }, [active, ready, aim]);

  const step = STEPS[active];
  const StepIcon = step.Icon;

  return (
    <section id="how-it-works" className="relative bg-[var(--ink)] text-[var(--ink-fg)]">
      {/* Tall wrapper: the scene below stays pinned while you scroll through the four steps. */}
      <div ref={sectionRef} className="relative h-[330vh] sm:h-[380vh]">
        <div className="sticky top-0 flex h-screen min-h-[560px] flex-col justify-center overflow-hidden px-5 pb-8 pt-24 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-14">
            <div className="order-2 lg:order-1">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[var(--sun-on-ink)]">
                <span aria-hidden className="h-px w-8 bg-current opacity-60" />
                How it works
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold leading-[1.05] text-[var(--ink-fg)] sm:text-5xl">
                Four calm steps from enquiry to ride.
              </h2>

              <div className="mt-5 min-h-[10.5rem] sm:mt-8 sm:min-h-[12rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--sun)] text-[var(--sun-fg)]">
                        <StepIcon size={20} />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--sun-on-ink)]">
                        Step {active + 1} of {STEPS.length}
                      </span>
                    </div>
                    <h3 className="font-display mt-3 text-2xl font-bold sm:text-3xl">{step.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">{step.desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 flex items-center gap-2" role="tablist" aria-label="Booking steps">
                {STEPS.map((item, i) => (
                  <span
                    key={item.title}
                    aria-hidden
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === active ? "w-10 bg-[var(--sun-on-ink)]" : i < active ? "w-4 bg-[var(--sun-on-ink)]/60" : "w-4 bg-white/15"
                    }`}
                  />
                ))}
              </div>

              <a
                href={whatsappHref("Hi Honk Hire Co, I'd like to book a scooter.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 hidden items-center rounded-full bg-[var(--sun)] px-6 py-3 text-sm font-bold text-[var(--sun-fg)] transition hover:opacity-90 sm:inline-flex"
              >
                Start on WhatsApp
              </a>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-[var(--ink-border)] bg-[var(--ink-2)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:aspect-[16/10]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={POSTER}
                  alt="SYM Jet scooter"
                  style={{ transform: `scale(${[1, 1.12, 1.22, 1.06][active]}) translateX(${[0, -4, 3, -2][active]}%)` }}
                  className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1400ms] ease-out ${ready ? "opacity-0" : "opacity-100"}`}
                />
                {!ready && !failed && (
                  <span className="absolute inset-x-0 bottom-4 text-center text-xs font-semibold tracking-wide text-white/80">
                    Loading the 3D scooter…
                  </span>
                )}
                <iframe
                  ref={iframeRef}
                  title="3D model of a SYM Jet scooter"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
                />
              </div>
              <p className="mt-2 text-right text-[11px] text-[var(--ink-muted)]">
                3D model:{" "}
                <a href={MODEL_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  SYM Jet
                </a>{" "}
                by{" "}
                <a href="https://sketchfab.com/yuchinglin" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  yuchinglin
                </a>{" "}
                on Sketchfab
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
