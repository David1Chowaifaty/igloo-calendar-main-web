'use strict';

var index = require('./index-CQkpA5n3.js');
var irDate = require('./ir-date-BZLsqCOc.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-CyRK1btk.js');
var number = require('./number-D7i5wAQq.js');
require('./locales.store-BMTss6fG.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irDateRangeFilterCss = () => `@layer wa-utilities{:host([size='xs']),.wa-size-xs{font-size:var(--wa-font-size-xs)}:host([size='s']),.wa-size-s{font-size:var(--wa-font-size-s)}:host([size='m']),.wa-size-m{font-size:var(--wa-font-size-m)}:host([size='l']),.wa-size-l{font-size:var(--wa-font-size-l)}:host([size='xl']),.wa-size-xl{font-size:var(--wa-font-size-xl)}}:host{display:block}.drf-label{display:inline-block;position:relative;width:100%;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-block-end:0.5em;cursor:pointer}.drf-container{box-sizing:border-box;display:flex;align-items:center;height:var(--wa-form-control-height);background-color:var(--wa-form-control-background-color);border-color:var(--wa-form-control-border-color);border-radius:var(--wa-form-control-border-radius);border-style:var(--wa-form-control-border-style);border-width:var(--wa-form-control-border-width);width:100%;overflow:visible}:host([aria-invalid='true']) .drf-container{border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}.drf-container:focus-within{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.drf-field{display:flex;align-items:center;flex:1;gap:0.25rem;padding-inline:var(--wa-form-control-padding-inline, 0.75rem);height:100%;min-width:0}.drf-divider{display:inline-block;width:1px;height:55%;background-color:var(--wa-color-neutral-border-quiet, #e5e7eb);flex-shrink:0}.drf-text-btn{all:unset;flex:1;font-size:var(--wa-form-control-value-font-size);font-family:inherit;font-weight:var(--wa-form-control-value-font-weight);color:var(--wa-form-control-value-color, #111827);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;line-height:var(--wa-form-control-value-line-height)}.drf-text-btn--placeholder{color:var(--wa-form-control-placeholder-color);user-select:none;-webkit-user-select:none}.drf-text-btn:focus-visible{outline:none}.drf-clear-btn{all:unset;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;color:var(--wa-color-text-quiet, #9ca3af);border-radius:50%;width:1.25rem;height:1.25rem;font-size:0.75rem;transition:color 0.15s ease}.drf-clear-btn:hover{color:var(--wa-color-text-normal, #374151)}.drf-clear-btn:focus-visible{outline:var(--wa-focus-ring);border-radius:50%}.drf-cal-trigger{all:unset;display:flex;align-items:center;justify-content:center;flex-shrink:0;width:1.75rem;height:1.75rem;border-radius:0.375rem;background-color:var(--wa-color-neutral-fill-quiet, #f0f0f0);cursor:pointer;color:var(--wa-color-text-quiet, #6b7280);transition:background-color 0.15s ease}.drf-cal-trigger:hover{background-color:var(--wa-color-neutral-fill-normal, #e0e0e0)}.drf-cal-trigger:focus-visible{outline:var(--wa-focus-ring)}.drf-date-select::part(input-base){display:none !important}.drf-date-select::part(body){flex-direction:row;gap:1rem}.drf-quick-actions{display:flex;flex-direction:column;gap:0.5rem;box-sizing:border-box;width:200px}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border-width:0}`;

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
        return (index.h(index.Host, { key: 'af94a942d504fb7f183991778828e3cc0ab7b804' }, this.label && (index.h("label", { key: 'e1a048690303cd589f1f7a63576788bf0ee43a40', id: `${this.groupId}-label`, class: "drf-label", part: "label", htmlFor: `${this.groupId}-from-btn` }, this.label)), index.h("div", { key: 'c82078c45da36ffeaa166645812370fb6631fc84', part: "container", class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, !this.label && (index.h("span", { key: '5a0b8cc9baf2a8e7afcb782ffef22f3dcbe67573', id: `${this.groupId}-label`, class: "sr-only" }, t.t('Lcz_DateRangeSelector', { fallback: 'Date range selector' }))), index.h("div", { key: 'eef685ced2969b629bb502da1f5ebee32eb67435', part: "field field-from", class: "drf-field" }, index.h("button", { key: 'da25238d796cec0482354f9181ed4103d8d3c228', id: `${this.groupId}-from-btn`, type: "button", part: "text-btn", class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.fromDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": fromLabel ? t.t('Lcz_StartDatePrefix', { fallback: `Start date: ${fromLabel}`, params: [fromLabel] }) : t.t('Lcz_SelectStartDate', { fallback: 'Select start date' }) }, fromDisplay ?? t.t('Lcz_From', { fallback: 'From' })), fromLabel && this.withClear && (index.h("button", { key: 'e64d26a5a6643456ba96eaac633f9fa4ad2c899e', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": t.t('Lcz_ClearStartDate', { fallback: 'Clear start date' }) }, index.h("wa-icon", { key: 'f97bd67e4ddd5858047dd192ac7e831095d4850d', name: "xmark" }))), index.h("ir-date-select", { key: 'c7a848817ce7a21aebf9b45098769628efea6ad2', ref: el => (this.fromDateSelectRef = el), exportparts: EXPORT_PARTS.from, date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: t.t('Lcz_From', { fallback: 'From' }), minDate: this.minDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, index.h("button", { key: '3b9ede6ef8cbebc9c32f811821b1a643adb822df', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": t.t('Lcz_OpenStartDateCalendar', { fallback: 'Open start date calendar' }) }, index.h("wa-icon", { key: '6c1b9f139e578965f533b899be52598b4fbb4b4d', name: "calendar", variant: "regular" })), this.showQuickActions && (index.h("div", { key: '09138a454c23b3c6a6652f14bab0fa49ed63271b', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": t.t('Lcz_QuickStartDateOptions', { fallback: 'Quick start date options' }) }, quickDates.map(action => (index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", disabled: this.dates?.to?.isSameOrBefore(action.getDate(), 'date'), "aria-label": t.t('Lcz_SetStartDateToOption', { fallback: `Set start date to ${action.label}`, params: [action.label] }), onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef?.hide();
            } }, action.label))))))), index.h("span", { key: '672c705926c02d431a522a56d5ede63fa409c420', part: "divider", class: "drf-divider", "aria-hidden": "true" }), index.h("div", { key: '9136cce9ee5ea8df81a94f7d99a6b5b69ce954cc', part: "field field-to", class: "drf-field" }, index.h("button", { key: '4c8fdda815ec5244a505e3802da20c016fd4e93d', type: "button", part: "text-btn", class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.toDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": toLabel ? `${t.t('Lcz_EndDate', { fallback: 'End date' })}: ${toLabel}` : t.t('Lcz_SelectEndDate', { fallback: 'Select end date' }) }, toDisplay ?? t.t('Lcz_To', { fallback: 'To' })), toLabel && this.withClear && (index.h("button", { key: '24d2eb8a53bcd95b976e6e633705661b04e867c4', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": t.t('Lcz_ClearEndDate', { fallback: 'Clear end date' }) }, index.h("wa-icon", { key: '908c58fa55165e9154845eb51220f182f7cdbd88', name: "xmark" }))), index.h("ir-date-select", { key: 'd1d850dcea4dbfb3f34e342dba56d973c13740d4', ref: el => (this.toDateSelectRef = el), exportparts: EXPORT_PARTS.to, date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: t.t('Lcz_To', { fallback: 'To' }), minDate: toMinDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, index.h("button", { key: '4ca1770d3540cb34ba71cdedb0a810c345d5d6b7', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": t.t('Lcz_OpenEndDateCalendar', { fallback: 'Open end date calendar' }) }, index.h("wa-icon", { key: '320459c59424cf438646f55da4416ecdb0bf477b', name: "calendar", variant: "regular" })), this.showQuickActions && (index.h("div", { key: 'c56aa264e78f7e63cd96f6ce55f66bfad313670d', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": t.t('Lcz_QuickEndDateOptions', { fallback: 'Quick end date options' }) }, quickDates.map(action => (index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": t.t('Lcz_SetEndDateToOption', { fallback: `Set end date to ${action.label}`, params: [action.label] }), disabled: this.quickDatesMode === 'range' ? false : this.dates?.from?.isSameOrAfter(action.getDate(), 'date'), onClickHandler: () => {
                if (this.quickDatesMode === 'range') {
                    this.selectDate(action.getDate(), 'from', true);
                    this.selectDate(moment.hooks(), 'to');
                }
                else {
                    this.selectDate(action.getDate(), 'to');
                }
                this.toDateSelectRef?.hide();
            } }, action.label))))))), index.h("span", { key: '437b4fa7411ded9c0f1e1dba4e77b5b768dbcd3b', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage))));
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
