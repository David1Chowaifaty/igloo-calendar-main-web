'use strict';

var irDate = require('./ir-date-BH2JQpbC.js');
require('./moment-CdViwxPQ.js');

const formatterCache = new Map();
/**
 * Builds the BCP-47 tag with the `-u-nu-` extension. The script is always concrete by this point
 * — `'auto'` is resolved by `resolveNumberingScript` so that numbers and dates agree, rather
 * than each falling back to its own library's idea of the locale default.
 */
function buildFormatter(locale, numbering, intlOptions) {
    const tag = `${locale}-u-nu-${numbering}`;
    const cacheKey = `${tag}|${JSON.stringify(intlOptions)}`;
    let formatter = formatterCache.get(cacheKey);
    if (!formatter) {
        try {
            formatter = new Intl.NumberFormat(tag, intlOptions);
        }
        catch {
            // Unknown locale/extension — fall back rather than throwing out of a render.
            formatter = new Intl.NumberFormat('en', intlOptions);
        }
        formatterCache.set(cacheKey, formatter);
    }
    return formatter;
}
function split({ locale, numberingSystem, ...intlOptions } = {}) {
    const resolvedLocale = irDate.resolveLocale({ locale });
    return [resolvedLocale, irDate.resolveNumberingScript(resolvedLocale, irDate.resolveNumberingSystem({ numberingSystem })), intlOptions];
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
function formatBookingNumber(value, options) {
    if (value === null || value === undefined)
        return '';
    // `String(...)` is defensive only. A booking number that arrived as a JSON *number* has
    // already lost its leading zeros upstream — this cannot recover them, it just avoids throwing.
    const [, numbering] = split(options);
    return irDate.toNumerals(String(value), numbering);
}
/**
 * Formats a number for display in the active language and digit script.
 *
 * @example formatNumber(3)        // '3'  ·  '٣' under Arabic-Indic
 * @example formatNumber(1234.5, { minimumFractionDigits: 2 })  // '1,234.50' · '١٬٢٣٤٫٥٠'
 */
function formatNumber(value, options) {
    if (value === null || value === undefined || Number.isNaN(value))
        return '';
    const [locale, numbering, intlOptions] = split(options);
    return buildFormatter(locale, numbering, intlOptions).format(value);
}
/**
 * Formats a whole-number count — occupancy badges, night counts, row totals. Fraction digits are
 * pinned to zero so a stray float never renders as `3.0000001`.
 */
function formatCount(value, options) {
    return formatNumber(value, { maximumFractionDigits: 0, ...options });
}
/**
 * Formats a percentage from a whole number, i.e. `formatPercent(87)` → `'87%'`. Takes 0–100
 * rather than 0–1 because that is how occupancy and similar values are already held in this
 * codebase.
 */
function formatPercent(value, options) {
    if (value === null || value === undefined || Number.isNaN(value))
        return '';
    const [locale, numbering, intlOptions] = split(options);
    return buildFormatter(locale, numbering, { style: 'percent', maximumFractionDigits: 0, ...intlOptions }).format(value / 100);
}
/**
 * The money format used across the app: an optional leading minus, the currency symbol, then the
 * amount at two decimal places. Kept as symbol-plus-number rather than `style: 'currency'`
 * because callers pass an already-resolved symbol (`$`, `€`, `ر.س`), not an ISO code.
 */
function formatAmount(currency, amount = 0, options) {
    const formatted = formatNumber(Math.abs(amount ?? 0), { minimumFractionDigits: 2, maximumFractionDigits: 2, ...options });
    return `${amount < 0 ? '- ' : ''}${currency} ${formatted}`;
}

exports.formatAmount = formatAmount;
exports.formatBookingNumber = formatBookingNumber;
exports.formatCount = formatCount;
exports.formatNumber = formatNumber;
exports.formatPercent = formatPercent;
