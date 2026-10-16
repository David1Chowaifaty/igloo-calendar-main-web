/**
 * Translates a Gregorian moment format string into its moment-hijri equivalent, so that call
 * sites can keep passing one plain format string (`'ddd, DD MMM YYYY'`) and get Hijri output
 * when the Hijri calendar is active — without knowing moment-hijri's `i`-prefixed ApiClient set.
 *
 * Only the tokens that actually name a *calendar* field are rewritten. Day-of-week and
 * clock-time are calendar-independent — Thursday is Thursday in both systems — so `dddd`, `ddd`,
 * `HH`, `mm`, `A`, `Z` and friends pass through untouched and still localize via the moment
 * locale.
 *
 * Deliberately NOT handled: moment's *localized* tokens (`L`, `LL`, `ll`, `LT`, `LLLL`) have no
 * `i`-prefixed counterpart in moment-hijri. Nothing in this codebase uses them, and
 * `STYLE_FORMATS` in `ir-date.ts` is written with plain tokens precisely so they never reach
 * here. The same applies to week/week-year tokens (`w`, `ww`, `gggg`), which are unused in this
 * codebase. Anything unmapped is passed through, yielding a Gregorian field under a Hijri
 * preference — extend `HIJRI_TOKENS` rather than working around it at the call site.
 */
/**
 * @param format A moment format string using ordinary Gregorian tokens.
 * @returns The same string with calendar-field tokens rewritten for moment-hijri.
 */
export declare function toHijriFormat(format: string): string;
