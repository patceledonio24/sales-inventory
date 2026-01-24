/**
 * Next.js Server Components can only pass plain JSON-serializable values to Client Components.
 * Prisma Decimal is not serializable, so convert Decimal -> string/number BEFORE passing props.
 */

export function decimalToString(v: unknown, fallback = "0.00"): string {
  if (v == null) return fallback;
  if (typeof v === "string") return v;
  if (typeof v === "number") return Number.isFinite(v) ? v.toFixed(2) : fallback;

  // Prisma Decimal has toString()
  const anyV = v as any;
  if (typeof anyV?.toString === "function") {
    const s = anyV.toString();
    return typeof s === "string" && s.length ? s : fallback;
  }

  return fallback;
}

export function decimalToNumber(v: unknown, fallback = 0): number {
  if (v == null) return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  if (typeof v === "string") {
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
  }

  const anyV = v as any;
  if (typeof anyV?.toString === "function") {
    const n = Number(anyV.toString());
    return Number.isFinite(n) ? n : fallback;
  }

  return fallback;
}
