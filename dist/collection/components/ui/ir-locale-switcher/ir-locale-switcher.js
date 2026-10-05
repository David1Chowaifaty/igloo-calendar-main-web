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
        return (h(Host, { key: 'bfaf82a1940de9470ff9b3d396d1d81179cba8ee', class: `ls-host ls-host--${this.placement}` }, !this.open && (h("button", { key: '4434030b589ca24eddaa3f8ed2bd057da1c31b77', class: "ls-fab", title: "Locale switcher", onClick: () => this.setOpen(true) }, h("wa-icon", { key: 'ccd4afc9bcad0ec67dd7f63a7ff10be43c7f006d', name: "globe" }), h("span", { key: '3061d95316860d55354093de13655144ef2ec349', class: "ls-fab__label" }, language.toUpperCase()))), this.open && (h("div", { key: '5d50420b1d5230d83f6357c2bee7ae1ce9666546', class: "ls-panel" }, h("header", { key: 'e3851b33a0032eb43869966e48db019e84683987', class: "ls-panel__header" }, h("span", { key: '8477930116e1a4fd618fa6b60b86b6ebde1af23b', class: "ls-panel__title" }, "Locale switcher"), h("button", { key: '9ae1e733a17f81e0c6f8c40d19193947268e70e6', class: "ls-panel__close", title: "Collapse", onClick: () => this.setOpen(false) }, h("wa-icon", { key: 'e4999b7378a881e9c6a7bd550cbf6700096e7818', name: "xmark" }))), h("wa-select", { key: '98e55d7d64ecda49e7bff4ce24c697f1f7d37695', label: "Language", size: "s", value: language, onchange: (event) => {
                const value = event.target.value?.toString();
                if (value) {
                    this.applyLanguage(value);
                }
            } }, LANGUAGES.map(({ code, label }) => (h("wa-option", { key: code, value: code }, label)))), h("wa-select", { key: '1098f535df6b0d5a88d8dcfb002c6de4dfb362f4', label: "Calendar", size: "s", value: calendar, onchange: (event) => {
                const value = event.target.value?.toString();
                this.applyCalendar(value);
            } }, h("wa-option", { key: 'bdfef2305266d460946c0ca33753c17de4291ba9', value: "auto" }, "Auto \u2014 detect from device"), h("wa-option", { key: 'cdf465434ff69fec9e9fa90f6e78f747e57ce8cc', value: "gregory" }, "Gregorian"), h("wa-option", { key: 'aea9abb2b78db1ddf87f323d771500b2a650e845', value: "islamic-umalqura" }, "Hijri \u2014 Umm al-Qura")), h("wa-select", { key: 'f982d08ff71f59deab5ccb16064b6c1d93b922f7', label: "Numbers", size: "s", value: calendarPreference.numberingSystem, onchange: (event) => {
                const value = event.target.value?.toString();
                this.applyNumberingSystem(value);
            } }, NUMBERING_SYSTEMS.map(({ value, label }) => (h("wa-option", { key: value, value: value }, label)))), h("wa-select", { key: 'b0f592ed566b61e7ddf92b450ab477403d8c0c95', label: "Direction", size: "s", value: this.direction, onchange: (event) => {
                const value = event.target.value?.toString();
                this.applyDirection(value);
            } }, h("wa-option", { key: 'b8e1d36d9de1a44ca97280f859b6cce2695d4a16', value: "auto" }, "Auto \u2014 from language"), h("wa-option", { key: '3a916c99f547bc84ef67922e9383099dd0dedd08', value: "ltr" }, "LTR"), h("wa-option", { key: 'c9403334148f18de3b5560c1710a9b14d7eb5fd7', value: "rtl" }, "RTL")), this.renderPreview(), h("footer", { key: '788a8eaa5d5502da78e9a91b28a26c45acb5d796', class: "ls-panel__footer" }, h("span", { key: 'c05ca76dc7c8c50dd9095d4a7612c93ef54d4856', class: "ls-panel__resolved" }, "resolved: ", language, " \u00B7 ", calendarPreference.resolved, " \u00B7 ", calendarPreference.numberingSystem, " \u00B7 ", document.documentElement.getAttribute('dir') ?? 'ltr'), h("button", { key: 'c7859913bbddd03eea0d6474e2b3227d7efd06d7', class: "ls-panel__reset", onClick: () => this.resetSettings() }, "Reset all"))))));
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
