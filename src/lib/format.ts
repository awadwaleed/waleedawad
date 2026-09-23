/**
 * Formats a "YYYY-MM-DD" content date. Parsed as UTC and formatted in UTC so the day never
 * shifts with the reader's (or build machine's) timezone.
 */
export function formatDate(date: string, month: "long" | "short" = "long"): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month,
    day: "numeric",
    timeZone: "UTC",
  });
}
