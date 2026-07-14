import AirDatepicker from "air-datepicker";
import moment from "moment";
import { LanguageObserver } from "../../../../utils/language-observer";
/** Loaders are dynamic `import()`s so a page only ever downloads the locale packs it actually uses. */
const localeLoaders = {
    en: () => import('air-datepicker/locale/en'),
    ar: () => import('air-datepicker/locale/ar'),
    fr: () => import('air-datepicker/locale/fr'),
};
/** Module-level cache: shared across every `ir-air-date-picker` instance, loaded at most once per locale. */
const localeCache = new Map();
async function loadLocale(lang) {
    const cached = localeCache.get(lang);
    if (cached)
        return cached;
    const { default: locale } = await localeLoaders[lang]();
    localeCache.set(lang, locale);
    return locale;
}
/**
 * `ir-air-date-picker` — a headless Stencil wrapper around the `air-datepicker` library.
 *
 * The component renders nothing itself (`render()` returns `null`); on `componentDidLoad`
 * it instantiates an inline `AirDatepicker` calendar directly into the host element and
 * keeps it in sync with the `date` / `dates` / `minDate` / `maxDate` props via watchers.
 *
 * Design notes:
 * - All prop-driven picker mutations use `{ silent: true }` so they never re-trigger
 *   `onSelect` → `dateChanged`, preventing parent ↔ child feedback loops.
 * - All date inputs (`string | Moment`) are normalized through {@link toMoment} before
 *   touching the picker, and value-compared (`isSameDates`) so re-renders of the parent
 *   with equal values are no-ops.
 * - The primary consumer is `ir-date-select`, which hosts this component inside its popup
 *   and forwards its own props one-to-one.
 */
export class IrAirDatePicker {
    /** Host element; AirDatepicker mounts its calendar DOM inside it (`inline: true`). */
    el;
    /** Not wired to the picker. Accepted only for API parity with `ir-date-select`, which forwards all of its props. */
    withClear;
    /** Not wired to the picker (this component renders no input). Forwarded by `ir-date-select` for API parity. */
    placeholder;
    /** Not wired to the picker (this component renders no input). Forwarded by `ir-date-select` for API parity. */
    label;
    /**
     * Pre-selected dates for multi-select/range mode. Takes precedence over `date`
     * at initialization, and is re-applied through the `dates` watcher on change.
     */
    dates;
    /**
     * Not wired to the picker: the calendar is always created with `inline: true`
     * (visibility is controlled by the parent `ir-date-select` popup).
     */
    inline = false;
    /**
     * The selected date (single-select mode). Mutable: the component writes the latest
     * selection back into it from `onSelect`, and the parent can set it to move the
     * calendar selection programmatically (applied silently, no `dateChanged` emitted).
     */
    date = null;
    /** `true` for unlimited multi-select, or a number for a fixed max. Passed to AirDatepicker at init only. */
    multipleDates = false;
    /** Enables range selection (start + end). Passed to AirDatepicker at init only. */
    range = false;
    /** Display format for the picker (AirDatepicker format tokens, not moment tokens). Passed at init only. */
    dateFormat = 'yyyy-MM-dd';
    /** Enables the timepicker. Also switches `isSameDates` comparisons from day precision to minute precision. */
    timepicker = false;
    /** Earliest selectable date. Reactive: changes call `datePicker.update()` while preserving the current selection. */
    minDate;
    /** Latest selectable date. Reactive: changes call `datePicker.update()` while preserving the current selection. */
    maxDate;
    /** Not wired to the picker. Forwarded by `ir-date-select` (which handles disabling interaction itself). */
    disabled = false;
    /** Passed to AirDatepicker at init only. Has no visual effect on an inline calendar; the parent popup handles closing. */
    autoClose = true;
    /** Shows days from the previous/next month in the current view. Passed at init only. */
    showOtherMonths = true;
    /** Allows selecting the previous/next-month days shown in the current view. Passed at init only. */
    selectOtherMonths = true;
    /** Not wired to the picker. Forwarded by `ir-date-select` (trigger rendering is the parent's concern). */
    customPicker = false;
    /** Optional element AirDatepicker appends its calendar to (for positioning/styling). Defaults to the host. */
    container;
    /**
     * If `true`, a `date` prop change destroys and rebuilds the AirDatepicker instance
     * instead of calling `selectDate`. Use only when the picker must fully re-initialize;
     * rebuilding on every change is expensive.
     */
    forceDestroyOnUpdate = false;
    /**
     * If `true`, emits `dateChanged` with null values when the selection is cleared.
     * Otherwise clear-events are swallowed.
     */
    emitEmptyDate = false;
    /** Not wired to the picker. Forwarded by `ir-date-select` for API parity. */
    triggerContainerStyle = '';
    /**
     * Emitted when the user picks a date in the calendar (never for silent, prop-driven updates).
     * `start`/`end` are equal in single-select mode; `dates` holds every selected date as `YYYY-MM-DD`.
     */
    dateChanged;
    /** Emitted when the AirDatepicker reports `onShow`. */
    datePickerFocus;
    /** Emitted when the AirDatepicker reports `onHide`. */
    datePickerBlur;
    /**
     * The current selection, normalized to a Moment. Used as the comparison baseline so
     * prop updates that match the existing selection don't touch the picker.
     * Deliberately a plain field, not `@State`: this component renders `null`, so
     * state-driven re-renders would be pure overhead.
     */
    currentDate = null;
    /** The AirDatepicker instance. `undefined` until `componentDidLoad` and after disconnect. */
    datePicker;
    /** Language currently applied to the picker, tracked so `handleLangChange` can detect real changes. */
    currentLang = this.normalizeLang(LanguageObserver.getLang());
    /** Unsubscribes this instance from `LanguageObserver`. */
    unsubscribeLang;
    componentWillLoad() {
        if (this.date) {
            this.currentDate = this.toMoment(this.date);
        }
    }
    componentDidLoad() {
        this.initializeDatepicker();
        this.unsubscribeLang = LanguageObserver.subscribe(lang => this.handleLangChange(lang));
    }
    disconnectedCallback() {
        this.unsubscribeLang?.();
        this.unsubscribeLang = undefined;
        this.datePicker?.destroy?.();
        this.datePicker = undefined;
    }
    /** Applies external `date` changes to the calendar, skipping same-day (or same-minute) no-ops. */
    datePropChanged(newDate, oldDate) {
        if (this.isSameDates(newDate, oldDate))
            return;
        this.updatePickerDate(newDate);
    }
    minDatePropChanged(newVal, oldVal) {
        if (!this.datePicker || this.isSameDates(newVal, oldVal))
            return;
        // update() re-applies opts.selectedDates (the initial selection), so pass the current one to keep it
        this.datePicker.update({ minDate: this.toMoment(newVal)?.format('YYYY-MM-DD'), selectedDates: [...this.datePicker.selectedDates] }, { silent: true });
    }
    maxDatePropChanged(newVal, oldVal) {
        if (!this.datePicker || this.isSameDates(newVal, oldVal))
            return;
        this.datePicker.update({ maxDate: this.toMoment(newVal)?.format('YYYY-MM-DD'), selectedDates: [...this.datePicker.selectedDates] }, { silent: true });
    }
    /** Applies external `dates` (multi/range) changes, skipping value-equal lists. */
    datesPropChanged(newDates = [], oldDates = []) {
        if (this.areDateListsEqual(newDates, oldDates))
            return;
        this.updatePickerDates(newDates);
    }
    /** Clears the calendar selection. Not silent: fires `onSelect` with an empty value (see `emitEmptyDate`). */
    async clearDatePicker() {
        this.datePicker?.clear();
    }
    /**
     * Force-resyncs the calendar to the given (or current) value, bypassing the equality
     * checks the watchers perform. Escape hatch for parents whose prop value didn't change
     * but whose picker drifted (e.g. after a silent internal clear). Always silent.
     */
    async syncSelection(options) {
        if (Array.isArray(options?.dates) || this.range) {
            const list = Array.isArray(options?.dates) ? options.dates : this.dates;
            this.forceSyncPickerDates(list ?? []);
            return;
        }
        const nextDate = options?.date !== undefined ? options.date : this.date;
        this.forceSyncPickerDate(nextDate ?? null);
    }
    // ── Moment helpers ────────────────────────────────────────────────────────
    /**
     * Normalizes any accepted date input to a valid Moment, or `null`.
     * Parse order: strict `YYYY-MM-DD` → strict ISO-8601 → loose fallback,
     * so canonical app dates never hit moment's slow/ambiguous loose parser.
     */
    toMoment(value) {
        if (!value)
            return null;
        if (moment.isMoment(value))
            return value.isValid() ? value : null;
        const strict = moment(value, 'YYYY-MM-DD', true);
        if (strict.isValid())
            return strict;
        const iso = moment(value, moment.ISO_8601, true);
        if (iso.isValid())
            return iso;
        const loose = moment(value);
        return loose.isValid() ? loose : null;
    }
    /** Normalizes a list of date inputs, dropping unparseable entries. */
    toMoments(values) {
        if (!Array.isArray(values) || values.length === 0)
            return [];
        return values.map(v => this.toMoment(v)).filter((m) => m !== null);
    }
    /**
     * Value-equality for two date inputs at day precision (minute precision when
     * `timepicker` is on). Unparseable values are never equal to anything.
     */
    isSameDates(d1, d2) {
        if (!d1 && !d2)
            return true;
        if (!d1 || !d2)
            return false;
        const m1 = this.toMoment(d1);
        const m2 = this.toMoment(d2);
        if (!m1 || !m2)
            return false;
        return m1.isSame(m2, this.timepicker ? 'minute' : 'date');
    }
    /** Order-sensitive value-equality for two date lists (empty and missing lists are equal). */
    areDateListsEqual(first, second) {
        if (!first?.length && !second?.length)
            return true;
        if (!first || !second || first.length !== second.length)
            return false;
        return first.every((v, i) => this.isSameDates(v, second[i]));
    }
    // ── Picker state management ───────────────────────────────────────────────
    /**
     * Pushes a single-date value into the calendar without emitting `dateChanged`.
     * Clears on `null`/unparseable input; otherwise selects the day (or rebuilds the
     * whole instance when `forceDestroyOnUpdate` is set).
     */
    updatePickerDate(newDate) {
        const m = this.toMoment(newDate);
        if (!m) {
            this.datePicker?.clear({ silent: true });
            this.currentDate = null;
            return;
        }
        if (!this.isSameDates(this.currentDate, m)) {
            this.currentDate = m;
            if (this.forceDestroyOnUpdate) {
                this.datePicker?.destroy();
                this.datePicker = undefined;
                this.initializeDatepicker();
            }
            else {
                this.datePicker?.selectDate(m.format('YYYY-MM-DD'), { silent: true });
            }
        }
    }
    /** Replaces the calendar's multi/range selection without emitting `dateChanged`. */
    updatePickerDates(nextDates = []) {
        if (!this.datePicker)
            return;
        const moments = this.toMoments(nextDates);
        this.datePicker.clear({ silent: true });
        if (moments.length > 0) {
            this.datePicker.selectDate(moments.map(m => m.format('YYYY-MM-DD')), { silent: true });
            this.currentDate = moments[0];
            return;
        }
        this.currentDate = null;
        this.date = null;
    }
    /**
     * Unconditional single-date resync used by `syncSelection`: clears, re-selects, and
     * writes back `currentDate`/`date`. Before the picker exists it just stores the value
     * so `initializeDatepicker` picks it up.
     */
    forceSyncPickerDate(nextDate) {
        const m = this.toMoment(nextDate);
        if (!this.datePicker) {
            this.currentDate = m;
            this.date = m;
            return;
        }
        this.datePicker.clear({ silent: true });
        if (!m) {
            this.currentDate = null;
            this.date = null;
            return;
        }
        this.datePicker.selectDate(m.format('YYYY-MM-DD'), { silent: true });
        this.currentDate = m;
        this.date = m;
    }
    /** Unconditional multi/range resync used by `syncSelection`. Mirrors `forceSyncPickerDate`. */
    forceSyncPickerDates(nextDates = []) {
        const moments = this.toMoments(nextDates);
        if (!this.datePicker) {
            this.currentDate = moments[0] ?? null;
            this.date = moments[0] ?? null;
            return;
        }
        this.datePicker.clear({ silent: true });
        if (moments.length > 0) {
            this.datePicker.selectDate(moments.map(m => m.format('YYYY-MM-DD')), { silent: true });
        }
        this.currentDate = moments[0] ?? null;
        this.date = moments[0] ?? null;
    }
    /**
     * AirDatepicker `onSelect` handler — the only path that emits `dateChanged`.
     * Writes the selection back into `currentDate`/`date` so the watchers treat the
     * parent's echoed prop update as a no-op.
     */
    handleDateSelect(date) {
        const dates = (Array.isArray(date) ? date : date ? [date] : []).filter(Boolean);
        if (!dates.length) {
            if (this.emitEmptyDate) {
                this.dateChanged.emit({ start: null, end: null, dates: [] });
            }
            this.currentDate = null;
            this.date = null;
            return;
        }
        const startMoment = moment(dates[0]);
        const endMoment = this.range && dates.length > 1 ? moment(dates[1]) : startMoment;
        this.currentDate = startMoment;
        this.date = startMoment;
        this.dateChanged.emit({
            start: startMoment,
            end: endMoment,
            dates: dates.map(d => moment(d).format('YYYY-MM-DD')),
        });
    }
    /** Normalizes an `<html lang>` value to one of the packs we ship; unrecognized/missing values fall back to `en`. */
    normalizeLang(lang) {
        const value = (lang ?? 'en').toLowerCase();
        return value === 'ar' || value === 'fr' ? value : 'en';
    }
    /** `LanguageObserver` callback: live-swaps the calendar's locale, preserving the current selection. */
    async handleLangChange(lang) {
        const nextLang = this.normalizeLang(lang);
        if (nextLang === this.currentLang || !this.datePicker)
            return;
        this.currentLang = nextLang;
        const locale = await loadLocale(nextLang);
        if (!this.datePicker)
            return;
        this.datePicker.update({ locale, selectedDates: [...this.datePicker.selectedDates] }, { silent: true });
    }
    /**
     * Creates the inline AirDatepicker on the host element (idempotent), seeding the
     * selection from `dates` (preferred) or `currentDate`, then applies the Web Awesome
     * theme via CSS custom properties on the generated calendar element.
     */
    async initializeDatepicker() {
        if (this.datePicker)
            return;
        const preselectedMoments = this.toMoments(this.dates);
        const selectedDates = preselectedMoments.length > 0 ? preselectedMoments.map(m => m.format('YYYY-MM-DD')) : this.currentDate ? [this.currentDate.format('YYYY-MM-DD')] : [];
        const locale = await loadLocale(this.currentLang);
        if (this.datePicker)
            return;
        this.datePicker = new AirDatepicker(this.el, {
            container: this.container,
            inline: true,
            selectedDates,
            multipleDates: this.multipleDates,
            range: this.range,
            dateFormat: this.dateFormat,
            timepicker: this.timepicker,
            minDate: this.toMoment(this.minDate)?.format('YYYY-MM-DD'),
            maxDate: this.toMoment(this.maxDate)?.format('YYYY-MM-DD'),
            autoClose: this.autoClose,
            locale,
            showOtherMonths: this.showOtherMonths,
            selectOtherMonths: this.selectOtherMonths,
            onHide: () => this.datePickerBlur.emit(),
            onShow: () => this.datePickerFocus.emit(),
            onSelect: ({ date }) => this.handleDateSelect(date),
        });
        const datepickerEl = this.datePicker.$datepicker;
        if (!datepickerEl)
            return;
        datepickerEl.classList.add('ir-custom-date-picker__calendar');
        datepickerEl.classList.add('custom-date-picker__calendar');
        datepickerEl.style.borderWidth = '0px';
        datepickerEl.style.setProperty('--adp-cell-background-color-selected', 'var(--wa-color-brand-fill-loud)');
        datepickerEl.style.setProperty('--adp-cell-background-color-selected-hover', 'var(--wa-color-brand-fill-loud)');
        datepickerEl.style.setProperty('--adp-background-color-selected-other-month', 'var(--wa-color-brand-fill-normal)');
        datepickerEl.style.setProperty('--adp-background-color-selected-other-month-focused', 'var(--wa-color-brand-fill-loud)');
        datepickerEl.style.setProperty('--adp-accent-color', 'var(--wa-color-brand-fill-loud)');
        datepickerEl.style.setProperty('--adp-background-color', 'var(--wa-color-surface-default,white)');
        datepickerEl.style.setProperty('--adp-day-name-color', 'lab(48.496% 0 0)');
        datepickerEl.style.setProperty('--adp-padding', '0px 0px 0.5rem 0px', 'important');
        datepickerEl.style.setProperty('--adp-border-color-inner', 'transparent', 'important');
        datepickerEl.style.setProperty('--adp-color-other-month-hover', 'var(--wa-color-text-normal)', 'important');
    }
    /** Headless: the calendar DOM is injected by AirDatepicker, not Stencil. */
    render() {
        return null;
    }
    static get is() { return "ir-air-date-picker"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-air-date-picker.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-air-date-picker.css"]
        };
    }
    static get properties() {
        return {
            "withClear": {
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
                    "text": "Not wired to the picker. Accepted only for API parity with `ir-date-select`, which forwards all of its props."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "with-clear"
            },
            "placeholder": {
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
                    "text": "Not wired to the picker (this component renders no input). Forwarded by `ir-date-select` for API parity."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder"
            },
            "label": {
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
                    "text": "Not wired to the picker (this component renders no input). Forwarded by `ir-date-select` for API parity."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "dates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(string | Moment)[]",
                    "resolved": "(string | Moment)[]",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Pre-selected dates for multi-select/range mode. Takes precedence over `date`\nat initialization, and is re-applied through the `dates` watcher on change."
                },
                "getter": false,
                "setter": false
            },
            "inline": {
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
                    "text": "Not wired to the picker: the calendar is always created with `inline: true`\n(visibility is controlled by the parent `ir-date-select` popup)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "inline",
                "defaultValue": "false"
            },
            "date": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | Moment | null",
                    "resolved": "Moment | string",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The selected date (single-select mode). Mutable: the component writes the latest\nselection back into it from `onSelect`, and the parent can set it to move the\ncalendar selection programmatically (applied silently, no `dateChanged` emitted)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "date",
                "defaultValue": "null"
            },
            "multipleDates": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "boolean | number",
                    "resolved": "boolean | number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "`true` for unlimited multi-select, or a number for a fixed max. Passed to AirDatepicker at init only."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "multiple-dates",
                "defaultValue": "false"
            },
            "range": {
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
                    "text": "Enables range selection (start + end). Passed to AirDatepicker at init only."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "range",
                "defaultValue": "false"
            },
            "dateFormat": {
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
                    "text": "Display format for the picker (AirDatepicker format tokens, not moment tokens). Passed at init only."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "date-format",
                "defaultValue": "'yyyy-MM-dd'"
            },
            "timepicker": {
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
                    "text": "Enables the timepicker. Also switches `isSameDates` comparisons from day precision to minute precision."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "timepicker",
                "defaultValue": "false"
            },
            "minDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | Moment",
                    "resolved": "Moment | string",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Earliest selectable date. Reactive: changes call `datePicker.update()` while preserving the current selection."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min-date"
            },
            "maxDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | Moment",
                    "resolved": "Moment | string",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Latest selectable date. Reactive: changes call `datePicker.update()` while preserving the current selection."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-date"
            },
            "disabled": {
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
                    "text": "Not wired to the picker. Forwarded by `ir-date-select` (which handles disabling interaction itself)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "autoClose": {
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
                    "text": "Passed to AirDatepicker at init only. Has no visual effect on an inline calendar; the parent popup handles closing."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-close",
                "defaultValue": "true"
            },
            "showOtherMonths": {
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
                    "text": "Shows days from the previous/next month in the current view. Passed at init only."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-other-months",
                "defaultValue": "true"
            },
            "selectOtherMonths": {
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
                    "text": "Allows selecting the previous/next-month days shown in the current view. Passed at init only."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "select-other-months",
                "defaultValue": "true"
            },
            "customPicker": {
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
                    "text": "Not wired to the picker. Forwarded by `ir-date-select` (trigger rendering is the parent's concern)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "custom-picker",
                "defaultValue": "false"
            },
            "container": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "HTMLElement",
                    "resolved": "HTMLElement",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional element AirDatepicker appends its calendar to (for positioning/styling). Defaults to the host."
                },
                "getter": false,
                "setter": false
            },
            "forceDestroyOnUpdate": {
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
                    "text": "If `true`, a `date` prop change destroys and rebuilds the AirDatepicker instance\ninstead of calling `selectDate`. Use only when the picker must fully re-initialize;\nrebuilding on every change is expensive."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "force-destroy-on-update",
                "defaultValue": "false"
            },
            "emitEmptyDate": {
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
                    "text": "If `true`, emits `dateChanged` with null values when the selection is cleared.\nOtherwise clear-events are swallowed."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "emit-empty-date",
                "defaultValue": "false"
            },
            "triggerContainerStyle": {
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
                    "text": "Not wired to the picker. Forwarded by `ir-date-select` for API parity."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "trigger-container-style",
                "defaultValue": "''"
            }
        };
    }
    static get events() {
        return [{
                "method": "dateChanged",
                "name": "dateChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the user picks a date in the calendar (never for silent, prop-driven updates).\n`start`/`end` are equal in single-select mode; `dates` holds every selected date as `YYYY-MM-DD`."
                },
                "complexType": {
                    "original": "{\n    start: Moment | null;\n    end: Moment | null;\n    dates: string | string[];\n  }",
                    "resolved": "{ start: Moment; end: Moment; dates: string | string[]; }",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
                        }
                    }
                }
            }, {
                "method": "datePickerFocus",
                "name": "datePickerFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the AirDatepicker reports `onShow`."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "datePickerBlur",
                "name": "datePickerBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the AirDatepicker reports `onHide`."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "clearDatePicker": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Clears the calendar selection. Not silent: fires `onSelect` with an empty value (see `emitEmptyDate`).",
                    "tags": []
                }
            },
            "syncSelection": {
                "complexType": {
                    "signature": "(options?: { date?: string | Moment | null; dates?: (string | Moment)[] | null; }) => Promise<void>",
                    "parameters": [{
                            "name": "options",
                            "type": "{ date?: string | Moment; dates?: (string | Moment)[]; }",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Moment": {
                            "location": "import",
                            "path": "moment",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Force-resyncs the calendar to the given (or current) value, bypassing the equality\nchecks the watchers perform. Escape hatch for parents whose prop value didn't change\nbut whose picker drifted (e.g. after a silent internal clear). Always silent.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "date",
                "methodName": "datePropChanged"
            }, {
                "propName": "minDate",
                "methodName": "minDatePropChanged"
            }, {
                "propName": "maxDate",
                "methodName": "maxDatePropChanged"
            }, {
                "propName": "dates",
                "methodName": "datesPropChanged"
            }];
    }
}
