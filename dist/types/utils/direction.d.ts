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
