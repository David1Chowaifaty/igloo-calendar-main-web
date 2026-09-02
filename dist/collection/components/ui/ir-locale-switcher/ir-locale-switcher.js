import { Host, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
import { calendarPreference } from "../../../stores/calendar-preference.store";
import { CalendarPreferenceController, formatDate, getFirstDayOfWeek, getWeekdayLabels, toApiDate } from "../../../utils/date/index";
import { formatAmount, formatCount, formatPercent } from "../../../utils/number";
import { isRtlLanguage } from "../../../utils/direction";
/**
 * The languages the app ships locale strings and moment locale data for, plus every Arabic
 * regional variant — those differ in Gregorian month names (سبتمبر / شتنبر / أيلول) and in the
 * digits the locale natively renders, which is worth being able to see side by side.
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
/** Digit scripts, with a sample so the effect is visible before selecting. */
const NUMBERING_SYSTEMS = [
    { value: 'latn', label: 'Latin — 0123456789' },
    { value: 'arab', label: 'Arabic-Indic — ٠١٢٣٤٥٦٧٨٩' },
    { value: 'arabext', label: 'Eastern Arabic-Indic — ۰۱۲۳۴۵۶۷۸۹' },
    { value: 'auto', label: "Auto — the locale's own digits" },
];
/** Formats shown in the live preview — the ones actually used across the app. */
const PREVIEW_FORMATS = ['ddd, DD MMM YYYY', 'MMM DD, YYYY', 'MMMM YYYY', 'ddd D', 'DD/MM ddd', 'DD-MMM-YYYY'];
/**
 * A floating dev/QA panel for switching language, calendar system and text direction at runtime,
 * with a live preview of how dates render under the current combination.
 *
 * Drop it anywhere on a page:
 *
 *   <ir-locale-switcher></ir-locale-switcher>
 *
 * Nothing else needs wiring. Language and calendar both live in `@stencil/store` stores, and
 * `@stencil/store` tracks reads via `getRenderingRef()` at any call depth — so every component
 * that calls `formatDate()` inside its `render()` re-renders on its own when this panel changes
 * something. Values formatted once into `@State` during `componentWillLoad` are the exception;
 * those refresh on that component's next natural re-render.
 *
 * This is a development tool, not a customer-facing setting. Keep it out of production pages.
 */
export class IrLocaleSwitcher {
    el;
    /** Corner to pin the panel to. */
    placement = 'bottom-end';
    /** Start collapsed to a single button. */
    collapsed = true;
    /** Sample date for the preview, `YYYY-MM-DD`. Defaults to today. */
    sampleDate;
    open;
    direction = 'auto';
    componentWillLoad() {
        this.open = !this.collapsed;
        // Adopt whatever the page already has, so the panel opens reflecting reality.
        const htmlDir = document.documentElement.getAttribute('dir');
        this.direction = htmlDir === 'rtl' || htmlDir === 'ltr' ? htmlDir : 'auto';
        // `locales.language` initialises to 'en', so a truthiness check would never adopt a page
        // that declares `<html lang="ar">`. On mount the page's own declaration wins.
        const htmlLang = document.documentElement.lang;
        if (htmlLang && htmlLang !== locales.language) {
            locales.language = htmlLang;
        }
    }
    /**
     * Publishes the language the same way `RoomService.fetchLanguage` does, then pushes it onto
     * every mounted component exposing a `language` prop so their `@Watch('language')` refetches
     * the `Lcz_*` strings. Without that second step only the dates would switch.
     */
    applyLanguage(language) {
        locales.language = language;
        document.documentElement.lang = language;
        this.applyDirection(this.direction, language);
        document.querySelectorAll('*').forEach(node => {
            if (node.tagName.includes('-') && node !== this.el && 'language' in node && node.language !== language) {
                node.language = language;
            }
        });
    }
    applyCalendar(value) {
        // `null` clears the persisted override and returns to device auto-detect.
        CalendarPreferenceController.setOverride(value === 'auto' ? null : value);
    }
    applyNumberingSystem(value) {
        CalendarPreferenceController.setNumberingSystem(value);
    }
    applyDirection(mode, language = locales.language ?? 'en') {
        this.direction = mode;
        const resolved = mode === 'auto' ? (isRtlLanguage(language) ? 'rtl' : 'ltr') : mode;
        document.documentElement.setAttribute('dir', resolved);
        locales.direction = resolved;
    }
    get sample() {
        return this.sampleDate ?? toApiDate(new Date());
    }
    renderPreview() {
        return (h("div", { class: "ls-preview" }, h("div", { class: "ls-preview__title" }, "Preview \u2014 ", this.sample), PREVIEW_FORMATS.map(format => (h("div", { class: "ls-preview__row" }, h("code", { class: "ls-preview__format" }, format), h("span", { class: "ls-preview__value" }, formatDate(this.sample, format))))), h("div", { class: "ls-preview__row" }, h("code", { class: "ls-preview__format" }, "price"), h("span", { class: "ls-preview__value" }, formatAmount('$', 1234.5))), h("div", { class: "ls-preview__row" }, h("code", { class: "ls-preview__format" }, "count \u00B7 percent"), h("span", { class: "ls-preview__value" }, formatCount(3), " \u00B7 ", formatPercent(87))), h("div", { class: "ls-preview__row ls-preview__row--muted" }, h("code", { class: "ls-preview__format" }, "weekdays"), h("span", { class: "ls-preview__value" }, getWeekdayLabels().join(' '))), h("div", { class: "ls-preview__row ls-preview__row--muted" }, h("code", { class: "ls-preview__format" }, "toApiDate"), h("span", { class: "ls-preview__value" }, toApiDate(this.sample), " ", h("em", null, "\u00B7 always Gregorian"))), h("div", { class: "ls-preview__row ls-preview__row--muted" }, h("code", { class: "ls-preview__format" }, "week starts"), h("span", { class: "ls-preview__value" }, getWeekdayLabels()[getFirstDayOfWeek()], " \u00B7 grid stays Sunday-first"))));
    }
    render() {
        const language = locales.language ?? 'en';
        const calendar = calendarPreference.override ?? 'auto';
        return (h(Host, { key: '96da77624494792f1687ac6872d807cf46cb4174', class: `ls-host ls-host--${this.placement}` }, !this.open && (h("button", { key: '8eb0ab28091451089aec8e774449f9a3e5ecd87d', class: "ls-fab", title: "Locale switcher", onClick: () => (this.open = true) }, h("wa-icon", { key: 'fa0db34e5012eb072ce92f5f9838559c19126da6', name: "globe" }), h("span", { key: 'f5a06793a1af49f6d402f8ff7ce50095bca90301', class: "ls-fab__label" }, language.toUpperCase()))), this.open && (h("div", { key: '176630f253b48753a3dc15c8f7028b845eca56a6', class: "ls-panel" }, h("header", { key: 'bc330a0ffe64ab389c1f704df00a710cc9aca371', class: "ls-panel__header" }, h("span", { key: 'a43237f877622c113297a693d012e29c61f5b988', class: "ls-panel__title" }, "Locale switcher"), h("button", { key: '89509eebb512b312667d15aa6a2463a372d533cb', class: "ls-panel__close", title: "Collapse", onClick: () => (this.open = false) }, h("wa-icon", { key: '5f2c31e4233b908f39f458ffe0bf694a1ff1312f', name: "xmark" }))), h("wa-select", { key: '1fc7804a30e5201d8a76fb0766df2263ac16a20c', label: "Language", size: "s", value: language, onchange: (e) => this.applyLanguage(e.target.value?.toString()) }, LANGUAGES.map(({ code, label }) => (h("wa-option", { value: code }, label)))), h("wa-select", { key: 'c5f1d28c592361e32e4949062487c9c02e65fcb2', label: "Calendar", size: "s", value: calendar, onchange: (e) => this.applyCalendar(e.target.value?.toString()) }, h("wa-option", { key: '82d97f8edfefb3f96a0b39da5503683d8d3276e3', value: "auto" }, "Auto \u2014 detect from device"), h("wa-option", { key: '4186890cc86de74c571f509825c4014118e403d1', value: "gregory" }, "Gregorian"), h("wa-option", { key: '426d0c72373ffdb5d01a204f319bca552af09a99', value: "islamic-umalqura" }, "Hijri \u2014 Umm al-Qura")), h("wa-select", { key: '37e5e9f68b78469f2a72eccd821cb9a229d9401f', label: "Numbers", size: "s", value: calendarPreference.numberingSystem, onchange: (e) => this.applyNumberingSystem(e.target.value?.toString()) }, NUMBERING_SYSTEMS.map(({ value, label }) => (h("wa-option", { value: value }, label)))), h("wa-select", { key: 'f520b125dd62c605a537793bf925a3ebed75d532', label: "Direction", size: "s", value: this.direction, onchange: (e) => this.applyDirection(e.target.value?.toString()) }, h("wa-option", { key: 'c1d77a524ec23f74ec782897687883383dc1139d', value: "auto" }, "Auto \u2014 from language"), h("wa-option", { key: 'ad9af7b015a217f36739854479b3c08bcdc2c19a', value: "ltr" }, "LTR"), h("wa-option", { key: '8981bbf2857cd9d9da579f2ab427038d0b14f540', value: "rtl" }, "RTL")), this.renderPreview(), h("footer", { key: 'de62599982f52e8732bcafc6e8770c460d8bad1a', class: "ls-panel__footer" }, h("span", { key: 'f8ecb05cbcf877f6e094c257f28b0405758055bd', class: "ls-panel__resolved" }, "resolved: ", language, " \u00B7 ", calendarPreference.resolved, " \u00B7 ", calendarPreference.numberingSystem, " \u00B7 ", document.documentElement.getAttribute('dir') ?? 'ltr'), h("button", { key: '70ec2a6208999ea8bab8e23ecbb8fff25be1abb7', class: "ls-panel__reset", onClick: () => this.applyCalendar('auto') }, "Reset calendar"))))));
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
                    "text": "Start collapsed to a single button."
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
                    "text": "Sample date for the preview, `YYYY-MM-DD`. Defaults to today."
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
