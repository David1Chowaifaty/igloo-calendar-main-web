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
export class LanguageObserver {
    static observer;
    static listeners = new Set();
    /** Current `<html lang>` value, or `'en'` if unset. */
    static getLang() {
        return document.documentElement.lang || 'en';
    }
    /** Subscribes to `<html lang>` changes. Returns an unsubscribe function. */
    static subscribe(listener) {
        this.listeners.add(listener);
        this.ensureObserver();
        return () => this.unsubscribe(listener);
    }
    static unsubscribe(listener) {
        this.listeners.delete(listener);
        if (this.listeners.size === 0) {
            this.observer?.disconnect();
            this.observer = undefined;
        }
    }
    static ensureObserver() {
        if (this.observer || typeof MutationObserver === 'undefined')
            return;
        this.observer = new MutationObserver(() => {
            const lang = this.getLang();
            this.listeners.forEach(listener => listener(lang));
        });
        this.observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }
}
