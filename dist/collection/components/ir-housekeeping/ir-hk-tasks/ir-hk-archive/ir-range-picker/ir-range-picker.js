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
        console.log(e.detail);
        const selectedDate = e.detail.start ? moment(e.detail.start) : null;
        if (e.target.id === 'fromDate') {
            let updatedToDate = this.toDate;
            if (!selectedDate) {
                this.dateRangeChanged.emit({ fromDate: null, toDate: null });
                return;
            }
            if (!updatedToDate || updatedToDate.isBefore(selectedDate, 'day')) {
                updatedToDate = selectedDate;
            }
            this.dateRangeChanged.emit({ fromDate: selectedDate, toDate: updatedToDate });
            await this.toDatePicker.openDatePicker();
        }
        else {
            if (!selectedDate) {
                this.dateRangeChanged.emit({ fromDate: this.fromDate, toDate: this.fromDate });
                return;
            }
            this.dateRangeChanged.emit({ fromDate: this.fromDate, toDate: selectedDate });
        }
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
            }, customPicker: true, ref: el => refCallback(el), minDate: minDate, maxDate: this.maxDate, date: date === null || date === void 0 ? void 0 : date.toDate(), id: id, emitEmptyDate: this.allowNullDates }, additionalProps), h("p", { class: "range-picker__date-picker-button", slot: "trigger" }, (_a = date === null || date === void 0 ? void 0 : date.format('YYYY-MM-DD')) !== null && _a !== void 0 ? _a : '2025-03-02')));
    }
    render() {
        var _a;
        return (h(Host, { key: '96406b31d51aee10cf259b6f7207bac57b44914f' }, h("div", { key: '68e6ebea05acab303335fafd05061b27eae3b2b4', class: "form-control range-picker__container", ref: el => (this.date_container = el) }, this.withOverlay && (h("div", { key: '869b765109a1e09fc497c2f10d7c390a5efa0235', class: {
                'range-picker__overlay': true,
                'range-picker__overlay--active': !this.fromDate,
            }, onClick: () => this.fromDatePicker.openDatePicker() }, h("svg", { key: '0d338e5b4e40133c932c5359e9d1b75519111b28', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, h("path", { key: '3720e88aa87d6b22800a9768fdf347596ac1bd16', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), h("p", { key: 'b894889960ea55b679be93913116eff978b8cec7', class: "m-0" }, h("slot", { key: 'a6c4c4ea8e39fe40a423a64a5e224cec0e7500aa', name: "message" }, "Cleaned on")))), h("svg", { key: '8276a31d96d9a85c506312e4f04e19bd8b79fe1f', class: {
                'range-picker__calendar-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, h("path", { key: 'f3b8c51ca307009ce21ff37ba33bc787ced6823e', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), this.renderDatePicker('fromDate', this.fromDate, this.minDate, el => (this.fromDatePicker = el)), h("svg", { key: '63c23cd6d1c3e217e78c365a0cb93fc08e8e565d', class: {
                'range-picker__arrow-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '64f0acd44ccc060d2802fc73659363221145fe12', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), this.renderDatePicker('toDate', this.toDate, ((_a = this.fromDate) === null || _a === void 0 ? void 0 : _a.toDate()) || this.minSelectableDate, el => (this.toDatePicker = el), {
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
                    "original": "{ fromDate: Moment; toDate: Moment }",
                    "resolved": "{ fromDate: Moment; toDate: Moment; }",
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
