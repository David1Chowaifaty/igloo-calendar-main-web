import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$4 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irDateRangeFilterCss = "@layer wa-utilities {\n  :host([size='small']),\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  :host([size='medium']),\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  :host([size='large']),\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n\n:host {\n  display: block;\n}\n\n/* ── Label ────────────────────────────────────────────── */\n.drf-label {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  color: var(--wa-form-control-label-color);\n  font-weight: var(--wa-form-control-label-font-weight);\n  line-height: var(--wa-form-control-label-line-height);\n  margin-block-end: 0.5em;\n  cursor: pointer;\n}\n\n/* ── Outer container ──────────────────────────────────── */\n.drf-container {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  height: var(--wa-form-control-height);\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  width: 100%;\n  overflow: visible;\n}\n\n:host([aria-invalid='true']) .drf-container {\n  border-color: var(--ir-color-border-error, var(--wa-color-danger-border-loud));\n  outline-color: var(--ir-color-border-error, var(--wa-color-danger-border-loud));\n\n  border-top-width: var(--error-border-width) !important;\n  border-left-width: var(--error-border-width) !important;\n  border-right-width: var(--error-border-width) !important;\n  border-bottom-width: var(--error-border-width) !important;\n}\n\n.drf-container:focus-within {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/* ── Each date field (from / to) ──────────────────────── */\n.drf-field {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  gap: 0.25rem;\n  padding-inline: var(--wa-form-control-padding-inline, 0.75rem);\n  height: 100%;\n  min-width: 0;\n}\n\n/* ── Vertical divider between from and to ─────────────── */\n.drf-divider {\n  display: inline-block;\n  width: 1px;\n  height: 55%;\n  background-color: var(--wa-color-neutral-border-quiet, #e5e7eb);\n  flex-shrink: 0;\n}\n\n/* ── Date text / placeholder button ──────────────────── */\n.drf-text-btn {\n  all: unset;\n  flex: 1;\n  font-size: var(--wa-form-control-value-font-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  color: var(--wa-form-control-value-color, #111827);\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n  line-height: var(--wa-form-control-value-line-height);\n}\n\n.drf-text-btn--placeholder {\n  color: var(--wa-form-control-placeholder-color);\n\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n.drf-text-btn:focus-visible {\n  outline: none;\n}\n\n/* ── Clear (×) button ─────────────────────────────────── */\n.drf-clear-btn {\n  all: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  cursor: pointer;\n  color: var(--wa-color-text-quiet, #9ca3af);\n  border-radius: 50%;\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 0.75rem;\n  transition: color 0.15s ease;\n}\n\n.drf-clear-btn:hover {\n  color: var(--wa-color-text-normal, #374151);\n}\n\n.drf-clear-btn:focus-visible {\n  outline: var(--wa-focus-ring);\n  border-radius: 50%;\n}\n/* ── Calendar icon trigger button ────────────────────── */\n.drf-cal-trigger {\n  all: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 0.375rem;\n  background-color: var(--wa-color-neutral-fill-quiet, #f0f0f0);\n  cursor: pointer;\n  color: var(--wa-color-text-quiet, #6b7280);\n  transition: background-color 0.15s ease;\n}\n\n.drf-cal-trigger:hover {\n  background-color: var(--wa-color-neutral-fill-normal, #e0e0e0);\n}\n\n.drf-cal-trigger:focus-visible {\n  outline: var(--wa-focus-ring);\n}\n\n/* ── ir-date-select: hide its own input shell ─────────── */\n.drf-date-select::part(input-base) {\n  display: none !important;\n}\n\n/* ── Popup body: calendar + quick actions side-by-side ── */\n.drf-date-select::part(body) {\n  flex-direction: row;\n  gap: 1rem;\n}\n\n/* ── Quick-action preset buttons (inside popup) ───────── */\n.drf-quick-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  box-sizing: border-box;\n  width: 200px;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip-path: inset(50%);\n  white-space: nowrap;\n  border-width: 0;\n}\n";
const IrDateRangeFilterStyle0 = irDateRangeFilterCss;

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
const IrDateRangeFilter = /*@__PURE__*/ proxyCustomElement(class IrDateRangeFilter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.datesChanged = createEvent(this, "datesChanged", 7);
        this.dateCleared = createEvent(this, "dateCleared", 7);
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
    size = 'small';
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
        return (h(Host, { key: '7acfb985ed78fa2efba4ac1912303ac43c81a2aa' }, this.label && (h("label", { key: 'ec5fd029c9e4ef5c607948f52f70aa96f2045011', id: `${this.groupId}-label`, class: "drf-label", part: "label", htmlFor: `${this.groupId}-from-btn` }, this.label)), h("div", { key: '5d2d9229a6e08ff76fcf80dcf1918af7fbe4b9b7', part: "container", class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, !this.label && (h("span", { key: 'ffb5be3f64402e267974d1345491ef965e5df195', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector")), h("div", { key: '8a0b36f993f85dd4d432065d4f1a6eaa6c0e33e0', part: "field field-from", class: "drf-field" }, h("button", { key: 'b9653c6de41f6c5d2f669ca020921c8a77a18d74', id: `${this.groupId}-from-btn`, type: "button", part: "text-btn", class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.fromDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": fromLabel ? `Start date: ${fromLabel}` : 'Select start date' }, fromLabel ?? 'From'), fromLabel && this.withClear && (h("button", { key: 'bc6ae6c8f5b4eb2471bd957e8f17792d3a79f663', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": "Clear start date" }, h("wa-icon", { key: '401de7b981a1244c17cc31e84573f1c176d6e6cc', name: "xmark" }))), h("ir-date-select", { key: 'c66a5b51d16a33292db51230bf2f1f524ae741c8', ref: el => (this.fromDateSelectRef = el), exportparts: EXPORT_PARTS.from, date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: "From", minDate: this.minDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, h("button", { key: 'ef4f685716ba4fdfd79ea9ed78d0eba2eb09f7ab', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open start date calendar" }, h("wa-icon", { key: '662aba4e00d3720a57cb31cdb37624fb79e5559e', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '71debc9b0b0e2d5fc716b5e5bee65e3040ab163b', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", disabled: this.dates?.to?.isSameOrBefore(action.getDate(), 'date'), "aria-label": `Set start date to ${action.label}`, onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef?.hide();
            } }, action.label))))))), h("span", { key: '23e5631566fe83a9f89471362136f2591900ab4b', part: "divider", class: "drf-divider", "aria-hidden": "true" }), h("div", { key: '58adc0b1422d743d9300c554eaac522474b893a1', part: "field field-to", class: "drf-field" }, h("button", { key: '25caac55fb77230a48b692c7b546efb9b656467f', type: "button", part: "text-btn", class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.toDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": toLabel ? `End date: ${toLabel}` : 'Select end date' }, toLabel ?? 'To'), toLabel && this.withClear && (h("button", { key: '301b0bc58e062d7888faad98309f6fffc24de68b', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": "Clear end date" }, h("wa-icon", { key: '659293d7cbeb086b0411825705bc255969d3f2c0', name: "xmark" }))), h("ir-date-select", { key: 'd2e3b662cc4fc4841f0cd204c6e80672641f25b0', ref: el => (this.toDateSelectRef = el), exportparts: EXPORT_PARTS.to, date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: "To", minDate: toMinDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, h("button", { key: '471efbaea60b2ac8463998d62e77bcfc886e6c8c', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open end date calendar" }, h("wa-icon", { key: '8d9891d07809406159ca07f38dbdf74cb73ffd56', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '21afd4f1f8e59970b4a22488bfc6c150572d0fa4', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, disabled: this.dates?.from?.isSameOrAfter(action.getDate(), 'date'), onClickHandler: () => {
                this.selectDate(action.getDate(), 'to');
                this.toDateSelectRef?.hide();
            } }, action.label))))))), h("span", { key: '083ea3761099ffcc5bf67e48aeacfa391cafe434', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage))));
    }
    static get watchers() { return {
        "fromDate": ["onFromDateChange"],
        "toDate": ["onToDateChange"]
    }; }
    static get style() { return IrDateRangeFilterStyle0; }
}, [1, "ir-date-range-filter", {
        "quickDates": [16],
        "fromDate": [1, "from-date"],
        "toDate": [1, "to-date"],
        "size": [513],
        "showQuickActions": [4, "show-quick-actions"],
        "minDate": [1, "min-date"],
        "maxDate": [1, "max-date"],
        "selectionMode": [1, "selection-mode"],
        "withClear": [4, "with-clear"],
        "label": [1],
        "dates": [32],
        "liveMessage": [32]
    }, undefined, {
        "fromDate": ["onFromDateChange"],
        "toDate": ["onToDateChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-date-range-filter", "ir-air-date-picker", "ir-custom-button", "ir-date-select", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDateRangeFilter);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrDateRangeFilter as I, defineCustomElement as d };

//# sourceMappingURL=ir-date-range-filter2.js.map