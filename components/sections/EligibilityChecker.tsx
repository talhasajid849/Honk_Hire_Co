"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, CheckCircle2, AlertTriangle, Phone, MessageCircle, RotateCcw } from "lucide-react";
import { whatsappHref, CONTACT_PHONE_DISPLAY } from "@/lib/contact/site";

type Tone = "good" | "unsure" | "stop";

interface Option {
  label: string;
  tone: Tone;
}

interface Step {
  question: string;
  hint: string;
  options: Option[];
}

/** Qualifying rules: not at fault, other driver's details, and the other party's insurer details. */
const STEPS: Step[] = [
  {
    question: "Were you at fault for the accident?",
    hint: "If another driver hit you or failed to give way, you are generally not at fault.",
    options: [
      { label: "No — the other driver was at fault", tone: "good" },
      { label: "Not sure / it's disputed", tone: "unsure" },
      { label: "Yes — I caused it", tone: "stop" },
    ],
  },
  {
    question: "Do you have the other driver's details?",
    hint: "Their name, phone number and vehicle registration.",
    options: [
      { label: "Yes — I have their details", tone: "good" },
      { label: "Only some of them", tone: "unsure" },
      { label: "No", tone: "stop" },
    ],
  },
  {
    question: "Do you have the other party's insurer details?",
    hint: "The name of their insurance company — a claim number helps if you have one.",
    options: [
      { label: "Yes — I know their insurer", tone: "good" },
      { label: "Not yet, but I can get them", tone: "unsure" },
      { label: "No", tone: "stop" },
    ],
  },
];

const STOP_MESSAGES = [
  "If you caused the accident, you may not be eligible for a not-at-fault replacement vehicle. We may still be able to help with a standard hire — get in touch to discuss your options.",
  "To arrange a not-at-fault replacement vehicle we need the other driver's details. If you can get them (police report, photos of their rego, witnesses), message us and we'll talk you through it.",
  "We need the other party's insurer details to arrange a not-at-fault replacement vehicle. The other driver can usually tell you — once you have it, message us and we'll take it from there.",
];

const PHONE_HREF = `tel:${CONTACT_PHONE_DISPLAY.replace(/\s/g, "")}`;

export default function EligibilityChecker() {
  const [answers, setAnswers] = useState<Option[]>([]);
  const step = answers.length;
  const stopped = answers.find((a) => a.tone === "stop");
  const stopIndex = stopped ? answers.indexOf(stopped) : -1;
  const done = step === STEPS.length || stopped;
  const unsure = answers.some((a) => a.tone === "unsure");

  const choose = (option: Option) => setAnswers((prev) => [...prev, option]);
  const back = () => setAnswers((prev) => prev.slice(0, -1));
  const reset = () => setAnswers([]);

  const summary = STEPS.slice(0, answers.length)
    .map((s, i) => `• ${s.question} ${answers[i].label}`)
    .join("\n");
  const enquiry = `Hi Honk Hire Co! I've been in an accident and need a replacement vehicle. My eligibility check answers:\n${summary}`;

  return (
    <div className="mx-auto max-w-lg">
      {/* Progress */}
      <div className="mb-6 flex justify-center gap-2" aria-hidden>
        {STEPS.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i < step || (i === step && !done) ? "w-8 bg-[var(--accent)]" : "w-2 bg-[var(--border-strong)]"
            }`}
          />
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-lg">
        <div className="p-6 sm:p-8">
          {step > 0 && (
            <button
              type="button"
              onClick={back}
              className="mb-4 flex cursor-pointer items-center gap-1 text-xs text-[var(--fg-subtle)] transition-colors hover:text-[var(--fg)]"
            >
              <ChevronLeft className="h-3.5 w-3.5" aria-hidden />
              Back
            </button>
          )}

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.2 }}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Step {step + 1} of {STEPS.length}
                </p>
                <h3 className="text-lg font-semibold text-[var(--fg)]">{STEPS[step].question}</h3>
                <p className="mb-6 mt-1 text-sm text-[var(--fg-muted)]">{STEPS[step].hint}</p>
                <div className="flex flex-col gap-3">
                  {STEPS[step].options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => choose(option)}
                      className="w-full cursor-pointer rounded-xl border-2 border-[var(--border)] px-5 py-4 text-left text-base font-medium text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : stopped ? (
              <motion.div key="stop" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 p-5 text-sm leading-relaxed text-[var(--fg)]">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden />
                  <p>{STOP_MESSAGES[stopIndex]}</p>
                </div>
                <p className="mt-6 font-semibold text-[var(--fg)]">Talk to us about your options</p>
                <ContactButtons message={enquiry} />
                <ResetButton onClick={reset} />
              </motion.div>
            ) : (
              <motion.div key="good" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex gap-3 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-soft)] p-5 text-sm leading-relaxed text-[var(--fg)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
                  <p>
                    {unsure
                      ? "You may be eligible for a not-at-fault replacement vehicle. Send us what you have and we'll confirm the rest with you."
                      : "Good news — you look eligible for a not-at-fault replacement vehicle. Send us your details and we'll get you back on the road."}
                  </p>
                </div>
                <p className="mt-6 font-semibold text-[var(--fg)]">Next step: message or call us</p>
                <ContactButtons message={enquiry} />
                <ResetButton onClick={reset} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-[var(--fg-subtle)]">
        Not sure? Check anyway — we&apos;ll confirm it for you.
      </p>
    </div>
  );
}

function ContactButtons({ message }: { message: string }) {
  return (
    <div className="mt-3 flex flex-col gap-3 sm:flex-row">
      <a
        href={whatsappHref(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25 transition-colors hover:bg-[var(--accent-hover)]"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        WhatsApp us
      </a>
      <a
        href={PHONE_HREF}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold text-[var(--fg)] transition-colors hover:border-[var(--accent)]/40"
      >
        <Phone className="h-4 w-4" aria-hidden />
        Call {CONTACT_PHONE_DISPLAY}
      </a>
    </div>
  );
}

function ResetButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mx-auto mt-5 flex cursor-pointer items-center gap-1.5 text-xs text-[var(--fg-subtle)] transition-colors hover:text-[var(--fg)]"
    >
      <RotateCcw className="h-3.5 w-3.5" aria-hidden />
      Start again
    </button>
  );
}
