import { h, Host } from "@stencil/core";
import { formatDate } from "../../../utils/date/index";
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
        const parsed = moment(value, 'YYYY-MM-DD', true);
        return parsed.isValid() ? parsed : null;
    }
    /** Emits `datesChanged` and refreshes the screen-reader live region. */
    emitChange() {
        const from = this.dates.from?.format('YYYY-MM-DD') ?? null;
        const to = this.dates.to?.format('YYYY-MM-DD') ?? null;
        this.datesChanged.emit({ from, to });
        const fromText = this.dates.from ? formatDate(this.dates.from, { style: 'long' }) : 'not set';
        const toText = this.dates.to ? formatDate(this.dates.to, { style: 'long' }) : 'not set';
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
        const fromDisplay = this.dates.from ? formatDate(this.dates.from, { style: 'medium' }) : null;
        const toDisplay = this.dates.to ? formatDate(this.dates.to, { style: 'medium' }) : null;
        // const fromMaxDate = this.getFromMaxDate(toLabel);
        const toMinDate = this.getToMinDate(fromLabel);
        return (h(Host, { key: 'f15947b1f7225475a230d7e30ebc6c380fc7b6e3' }, this.label && (h("label", { key: '5455f7ad7d0a8a6fd68c8ae3fb86391ca644f692', id: `${this.groupId}-label`, class: "drf-label", part: "label", htmlFor: `${this.groupId}-from-btn` }, this.label)), h("div", { key: '769f023e339befe1bd2356c90afa66abb5fcb13b', part: "container", class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, !this.label && (h("span", { key: '1f9060b844626e99e7e3f2d2bd48c082411ec4cf', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector")), h("div", { key: '334807259503963a5af61ac086f3152cf6ee58cc', part: "field field-from", class: "drf-field" }, h("button", { key: '90d6bf555f3e67c23efbd301110028d9e02571da', id: `${this.groupId}-from-btn`, type: "button", part: "text-btn", class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.fromDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": fromLabel ? `Start date: ${fromLabel}` : 'Select start date' }, fromDisplay ?? 'From'), fromLabel && this.withClear && (h("button", { key: 'ace56e5104945ac3826bc300244dfe33be96be30', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": "Clear start date" }, h("wa-icon", { key: '03bf88e36922fa2e0228fb92199bc28b26f13eac', name: "xmark" }))), h("ir-date-select", { key: '15e24e1b3a804772949d12e73d4f489db7a4f62b', ref: el => (this.fromDateSelectRef = el), exportparts: EXPORT_PARTS.from, date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: "From", minDate: this.minDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, h("button", { key: '40649b313315341acec69545cfa4d377ef860fe6', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open start date calendar" }, h("wa-icon", { key: '566bda625fb09d33e549b941b9f81f48ab283939', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: 'db64bbab4c1d9465f9461d12dadf3167fc063a18', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", disabled: this.dates?.to?.isSameOrBefore(action.getDate(), 'date'), "aria-label": `Set start date to ${action.label}`, onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef?.hide();
            } }, action.label))))))), h("span", { key: '8c2eba86ffaaf351b43999a127ee4e752d05701d', part: "divider", class: "drf-divider", "aria-hidden": "true" }), h("div", { key: 'fc41db78c72ecdc95de631ad9e4d7c5558f51031', part: "field field-to", class: "drf-field" }, h("button", { key: '5254ef5faedfb5eb648eacf54133c247c9f07ea1', type: "button", part: "text-btn", class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.toDateSelectRef?.show(), "aria-haspopup": "dialog", "aria-label": toLabel ? `End date: ${toLabel}` : 'Select end date' }, toDisplay ?? 'To'), toLabel && this.withClear && (h("button", { key: '473b8fa0eef782b4595c3edb1cb0354dc1bf842f', type: "button", part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": "Clear end date" }, h("wa-icon", { key: '61c939eec84fb32788aae01ebae6abf01c68726b', name: "xmark" }))), h("ir-date-select", { key: 'd9f4acbfb1c476ecc49d21895e4fc377da565385', ref: el => (this.toDateSelectRef = el), exportparts: EXPORT_PARTS.to, date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: "To", minDate: toMinDate, maxDate: this.maxDate, emitEmptyDate: true, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, h("button", { key: '7f3d48d26e527506c7b60c2baf2c974740a666ba', slot: "trigger", type: "button", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open end date calendar" }, h("wa-icon", { key: '88975f5e813e75a443e9bb6c27b21b176a5dafb3', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '1d2c5cfebe3eba8ad2d7bf78508a14186d20cd37', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, disabled: this.quickDatesMode === 'range' ? false : this.dates?.from?.isSameOrAfter(action.getDate(), 'date'), onClickHandler: () => {
                if (this.quickDatesMode === 'range') {
                    this.selectDate(action.getDate(), 'from', true);
                    this.selectDate(moment(), 'to');
                }
                else {
                    this.selectDate(action.getDate(), 'to');
                }
                this.toDateSelectRef?.hide();
            } }, action.label))))))), h("span", { key: 'f3e74838fc1b507f6e02e88a9cb1dd50e9e15b6d', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage))));
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
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-date-range-filter/ir-date-range-filter.tsx",
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
                "defaultValue": "[\n    { label: 'Today', getDate: () => moment() },\n    { label: '30 Days Ago', getDate: () => moment().subtract(30, 'days') },\n    { label: '60 Days Ago', getDate: () => moment().subtract(60, 'days') },\n    { label: '90 Days Ago', getDate: () => moment().subtract(90, 'days') },\n    { label: '1 Year Ago', getDate: () => moment().subtract(1, 'year') },\n  ]"
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
                "defaultValue": "'s'"
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
            "quickDatesMode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'absolute' | 'range'",
                    "resolved": "\"absolute\" | \"range\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "How a quick-date preset behaves when picked from the *to* side:\n- `'absolute'` (default): sets only the to-date to `preset.getDate()`, same as the from side.\n- `'range'`: treats `preset.getDate()` as a \"N units ago\" anchor \u2014 sets from-date to\n  `preset.getDate()` and to-date to today, so e.g. \"7 Days Ago\" becomes a \"last 7 days\" range.\n  The from side is unaffected by this prop; it always sets only the from-date."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "quick-dates-mode",
                "defaultValue": "'absolute'"
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
                    "text": "Flow after picking a from-date:\n- `'auto'`: the to-picker opens automatically so the user completes the range in one pass.\n- `'manual'` (default): nothing opens; the user clicks the to-field themselves."
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
                    "text": "Visible label rendered above the control. It names the group for assistive\ntechnology (replacing the default visually-hidden \"Date range selector\") and,\nlike a native form label, clicking it opens the from-date picker."
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
