/**
 * Returns today's date in YYYY-MM-DD for a given IANA timezone.
 *
 * We use Intl.DateTimeFormat to avoid adding deps (date-fns-tz/luxon)
 * and to avoid relying on server TZ (Vercel is typically UTC).
 */
export function todayISO(timeZone: string = "Asia/Manila") {
  // en-CA formats as YYYY-MM-DD with 2-digit month/day.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}
