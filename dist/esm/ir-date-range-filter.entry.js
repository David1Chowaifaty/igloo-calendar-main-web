import { r as registerInstance, c as createEvent, h, H as Host } from './index-Nexq2OjX.js';
import { h as hooks } from './moment-Mki5YqAR.js';

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
        registerInstance(this, hostRef);
        this.datesChanged = createEvent(this, "datesChanged");
        this.dateCleared = createEvent(this, "dateCleared");
    }
    /** Configurable quick-date preset buttons shown alongside each calendar. */
    quickDates = [
        { label: 'Today', getDate: () => hooks() },
        { label: '30 Days Ago', getDate: () => hooks().subtract(30, 'days') },
        { label: '60 Days Ago', getDate: () => hooks().subtract(60, 'days') },
        { label: '90 Days Ago', getDate: () => hooks().subtract(90, 'days') },
        { label: '1 Year Ago', getDate: () => hooks().subtract(1, 'year') },
    ];
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
        const parsed = hooks(value, 'YYYY-MM-DD', true);
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
        return (h(Host, { key: '67632446bb9f10085be584e789e6c48259e57cbb' }, this.label && (h("label", { key: 'c19a33689e5f2fdb50d225ab2222a16f46e6b4ff', id: `${this.groupId}-label`, class: "drf-label", part: "label", htmlFor: `${this.groupId}-from-btn` }, this.label)), h("div", { key: '963ea94bfc0602dc9084bebb05f2f25e4329e134', part: "container", class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, !this.label && (h("span", { key: 'cbbec81af7d6153894da46a0451ef8cba8a651be', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector")), h("div", { key: '727431e4b1607bd9e76ba18682639359bcb9a293', part: "field field-from", class: "drf-field" }, h("button", { key: 'f9e0786edc9494add5a36419987e8ea26162b0ec', id: `${this.groupId}-from-btn`, type: "button", part: "text-btn", class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.fromDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": fromLabel ? `Start date: ${fromLabel}` : 'Select start date' }, fromLabel ?? 'From'), fromLabel && this.withClear && (h("button", { key: '6c7750cc53b05b7ab29bf10925990fadb41170ca', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": "Clear start date" }, h("wa-icon", { key: '7c595f2bd4c37c713556db73595c7dd03cea36be', name: "xmark" }))), h("ir-date-select", { key: '75c23dfe81d28d2c1bbeb3432afc75535320f704', ref: el => (this.fromDateSelectRef = el), exportparts: EXPORT_PARTS.from, date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: "From", minDate: this.minDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, h("button", { key: '532aca46f190babbfc0763add8d2defd90f5a032', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open start date calendar" }, h("wa-icon", { key: 'ecf14cc0952a5fb324df30f697f4556dc36993b1', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: 'e0d6732ce920f80049eed41f3bfd72324fa1fab9', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", disabled: this.dates?.to?.isSameOrBefore(action.getDate(), 'date'), "aria-label": `Set start date to ${action.label}`, onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef?.hide();
            } }, action.label))))))), h("span", { key: '15dff3f39a490982950d26e7a07de056302e2efc', part: "divider", class: "drf-divider", "aria-hidden": "true" }), h("div", { key: '7272ac5f2572ebbc95ab605678b0276274b94c25', part: "field field-to", class: "drf-field" }, h("button", { key: '102f3120d223b72f495aab30b0802280573221e3', type: "button", part: "text-btn", class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.toDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": toLabel ? `End date: ${toLabel}` : 'Select end date' }, toLabel ?? 'To'), toLabel && this.withClear && (h("button", { key: '14e138b8afa5bd089bd82b28c01df0625b3fc4c5', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": "Clear end date" }, h("wa-icon", { key: 'e70ae5c2b88dae7bb43a77fa496ecd48ffef9130', name: "xmark" }))), h("ir-date-select", { key: '8a59f4e46c6c817a2ebe5703e5696c7fdad273bd', ref: el => (this.toDateSelectRef = el), exportparts: EXPORT_PARTS.to, date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: "To", minDate: toMinDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, h("button", { key: 'fdd9ae0075a58b96f1da3b5a125299998308b6e7', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open end date calendar" }, h("wa-icon", { key: '79f6d687acb58144e09e353d592d81c02aa0feb8', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '6bd7626c7fa506c541f618dd9db6461bd5856e37', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, disabled: this.quickDatesMode === 'range' ? false : this.dates?.from?.isSameOrAfter(action.getDate(), 'date'), onClickHandler: () => {
                if (this.quickDatesMode === 'range') {
                    this.selectDate(action.getDate(), 'from', true);
                    this.selectDate(hooks(), 'to');
                }
                else {
                    this.selectDate(action.getDate(), 'to');
                }
                this.toDateSelectRef?.hide();
            } }, action.label))))))), h("span", { key: '5282018c6f198f7faec3340caac2ecb416f3526c', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage))));
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

export { IrDateRangeFilter as ir_date_range_filter };
