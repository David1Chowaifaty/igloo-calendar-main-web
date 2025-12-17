import { h, Host } from "@stencil/core";
import moment from "moment";
export class IrDateRange {
    element;
    /**
     * Start date for the date range.
     */
    fromDate;
    /**
     * End date for the date range.
     */
    toDate;
    /**
     * Single date selection value (used in single date picker mode).
     */
    date;
    /**
     * Defines which side the calendar opens to.
     * Options: `'left'`, `'right'`, `'center'`.
     */
    opens;
    /**
     * Whether to apply the selected range automatically without clicking 'Apply'.
     */
    autoApply;
    /**
     * First day of the week (0 = Sunday, 1 = Monday, ...).
     */
    firstDay = 1;
    /**
     * Month names shown in the calendar header.
     */
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    /**
     * Abbreviated names of the days of the week.
     */
    daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    /**
     * Date format used in the input and picker.
     */
    format = 'MMM DD, YYYY';
    /**
     * Separator string used between start and end dates.
     */
    separator = ' - ';
    /**
     * Text shown on the Apply button.
     */
    applyLabel = 'Apply';
    /**
     * Text shown on the Cancel button.
     */
    cancelLabel = 'Cancel';
    /**
     * Label for the "From" date input.
     */
    fromLabel = 'Form';
    /**
     * Label for the "To" date input.
     */
    toLabel = 'To';
    /**
     * Label used for the custom date range option.
     */
    customRangeLabel = 'Custom';
    /**
     * Label for the week column in the calendar.
     */
    weekLabel = 'W';
    /**
     * Disables the date range input when true.
     */
    disabled = false;
    /**
     * Enables single date selection mode.
     */
    singleDatePicker = false;
    /**
     * Minimum selectable date.
     */
    minDate;
    /**
     * Maximum selectable date.
     */
    maxDate;
    /**
     * Maximum range span (e.g., `{ days: 240 }`).
     */
    maxSpan = { days: 240 };
    /**
     * Emits when a new date range is selected.
     *
     * Example:
     * ```tsx
     * <ir-date-range onDateChanged={(e) => console.log(e.detail)} />
     * ```
     */
    dateChanged;
    openDatePickerTimeout;
    dateRangeInput;
    componentWillLoad() {
        if (!document.getElementById('ir-daterangepicker-style')) {
            const style = document.createElement('style');
            style.id = 'ir-daterangepicker-style';
            style.textContent = `
        .daterangepicker {
          margin-top: 14px;
        }
      `;
            document.head.appendChild(style);
        }
    }
    componentDidLoad() {
        this.dateRangeInput = this.element.querySelector('.date-range-input');
        this.initializeDateRangePicker();
        this.updateDateRangePickerDates();
    }
    disconnectedCallback() {
        if (this.openDatePickerTimeout) {
            clearTimeout(this.openDatePickerTimeout);
        }
        $(this.dateRangeInput).data('daterangepicker').remove();
    }
    handleMinDateChange() {
        $(this.dateRangeInput).data('daterangepicker').remove();
        this.initializeDateRangePicker();
    }
    datePropChanged() {
        this.updateDateRangePickerDates();
    }
    /**
     * Opens the date picker programmatically.
     *
     * Example:
     * ```ts
     * const el = document.querySelector('ir-date-range');
     * await el.openDatePicker();
     * ```
     */
    async openDatePicker() {
        this.openDatePickerTimeout = setTimeout(() => {
            this.dateRangeInput.click();
        }, 20);
    }
    /**
     * Updates the current dates displayed in the picker
     * (used when props change externally).
     */
    updateDateRangePickerDates() {
        const picker = $(this.dateRangeInput).data('daterangepicker');
        if (!picker) {
            console.error('Date range picker not initialized.');
            return;
        }
        // Adjust how dates are set based on whether it's a single date picker or range picker.
        if (this.singleDatePicker) {
            const newDate = this.date ? moment(this.date) : moment();
            picker.setStartDate(newDate);
            picker.setEndDate(newDate); // For single date picker, start and end date might be the same.
        }
        else {
            const newStartDate = this.fromDate ? moment(this.fromDate) : moment();
            const newEndDate = this.toDate ? moment(this.toDate) : newStartDate.clone().add(1, 'days');
            picker.setStartDate(newStartDate);
            picker.setEndDate(newEndDate);
        }
    }
    /**
     * Initializes the date range picker using jQuery plugin with given props.
     */
    initializeDateRangePicker() {
        $(this.dateRangeInput).daterangepicker({
            singleDatePicker: this.singleDatePicker,
            opens: this.opens,
            startDate: moment(this.fromDate),
            endDate: moment(this.toDate),
            minDate: moment(this.minDate || moment(new Date()).format('YYYY-MM-DD')),
            maxDate: this.maxDate ? moment(this.maxDate) : undefined,
            maxSpan: this.maxSpan,
            autoApply: this.autoApply,
            locale: {
                format: this.format,
                separator: this.separator,
                applyLabel: this.applyLabel,
                cancelLabel: this.cancelLabel,
                fromLabel: this.fromLabel,
                toLabel: this.toLabel,
                customRangeLabel: this.customRangeLabel,
                weekLabel: this.weekLabel,
                daysOfWeek: this.daysOfWeek,
                monthNames: this.monthNames,
                firstDay: this.firstDay,
            },
        }, (start, end) => {
            this.dateChanged.emit({ start, end });
        });
    }
    render() {
        return (h(Host, { key: '012aea26829d23788e166f3379f67c251237fbf9' }, h("input", { key: '8ca4d4a54c0d9bb3ac754d0e84b85885a33f2891', class: "date-range-input", type: "button", disabled: this.disabled })));
    }
    static get is() { return "ir-date-range"; }
    static get encapsulation() { return "scoped"; }
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
            "fromDate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Start date for the date range."
                },
                "getter": false,
                "setter": false
            },
            "toDate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "End date for the date range."
                },
                "getter": false,
                "setter": false
            },
            "date": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Single date selection value (used in single date picker mode)."
                },
                "getter": false,
                "setter": false
            },
            "opens": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'right' | 'center'",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Defines which side the calendar opens to.\nOptions: `'left'`, `'right'`, `'center'`."
                },
                "getter": false,
                "setter": false,
                "attribute": "opens",
                "reflect": false
            },
            "autoApply": {
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
                    "text": "Whether to apply the selected range automatically without clicking 'Apply'."
                },
                "getter": false,
                "setter": false,
                "attribute": "auto-apply",
                "reflect": false
            },
            "firstDay": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "First day of the week (0 = Sunday, 1 = Monday, ...)."
                },
                "getter": false,
                "setter": false,
                "attribute": "first-day",
                "reflect": false,
                "defaultValue": "1"
            },
            "monthNames": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Month names shown in the calendar header."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
            },
            "daysOfWeek": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Abbreviated names of the days of the week."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']"
            },
            "format": {
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
                    "text": "Date format used in the input and picker."
                },
                "getter": false,
                "setter": false,
                "attribute": "format",
                "reflect": false,
                "defaultValue": "'MMM DD, YYYY'"
            },
            "separator": {
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
                    "text": "Separator string used between start and end dates."
                },
                "getter": false,
                "setter": false,
                "attribute": "separator",
                "reflect": false,
                "defaultValue": "' - '"
            },
            "applyLabel": {
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
                    "text": "Text shown on the Apply button."
                },
                "getter": false,
                "setter": false,
                "attribute": "apply-label",
                "reflect": false,
                "defaultValue": "'Apply'"
            },
            "cancelLabel": {
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
                    "text": "Text shown on the Cancel button."
                },
                "getter": false,
                "setter": false,
                "attribute": "cancel-label",
                "reflect": false,
                "defaultValue": "'Cancel'"
            },
            "fromLabel": {
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
                    "text": "Label for the \"From\" date input."
                },
                "getter": false,
                "setter": false,
                "attribute": "from-label",
                "reflect": false,
                "defaultValue": "'Form'"
            },
            "toLabel": {
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
                    "text": "Label for the \"To\" date input."
                },
                "getter": false,
                "setter": false,
                "attribute": "to-label",
                "reflect": false,
                "defaultValue": "'To'"
            },
            "customRangeLabel": {
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
                    "text": "Label used for the custom date range option."
                },
                "getter": false,
                "setter": false,
                "attribute": "custom-range-label",
                "reflect": false,
                "defaultValue": "'Custom'"
            },
            "weekLabel": {
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
                    "text": "Label for the week column in the calendar."
                },
                "getter": false,
                "setter": false,
                "attribute": "week-label",
                "reflect": false,
                "defaultValue": "'W'"
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
                    "text": "Disables the date range input when true."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "singleDatePicker": {
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
                    "text": "Enables single date selection mode."
                },
                "getter": false,
                "setter": false,
                "attribute": "single-date-picker",
                "reflect": false,
                "defaultValue": "false"
            },
            "minDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | Date",
                    "resolved": "Date | string",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Minimum selectable date."
                },
                "getter": false,
                "setter": false,
                "attribute": "min-date",
                "reflect": false
            },
            "maxDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | Date",
                    "resolved": "Date | string",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum selectable date."
                },
                "getter": false,
                "setter": false,
                "attribute": "max-date",
                "reflect": false
            },
            "maxSpan": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "moment.DurationInputArg1",
                    "resolved": "Duration | DurationInputObject | FromTo | number | string",
                    "references": {
                        "moment": {
                            "location": "global",
                            "id": "global::moment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum range span (e.g., `{ days: 240 }`)."
                },
                "getter": false,
                "setter": false,
                "attribute": "max-span",
                "reflect": false,
                "defaultValue": "{ days: 240 }"
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
                    "text": "Emits when a new date range is selected.\n\nExample:\n```tsx\n<ir-date-range onDateChanged={(e) => console.log(e.detail)} />\n```"
                },
                "complexType": {
                    "original": "{\n    start: moment.Moment;\n    end: moment.Moment;\n  }",
                    "resolved": "{ start: Moment; end: Moment; }",
                    "references": {
                        "moment": {
                            "location": "global",
                            "id": "global::moment"
                        }
                    }
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
                    "text": "Opens the date picker programmatically.\n\nExample:\n```ts\nconst el = document.querySelector('ir-date-range');\nawait el.openDatePicker();\n```",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "minDate",
                "methodName": "handleMinDateChange"
            }, {
                "propName": "date",
                "methodName": "datePropChanged"
            }];
    }
}
//# sourceMappingURL=ir-date-range.js.map
