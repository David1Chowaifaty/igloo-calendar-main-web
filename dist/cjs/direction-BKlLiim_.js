'use strict';

var locales_store = require('./locales.store-v9LoZcAK.js');

/**
 * `locales.direction` comes straight from the language API and isn't guaranteed to be
 * lowercase (observed 'RTL' from at least one property/language combination), so every
 * direction check goes through this instead of a raw `=== 'rtl'` compare.
 *
 * `document.dir` wins: the document owns direction (set by the host PMS page or by
 * `ir-locale-switcher`), and components inherit it rather than each deciding for themselves.
 */
function isRtlDirection(direction) {
    const dir = document.dir || direction || locales_store.locales.direction;
    return String(dir).toLowerCase() === 'rtl';
}
/** `+1` in LTR, `-1` in RTL — multiply physical x-axis deltas by this to get inline deltas. */
function inlineSign() {
    return isRtlDirection(locales_store.locales.direction) ? -1 : 1;
}
/** Primary subtags written right-to-left. */
const RTL_LANGUAGES = new Set(['ar', 'he', 'fa', 'ur']);
/** Whether a BCP-47 tag (`ar`, `ar-SA`, `he_IL`, …) is a right-to-left language. */
function isRtlLanguage(language) {
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
function inlineOffset(child, container) {
    return isRtlDirection(locales_store.locales.direction) ? container.right - child.right : child.left - container.left;
}

exports.inlineOffset = inlineOffset;
exports.inlineSign = inlineSign;
exports.isRtlDirection = isRtlDirection;
exports.isRtlLanguage = isRtlLanguage;
