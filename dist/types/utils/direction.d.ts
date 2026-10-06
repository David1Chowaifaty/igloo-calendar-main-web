export type Direction = 'ltr' | 'rtl';
/**
 * `locales.direction` comes straight from the language API and isn't guaranteed to be
 * lowercase (observed 'RTL' from at least one property/language combination), so every
 * direction check goes through this instead of a raw `=== 'rtl'` compare.
 *
 * `document.dir` wins: the document owns direction (set by the host PMS page or by
 * `ir-locale-switcher`), and components inherit it rather than each deciding for themselves.
 */
export declare function isRtlDirection(direction?: string | null): boolean;
/** Resolved document direction, for the handful of places that need it in JS. */
export declare function getDirection(): Direction;
/**
 * The `dir` hardcoded on the nearest ancestor below `<html>`, walking out of shadow roots to their
 * hosts. `undefined` when nothing below the document sets one.
 *
 * `wa-*` components resolve direction in JS as `host.dir || <html dir>`, skipping ancestors, so a
 * subtree that overrides the document (e.g. `<ir-menu dir="rtl">`) has to forward this to them.
 * Passing `undefined` through leaves the attribute off, so they keep tracking `<html dir>` live.
 */
export declare function getLocalDirection(el: Element): Direction | undefined;
/** `+1` in LTR, `-1` in RTL — multiply physical x-axis deltas by this to get inline deltas. */
export declare function inlineSign(): 1 | -1;
/** Primary subtags written right-to-left. */
export declare const RTL_LANGUAGES: Set<string>;
/** Whether a BCP-47 tag (`ar`, `ar-SA`, `he_IL`, …) is a right-to-left language. */
export declare function isRtlLanguage(language?: string | null): boolean;
/**
 * Distance in px from `container`'s inline start to `child`'s inline start.
 *
 * `getBoundingClientRect()` only ever reports physical edges, so an offset measured as
 * `child.left - container.left` silently means "distance from the inline end" under RTL.
 */
export declare function inlineOffset(child: DOMRect, container: DOMRect): number;
