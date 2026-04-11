/** Default copy for mailto links — keep in sync with hire planner output tone. */

export function defaultGreetingMessage(): string {
  return "Hi Honk Hire Co! I'd like to check availability for a scooter hire on the Sunshine Coast.";
}

export function quickScooterMessage(scooterName: string, cc: number): string {
  return `Hi Honk Hire Co! I'm interested in the ${scooterName} (${cc}cc). What's available?`;
}
