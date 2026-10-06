/**
 * Subtrees that render in a different language from the rest of the app.
 *
 * The `locales` store holds one language for the whole document. A subtree opts out of it the
 * same way HTML does, with a `lang` attribute on any element below `<html>` — e.g.
 * `<ir-booking-new-form language="ar">` reflects to `lang="ar"` on its host. Each such language
 * gets its own store here, filled by `LocaleController.loadScope`, and `t()` reads from it for
 * every component rendering inside that subtree.
 *
 * `<html lang>` itself is not a scope: it is the document language, which `locales` already holds.
 */
export type LocaleScopeState = {
    entries: Record<string, string> | null;
    direction: 'ltr' | 'rtl';
    status: 'idle' | 'loading' | 'ready' | 'error';
};
/** The store for `language`, created empty on first use so components can subscribe before it loads. */
export declare function getLocaleScope(language: string): LocaleScopeState;
/**
 * The `lang` set on the nearest ancestor below `<html>`, walking out of shadow roots to their
 * hosts. `undefined` when the element follows the document language.
 */
export declare function getLocalLanguage(el: Element): string | undefined;
/**
 * {@link getLocalLanguage} for the component whose `render()` is running right now — the same
 * hook `@stencil/store` uses to know who to re-render. `undefined` outside a render, which is
 * why `t()` calls in event handlers and validators need an explicit `language` option.
 */
export declare function getRenderingLanguage(): string | undefined;
