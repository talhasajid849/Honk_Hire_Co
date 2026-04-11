import { CONTACT_EMAIL } from "./site";

export function mailtoHref(opts: { subject?: string; body?: string } = {}): string {
  const params = new URLSearchParams();
  if (opts.subject?.trim()) params.set("subject", opts.subject.trim());
  if (opts.body?.trim()) params.set("body", opts.body.trim());
  const q = params.toString();
  return q ? `mailto:${CONTACT_EMAIL}?${q}` : `mailto:${CONTACT_EMAIL}`;
}
