import locales from "../stores/locales.store";
/**
 * `locales.direction` comes straight from the language API and isn't guaranteed to be
 * lowercase (observed 'RTL' from at least one property/language combination), so every
 * direction check goes through this instead of a raw `=== 'rtl'` compare.
 *
 * `document.dir` wins: the document owns direction (set by the host PMS page or by
 * `ir-locale-switcher`), and components inherit it rather than each deciding for themselves.
 */
export function isRtlDirection(direction) {
    const dir = document.dir || direction || locales.direction;
    return String(dir).toLowerCase() === 'rtl';
}
/** Resolved document direction, for the handful of places that need it in JS. */
export function getDirection() {
    return isRtlDirection(locales.direction) ? 'rtl' : 'ltr';
}
/** `+1` in LTR, `-1` in RTL — multiply physical x-axis deltas by this to get inline deltas. */
export function inlineSign() {
    return isRtlDirection(locales.direction) ? -1 : 1;
}
/** Primary subtags written right-to-left. */
export const RTL_LANGUAGES = new Set(['ar', 'he', 'fa', 'ur']);
/** Whether a BCP-47 tag (`ar`, `ar-SA`, `he_IL`, …) is a right-to-left language. */
export function isRtlLanguage(language) {
    return RTL_LANGUAGES.has(String(language ?? '')
        .toLowerCase()
        .split(/[-_]/)[0]);
}
/**
 * Distance in px from `container`'s inline start to `child`'s inline start.
 *
 * `getBoundingClientRect()` only ever reports physical edges, so an offset measured as
 * `child.left - container.left` silently means "distance from the inline end" under RTL.
 */
export function inlineOffset(child, container) {
    return isRtlDirection(locales.direction) ? container.right - child.right : child.left - container.left;
}
