import { l as locales } from './locale-scope-CapRuPkM.js';

/**
 * `locales.direction` comes straight from the language API and isn't guaranteed to be
 * lowercase (observed 'RTL' from at least one property/language combination), so every
 * direction check goes through this instead of a raw `=== 'rtl'` compare.
 *
 * `document.dir` wins: the document owns direction (set by the host PMS page or by
 * `ir-locale-switcher`), and components inherit it rather than each deciding for themselves.
 */
function isRtlDirection(direction) {
    const dir = document.dir || direction || locales.direction;
    return String(dir).toLowerCase() === 'rtl';
}
/**
 * The `dir` hardcoded on the nearest ancestor below `<html>`, walking out of shadow roots to their
 * hosts. `undefined` when nothing below the document sets one.
 *
 * `wa-*` components resolve direction in JS as `host.dir || <html dir>`, skipping ancestors, so a
 * subtree that overrides the document (e.g. `<ir-menu dir="rtl">`) has to forward this to them.
 * Passing `undefined` through leaves the attribute off, so they keep tracking `<html dir>` live.
 */
function getLocalDirection(el) {
    let node = el;
    while (node && node !== document.documentElement) {
        const dir = node.getAttribute('dir')?.toLowerCase();
        if (dir === 'rtl' || dir === 'ltr')
            return dir;
        node = node.parentElement ?? node.getRootNode().host ?? null;
    }
    return undefined;
}
/** `+1` in LTR, `-1` in RTL — multiply physical x-axis deltas by this to get inline deltas. */
function inlineSign() {
    return isRtlDirection(locales.direction) ? -1 : 1;
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
    return isRtlDirection(locales.direction) ? container.right - child.right : child.left - container.left;
}

export { inlineSign as a, inlineOffset as b, isRtlDirection as c, getLocalDirection as g, isRtlLanguage as i };
