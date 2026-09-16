import { locales } from "../../stores/locales.store";
import { LanguageObserver } from "../../utils/language-observer";
import { LocaleService } from "./locale.service";
import { BASE_TABLES } from "./screen-tables";
/**
 * Owns language loading for the whole app: resolves which tables still need
 * fetching, collapses concurrent requests, writes the result into the `locales`
 * store, and re-fetches everything on a language switch.
 *
 * Static by design — the cache is only useful if it is process-wide, and page
 * roots mount and unmount constantly. Deliberately parallel to
 * `CalendarPreferenceController`, which owns the calendar-preference store the
 * same way.
 *
 * Components should not call this directly for plain rendering — read strings
 * with `t()`, which subscribes the component to the store automatically.
 *
 * Screens load their own tables and nothing more; the lists live in
 * `screen-tables.ts`, which is checked against real key usage by its spec.
 *
 *   await LocaleController.load({ language: this.language, tables: SCREEN_TABLES.housekeeping });
 */
export class LocaleController {
    /** @see {@link BASE_TABLES} — kept as a static so call sites read one name. */
    static BASE_TABLES = BASE_TABLES;
    static service = new LocaleService();
    static loadedTables = new Set();
    static inFlight = new Map();
    /** What is in `locales.entries` right now — null until the first fetch lands. */
    static loadedLanguage = null;
    /**
     * What the app has chosen, set synchronously by {@link load} before its fetch
     * goes out. Distinct from {@link loadedLanguage} so a screen can read the right
     * value while the strings are still on the wire.
     */
    static selectedLanguage = null;
    static listeners = new Set();
    /**
     * The currently selected language — the value every `language:` API parameter
     * should use, rather than a `@Prop() language` captured at mount (which is
     * `''` or `undefined` on 32 components until the host sets it).
     *
     * Correct as soon as a screen has *called* `load` with the host's prop — it does
     * not wait for the fetch — so sibling requests built in the same `Promise.all`
     * get the right language on first mount, provided `load` is started first.
     *
     * Reads `locales.language` FIRST, not the private `selectedLanguage` field:
     * going through the `@stencil/store` proxy means a call inside `render()`
     * subscribes the component, so labels resolved through it re-render on a
     * language switch.
     */
    static get language() {
        return String(locales.language || this.selectedLanguage || LanguageObserver.getLang() || 'en').toLowerCase();
    }
    /**
     * Notifies when the selected language actually changes — the signal to refetch
     * anything fetched with a `language` parameter (countries, property, booking,
     * setup entries), since those responses are localized server-side.
     *
     *   componentDidLoad() { this.unsub = LocaleController.subscribe(() => this.refetch()); }
     *   disconnectedCallback() { this.unsub?.(); }
     *
     * @returns An unsubscribe function.
     */
    static subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }
    /** Whether `table`'s strings are already in the store for the current language. */
    static isLoaded(table) {
        return this.loadedTables.has(table);
    }
    /**
     * Ensures `tables` (plus {@link BASE_TABLES}) are loaded for `language`.
     *
     * Resolves immediately when there is nothing to fetch, so screens can call it
     * unconditionally in `componentWillLoad` without re-requesting on every mount.
     *
     *   await LocaleController.load({ language: this.language, tables: SCREEN_TABLES.channel });
     */
    static async load({ language, tables = [], force = false } = {}) {
        const nextLanguage = this.resolveLanguage(language, force);
        const languageChanged = this.loadedLanguage !== null && this.loadedLanguage !== nextLanguage;
        /*
         * Seed the selection now, before anything is awaited: callers read
         * `LocaleController.language` for the requests they fire alongside this one,
         * and those must not go out with the store's stale or default value.
         */
        this.selectedLanguage = nextLanguage;
        if (locales.language !== nextLanguage) {
            locales.language = nextLanguage;
        }
        /*
         * A language switch invalidates everything already in the store, but the
         * caller only knows about its own tables. Carry the previously loaded ones
         * into this request so other mounted screens don't lose their strings.
         */
        const carried = languageChanged || force ? [...this.loadedTables] : [];
        if (languageChanged) {
            this.clear();
        }
        const requested = this.buildSections([...tables, ...carried]);
        const missing = requested.filter(table => !this.loadedTables.has(table));
        if (!missing.length && !force && this.loadedLanguage === nextLanguage) {
            return;
        }
        /*
         * Keyed by language alone, not by language + tables. Two screens mounting
         * together ask for different sets, and a language switch fires `setLanguage`
         * and every root's `@Watch('language')` at once — keying on the table list
         * would let those race into duplicate requests for the same language.
         *
         * Re-entering after the pending one settles is what makes a narrower request
         * safe to drop: by then its tables are either loaded or still missing, and the
         * second pass fetches only what is genuinely left.
         */
        const pending = this.inFlight.get(nextLanguage);
        if (pending) {
            return pending.then(() => this.load({ language: nextLanguage, tables }));
        }
        const request = this.fetch(nextLanguage, requested).finally(() => this.inFlight.delete(nextLanguage));
        this.inFlight.set(nextLanguage, request);
        return request;
    }
    /**
     * Switches the app to `language` and re-fetches every table loaded so far.
     * This is the entry point for a language switcher.
     */
    static setLanguage(language) {
        return this.load({ language, force: true });
    }
    /** Drops the cache. Only for tests and teardown — does not clear the store. */
    static reset() {
        this.clear();
        this.inFlight.clear();
        this.listeners.clear();
        this.loadedLanguage = null;
        this.selectedLanguage = null;
    }
    static async fetch(language, sections) {
        locales.status = 'loading';
        try {
            const { entries, direction } = await this.service.getExposedLanguage(language, sections);
            this.publish({ language, direction, entries, sections });
        }
        catch (error) {
            locales.status = 'error';
            throw error;
        }
    }
    /**
     * The write path for fetched data into the `locales` store (`language` alone
     * is also seeded early by {@link load}). Assigns top-level keys whole —
     * `@stencil/store` only reacts to top-level assignment.
     */
    static publish({ language, direction, entries, sections, }) {
        const changed = this.loadedLanguage !== null && this.loadedLanguage !== language;
        sections.forEach(table => this.loadedTables.add(table));
        this.loadedLanguage = language;
        locales.entries = { ...(locales.entries ?? {}), ...entries };
        locales.direction = direction;
        locales.language = language;
        locales.loadedTables = [...this.loadedTables];
        locales.status = 'ready';
        /*
         * The date layer resolves its language from `<html lang>` as well as from the
         * store — see `resolveLocale` in `src/utils/date/ir-date.ts`. Without this,
         * strings translate but dates stay English.
         */
        if (typeof document !== 'undefined') {
            document.documentElement.lang = language;
        }
        if (changed) {
            this.listeners.forEach(listener => listener(language));
        }
    }
    /** Base tables first, then the caller's, deduped and sorted for a stable cache key. */
    static buildSections(tables) {
        const merged = new Set([...this.BASE_TABLES, ...tables]);
        return [...merged].sort();
    }
    /**
     * A `language` argument is a *request*, not an override.
     *
     * It wins on the first selection — that is how a host's `language` prop seeds
     * the app — and whenever `force` is set, which is what an actual switch uses
     * (`setLanguage`, or a root's `@Watch('language')`). Once a language is
     * selected, an ordinary `load` cannot move it: screens pass their own
     * `@Prop() language` there, and that prop is stale on any screen the switcher
     * has not re-broadcast to yet (or still `''` on a screen mounting while the
     * first load is in flight). Honouring it would let a screen re-running its
     * init after a switch drag the whole app back to the previous language.
     */
    static resolveLanguage(language, force = false) {
        const authoritative = force || this.selectedLanguage === null;
        const candidate = (authoritative && language) || this.selectedLanguage || locales.language || LanguageObserver.getLang() || 'en';
        return String(candidate).toLowerCase();
    }
    static clear() {
        this.loadedTables.clear();
        locales.entries = null;
        locales.loadedTables = [];
    }
}
