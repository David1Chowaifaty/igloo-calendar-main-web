var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ClickOutside } from "../../../decorators/ClickOutside";
import { calculateDaysBetweenDates } from "../../../utils/booking";
import { h } from "@stencil/core";
import moment from "moment";
import { formatDate } from "../../../utils/date/index";
import { formatCount } from "../../../utils/number";
import { t } from "../../../services/locale/t";
/**
 * @component ir-date-range
 * @description An accessible, popup-based date-range picker.
 * Composed of a combobox trigger (ir-input) and a floating calendar panel (ir-custom-date-range).
 *
 * @csspart popup      - The `wa-popup` root wrapper.
 * @csspart anchor     - The trigger wrapper div that holds the combobox.
 * @csspart combobox   - The clickable/keyboard-accessible control div.
 * @csspart input      - The read-only `ir-input` element that displays the selected range.
 * @csspart calendar-icon - The calendar `wa-icon` rendered inside the input start slot.
 * @csspart nights-badge  - The span showing the number of nights (booking variant only).
 * @csspart body       - The popup panel that wraps the calendar.
 * @csspart calendar   - The `ir-custom-date-range` calendar element.
 *
 * All CSS parts of `ir-custom-date-range` are re-exported and can be targeted via `::part()` on this host.
 */
export class IrDateRange {
    el;
    /**
     * Controls the visual size of the input trigger.
     * @reflect
     */
    size = 's';
    /**
     * Initial date values as `YYYY-MM-DD` strings: `{ fromDate, toDate }`. `selectedDateRange` is emitted in the same format.
     * Re-initializes dates whenever this prop reference changes.
     */
    defaultData;
    /**
     * When `true`, the picker is disabled and cannot be opened.
     * @reflect
     */
    disabled = false;
    /**
     * ISO date string (YYYY-MM-DD) for the earliest selectable date.
     */
    minDate;
    /**
     * Optional label text shown above the input (forwarded to ir-input).
     */
    dateLabel;
    /**
     * ISO date string (YYYY-MM-DD) for the latest selectable date.
     */
    maxDate;
    /**
     * When `true` and `variant="booking"`, a nights badge is shown inside the input.
     */
    withDateDifference = true;
    /**
     * `"booking"` shows the nights badge; `"default"` hides it.
     */
    variant = 'default';
    /**
     * Optional hint text rendered below the input.
     */
    hint;
    /** Whether the calendar popup is open. */
    isActive = false;
    /** Currently selected check-in date. */
    fromDate = moment().toDate();
    /** Currently selected check-out date. */
    toDate = moment().add(1, 'day').toDate();
    /** Mirrors the `aria-invalid` attribute so the input reflects validity state. */
    isInvalid;
    /** Computed number of nights between the selected dates. Triggers re-render on change. */
    totalNights = 0;
    /**
     * Legacy event – emits `{ key, data }` for backward-compatible consumers.
     * @deprecated Prefer `dateRangeChange`.
     */
    dateSelectEvent;
    /**
     * Emits the selected check-in / check-out as Moment objects.
     */
    dateRangeChange;
    /** Fired when the calendar popup opens. */
    dateRangeShow;
    /** Fired when the calendar popup closes. */
    dateRangeHide;
    static instanceCounter = 0;
    popupId;
    componentWillLoad() {
        IrDateRange.instanceCounter += 1;
        this.popupId = `ir-date-range-popup-${IrDateRange.instanceCounter}`;
        this.initializeDates();
    }
    /** Re-initializes dates when `defaultData` reference changes. */
    handleDataChange(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initializeDates();
        }
    }
    /** Syncs `isInvalid` with the reflected `aria-invalid` attribute. */
    handleAriaInvalidChange(newValue) {
        this.isInvalid = newValue;
    }
    initializeDates() {
        if (this.defaultData) {
            // `YYYY-MM-DD` parsed as a local day — `new Date('YYYY-MM-DD')` would be UTC midnight (the previous day west of UTC).
            if (this.defaultData.fromDate) {
                this.fromDate = moment(this.defaultData.fromDate, 'YYYY-MM-DD').toDate();
            }
            if (this.defaultData.toDate) {
                this.toDate = moment(this.defaultData.toDate, 'YYYY-MM-DD').toDate();
            }
        }
        if (this.fromDate && this.toDate) {
            this.calculateTotalNights();
        }
    }
    calculateTotalNights() {
        this.totalNights = calculateDaysBetweenDates(moment(this.fromDate).format('YYYY-MM-DD'), moment(this.toDate).format('YYYY-MM-DD'));
    }
    handleDateSelectEvent(key, data = '') {
        this.dateSelectEvent.emit({ key, data });
    }
    handleCustomDateChange(evt) {
        const { start, end } = evt.detail;
        if (!start || !end)
            return;
        this.fromDate = start;
        this.toDate = end;
        this.calculateTotalNights();
        const startMoment = moment(start);
        const endMoment = moment(end);
        this.handleDateSelectEvent('selectedDateRange', {
            fromDate: startMoment.format('YYYY-MM-DD'),
            toDate: endMoment.format('YYYY-MM-DD'),
            dateDifference: this.totalNights,
        });
        this.dateRangeChange.emit({ checkIn: startMoment, checkOut: endMoment });
        this.closeDatePicker();
    }
    /** Opens the calendar popup. */
    async openDatePicker() {
        this.isActive = true;
        this.dateRangeShow.emit();
    }
    /** Closes the calendar popup. Also invoked automatically on outside clicks via `@ClickOutside`. */
    async closeDatePicker() {
        if (!this.isActive)
            return;
        this.isActive = false;
        this.dateRangeHide.emit();
    }
    togglePicker() {
        this.isActive ? this.closeDatePicker() : this.openDatePicker();
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                this.togglePicker();
                break;
            case 'Escape':
                if (this.isActive) {
                    event.preventDefault();
                    this.closeDatePicker();
                }
                break;
        }
    }
    get formattedLabel() {
        const from = formatDate(this.fromDate, 'MMM DD, YYYY');
        const to = formatDate(this.toDate, 'MMM DD, YYYY');
        return `${from} → ${to}`;
    }
    render() {
        const showNights = this.variant === 'booking' && this.withDateDifference;
        return (h("wa-popup", { key: '0c4ef20b00a7766cb626949cc3dd1e4adf67504f', part: "popup", arrow: true, placement: "bottom", flip: true, shift: true, "auto-size": "vertical", "auto-size-padding": 10, active: this.isActive, class: "igl-date-range__popup" }, h("div", { key: '7dbe4c2040b1ad7d660a21710d5cf998f417f6b4', slot: "anchor", part: "anchor", class: "igl-date-range__trigger" }, h("div", { key: 'af20be906d9b36155443486dd568c7c250ebb4fa', part: "combobox", class: "igl-date-range__control", role: "combobox", tabindex: this.disabled ? -1 : 0, "aria-haspopup": "dialog", "aria-expanded": this.isActive ? 'true' : 'false', "aria-controls": this.popupId, "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": t('Lcz_SelectDateRange', { fallback: 'Select date range' }), onClick: !this.disabled ? this.togglePicker.bind(this) : undefined, onKeyDown: !this.disabled ? this.handleKeyDown.bind(this) : undefined }, h("ir-input", { key: '7b1f35536e1950ed9156b2b4ec171fd3b61c92c2', part: "input", disabled: this.disabled, class: "igl-date-range__input", readonly: true, value: this.formattedLabel, "aria-invalid": this.isInvalid, "aria-expanded": String(this.isActive), "aria-disabled": this.disabled ? 'true' : undefined }, h("wa-icon", { key: '0457033830bba1a1774739c0c215b0e9398e3e13', part: "calendar-icon", slot: "start", variant: "regular", name: "calendar" }), showNights && this.totalNights > 0 && (h("span", { key: '99b373d448ee79b96b20a4a1c347300d2d9ba2ca', part: "nights-badge", slot: "end", class: "igl-date-range__nights" }, formatCount(this.totalNights), " ", this.totalNights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' })))))), h("div", { key: '62bf4fe171b62e6d66721bc2be2ab37cb46139e6', part: "body", id: this.popupId, class: "igl-date-range__calendar", role: "dialog", "aria-modal": "false", "aria-label": t('Lcz_DateRangeSelectionDialog', { fallback: 'Date range selection dialog' }) }, h("ir-custom-date-range", { key: 'd67bec375886f14e3d697c344c7aa198487b2d10', part: "calendar", exportparts: "base: calendar-base, calendar, calendar-header, month-navigation, nav-prev, nav-next, month-label, weekday-row, weekday, days-grid, week-row, day-cell, day-button", style: { '--cal-button-size': '35px' }, fromDate: moment(this.fromDate), toDate: moment(this.toDate), minDate: this.minDate ? moment(this.minDate) : undefined, maxDate: this.maxDate ? moment(this.maxDate) : undefined, onDateChange: e => this.handleCustomDateChange(e) }))));
    }
    static get is() { return "ir-date-range"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-date-range.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-date-range.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'s' | 'm' | 'l'",
                    "resolved": "\"l\" | \"m\" | \"s\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "reflect",
                            "text": undefined
                        }],
                    "text": "Controls the visual size of the input trigger."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'s'"
            },
            "defaultData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Initial date values as `YYYY-MM-DD` strings: `{ fromDate, toDate }`. `selectedDateRange` is emitted in the same format.\nRe-initializes dates whenever this prop reference changes."
                },
                "getter": false,
                "setter": false
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
                    "tags": [{
                            "name": "reflect",
                            "text": undefined
                        }],
                    "text": "When `true`, the picker is disabled and cannot be opened."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "ISO date string (YYYY-MM-DD) for the earliest selectable date."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min-date"
            },
            "dateLabel": {
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
                    "text": "Optional label text shown above the input (forwarded to ir-input)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "date-label"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "ISO date string (YYYY-MM-DD) for the latest selectable date."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-date"
            },
            "withDateDifference": {
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
                    "text": "When `true` and `variant=\"booking\"`, a nights badge is shown inside the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "with-date-difference",
                "defaultValue": "true"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'booking' | 'default'",
                    "resolved": "\"booking\" | \"default\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "`\"booking\"` shows the nights badge; `\"default\"` hides it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variant",
                "defaultValue": "'default'"
            },
            "hint": {
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
                    "text": "Optional hint text rendered below the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint"
            }
        };
    }
    static get states() {
        return {
            "isActive": {},
            "fromDate": {},
            "toDate": {},
            "isInvalid": {},
            "totalNights": {}
        };
    }
    static get events() {
        return [{
                "method": "dateSelectEvent",
                "name": "dateSelectEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "Prefer `dateRangeChange`."
                        }],
                    "text": "Legacy event \u2013 emits `{ key, data }` for backward-compatible consumers."
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }, {
                "method": "dateRangeChange",
                "name": "dateRangeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits the selected check-in / check-out as Moment objects."
                },
                "complexType": {
                    "original": "DateRangeChangeEvent",
                    "resolved": "{ checkIn: Moment; checkOut: Moment; }",
                    "references": {
                        "DateRangeChangeEvent": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-date-range/ir-date-range.tsx",
                            "id": "src/components/ui/ir-date-range/ir-date-range.tsx::DateRangeChangeEvent"
                        }
                    }
                }
            }, {
                "method": "dateRangeShow",
                "name": "dateRangeShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when the calendar popup opens."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "dateRangeHide",
                "name": "dateRangeHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when the calendar popup closes."
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
            "openDatePicker": {
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
                    "text": "Opens the calendar popup.",
                    "tags": []
                }
            },
            "closeDatePicker": {
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
                    "text": "Closes the calendar popup. Also invoked automatically on outside clicks via `@ClickOutside`.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "defaultData",
                "methodName": "handleDataChange"
            }, {
                "propName": "aria-invalid",
                "methodName": "handleAriaInvalidChange"
            }];
    }
}
__decorate([
    ClickOutside()
], IrDateRange.prototype, "closeDatePicker", null);
