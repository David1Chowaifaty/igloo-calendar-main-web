export type LanguageChangeListener = (lang: string) => void;
/**
 * Tracks `<html lang>` with a single shared `MutationObserver` and fans changes out
 * to every subscriber, instead of each component wiring up its own observer.
 *
 * Usage inside a Stencil component:
 *   componentDidLoad() {
 *     this.unsubscribeLang = LanguageObserver.subscribe(lang => this.handleLangChange(lang));
 *   }
 *   disconnectedCallback() {
 *     this.unsubscribeLang?.();
 *   }
 */
export declare class LanguageObserver {
    private static observer?;
    private static listeners;
    /** Current `<html lang>` value, or `'en'` if unset. */
    static getLang(): string;
    /** Subscribes to `<html lang>` changes. Returns an unsubscribe function. */
    static subscribe(listener: LanguageChangeListener): () => void;
    private static unsubscribe;
    private static ensureObserver;
}
