'use strict';

var locales_store = require('./locales.store-BMTss6fG.js');
var languageObserver = require('./language-observer-DKp37LIu.js');
var axios = require('./axios-EresIryl.js');
var types = require('./types-BVJQZ50e.js');

/** One row of `My_Result.entries` — the key/value pair for a single string. */
const LocaleEntryRowSchema = types.objectType({
    code: types.stringType(),
    description: types.stringType().nullable().default(''),
});
/** `My_Result` of `Get_Exposed_Language`. */
const ExposedLanguageResultSchema = types.objectType({
    entries: types.arrayType(LocaleEntryRowSchema).nullable().default([]),
    direction: types.stringType().nullable().default('LTR'),
});

/**
 * The `Get_Exposed_Language` endpoint, and nothing else.
 *
 * Deliberately stateless and free of store writes — `LocaleController` owns the
 * caching and the `locales` store. Keep it that way so the service stays
 * trivially testable.
 */
class LocaleService {
    /**
     * Fetches the localized strings for `code` across `sections`.
     *
     * Posts an absolute URL: this endpoint lives on the IRBE gateway, not the `/IR`
     * base URL `ApiClient` installs. It still passes through the shared axios
     * interceptors, so a ticket must have been set via `ApiClient.setApiClient`
     * first or the request throws `MissingApiClientError`.
     *
     * @param code Language code, e.g. `'en'` or `'ar'`.
     * @param sections At least two setup tables — see {@link LocaleSections}.
     */
    async getExposedLanguage(code, sections) {
        const { data } = await axios.axios.post(`https://gateway.igloorooms.com/IRBE/Get_Exposed_Language`, { code, sections });
        if (data.ExceptionMsg) {
            throw new Error(data.ExceptionMsg);
        }
        const result = ExposedLanguageResultSchema.parse(data.My_Result ?? {});
        return {
            entries: this.toEntryRecord(result),
            direction: String(result.direction).toLowerCase() === 'rtl' ? 'rtl' : 'ltr',
        };
    }
    /**
     * Flattens the `{ code, description }[]` response into a lookup keyed by code.
     *
     * 34 keys are declared in more than one table (`Lcz_Cancel` in all six), so a
     * multi-table request can carry the same code twice. Last one wins — fine while
     * the values agree, which for shared words like "Cancel" they should. Warns when
     * they don't, so a genuine per-table divergence surfaces instead of silently
     * depending on response order.
     */
    toEntryRecord(result) {
        const entries = {};
        for (const entry of result.entries ?? []) {
            if (!entry?.code) {
                continue;
            }
            const description = entry.description ?? '';
            const existing = entries[entry.code];
            if (existing !== undefined && existing !== description) {
                console.warn(`[locale] "${entry.code}" differs between tables: "${existing}" vs "${description}" — using the latter.`);
            }
            entries[entry.code] = description;
        }
        return entries;
    }
}

/**
 * Merged into every request. `_PMS_FRONT` is the backend's shared vocabulary and
 * `_COMMON` is the hardcoded-label migration catalog's shared module — the words
 * every screen renders — so no entry below has to list either.
 *
 * Nothing else belongs here. `_USER_MGT` looks like a candidate because
 * `ir-interceptor` can raise the OTP dialog over any page, but that dialog mounts
 * lazily and loads the table itself, so putting it in the base set would charge
 * every screen 47 keys it usually never shows.
 */
const BASE_TABLES = ['_COMMON'];
/**
 * The setup tables each screen needs, on top of {@link LocaleController.BASE_TABLES}.
 *
 * A screen is any component that loads its own strings — a page root, but also a
 * lazily-mounted leaf like `ir-otp-modal` that appears over any page. Whoever calls
 * `LocaleController.load` declares an entry here and passes it; nothing else picks
 * tables.
 *
 * ## Why a registry rather than a literal at each call site
 *
 * A root cannot read its own table set off its own file — the strings live in the
 * leaves it renders. `ir-arrivals` has one `Lcz_*` key of its own but reaches
 * `ir-booked-by-cell`, whose `Lcz_P` lives in `_BOOKING_LIST_FRONT`. Inline literals
 * hide that and rot silently: five roots were already under-requesting before this
 * registry existed, rendering raw `Lcz_*` keys unless another screen happened to load
 * the table first.
 *
 * So the lists are *derived*, not guessed, and `screen-tables.spec.ts` re-derives them
 * on every run: it walks each screen's component tree, maps every `Lcz_*` key back to
 * the table that declares it in `src/stores/locales.store.ts`, and fails if a key needs
 * a table the entry omits. Adding a string from a new table breaks the build here
 * instead of at runtime.
 *
 * ## Boundaries
 *
 * The walk stops at any component that loads its own tables. `ir-otp-modal` mounts only
 * when `ir-interceptor` raises it and fetches `_USER_MGT` itself at that point, so the
 * ~20 screens that can raise it do not carry its 47 keys. Keep it that way: a new
 * self-loading component needs an entry here, not an addition to its hosts.
 *
 * `_PMS_FRONT` never appears below — it is a base table, merged into every request.
 */
const SCREEN_TABLES = {
    agents: ['_AGENTS'],
    arrivals: ['_BOOKING_LIST_FRONT', '_FRONTDESK', '_BOOKING'],
    bookingDetails: ['_PMS_FRONT', '_FINANCIALS', '_BOOKING', '_CALENDAR'],
    bookingEditor: ['_CALENDAR'],
    bookingListing: ['_BOOKING_LIST_FRONT', '_BOOKING'],
    bookingPrinting: ['_BOOKING'],
    bookProperty: ['_CALENDAR'],
    calendar: ['_USER_MGT', '_CALENDAR', '_HOUSEKEEPING', '_PMS_FRONT', '_BOOKING'],
    channel: ['_CHANNEL_FRONT', '_SETTINGS'],
    cityLedger: ['_FINANCIALS'],
    dailyRevenue: ['_REPORTS'],
    departures: ['_BOOKING_LIST_FRONT', '_BOOKING'],
    dpReport: ['_BOOKING_LIST_FRONT', '_REPORTS'],
    extraServicesSettings: ['_SETTINGS'],
    financialActions: ['_FINANCIALS', '_BOOKING'],
    fiscalDocuments: ['_FINANCIALS'],
    gapNights: ['_CALENDAR'],
    ghsOnboarding: ['_GUESTS'],
    guestInfo: [],
    housekeeping: ['_HK_FRONT', '_HOUSEKEEPING'],
    invoice: ['_FINANCIALS', '_BOOKING'],
    hkStaffTasks: ['_HOUSEKEEPING'],
    hkTasks: ['_HOUSEKEEPING'],
    login: ['_AUTH'],
    mealReport: ['_REPORTS'],
    monthlyBookingsReport: ['_REPORTS'],
    otpModal: ['_USER_MGT'],
    paymentOption: ['_PAYMENT_BACK'],
    pmsPage: ['_PMS', '_CALENDAR'],
    queueManager: ['_FRONTDESK'],
    resetPassword: ['_USER_MGT', '_AUTH'],
    salesByChannel: ['_REPORTS'],
    salesByCountry: ['_REPORTS'],
    uninvoicedBookings: ['_BOOKING_LIST_FRONT', '_BOOKING'],
    userManagement: ['_USER_MGT', '_AUTH'],
};

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
class LocaleController {
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
        return String(locales_store.locales.language || this.selectedLanguage || languageObserver.LanguageObserver.getLang() || 'en').toLowerCase();
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
        if (locales_store.locales.language !== nextLanguage) {
            locales_store.locales.language = nextLanguage;
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
        locales_store.locales.status = 'loading';
        try {
            const { entries, direction } = await this.service.getExposedLanguage(language, sections);
            this.publish({ language, direction, entries, sections });
        }
        catch (error) {
            locales_store.locales.status = 'error';
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
        locales_store.locales.entries = { ...(locales_store.locales.entries ?? {}), ...entries };
        locales_store.locales.direction = direction;
        locales_store.locales.language = language;
        locales_store.locales.loadedTables = [...this.loadedTables];
        locales_store.locales.status = 'ready';
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
        const candidate = (authoritative && language) || this.selectedLanguage || locales_store.locales.language || languageObserver.LanguageObserver.getLang() || 'en';
        return String(candidate).toLowerCase();
    }
    static clear() {
        this.loadedTables.clear();
        locales_store.locales.entries = null;
        locales_store.locales.loadedTables = [];
    }
}

exports.LocaleController = LocaleController;
exports.SCREEN_TABLES = SCREEN_TABLES;
