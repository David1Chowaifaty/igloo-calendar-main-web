import { createPopper } from "@popperjs/core";
import { h } from "@stencil/core";
import AirDatepicker from "air-datepicker";
import localeEn from "air-datepicker/locale/en";
import moment from "moment";
export class IrDatePicker {
    constructor() {
        /**
         * Determines whether the date picker is rendered inline or in a pop-up.
         * If `true`, the picker is always visible inline.
         */
        this.inline = false;
        /**
         * The initially selected date; can be a `Date` object or a string recognized by `AirDatepicker`.
         */
        this.date = null;
        /**
         * Enables multiple dates.
         * If `true`, multiple selection is allowed.
         * If you pass a number (e.g. 3), that is the maximum number of selectable dates.
         */
        this.multipleDates = false;
        /**
         * Whether the picker should allow range selection (start and end date).
         */
        this.range = false;
        /**
         * Format for the date as it appears in the input field.
         * Follows the `AirDatepicker` format rules.
         */
        this.dateFormat = 'yyyy-MM-dd';
        /**
         * Enables the timepicker functionality (select hours and minutes).
         */
        this.timepicker = false;
        /**
         * Disables the input and prevents interaction.
         */
        this.disabled = false;
        /**
         * Closes the picker automatically after a date is selected.
         */
        this.autoClose = true;
        /**
         * Shows days from previous/next month in the current month's calendar.
         */
        this.showOtherMonths = true;
        /**
         * Allows selecting days from previous/next month shown in the current view.
         */
        this.selectOtherMonths = true;
        /**
         * Controls how the date picker is triggered.
         * - **`true`**: The picker can be triggered by custom UI elements (provided via a `<slot name="trigger">`).
         * - **`false`**: A default button input is used to open the picker.
         *
         * Defaults to `true`.
         */
        this.customPicker = true;
        /**
         * If `true`, the date picker instance is destroyed and rebuilt each time the `date` prop changes.
         * This can be useful if you need the picker to fully re-initialize in response to dynamic changes,
         * but note that it may affect performance if triggered frequently.
         * Defaults to `false`.
         */
        this.forceDestroyOnUpdate = false;
        /**
         * If `true`, the component will emit a `dateChanged` event when the selected date becomes empty (null).
         * Otherwise, empty-date changes will be ignored (no event emitted).
         *
         * Defaults to `false`.
         */
        this.emitEmptyDate = false;
        /**
         * Styles for the trigger container
         */
        this.triggerContainerStyle = '';
        this.currentDate = null;
        this.triggerSlot = null;
    }
    componentWillLoad() {
        // Sync initial @Prop to internal state
        if (this.date) {
            this.currentDate = this.toValidDate(this.date);
        }
    }
    componentDidLoad() {
        this.initializeDatepicker();
        this.setupTriggerFocusHandling();
    }
    /**
     * Set up focus handling for the custom trigger slot
     */
    setupTriggerFocusHandling() {
        if (!this.customPicker)
            return;
        // Get the slot element
        const slotEl = this.el.querySelector('[slot="trigger"]');
        if (!slotEl)
            return;
        // We'll consider the first assigned element as our trigger
        this.triggerSlot = slotEl;
        // Add focus event listener to the trigger element
        this.triggerSlot.addEventListener('focus', this.handleTriggerFocus.bind(this));
        // Also handle click events on the trigger
        this.triggerSlot.addEventListener('click', this.handleTriggerClick.bind(this));
    }
    handleTriggerFocus() {
        if (this.disabled)
            return;
        this.openDatePicker();
    }
    handleTriggerClick(event) {
        if (this.disabled)
            return;
        event.preventDefault();
        this.openDatePicker();
    }
    datePropChanged(newDate, oldDate) {
        if (this.isSameDates(newDate, oldDate)) {
            return;
        }
        this.updatePickerDate(newDate);
    }
    minDatePropChanged(newVal, oldVal) {
        var _a;
        if (!this.datePicker) {
            return;
        }
        if (!this.isSameDates(newVal, oldVal)) {
            (_a = this.datePicker) === null || _a === void 0 ? void 0 : _a.update({ minDate: this.toValidDate(newVal) });
        }
    }
    maxDatePropChanged(newVal, oldVal) {
        var _a;
        if (!this.isSameDates(newVal, oldVal)) {
            (_a = this.datePicker) === null || _a === void 0 ? void 0 : _a.update({ maxDate: this.toValidDate(newVal) });
        }
    }
    async openDatePicker() {
        // small delay to let the input mount if needed
        this.openDatePickerTimeout = setTimeout(() => {
            this.pickerRef.focus();
        }, 20);
    }
    async clearDatePicker() {
        var _a;
        (_a = this.datePicker) === null || _a === void 0 ? void 0 : _a.clear();
    }
    isSameDates(d1, d2) {
        if (!d1 && !d2)
            return true;
        if (!d1 || !d2)
            return false;
        return moment(d1).isSame(moment(d2), 'day');
    }
    toValidDate(value) {
        if (!value)
            return null;
        const d = new Date(value);
        return isNaN(d.getTime()) ? null : d;
    }
    updatePickerDate(newDate) {
        var _a, _b;
        const valid = this.toValidDate(newDate);
        if (!valid) {
            // If invalid or null, just clear
            (_a = this.datePicker) === null || _a === void 0 ? void 0 : _a.clear();
            this.currentDate = null;
            return;
        }
        // If it's a truly new date, select it
        if (!this.isSameDates(this.currentDate, valid)) {
            this.currentDate = valid;
            if (this.forceDestroyOnUpdate) {
                this.datePicker.destroy();
                this.datePicker = null;
                this.initializeDatepicker();
            }
            else {
                (_b = this.datePicker) === null || _b === void 0 ? void 0 : _b.selectDate(valid);
            }
        }
    }
    initializeDatepicker() {
        if (this.datePicker)
            return;
        this.datePicker = new AirDatepicker(this.pickerRef, {
            container: this.container,
            inline: this.inline,
            selectedDates: this.date ? [this.date] : [],
            multipleDates: this.multipleDates,
            range: this.range,
            dateFormat: this.dateFormat,
            timepicker: this.timepicker,
            minDate: this.minDate,
            maxDate: this.maxDate,
            autoClose: this.autoClose,
            locale: localeEn,
            showOtherMonths: this.showOtherMonths,
            selectOtherMonths: this.selectOtherMonths,
            onHide: () => {
                this.datePickerBlur.emit();
            },
            onShow: () => {
                this.datePickerFocus.emit();
            },
            onSelect: ({ date }) => {
                if (!date || !(date instanceof Date)) {
                    if (this.emitEmptyDate) {
                        this.dateChanged.emit({
                            start: null,
                            end: null,
                        });
                    }
                    return;
                }
                this.currentDate = date;
                this.date = date;
                this.dateChanged.emit({
                    start: moment(date),
                    end: moment(date),
                });
            },
            position({ $datepicker, $target, $pointer, done }) {
                let popper = createPopper($target, $datepicker, {
                    placement: 'top',
                    modifiers: [
                        {
                            name: 'flip',
                            options: { padding: { top: 0 } },
                        },
                        {
                            name: 'offset',
                            options: { offset: [0, 10] },
                        },
                        {
                            name: 'arrow',
                            options: { element: $pointer },
                        },
                    ],
                });
                return function completeHide() {
                    popper.destroy();
                    done();
                };
            },
        });
    }
    disconnectedCallback() {
        var _a, _b;
        if (this.openDatePickerTimeout) {
            clearTimeout(this.openDatePickerTimeout);
        }
        // Clean up event listeners
        if (this.triggerSlot) {
            this.triggerSlot.removeEventListener('focus', this.handleTriggerFocus);
            this.triggerSlot.removeEventListener('click', this.handleTriggerClick);
        }
        (_b = (_a = this.datePicker) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    render() {
        return (h("div", { key: '2499c5597f45203f51bb824e2b8df6d09bc5a302', class: `ir-date-picker-trigger ${this.triggerContainerStyle}` }, this.customPicker && h("slot", { key: 'e19a2d8d2547cce5f4d2a9d963f62fed64863c2f', name: "trigger" }), h("input", { key: 'e92a2d7198e5b60134c7a23f06136fd837d94775', type: "text", disabled: this.disabled, class: this.customPicker ? 'ir-date-picker-element' : 'form-control input-sm', ref: el => (this.pickerRef = el) })));
    }
    static get is() { return "ir-date-picker"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-date-picker.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-date-picker.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Determines whether the date picker is rendered inline or in a pop-up.\nIf `true`, the picker is always visible inline."
                },
                "getter": false,
                "setter": false,
                "attribute": "inline",
                "reflect": false,
                "defaultValue": "false"
            },
            "date": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | Date | null",
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
                    "text": "The initially selected date; can be a `Date` object or a string recognized by `AirDatepicker`."
                },
                "getter": false,
                "setter": false,
                "attribute": "date",
                "reflect": true,
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
                    "text": "Enables multiple dates.\nIf `true`, multiple selection is allowed.\nIf you pass a number (e.g. 3), that is the maximum number of selectable dates."
                },
                "getter": false,
                "setter": false,
                "attribute": "multiple-dates",
                "reflect": false,
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
                    "text": "Whether the picker should allow range selection (start and end date)."
                },
                "getter": false,
                "setter": false,
                "attribute": "range",
                "reflect": false,
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
                    "text": "Format for the date as it appears in the input field.\nFollows the `AirDatepicker` format rules."
                },
                "getter": false,
                "setter": false,
                "attribute": "date-format",
                "reflect": false,
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
                    "text": "Enables the timepicker functionality (select hours and minutes)."
                },
                "getter": false,
                "setter": false,
                "attribute": "timepicker",
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The earliest date that can be selected."
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The latest date that can be selected."
                },
                "getter": false,
                "setter": false,
                "attribute": "max-date",
                "reflect": false
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
                    "text": "Disables the input and prevents interaction."
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
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
                    "text": "Closes the picker automatically after a date is selected."
                },
                "getter": false,
                "setter": false,
                "attribute": "auto-close",
                "reflect": false,
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
                    "text": "Shows days from previous/next month in the current month's calendar."
                },
                "getter": false,
                "setter": false,
                "attribute": "show-other-months",
                "reflect": false,
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
                    "text": "Allows selecting days from previous/next month shown in the current view."
                },
                "getter": false,
                "setter": false,
                "attribute": "select-other-months",
                "reflect": false,
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
                    "text": "Controls how the date picker is triggered.\n- **`true`**: The picker can be triggered by custom UI elements (provided via a `<slot name=\"trigger\">`).\n- **`false`**: A default button input is used to open the picker.\n\nDefaults to `true`."
                },
                "getter": false,
                "setter": false,
                "attribute": "custom-picker",
                "reflect": false,
                "defaultValue": "true"
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
                    "text": "Pass a container element if you need the date picker to be appended to a specific element\nfor styling or positioning (particularly for arrow rendering).\nIf not provided, it defaults to `this.el`."
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
                    "text": "If `true`, the date picker instance is destroyed and rebuilt each time the `date` prop changes.\nThis can be useful if you need the picker to fully re-initialize in response to dynamic changes,\nbut note that it may affect performance if triggered frequently.\nDefaults to `false`."
                },
                "getter": false,
                "setter": false,
                "attribute": "force-destroy-on-update",
                "reflect": false,
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
                    "text": "If `true`, the component will emit a `dateChanged` event when the selected date becomes empty (null).\nOtherwise, empty-date changes will be ignored (no event emitted).\n\nDefaults to `false`."
                },
                "getter": false,
                "setter": false,
                "attribute": "emit-empty-date",
                "reflect": false,
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
                    "text": "Styles for the trigger container"
                },
                "getter": false,
                "setter": false,
                "attribute": "trigger-container-style",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
    static get states() {
        return {
            "currentDate": {}
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
                    "text": ""
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
            }, {
                "method": "datePickerFocus",
                "name": "datePickerFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
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
                    "text": ""
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
                    "text": "",
                    "tags": []
                }
            },
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
                    "text": "",
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
            }];
    }
}
//# sourceMappingURL=ir-date-picker.js.map
