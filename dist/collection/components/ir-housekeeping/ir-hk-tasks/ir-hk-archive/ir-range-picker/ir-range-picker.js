import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrRangePicker {
    /**
     * The earliest date that can be selected.
     */
    minDate;
    /**
     * The latest date that can be selected.
     */
    maxDate;
    /**
     * The start date of the range.
     */
    fromDate;
    /**
     * The end date of the range.
     */
    toDate;
    /**
     * Whether to show the overlay before the date is selected.
     */
    withOverlay = true;
    /**
     * Whether to all the emitted dates to be null.
     */
    allowNullDates = true;
    lastFocusedPicker;
    dateRangeChanged;
    minSelectableDate = moment().subtract(90, 'days').toDate();
    fromDatePicker;
    toDatePicker;
    date_container;
    focusTimeout;
    async handleDateChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const selectedDate = e.detail.start ? moment(e.detail.start) : null;
        if (!this.lastFocusedPicker) {
            return;
        }
        if (e.target.id === 'fromDate') {
            let updatedToDate = this.toDate;
            if (!selectedDate) {
                this.dateRangeChanged.emit({ fromDate: null, toDate: null, wasFocused: !!this.lastFocusedPicker });
                return;
            }
            if (!updatedToDate || updatedToDate.isBefore(selectedDate, 'day')) {
                updatedToDate = selectedDate;
            }
            this.dateRangeChanged.emit({ fromDate: selectedDate, toDate: updatedToDate, wasFocused: !!this.lastFocusedPicker });
            await this.toDatePicker.openDatePicker();
        }
        else {
            if (!selectedDate) {
                this.dateRangeChanged.emit({ fromDate: this.fromDate, toDate: this.fromDate, wasFocused: !!this.lastFocusedPicker });
                return;
            }
            this.dateRangeChanged.emit({ fromDate: this.fromDate, toDate: selectedDate, wasFocused: !!this.lastFocusedPicker });
        }
        this.lastFocusedPicker = null;
    }
    handleDatePickerFocus(e) {
        e.stopPropagation();
        clearTimeout(this.focusTimeout);
        this.date_container.classList.add('focused');
        e.target.classList.add('focused');
    }
    handleDatePickerBlur(e) {
        e.stopPropagation();
        e.target.classList.remove('focused');
        this.focusTimeout = setTimeout(() => {
            this.date_container.classList.remove('focused');
        }, 10);
    }
    disconnectedCallback() {
        clearTimeout(this.focusTimeout);
    }
    renderDatePicker(id, date, minDate, refCallback, additionalProps = {}) {
        return (h("ir-date-picker", { class: {
                'range-picker__date-picker': true,
                'range-picker__date-picker--hidden': this.withOverlay && !this.fromDate,
            }, customPicker: true, ref: el => refCallback(el), minDate: minDate, maxDate: this.maxDate, date: date?.toDate(), id: id, onDatePickerFocus: () => {
                this.lastFocusedPicker = id;
            }, emitEmptyDate: this.allowNullDates, ...additionalProps }, h("p", { class: "range-picker__date-picker-button", slot: "trigger" }, date?.format('YYYY-MM-DD') ?? '2025-03-02')));
    }
    render() {
        return (h(Host, { key: 'e6ca3583f8ca2464d5752ac3150db32518fd87b4', size: "small" }, h("div", { key: '81128346572ff5b0a161468ba6ae1d3ddb42fb6a', class: "range-picker__container", ref: el => (this.date_container = el) }, this.withOverlay && (h("div", { key: '85ee198e027b08558bea6bf41bcd7912e0bd0cac', class: {
                'range-picker__overlay': true,
                'range-picker__overlay--active': !this.fromDate,
            }, onClick: () => this.fromDatePicker.openDatePicker() }, h("wa-icon", { key: '829d11df36a27d49c4c1cd8cffcc333813788ccf', name: "calendar" }), h("p", { key: 'e431a2f7f32bcc37b29a7d3eca4499fa733f8afd', class: "m-0" }, h("slot", { key: 'a9eb0e6b396c27c3e3bdcca9911103e5f6185021', name: "message" }, "Cleaned on")))), h("svg", { key: 'bd22c0ae308bca912788bcfc3a2f01d88a661ffe', class: {
                'range-picker__calendar-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, h("path", { key: '5f72e96dfdb08acff2f99deb139e7b7114407fbc', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), this.renderDatePicker('fromDate', this.fromDate, this.minDate, el => (this.fromDatePicker = el)), h("svg", { key: 'b44db1353871ffe04fcc71bc5cfcaf841c853efd', class: {
                'range-picker__arrow-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '2f77f4e7dd66e5b372313e927e885f27ec9162b7', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), this.renderDatePicker('toDate', this.toDate, this.fromDate?.toDate() || this.minSelectableDate, el => (this.toDatePicker = el), {
            forceDestroyOnUpdate: false,
        }))));
    }
    static get is() { return "ir-range-picker"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-range-picker.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-range-picker.css"]
        };
    }
    static get properties() {
        return {
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
            "fromDate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Moment",
                    "resolved": "Moment",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment",
                            "id": "node_modules::Moment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The start date of the range."
                },
                "getter": false,
                "setter": false
            },
            "toDate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Moment",
                    "resolved": "Moment",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment",
                            "id": "node_modules::Moment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The end date of the range."
                },
                "getter": false,
                "setter": false
            },
            "withOverlay": {
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
                    "text": "Whether to show the overlay before the date is selected."
                },
                "getter": false,
                "setter": false,
                "attribute": "with-overlay",
                "reflect": false,
                "defaultValue": "true"
            },
            "allowNullDates": {
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
                    "text": "Whether to all the emitted dates to be null."
                },
                "getter": false,
                "setter": false,
                "attribute": "allow-null-dates",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "lastFocusedPicker": {}
        };
    }
    static get events() {
        return [{
                "method": "dateRangeChanged",
                "name": "dateRangeChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ fromDate: Moment; toDate: Moment; wasFocused?: boolean }",
                    "resolved": "{ fromDate: Moment; toDate: Moment; wasFocused?: boolean; }",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment",
                            "id": "node_modules::Moment"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "dateChanged",
                "method": "handleDateChanged",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "datePickerFocus",
                "method": "handleDatePickerFocus",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "datePickerBlur",
                "method": "handleDatePickerBlur",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-range-picker.js.map
