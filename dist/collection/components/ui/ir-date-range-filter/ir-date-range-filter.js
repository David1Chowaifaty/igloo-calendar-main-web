import { h, Host } from "@stencil/core";
import moment from "moment";
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
/**
 * `ir-date-range-filter` — a from/to date-range field for filter toolbars.
 *
 * Composition: each side renders a text button (shows the value, opens the popup),
 * an optional clear button, and an `ir-date-select` whose popup hosts the calendar
 * plus optional quick-date preset buttons.
 *
 * State model: the component is *optionally controlled*. If `fromDate`/`toDate` are
 * provided they seed and (via watchers) overwrite the internal `dates` state; either
 * side can be controlled independently. Internal selections always update local state
 * and emit `datesChanged` — a controlling parent is expected to echo the value back.
 *
 * Range integrity is enforced two ways:
 * - the from-calendar's max is capped at the to-date and the to-calendar's min is
 *   floored at the from-date (see {@link getFromMaxDate}/{@link getToMinDate}),
 * - quick-date presets that would invert the range are disabled.
 *
 * Styling: all inner pieces are exposed as CSS parts; the parts of each inner
 * `ir-date-select` are re-exported with `from-`/`to-` prefixes (e.g. `from-body`).
 */
export class IrDateRangeFilter {
    /** Configurable quick-date preset buttons shown alongside each calendar. */
    quickDates = [
        { label: 'Today', getDate: () => moment() },
        { label: '30 Days Ago', getDate: () => moment().subtract(30, 'days') },
        { label: '60 Days Ago', getDate: () => moment().subtract(60, 'days') },
        { label: '90 Days Ago', getDate: () => moment().subtract(90, 'days') },
        { label: '1 Year Ago', getDate: () => moment().subtract(1, 'year') },
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
        const parsed = moment(value, 'YYYY-MM-DD', true);
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
        return (h(Host, { key: '09072132c9e8c08b7ba1e5c4b64e233f48a46e1d' }, this.label && (h("label", { key: 'd03cd2b61ee75574e4a4c2c73bbeaf6a141e0ac5', id: `${this.groupId}-label`, class: "drf-label", part: "label", htmlFor: `${this.groupId}-from-btn` }, this.label)), h("div", { key: '09341c411c617d7504e32b200928ae44a2869de6', part: "container", class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, !this.label && (h("span", { key: '66168c567ff16e1ae5f44ac85f2a4c49c9405442', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector")), h("div", { key: '011750c1f2cd60b142541a11937f927ce0acdab5', part: "field field-from", class: "drf-field" }, h("button", { key: '03088498a94993f6f55a846c85f1860bbebe6be1', id: `${this.groupId}-from-btn`, type: "button", part: "text-btn", class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.fromDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": fromLabel ? `Start date: ${fromLabel}` : 'Select start date' }, fromLabel ?? 'From'), fromLabel && this.withClear && (h("button", { key: 'cad635dc59364276fa40c76d2b3d9a56fd70fd7c', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": "Clear start date" }, h("wa-icon", { key: 'd78f493cd09fd580307abdda03a93abdd68afd2f', name: "xmark" }))), h("ir-date-select", { key: '30c8186926b8dbab62e6a995face5948a09ef05e', ref: el => (this.fromDateSelectRef = el), exportparts: EXPORT_PARTS.from, date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: "From", minDate: this.minDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, h("button", { key: '37a254fa7374d1500a363ad440d6cb607f5cd67c', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open start date calendar" }, h("wa-icon", { key: '9037e6e07bea716cb7f54b3f5eaf4ddcb614e903', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: 'dd1c25674750f46a77c8aaa2c617b80de31f3c04', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", disabled: this.dates?.to?.isSameOrBefore(action.getDate(), 'date'), "aria-label": `Set start date to ${action.label}`, onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef?.hide();
            } }, action.label))))))), h("span", { key: '31a7a6e7a820d039baa6ecd55923245162ddd35f', part: "divider", class: "drf-divider", "aria-hidden": "true" }), h("div", { key: '2d670b0cb8467b81a456157b391e0c2bdf001ff4', part: "field field-to", class: "drf-field" }, h("button", { key: '152a2297ee916eb37f3cb218c0a524fcb9f6f10a', type: "button", part: "text-btn", class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.toDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": toLabel ? `End date: ${toLabel}` : 'Select end date' }, toLabel ?? 'To'), toLabel && this.withClear && (h("button", { key: '2ccadc8c4085dd42809780b528f69829f8bc00da', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": "Clear end date" }, h("wa-icon", { key: '234a7a9c607fbfdf181ed329dac07d55491113c4', name: "xmark" }))), h("ir-date-select", { key: '794b8f8737b479e90cf9b41f3054a4f4029605d0', ref: el => (this.toDateSelectRef = el), exportparts: EXPORT_PARTS.to, date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: "To", minDate: toMinDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, h("button", { key: '5b687d9b70e13f15c05a7b4b82530cb80ab2374d', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open end date calendar" }, h("wa-icon", { key: 'c0e7b87f0981eecf5bccc4e75675f6dd79bc2eb3', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '03ba43345ca793c27ba0bf05e748663ee4f478d6', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, disabled: this.dates?.from?.isSameOrAfter(action.getDate(), 'date'), onClickHandler: () => {
                this.selectDate(action.getDate(), 'to');
                this.toDateSelectRef?.hide();
            } }, action.label))))))), h("span", { key: 'd60bbf78d0fc621cae69e601019c5114c1d75af6', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage))));
    }
    static get is() { return "ir-date-range-filter"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-date-range-filter.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-date-range-filter.css"]
        };
    }
    static get properties() {
        return {
            "quickDates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "QuickDatePreset[]",
                    "resolved": "QuickDatePreset[]",
                    "references": {
                        "QuickDatePreset": {
                            "location": "local",
                            "path": "C:/Users/user/Code/work/modified-ir-webcmp/src/components/ui/ir-date-range-filter/ir-date-range-filter.tsx",
                            "id": "src/components/ui/ir-date-range-filter/ir-date-range-filter.tsx::QuickDatePreset"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Configurable quick-date preset buttons shown alongside each calendar."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[\r\n    { label: 'Today', getDate: () => moment() },\r\n    { label: '30 Days Ago', getDate: () => moment().subtract(30, 'days') },\r\n    { label: '60 Days Ago', getDate: () => moment().subtract(60, 'days') },\r\n    { label: '90 Days Ago', getDate: () => moment().subtract(90, 'days') },\r\n    { label: '1 Year Ago', getDate: () => moment().subtract(1, 'year') },\r\n  ]"
            },
            "fromDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controlled start date in YYYY-MM-DD format."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "from-date"
            },
            "toDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controlled end date in YYYY-MM-DD format."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "to-date"
            },
            "size": {
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
                    "text": "Size variant passed through to inner form controls. Reflected for CSS hooks (`ir-date-range-filter[size='...']`)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'small'"
            },
            "showQuickActions": {
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
                    "text": "Whether to show the quick-action preset buttons in each calendar popup."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-quick-actions",
                "defaultValue": "true"
            },
            "minDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Earliest selectable date in YYYY-MM-DD format. Applied to both calendars."
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
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Latest selectable date in YYYY-MM-DD format. Applied to both calendars."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-date"
            },
            "selectionMode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'auto' | 'manual'",
                    "resolved": "\"auto\" | \"manual\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Flow after picking a from-date:\r\n- `'auto'`: the to-picker opens automatically so the user completes the range in one pass.\r\n- `'manual'` (default): nothing opens; the user clicks the to-field themselves."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selection-mode",
                "defaultValue": "'manual'"
            },
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
                    "text": "Shows an \u2715 button next to each filled side that clears just that side."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "with-clear",
                "defaultValue": "true"
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
                    "text": "Visible label rendered above the control. It names the group for assistive\r\ntechnology (replacing the default visually-hidden \"Date range selector\") and,\r\nlike a native form label, clicking it opens the from-date picker."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            }
        };
    }
    static get states() {
        return {
            "dates": {},
            "liveMessage": {}
        };
    }
    static get events() {
        return [{
                "method": "datesChanged",
                "name": "datesChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired whenever either date changes. Payload contains ISO date strings or null."
                },
                "complexType": {
                    "original": "{ from: string | null; to: string | null }",
                    "resolved": "{ from: string; to: string; }",
                    "references": {}
                }
            }, {
                "method": "dateCleared",
                "name": "dateCleared",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when the user explicitly clears a date field (after the accompanying `datesChanged`)."
                },
                "complexType": {
                    "original": "{ field: 'from' | 'to' }",
                    "resolved": "{ field: \"from\" | \"to\"; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "fromDate",
                "methodName": "onFromDateChange"
            }, {
                "propName": "toDate",
                "methodName": "onToDateChange"
            }];
    }
}
