import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrRangePicker {
    constructor() {
        /**
         * Whether to show the overlay before the date is selected.
         */
        this.withOverlay = true;
        /**
         * Whether to all the emitted dates to be null.
         */
        this.allowNullDates = true;
        this.minSelectableDate = moment().subtract(90, 'days').toDate();
    }
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
        var _a;
        return (h("ir-date-picker", Object.assign({ class: {
                'range-picker__date-picker': true,
                'range-picker__date-picker--hidden': this.withOverlay && !this.fromDate,
            }, customPicker: true, ref: el => refCallback(el), minDate: minDate, maxDate: this.maxDate, date: date === null || date === void 0 ? void 0 : date.toDate(), id: id, onDatePickerFocus: () => {
                this.lastFocusedPicker = id;
            }, emitEmptyDate: this.allowNullDates }, additionalProps), h("p", { class: "range-picker__date-picker-button", slot: "trigger" }, (_a = date === null || date === void 0 ? void 0 : date.format('YYYY-MM-DD')) !== null && _a !== void 0 ? _a : '2025-03-02')));
    }
    render() {
        var _a;
        return (h(Host, { key: '2fd274b8bd18cd89a882c50a2db88193bf472ac2' }, h("div", { key: 'b0efea3005d76b82f00ed73b4128e2545298fd79', class: "form-control range-picker__container", ref: el => (this.date_container = el) }, this.withOverlay && (h("div", { key: '2c170361986b359e07e29ce14661443626099e94', class: {
                'range-picker__overlay': true,
                'range-picker__overlay--active': !this.fromDate,
            }, onClick: () => this.fromDatePicker.openDatePicker() }, h("svg", { key: '5b7ca1004e2fe74a4013a8e393cb379ef59850cf', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, h("path", { key: '3dc87a4c745181fea72ae67eb0191fe7a756fa68', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), h("p", { key: '070b3be2059de3ea2d630c1f5c23bc32bb922eb8', class: "m-0" }, h("slot", { key: 'bb756a67d8541d7efd5160e1b709e56d5910c852', name: "message" }, "Cleaned on")))), h("svg", { key: '35d3640621900ec2e2dfb5ceb7bcb943ea82cf90', class: {
                'range-picker__calendar-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, h("path", { key: '93d269873d90de0fad68094080087401c11fa0a1', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), this.renderDatePicker('fromDate', this.fromDate, this.minDate, el => (this.fromDatePicker = el)), h("svg", { key: '0ad38038cd6f2816a285bce6c3c729f1711c1a7d', class: {
                'range-picker__arrow-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '8b86324ae1b35768b2c08405dcfb4e8088206d53', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), this.renderDatePicker('toDate', this.toDate, ((_a = this.fromDate) === null || _a === void 0 ? void 0 : _a.toDate()) || this.minSelectableDate, el => (this.toDatePicker = el), {
            forceDestroyOnUpdate: true,
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
