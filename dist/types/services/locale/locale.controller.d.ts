import type { LoadLocaleParams, LocaleTable } from './types';
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
export declare class LocaleController {
    /** @see {@link BASE_TABLES} — kept as a static so call sites read one name. */
    static readonly BASE_TABLES: readonly ["_COMMON"];
    private static service;
    private static loadedTables;
    private static inFlight;
    /** What is in `locales.entries` right now — null until the first fetch lands. */
    private static loadedLanguage;
    /**
     * What the app has chosen, set synchronously by {@link load} before its fetch
     * goes out. Distinct from {@link loadedLanguage} so a screen can read the right
     * value while the strings are still on the wire.
     */
    private static selectedLanguage;
    private static listeners;
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
    static get language(): string;
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
    static subscribe(listener: (language: string) => void): () => void;
    /** Whether `table`'s strings are already in the store for the current language. */
    static isLoaded(table: LocaleTable): boolean;
    /**
     * Ensures `tables` (plus {@link BASE_TABLES}) are loaded for `language`.
     *
     * Resolves immediately when there is nothing to fetch, so screens can call it
     * unconditionally in `componentWillLoad` without re-requesting on every mount.
     *
     *   await LocaleController.load({ language: this.language, tables: SCREEN_TABLES.channel });
     */
    static load({ language, tables, force }?: LoadLocaleParams): Promise<void>;
    /**
     * Switches the app to `language` and re-fetches every table loaded so far.
     * This is the entry point for a language switcher.
     */
    static setLanguage(language: string): Promise<void>;
    /** Drops the cache. Only for tests and teardown — does not clear the store. */
    static reset(): void;
    private static fetch;
    /**
     * The write path for fetched data into the `locales` store (`language` alone
     * is also seeded early by {@link load}). Assigns top-level keys whole —
     * `@stencil/store` only reacts to top-level assignment.
     */
    private static publish;
    /** Base tables first, then the caller's, deduped and sorted for a stable cache key. */
    private static buildSections;
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
    private static resolveLanguage;
    private static clear;
}
