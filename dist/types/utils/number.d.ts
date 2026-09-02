import { NumberingSystemPreference } from "./date/types";
/**
 * Locale- and digit-script-aware number display, sharing one setting with the date layer: a user
 * who picks Arabic-Indic digits gets them on dates, prices and counts alike.
 *
 * Unlike the date layer — which substitutes digits in an already-formatted string — numbers go
 * through `Intl.NumberFormat`, so grouping and decimal separators localize too
 * (`١٬٢٣٤٬٥٦٧٫٥٠`, or `1.234.567,50` under `ar-MA`). Substituting digits alone would leave
 * Latin separators in Arabic text, which reads wrong.
 *
 * **Display only.** Never use these for values that are posted to an API, written to an input,
 * used as a key, or parsed back with `Number()` — a grouped, non-Latin string will not round
 * trip. Keep those paths on the raw number.
 */
export interface FormatNumberOptions extends Intl.NumberFormatOptions {
    /** Overrides the active display language for this call only. */
    locale?: string;
    /** Overrides the resolved digit script for this call only. */
    numberingSystem?: NumberingSystemPreference;
}
/**
 * Formats a booking number — and any other digit string that is an *identifier* rather than a
 * quantity (channel booking references, invoice numbers, confirmation codes).
 *
 * These must not go through `Intl.NumberFormat`, which would treat them as quantities:
 *
 *   formatNumber(Number('0042'))  →  '42'      leading zeros lost
 *   formatNumber(Number('100234')) → '100,234'  grouping separator invented
 *
 * Both corrupt the identifier. This converts digit-by-digit instead, so the string keeps its
 * exact length, its leading zeros, and any separators it already carries (`BK-0042/7` stays
 * `BK-٠٠٤٢/٧`). Non-digit characters pass through untouched.
 *
 * @example formatBookingNumber('0042')  // '0042' · '٠٠٤٢' under Arabic-Indic
 *
 * Display only — never feed the result back to an API, an input, or a lookup key; keep those on
 * the original string.
 */
export declare function formatBookingNumber(value: string | null | undefined, options?: Pick<FormatNumberOptions, 'locale' | 'numberingSystem'>): string;
/**
 * Formats a number for display in the active language and digit script.
 *
 * @example formatNumber(3)        // '3'  ·  '٣' under Arabic-Indic
 * @example formatNumber(1234.5, { minimumFractionDigits: 2 })  // '1,234.50' · '١٬٢٣٤٫٥٠'
 */
export declare function formatNumber(value: number | null | undefined, options?: FormatNumberOptions): string;
/**
 * Formats a whole-number count — occupancy badges, night counts, row totals. Fraction digits are
 * pinned to zero so a stray float never renders as `3.0000001`.
 */
export declare function formatCount(value: number | null | undefined, options?: FormatNumberOptions): string;
/**
 * Formats a percentage from a whole number, i.e. `formatPercent(87)` → `'87%'`. Takes 0–100
 * rather than 0–1 because that is how occupancy and similar values are already held in this
 * codebase.
 */
export declare function formatPercent(value: number | null | undefined, options?: FormatNumberOptions): string;
/**
 * The money format used across the app: an optional leading minus, the currency symbol, then the
 * amount at two decimal places. Kept as symbol-plus-number rather than `style: 'currency'`
 * because callers pass an already-resolved symbol (`$`, `€`, `ر.س`), not an ISO code.
 */
export declare function formatAmount(currency: string, amount?: number, options?: FormatNumberOptions): string;
