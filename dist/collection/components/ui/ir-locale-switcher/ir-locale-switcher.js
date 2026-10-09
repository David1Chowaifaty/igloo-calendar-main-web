import { Host, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
import { calendarPreference } from "../../../stores/calendar-preference.store";
import { CalendarPreferenceController, formatDate, getFirstDayOfWeek, getWeekdayLabels, toApiDate } from "../../../utils/date/index";
import { formatAmount, formatCount, formatPercent } from "../../../utils/number";
import { isRtlLanguage } from "../../../utils/direction";
import { LocaleController } from "../../../services/locale/locale.controller";
const STORAGE_KEY = 'ir-locale-switcher';
/**
 * The page's own `<html lang>`, captured before the switcher or
 * `LocaleController` overwrite it. Used as the fallback when nothing is saved.
 */
const INITIAL_HTML_LANG = typeof document !== 'undefined' ? document.documentElement.lang : '';
/**
 * The languages the app ships locale strings and moment locale data for,
 * plus every Arabic regional variant.
 */
const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية — Arabic (MSA)' },
    { code: 'ar-sa', label: 'العربية — Saudi Arabia' },
    { code: 'ar-ps', label: 'العربية — Palestine' },
    { code: 'ar-kw', label: 'العربية — Kuwait' },
    { code: 'ar-ly', label: 'العربية — Libya' },
    { code: 'ar-ma', label: 'العربية — Morocco' },
    { code: 'ar-dz', label: 'العربية — Algeria' },
    { code: 'ar-tn', label: 'العربية — Tunisia' },
    { code: 'de', label: 'Deutsch — German' },
    { code: 'el', label: 'Ελληνικά — Greek' },
    { code: 'fr', label: 'Français — French' },
    { code: 'he', label: 'עברית — Hebrew' },
    { code: 'pl', label: 'Polski — Polish' },
    { code: 'ru', label: 'Русский — Russian' },
    { code: 'ua', label: 'Українська — Ukrainian' },
];
/**
 * Digit scripts, with a sample so the effect is visible before selecting.
 */
const NUMBERING_SYSTEMS = [
    { value: 'latn', label: 'Latin — 0123456789' },
    { value: 'arab', label: 'Arabic-Indic — ٠١٢٣٤٥٦٧٨٩' },
    {
        value: 'arabext',
        label: 'Eastern Arabic-Indic — ۰۱۲۳۴۵۶۷۸۹',
    },
    {
        value: 'auto',
        label: "Auto — the locale's own digits",
    },
];
/**
 * Formats shown in the live preview.
 */
const PREVIEW_FORMATS = ['ddd, DD MMM YYYY', 'MMM DD, YYYY', 'MMMM YYYY', 'ddd D', 'DD/MM ddd', 'DD-MMM-YYYY'];
/**
 * A floating dev/QA panel for switching language, calendar system,
 * numbering system and text direction at runtime.
 *
 * All user-selected settings are persisted in localStorage and restored
 * automatically the next time the page is opened.
 */
export class IrLocaleSwitcher {
    el;
    /**
     * Corner to pin the panel to.
     */
    placement = 'bottom-end';
    /**
     * Start collapsed to a single button when no saved state exists.
     */
    collapsed = true;
    /**
     * Sample date for the preview, YYYY-MM-DD.
     * Defaults to today.
     */
    sampleDate;
    open;
    direction = 'auto';
    /**
     * Read persisted switcher state.
     */
    loadSettings() {
        if (typeof window === 'undefined') {
            return null;
        }
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (!raw) {
                return null;
            }
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') {
                return null;
            }
            return parsed;
        }
        catch (error) {
            console.warn(`[ir-locale-switcher] Failed to read "${STORAGE_KEY}" from localStorage.`, error);
            return null;
        }
    }
    /**
     * Save the current switcher state.
     */
    saveSettings() {
        if (typeof window === 'undefined') {
            return;
        }
        try {
            const state = {
                language: locales.language ?? 'en',
                calendar: calendarPreference.override ?? 'auto',
                numberingSystem: calendarPreference.numberingSystem,
                direction: this.direction,
                open: this.open,
            };
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        }
        catch (error) {
            console.warn(`[ir-locale-switcher] Failed to save "${STORAGE_KEY}" to localStorage.`, error);
        }
    }
    /**
     * Make sure a stored language is one that this switcher supports.
     */
    isValidLanguage(value) {
        return typeof value === 'string' && LANGUAGES.some(language => language.code === value);
    }
    /**
     * Map a raw language value onto a supported code: case-insensitive, falling
     * back to the base subtag (`en-US` → `en`). Returns null when unsupported.
     */
    normalizeLanguage(value) {
        if (typeof value !== 'string') {
            return null;
        }
        const normalized = value.trim().toLowerCase();
        /*
         * Derived before the check: `isValidLanguage` is a type guard, so its false
         * branch narrows `normalized` to `never`.
         */
        const base = normalized.split('-')[0];
        if (this.isValidLanguage(normalized)) {
            return normalized;
        }
        return this.isValidLanguage(base) ? base : null;
    }
    /**
     * Validate persisted calendar values before applying them.
     */
    isValidCalendar(value) {
        return value === 'auto' || value === 'gregory' || value === 'islamic-umalqura';
    }
    /**
     * Validate persisted numbering-system values.
     */
    isValidNumberingSystem(value) {
        return NUMBERING_SYSTEMS.some(system => system.value === value);
    }
    /**
     * Validate persisted direction values.
     */
    isValidDirection(value) {
        return value === 'auto' || value === 'ltr' || value === 'rtl';
    }
    componentWillLoad() {
        const stored = this.loadSettings();
        /*
         * Panel state.
         *
         * Saved state wins. If there is no saved state, fall back to the
         * component's `collapsed` prop.
         */
        if (typeof stored?.open === 'boolean') {
            this.open = stored.open;
        }
        else {
            this.open = !this.collapsed;
        }
        /*
         * Language.
         *
         * Priority:
         * 1. localStorage
         * 2. <html lang="...">
         * 3. English
         */
        const language = this.normalizeLanguage(stored?.language) ??
            this.normalizeLanguage(INITIAL_HTML_LANG) ??
            this.normalizeLanguage(document.documentElement.lang) ??
            'en';
        /*
         * The switcher mounts inside a screen root that has already started
         * `LocaleController.load` with its host `language` prop. Only telling the
         * controller makes our choice stick — otherwise that fetch's publish
         * overwrites the store and <html lang> with the host language.
         */
        if (language !== LocaleController.language) {
            LocaleController.setLanguage(language).catch(error => console.error('Failed to restore language', error));
        }
        else {
            locales.language = language;
            document.documentElement.lang = language;
        }
        this.broadcastLanguage(language);
        /*
         * Direction.
         *
         * Saved direction wins. Without saved state, adopt an explicit
         * <html dir>, otherwise use "auto".
         */
        if (this.isValidDirection(stored?.direction)) {
            this.direction = stored.direction;
        }
        else {
            const htmlDirection = document.documentElement.getAttribute('dir');
            this.direction = htmlDirection === 'rtl' || htmlDirection === 'ltr' ? htmlDirection : 'auto';
        }
        /*
         * Calendar.
         */
        if (this.isValidCalendar(stored?.calendar)) {
            CalendarPreferenceController.setOverride(stored.calendar === 'auto' ? null : stored.calendar);
        }
        /*
         * Numbering system.
         */
        if (this.isValidNumberingSystem(stored?.numberingSystem)) {
            CalendarPreferenceController.setNumberingSystem(stored.numberingSystem);
        }
        /*
         * Apply direction only after language has been restored because
         * "auto" depends on the selected language.
         */
        this.applyDirection(this.direction, language, false);
        /*
         * Save once so older/incomplete localStorage data gets normalized.
         */
        this.saveSettings();
    }
    /**
     * Switches the app's language, then pushes it onto every mounted component
     * exposing a `language` prop so date pickers and `ir-hk-staff-tasks` — which
     * resolve their own locale rather than reading the store — follow along.
     *
     * `persist` doubles as "this was a user action": on the initial restore we
     * only publish the value, because page roots load their own tables on mount
     * and no ticket is set yet.
     */
    applyLanguage(language, persist = true) {
        if (!this.isValidLanguage(language)) {
            return;
        }
        if (persist) {
            /*
             * Re-fetches every table loaded so far, which is what actually swaps the
             * Lcz_* strings. Fire-and-forget: a failure here must not break the panel.
             */
            LocaleController.setLanguage(language).catch(error => console.error('Failed to switch language', error));
        }
        else {
            locales.language = language;
            document.documentElement.lang = language;
        }
        /*
         * Re-resolve direction because "auto" depends on language.
         */
        this.applyDirection(this.direction, language, false);
        this.broadcastLanguage(language);
        if (persist) {
            this.saveSettings();
        }
    }
    /**
     * Pushes `language` onto every mounted component exposing a `language` prop.
     */
    broadcastLanguage(language) {
        document.querySelectorAll('*').forEach(node => {
            if (node.tagName.includes('-') && node !== this.el && 'language' in node && node.language !== language) {
                node.language = language;
            }
        });
    }
    /**
     * Apply calendar preference and persist it.
     */
    applyCalendar(value, persist = true) {
        if (!this.isValidCalendar(value)) {
            return;
        }
        /*
         * null clears the explicit override and returns to device auto-detect.
         */
        CalendarPreferenceController.setOverride(value === 'auto' ? null : value);
        if (persist) {
            this.saveSettings();
        }
    }
    /**
     * Apply numbering-system preference and persist it.
     */
    applyNumberingSystem(value, persist = true) {
        if (!this.isValidNumberingSystem(value)) {
            return;
        }
        CalendarPreferenceController.setNumberingSystem(value);
        if (persist) {
            this.saveSettings();
        }
    }
    /**
     * Apply text direction.
     *
     * `auto` resolves according to the current language.
     */
    applyDirection(mode, language = locales.language ?? 'en', persist = true) {
        if (!this.isValidDirection(mode)) {
            return;
        }
        this.direction = mode;
        const resolved = mode === 'auto' ? (isRtlLanguage(language) ? 'rtl' : 'ltr') : mode;
        document.documentElement.setAttribute('dir', resolved);
        locales.direction = resolved;
        if (persist) {
            this.saveSettings();
        }
    }
    /**
     * Open/collapse panel and persist that UI state too.
     */
    setOpen(open) {
        this.open = open;
        this.saveSettings();
    }
    /**
     * Remove every locale-switcher preference and restore defaults.
     */
    resetSettings() {
        if (typeof window !== 'undefined') {
            try {
                window.localStorage.removeItem(STORAGE_KEY);
            }
            catch (error) {
                console.warn(`[ir-locale-switcher] Failed to clear "${STORAGE_KEY}".`, error);
            }
        }
        const language = this.normalizeLanguage(INITIAL_HTML_LANG) ?? 'en';
        LocaleController.setLanguage(language).catch(error => console.error('Failed to reset language', error));
        this.broadcastLanguage(language);
        CalendarPreferenceController.setOverride(null);
        CalendarPreferenceController.setNumberingSystem('auto');
        this.direction = 'auto';
        const resolvedDirection = isRtlLanguage(language) ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', resolvedDirection);
        locales.direction = resolvedDirection;
        /*
         * Keep the component's original prop behavior after reset.
         */
        this.open = !this.collapsed;
    }
    get sample() {
        return this.sampleDate ?? toApiDate(new Date());
    }
    renderPreview() {
        return (h("div", { class: "ls-preview" }, h("div", { class: "ls-preview__title" }, "Preview \u2014 ", this.sample), PREVIEW_FORMATS.map(format => (h("div", { class: "ls-preview__row", key: format }, h("code", { class: "ls-preview__format" }, format), h("span", { class: "ls-preview__value" }, formatDate(this.sample, format))))), h("div", { class: "ls-preview__row" }, h("code", { class: "ls-preview__format" }, "price"), h("span", { class: "ls-preview__value" }, formatAmount('$', 1234.5))), h("div", { class: "ls-preview__row" }, h("code", { class: "ls-preview__format" }, "count \u00B7 percent"), h("span", { class: "ls-preview__value" }, formatCount(3), " \u00B7 ", formatPercent(87))), h("div", { class: "ls-preview__row ls-preview__row--muted" }, h("code", { class: "ls-preview__format" }, "weekdays"), h("span", { class: "ls-preview__value" }, getWeekdayLabels().join(' '))), h("div", { class: "ls-preview__row ls-preview__row--muted" }, h("code", { class: "ls-preview__format" }, "toApiDate"), h("span", { class: "ls-preview__value" }, toApiDate(this.sample), " ", h("em", null, "\u00B7 always Gregorian"))), h("div", { class: "ls-preview__row ls-preview__row--muted" }, h("code", { class: "ls-preview__format" }, "week starts"), h("span", { class: "ls-preview__value" }, getWeekdayLabels()[getFirstDayOfWeek()], " \u00B7 grid stays Sunday-first"))));
    }
    render() {
        const language = locales.language ?? 'en';
        const calendar = calendarPreference.override ?? 'auto';
        return (h(Host, { key: '4841051790922fcdb277eb3f1235fdd3356bf74a', class: `ls-host ls-host--${this.placement}` }, !this.open && (h("button", { key: '4b2177a6f6a763cb0067a2d12bace01966fe8617', class: "ls-fab", title: "Locale switcher", onClick: () => this.setOpen(true) }, h("wa-icon", { key: '8e410140e12e3102ea02ffdb55c5eb163a8d7e65', name: "globe" }), h("span", { key: '052b64ad1a2b4738d50df3241af0d292b60194d7', class: "ls-fab__label" }, language.toUpperCase()))), this.open && (h("div", { key: '7523242af5d8264ceb237d0fb1820916b8d38052', class: "ls-panel" }, h("header", { key: '2ffc637bd30f7255cdc45f5546399181bb80e0d6', class: "ls-panel__header" }, h("span", { key: 'fefaaa5c59b0fe9c108fddcaf75965efbfe9901d', class: "ls-panel__title" }, "Locale switcher"), h("button", { key: 'c157de1f3fa8139c7b8bcafcb5f0c570d9429f68', class: "ls-panel__close", title: "Collapse", onClick: () => this.setOpen(false) }, h("wa-icon", { key: 'af1c3de1c452da24e347431881ad86832fea5501', name: "xmark" }))), h("wa-select", { key: '27973e772a1d8ebb37b6f7e908604f903d73c977', label: "Language", size: "s", value: language, onchange: (event) => {
                const value = event.target.value?.toString();
                if (value) {
                    this.applyLanguage(value);
                }
            } }, LANGUAGES.map(({ code, label }) => (h("wa-option", { key: code, value: code }, label)))), h("wa-select", { key: 'ff98cc375f3949efd099f1a265223cb7c9ea8f4f', label: "Calendar", size: "s", value: calendar, onchange: (event) => {
                const value = event.target.value?.toString();
                this.applyCalendar(value);
            } }, h("wa-option", { key: '11e33143c22b5e35c188501ff7a93fb51829abd4', value: "auto" }, "Auto \u2014 detect from device"), h("wa-option", { key: 'edda76b60396b65edc37cf84c1845a25d24cb2d9', value: "gregory" }, "Gregorian"), h("wa-option", { key: '12a9c7c7fde5431690f7125c874d62ffa955f29e', value: "islamic-umalqura" }, "Hijri \u2014 Umm al-Qura")), h("wa-select", { key: 'aa03a77c44aa6d05c87e85bf929f4a27cee9b1d9', label: "Numbers", size: "s", value: calendarPreference.numberingSystem, onchange: (event) => {
                const value = event.target.value?.toString();
                this.applyNumberingSystem(value);
            } }, NUMBERING_SYSTEMS.map(({ value, label }) => (h("wa-option", { key: value, value: value }, label)))), h("wa-select", { key: '12f76cf5371ab1833a106bbb156961ace76e7169', label: "Direction", size: "s", value: this.direction, onchange: (event) => {
                const value = event.target.value?.toString();
                this.applyDirection(value);
            } }, h("wa-option", { key: '3ec4818b24ce366bc4dbdc711d678533eb193ddf', value: "auto" }, "Auto \u2014 from language"), h("wa-option", { key: 'e6f395c0b0459f4a90b40eacec2e6ee0d8efff91', value: "ltr" }, "LTR"), h("wa-option", { key: 'f4995005ebfc939f12ee38609cde5b7284c1b069', value: "rtl" }, "RTL")), this.renderPreview(), h("footer", { key: '1ab8b518480b87924567d0d4451ce9e573a93788', class: "ls-panel__footer" }, h("span", { key: '5105a9c3595281ad06cedd30b0c18999c84c8fe6', class: "ls-panel__resolved" }, "resolved: ", language, " \u00B7 ", calendarPreference.resolved, " \u00B7 ", calendarPreference.numberingSystem, " \u00B7 ", document.documentElement.getAttribute('dir') ?? 'ltr'), h("button", { key: '97878d02dff34f601a04b7e8266ae4c92a59b80a', class: "ls-panel__reset", onClick: () => this.resetSettings() }, "Reset all"))))));
    }
    static get is() { return "ir-locale-switcher"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-locale-switcher.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-locale-switcher.css"]
        };
    }
    static get properties() {
        return {
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'",
                    "resolved": "\"bottom-end\" | \"bottom-start\" | \"top-end\" | \"top-start\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Corner to pin the panel to."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placement",
                "defaultValue": "'bottom-end'"
            },
            "collapsed": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Start collapsed to a single button when no saved state exists."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "collapsed",
                "defaultValue": "true"
            },
            "sampleDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sample date for the preview, YYYY-MM-DD.\nDefaults to today."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sample-date"
            }
        };
    }
    static get states() {
        return {
            "open": {},
            "direction": {}
        };
    }
    static get elementRef() { return "el"; }
}
