'use strict';

var index = require('./index-CJ0kc5p1.js');
var moment = require('./moment-CdViwxPQ.js');

const irDateRangeFilterCss = () => `@layer wa-utilities{:host([size='xs']),.wa-size-xs{font-size:var(--wa-font-size-xs)}:host([size='s']),.wa-size-s{font-size:var(--wa-font-size-s)}:host([size='m']),.wa-size-m{font-size:var(--wa-font-size-m)}:host([size='l']),.wa-size-l{font-size:var(--wa-font-size-l)}:host([size='xl']),.wa-size-xl{font-size:var(--wa-font-size-xl)}}:host{display:block}.drf-label{display:inline-block;position:relative;width:100%;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-block-end:0.5em;cursor:pointer}.drf-container{box-sizing:border-box;display:flex;align-items:center;height:var(--wa-form-control-height);background-color:var(--wa-form-control-background-color);border-color:var(--wa-form-control-border-color);border-radius:var(--wa-form-control-border-radius);border-style:var(--wa-form-control-border-style);border-width:var(--wa-form-control-border-width);width:100%;overflow:visible}:host([aria-invalid='true']) .drf-container{border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-left-width:var(--error-border-width) !important;border-right-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}.drf-container:focus-within{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.drf-field{display:flex;align-items:center;flex:1;gap:0.25rem;padding-inline:var(--wa-form-control-padding-inline, 0.75rem);height:100%;min-width:0}.drf-divider{display:inline-block;width:1px;height:55%;background-color:var(--wa-color-neutral-border-quiet, #e5e7eb);flex-shrink:0}.drf-text-btn{all:unset;flex:1;font-size:var(--wa-form-control-value-font-size);font-family:inherit;font-weight:var(--wa-form-control-value-font-weight);color:var(--wa-form-control-value-color, #111827);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;line-height:var(--wa-form-control-value-line-height)}.drf-text-btn--placeholder{color:var(--wa-form-control-placeholder-color);user-select:none;-webkit-user-select:none}.drf-text-btn:focus-visible{outline:none}.drf-clear-btn{all:unset;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;color:var(--wa-color-text-quiet, #9ca3af);border-radius:50%;width:1.25rem;height:1.25rem;font-size:0.75rem;transition:color 0.15s ease}.drf-clear-btn:hover{color:var(--wa-color-text-normal, #374151)}.drf-clear-btn:focus-visible{outline:var(--wa-focus-ring);border-radius:50%}.drf-cal-trigger{all:unset;display:flex;align-items:center;justify-content:center;flex-shrink:0;width:1.75rem;height:1.75rem;border-radius:0.375rem;background-color:var(--wa-color-neutral-fill-quiet, #f0f0f0);cursor:pointer;color:var(--wa-color-text-quiet, #6b7280);transition:background-color 0.15s ease}.drf-cal-trigger:hover{background-color:var(--wa-color-neutral-fill-normal, #e0e0e0)}.drf-cal-trigger:focus-visible{outline:var(--wa-focus-ring)}.drf-date-select::part(input-base){display:none !important}.drf-date-select::part(body){flex-direction:row;gap:1rem}.drf-quick-actions{display:flex;flex-direction:column;gap:0.5rem;box-sizing:border-box;width:200px}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border-width:0}`;

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
    quickDates = [
        { label: 'Today', getDate: () => moment.hooks() },
        { label: '30 Days Ago', getDate: () => moment.hooks().subtract(30, 'days') },
        { label: '60 Days Ago', getDate: () => moment.hooks().subtract(60, 'days') },
        { label: '90 Days Ago', getDate: () => moment.hooks().subtract(90, 'days') },
        { label: '1 Year Ago', getDate: () => moment.hooks().subtract(1, 'year') },
    ];
    /** Controlled start date in YYYY-MM-DD format. */
    fromDate;
    /** Controlled end date in YYYY-MM-DD format. */
    toDate;
    /** Size variant passed through to inner form controls. Reflected for CSS hooks (`ir-date-range-filter[size='...']`). */
    size = 's';
    /** Whether to show the quick-action preset buttons in each calendar popup. */
    showQuickActions = true;
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
     * the click that closed the from-picker to finish propagating first).
     */
    selectDate(date, type) {
        let changes = { ...this.dates, [type]: date };
        if (this.dates.to && type === 'from' && date.isAfter(this.dates.to, 'date')) {
            changes = { ...changes, to: date };
        }
        this.dates = changes;
        this.emitChange();
        if (type === 'from' && date && this.selectionMode === 'auto') {
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
        const fromText = this.dates.from?.format('MMMM D, YYYY') ?? 'not set';
        const toText = this.dates.to?.format('MMMM D, YYYY') ?? 'not set';
        this.liveMessage = `Date range updated. From ${fromText} to ${toText}.`;
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
        // const fromMaxDate = this.getFromMaxDate(toLabel);
        const toMinDate = this.getToMinDate(fromLabel);
        return (index.h(index.Host, { key: '70e48351e1845c66cc24f9588b4852af898b6bac' }, this.label && (index.h("label", { key: '1399293b59afcd32d9aabaf6b5ed8171601b3fc8', id: `${this.groupId}-label`, class: "drf-label", part: "label", htmlFor: `${this.groupId}-from-btn` }, this.label)), index.h("div", { key: 'fb38ac48e782364fd577a3bd95359e8a48f5d88b', part: "container", class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, !this.label && (index.h("span", { key: 'f8cf55f0f3d6ac88cb3a3276332939984bdf4976', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector")), index.h("div", { key: 'd7178c25ee22f9a2088e7e0d5072312555e63e99', part: "field field-from", class: "drf-field" }, index.h("button", { key: 'd15a5c26b2c4af6913a2f2df6bd181c83c11e89a', id: `${this.groupId}-from-btn`, type: "button", part: "text-btn", class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.fromDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": fromLabel ? `Start date: ${fromLabel}` : 'Select start date' }, fromLabel ?? 'From'), fromLabel && this.withClear && (index.h("button", { key: 'dd8268fd15e712b4a0ffa4fe69a80949358546fb', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": "Clear start date" }, index.h("wa-icon", { key: 'adf2929a7518140b9ac69e3c2cce2d0506345822', name: "xmark" }))), index.h("ir-date-select", { key: 'b90974f7badc6d54ff495cfe1ad2574f7017e9ac', ref: el => (this.fromDateSelectRef = el), exportparts: EXPORT_PARTS.from, date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: "From", minDate: this.minDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, index.h("button", { key: '061026c531ce804256cf66fad5ac6ec058f14520', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open start date calendar" }, index.h("wa-icon", { key: 'a19a1f5dfd35ba77896184e32d374304a0f17183', name: "calendar", variant: "regular" })), this.showQuickActions && (index.h("div", { key: '533b52a97e427541d93f70c18e5d4056d63eb8ad', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", disabled: this.dates?.to?.isSameOrBefore(action.getDate(), 'date'), "aria-label": `Set start date to ${action.label}`, onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef?.hide();
            } }, action.label))))))), index.h("span", { key: '93e531c2e6789939c497c83d4c9f2c31d32639cf', part: "divider", class: "drf-divider", "aria-hidden": "true" }), index.h("div", { key: 'e498ac6b090ad0b4fda6e2c7e86538d631318b85', part: "field field-to", class: "drf-field" }, index.h("button", { key: '534e5aa19813e414f0e3e167c77eac400240691c', type: "button", part: "text-btn", class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.toDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": toLabel ? `End date: ${toLabel}` : 'Select end date' }, toLabel ?? 'To'), toLabel && this.withClear && (index.h("button", { key: '0d9316c93a5024711f4067c1ecdb3f3c5bfeb4b3', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": "Clear end date" }, index.h("wa-icon", { key: 'b30323ba81a237c7a198c5bc26a987952b4dba60', name: "xmark" }))), index.h("ir-date-select", { key: 'c0468d5db9941d0701e2612cde090fa18143e1b5', ref: el => (this.toDateSelectRef = el), exportparts: EXPORT_PARTS.to, date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: "To", minDate: toMinDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, index.h("button", { key: '5933f463f7d50dea089d6eaef6a7182780959945', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open end date calendar" }, index.h("wa-icon", { key: 'b56ed1c0fdf7d3bbe40fdec2d5a12fc307127e34', name: "calendar", variant: "regular" })), this.showQuickActions && (index.h("div", { key: 'a7a49c0264dfed15ed0254e5088ed7531f345205', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, disabled: this.dates?.from?.isSameOrAfter(action.getDate(), 'date'), onClickHandler: () => {
                this.selectDate(action.getDate(), 'to');
                this.toDateSelectRef?.hide();
            } }, action.label))))))), index.h("span", { key: '1fde85b4fb21e9a7e9cb95a8cd95066cd01e3cae', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage))));
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
