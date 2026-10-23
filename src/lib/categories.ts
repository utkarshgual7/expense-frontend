import type { Category } from "@/shared/expense";

// One colour per category, used identically in the list and the summary.
// Colour is never the only carrier of meaning — the label always travels with it.
export const CATEGORY_COLOR: Record<Category, string> = {
  food: "var(--cat-food)",
  travel: "var(--cat-travel)",
  bills: "var(--cat-bills)",
  other: "var(--cat-other)",
};

// Amounts are INR. en-IN groups in lakhs/crores (1,23,456.00), which is what an
// Indian reader expects; the ₹ sign is rendered next to the figure, not inside it,
// so the digits keep their own tabular-nums column.
export const money = (n: number) =>
  n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const CURRENCY = "₹";

// "2026-03-14" -> "14 Mar" without pulling the string through a timezone.
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const shortDate = (iso: string) => {
  const [, m, d] = iso.split("-");
  return `${Number(d)} ${MONTHS[Number(m) - 1] ?? m}`;
};
