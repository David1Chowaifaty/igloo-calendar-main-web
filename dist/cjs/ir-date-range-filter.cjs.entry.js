'use strict';

var index = require('./index-IDeZZwEK.js');
var irDate = require('./ir-date-CbkOKs2C.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irDateRangeFilterCss = () => `@layer wa-utilities{:host([size='xs']),.wa-size-xs{font-size:var(--wa-font-size-xs)}:host([size='s']),.wa-size-s{font-size:var(--wa-font-size-s)}:host([size='m']),.wa-size-m{font-size:var(--wa-font-size-m)}:host([size='l']),.wa-size-l{font-size:var(--wa-font-size-l)}:host([size='xl']),.wa-size-xl{font-size:var(--wa-font-size-xl)}}:host{display:block}.drf-label{display:inline-block;position:relative;width:100%;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-block-end:0.5em;cursor:pointer}.drf-container{box-sizing:border-box;display:flex;align-items:center;height:var(--wa-form-control-height);background-color:var(--wa-form-control-background-color);border-color:var(--wa-form-control-border-color);border-radius:var(--wa-form-control-border-radius);border-style:var(--wa-form-control-border-style);border-width:var(--wa-form-control-border-width);width:100%;overflow:visible}:host([aria-invalid='true']) .drf-container{border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}.drf-container:focus-within{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.drf-field{display:flex;align-items:center;flex:1;gap:0.25rem;padding-inline:var(--wa-form-control-padding-inline, 0.75rem);height:100%;min-width:0}.drf-divider{display:inline-block;width:1px;height:55%;background-color:var(--wa-color-neutral-border-quiet, #e5e7eb);flex-shrink:0}.drf-text-btn{all:unset;flex:1;font-size:var(--wa-form-control-value-font-size);font-family:inherit;font-weight:var(--wa-form-control-value-font-weight);color:var(--wa-form-control-value-color, #111827);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;line-height:var(--wa-form-control-value-line-height)}.drf-text-btn--placeholder{color:var(--wa-form-control-placeholder-color);user-select:none;-webkit-user-select:none}.drf-text-btn:focus-visible{outline:none}.drf-clear-btn{all:unset;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;color:var(--wa-color-text-quiet, #9ca3af);border-radius:50%;width:1.25rem;height:1.25rem;font-size:0.75rem;transition:color 0.15s ease}.drf-clear-btn:hover{color:var(--wa-color-text-normal, #374151)}.drf-clear-btn:focus-visible{outline:var(--wa-focus-ring);border-radius:50%}.drf-cal-trigger{all:unset;display:flex;align-items:center;justify-content:center;flex-shrink:0;width:1.75rem;height:1.75rem;border-radius:0.375rem;background-color:var(--wa-color-neutral-fill-quiet, #f0f0f0);cursor:pointer;color:var(--wa-color-text-quiet, #6b7280);transition:background-color 0.15s ease}.drf-cal-trigger:hover{background-color:var(--wa-color-neutral-fill-normal, #e0e0e0)}.drf-cal-trigger:focus-visible{outline:var(--wa-focus-ring)}.drf-date-select::part(input-base){display:none !important}.drf-date-select::part(body){flex-direction:row;gap:1rem}.drf-quick-actions{display:flex;flex-direction:column;gap:0.5rem;box-sizing:border-box;width:200px}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border-width:0}:host([readonly]) .drf-container{background-color:var(--wa-color-neutral-fill-quiet, #f5f5f5)}:host([readonly]) .drf-text-btn{cursor:default}:host([readonly]) .drf-cal-trigger{display:none}`;

/** Inner parts of ir-date-select that are re-exported by this component. */
const DATE_SELECT_PARTS = ['base', 'anchor', 'combobox', 'body'];
/** Builds an `exportparts` string that re-exposes ir-date-select parts under a from-/to- prefix. */
const buildExportParts = (side) => DATE_SELECT_PARTS.map(part => `${part}:${side}-${part}`).join(', ');
/**
 * `exportparts` strings are constant per side, so build them once at module load.
 * (Module scope, not static class fields: Stencil compiles components to class
 * expressions, where self-referencing static initializers throw at runtime.)
 */
const EXPORT_PARTS = {
    from: buildExportParts('from'),
    to: buildExportParts('to'),
};
const IrDateRangeFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.datesChanged = index.createEvent(this, "datesChanged");
        this.dateCleared = index.createEvent(this, "dateCleared");
    }
    /** Configurable quick-date preset buttons shown alongside each calendar. */
    quickDates;
    /** Default presets when the host doesn't pass its own; labels localise through `t()`. */
    defaultQuickDates() {
        const daysAgo = (n) => ({
            label: t.t('Lcz_DaysAgo', { fallback: `${n} Days Ago`, params: [number.formatNumber(n)] }),
            getDate: () => moment.hooks().subtract(n, 'days'),
        });
        return [
            { label: t.t('Lcz_Today', { fallback: 'Today' }), getDate: () => moment.hooks() },
            daysAgo(30),
            daysAgo(60),
            daysAgo(90),
            { label: t.t('Lcz_YearAgo', { fallback: '1 Year Ago', params: [1] }), getDate: () => moment.hooks().subtract(1, 'year') },
        ];
    }
    /** Controlled start date in YYYY-MM-DD format. */
    fromDate;
    /** Controlled end date in YYYY-MM-DD format. */
    toDate;
    /** Size variant passed through to inner form controls. Reflected for CSS hooks (`ir-date-range-filter[size='...']`). */
    size = 's';
    /** Whether to show the quick-action preset buttons in each calendar popup. */
    showQuickActions = true;
    /**
     * How a quick-date preset behaves when picked from the *to* side:
     * - `'absolute'` (default): sets only the to-date to `preset.getDate()`, same as the from side.
     * - `'range'`: treats `preset.getDate()` as a "N units ago" anchor — sets from-date to
     *   `preset.getDate()` and to-date to today, so e.g. "7 Days Ago" becomes a "last 7 days" range.
     *   The from side is unaffected by this prop; it always sets only the from-date.
     */
    quickDatesMode = 'absolute';
    /** Earliest selectable date in YYYY-MM-DD format. Applied to both calendars. */
    minDate;
    /** Latest selectable date in YYYY-MM-DD format. Applied to both calendars. */
    maxDate;
    /**
     * Flow after picking a from-date:
     * - `'auto'`: the to-picker opens automatically so the user completes the range in one pass.
     * - `'manual'` (default): nothing opens; the user clicks the to-field themselves.
     */
    selectionMode = 'manual';
    /** Shows an ✕ button next to each filled side that clears just that side. */
    withClear = true;
    /** Displays the range without letting the user change it: the pickers never open and the clear/calendar buttons are hidden. */
    readonly = false;
    /**
     * Visible label rendered above the control. It names the group for assistive
     * technology (replacing the default visually-hidden "Date range selector") and,
     * like a native form label, clicking it opens the from-date picker.
     */
    label;
    /** The selection rendered by the component (see the class doc for the controlled/uncontrolled rules). */
    dates = { from: null, to: null };
    /** Text for the polite live region, refreshed on every change so screen readers announce the new range. */
    liveMessage = '';
    /** Fired whenever either date changes. Payload contains ISO date strings or null. */
    datesChanged;
    /** Fired when the user explicitly clears a date field (after the accompanying `datesChanged`). */
    dateCleared;
    /** Unique id linking the group wrapper to its visually-hidden label. */
    groupId = `date-range-${Math.random().toString(36).substring(2, 9)}`;
    toDateSelectRef;
    fromDateSelectRef;
    /**
     * Latched to `true` the first time the corresponding prop is supplied, so a side
     * that was ever controlled keeps following the prop on subsequent syncs.
     */
    hasControlledFromDate = false;
    hasControlledToDate = false;
    componentWillLoad() {
        this.hasControlledFromDate = this.fromDate !== undefined;
        this.hasControlledToDate = this.toDate !== undefined;
        this.syncInitialDates();
    }
    onFromDateChange(newValue) {
        this.hasControlledFromDate = this.hasControlledFromDate || newValue !== undefined;
        this.syncControlledDates('from', newValue);
    }
    onToDateChange(newValue) {
        this.hasControlledToDate = this.hasControlledToDate || newValue !== undefined;
        this.syncControlledDates('to', newValue);
    }
    /**
     * Updates one side of the date range and emits the change. In `'auto'` selection
     * mode, picking a from-date opens the to-picker on the next frame (the popup needs
     * the click that closed the from-picker to finish propagating first). Pass
     * `skipAutoAdvance` when the caller is about to set the to-date itself right after
     * (e.g. a range-style quick action), so the to-picker doesn't pop open and then close.
     */
    selectDate(date, type, skipAutoAdvance = false) {
        let changes = { ...this.dates, [type]: date };
        if (this.dates.to && type === 'from' && date.isAfter(this.dates.to, 'date')) {
            changes = { ...changes, to: date };
        }
        this.dates = changes;
        this.emitChange();
        if (!skipAutoAdvance && type === 'from' && date && this.selectionMode === 'auto') {
            requestAnimationFrame(() => {
                this.toDateSelectRef?.show();
            });
        }
    }
    /**
     * Clears one side of the range. State-only on purpose: nulling the date prop
     * cascades down to the calendar as a silent clear, whereas calling the picker's
     * `clear()` method would fire a second `dateChanged` and double-emit `datesChanged`.
     */
    clearDate(type) {
        this.selectDate(null, type);
        this.dateCleared.emit({ field: type });
    }
    /** Seeds internal state from whichever side is controlled (called once before first render). */
    syncInitialDates() {
        this.dates = {
            from: this.hasControlledFromDate ? this.parseDate(this.fromDate) : this.dates.from,
            to: this.hasControlledToDate ? this.parseDate(this.toDate) : this.dates.to,
        };
    }
    /**
     * Applies a controlled-prop change to internal state: the changed side takes the
     * new value; the other side re-reads its prop only if it is controlled too.
     */
    syncControlledDates(changedField, changedValue) {
        this.dates = {
            from: changedField === 'from' ? this.parseDate(changedValue) : this.hasControlledFromDate ? this.parseDate(this.fromDate) : this.dates.from,
            to: changedField === 'to' ? this.parseDate(changedValue) : this.hasControlledToDate ? this.parseDate(this.toDate) : this.dates.to,
        };
    }
    /** Strict `YYYY-MM-DD` parser; anything else (including partial ISO strings) yields null. */
    parseDate(value) {
        if (!value) {
            return null;
        }
        const parsed = moment.hooks(value, 'YYYY-MM-DD', true);
        return parsed.isValid() ? parsed : null;
    }
    /** Emits `datesChanged` and refreshes the screen-reader live region. */
    emitChange() {
        const from = this.dates.from?.format('YYYY-MM-DD') ?? null;
        const to = this.dates.to?.format('YYYY-MM-DD') ?? null;
        this.datesChanged.emit({ from, to });
        const notSet = t.t('Lcz_NotSet', { fallback: 'not set' });
        const fromText = this.dates.from ? irDate.formatDate(this.dates.from, { style: 'long' }) : notSet;
        const toText = this.dates.to ? irDate.formatDate(this.dates.to, { style: 'long' }) : notSet;
        this.liveMessage = t.t('Lcz_DateRangeUpdatedAnnouncement', {
            fallback: `Date range updated. From ${fromText} to ${toText}.`,
            params: [fromText, toText],
        });
    }
    /**
     * Floors the to-picker's min date at the from-date (or the global minDate),
     * whichever is later. String comparison is safe for YYYY-MM-DD.
     */
    getToMinDate(fromStr) {
        if (!fromStr)
            return this.minDate;
        if (!this.minDate)
            return fromStr;
        return fromStr > this.minDate ? fromStr : this.minDate;
    }
    render() {
        const fromLabel = this.dates.from?.format('YYYY-MM-DD') ?? null;
        const toLabel = this.dates.to?.format('YYYY-MM-DD') ?? null;
        const fromDisplay = this.dates.from ? irDate.formatDate(this.dates.from, { style: 'medium' }) : null;
        const toDisplay = this.dates.to ? irDate.formatDate(this.dates.to, { style: 'medium' }) : null;
        // const fromMaxDate = this.getFromMaxDate(toLabel);
        const toMinDate = this.getToMinDate(fromLabel);
        const quickDates = this.quickDates ?? this.defaultQuickDates();
        return (index.h(index.Host, { key: 'bcf45bce5ffc4a14ea60ca87b96366390049aca7' }, this.label && (index.h("label", { key: '58025d5cfed64df208f200606b8e859ec029ea2d', id: `${this.groupId}-label`, class: "drf-label", part: "label", htmlFor: `${this.groupId}-from-btn` }, this.label)), index.h("div", { key: 'd5decaa5b5dc9d84aa3d77a8bd6da5d258353d22', part: "container", class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, !this.label && (index.h("span", { key: 'dad63be3c2f185a948a3359742d5b829080c8b8b', id: `${this.groupId}-label`, class: "sr-only" }, t.t('Lcz_DateRangeSelector', { fallback: 'Date range selector' }))), index.h("div", { key: '7d4667e9d76cb9d53ae6364ee6984d4d9d2a8d93', part: "field field-from", class: "drf-field" }, index.h("button", { key: '48ebc58e4189d248f57c44b5bb454197fd997933', id: `${this.groupId}-from-btn`, type: "button", part: "text-btn", class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => !this.readonly && this.fromDateSelectRef?.show(), "aria-haspopup": this.readonly ? undefined : 'dialog', "aria-label": fromLabel ? t.t('Lcz_StartDatePrefix', { fallback: `Start date: ${fromLabel}`, params: [fromLabel] }) : t.t('Lcz_SelectStartDate', { fallback: 'Select start date' }) }, fromDisplay ?? t.t('Lcz_From', { fallback: 'From' })), fromLabel && this.withClear && !this.readonly && (index.h("button", { key: 'e781430348e365b51b5d87c5a4e5baf7c90bca5a', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": t.t('Lcz_ClearStartDate', { fallback: 'Clear start date' }) }, index.h("wa-icon", { key: 'b4b84751f1377acb11bda40c56a08cade23d51aa', name: "xmark" }))), index.h("ir-date-select", { key: 'd6be2a1e427025a84821f329963b62ab7f950d74', ref: el => (this.fromDateSelectRef = el), exportparts: EXPORT_PARTS.from, date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: t.t('Lcz_From', { fallback: 'From' }), minDate: this.minDate, maxDate: this.maxDate, emitEmptyDate: true, disabled: this.readonly, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, index.h("button", { key: '3236488830efd998d048773a41fdf9d7dd1073d5', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": t.t('Lcz_OpenStartDateCalendar', { fallback: 'Open start date calendar' }) }, index.h("wa-icon", { key: 'e836bedba41bb3a7cef5b021c212129de66f7418', name: "calendar", variant: "regular" })), this.showQuickActions && (index.h("div", { key: 'd478184bf1368f6ea4fe2b24f70a128bf3279bb7', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": t.t('Lcz_QuickStartDateOptions', { fallback: 'Quick start date options' }) }, quickDates.map(action => (index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", disabled: this.dates?.to?.isSameOrBefore(action.getDate(), 'date'), "aria-label": t.t('Lcz_SetStartDateToOption', { fallback: `Set start date to ${action.label}`, params: [action.label] }), onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef?.hide();
            } }, action.label))))))), index.h("span", { key: '2026ba03cb9d1f749530c2b490a63140f6fa297b', part: "divider", class: "drf-divider", "aria-hidden": "true" }), index.h("div", { key: '182843bd4d2b241c33e2288d3da422a8243657e3', part: "field field-to", class: "drf-field" }, index.h("button", { key: '000c0e77a950d4bccc8313252dfa92d1d6f401bf', type: "button", part: "text-btn", class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => !this.readonly && this.toDateSelectRef?.show(), "aria-haspopup": this.readonly ? undefined : 'dialog', "aria-label": toLabel ? `${t.t('Lcz_EndDate', { fallback: 'End date' })}: ${toLabel}` : t.t('Lcz_SelectEndDate', { fallback: 'Select end date' }) }, toDisplay ?? t.t('Lcz_To', { fallback: 'To' })), toLabel && this.withClear && !this.readonly && (index.h("button", { key: 'c2c22b64a05055ccb0ceeeb6d5e030b0d030bc28', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": t.t('Lcz_ClearEndDate', { fallback: 'Clear end date' }) }, index.h("wa-icon", { key: '0bff5c7d511ecca9eb0a4a59c54ab39278ce196a', name: "xmark" }))), index.h("ir-date-select", { key: '804829aeb2700d7be78606cc125a5299f6f385e6', ref: el => (this.toDateSelectRef = el), exportparts: EXPORT_PARTS.to, date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: t.t('Lcz_To', { fallback: 'To' }), minDate: toMinDate, maxDate: this.maxDate, emitEmptyDate: true, disabled: this.readonly, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, index.h("button", { key: 'ee4226b02c32a2f4bf3d65ff41b0ba13a551c86c', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": t.t('Lcz_OpenEndDateCalendar', { fallback: 'Open end date calendar' }) }, index.h("wa-icon", { key: '12d8a38f4576d65ee43f5e5a0d62b4efe7112ccd', name: "calendar", variant: "regular" })), this.showQuickActions && (index.h("div", { key: '123d39325a112ad22707dd2475fd9c4395662119', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": t.t('Lcz_QuickEndDateOptions', { fallback: 'Quick end date options' }) }, quickDates.map(action => (index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": t.t('Lcz_SetEndDateToOption', { fallback: `Set end date to ${action.label}`, params: [action.label] }), disabled: this.quickDatesMode === 'range' ? false : this.dates?.from?.isSameOrAfter(action.getDate(), 'date'), onClickHandler: () => {
                if (this.quickDatesMode === 'range') {
                    this.selectDate(action.getDate(), 'from', true);
                    this.selectDate(moment.hooks(), 'to');
                }
                else {
                    this.selectDate(action.getDate(), 'to');
                }
                this.toDateSelectRef?.hide();
            } }, action.label))))))), index.h("span", { key: 'e2ccec49e1c5a3ca2ecf689ff6dbc5548197dcd9', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage))));
    }
    static get watchers() { return {
        "fromDate": [{
                "onFromDateChange": 0
            }],
        "toDate": [{
                "onToDateChange": 0
            }]
    }; }
};
IrDateRangeFilter.style = irDateRangeFilterCss();

exports.ir_date_range_filter = IrDateRangeFilter;
