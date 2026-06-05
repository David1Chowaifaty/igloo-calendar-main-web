import { h } from "@stencil/core";
import moment from "moment";
export class IrMealReportFilters {
    reportType = 'GUEST_LIST';
    fromDate;
    toDate;
    mealType = null;
    setupEntries;
    isLoading = false;
    lcz = {};
    reportTypeChange;
    dateChange;
    mealTypeChange;
    filterApply;
    filterReset;
    presetDate;
    render() {
        const mealTypes = this.setupEntries?.meal_type || [];
        return (h("div", { key: '00cf6fd072722c3b749159a38f6f25a1012aec6a', class: "ir-meal-report-filters__container", onKeyDown: (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            } }, h("div", { key: 'f622562fd0edc706f01b808fd36e373e825f87b7', class: "ir-meal-report-filters__header" }, h("div", { key: 'c752c0164edd187e08e29537aab7b9133688d864', class: "ir-meal-report-filters__header-content" }, h("svg", { key: '84f72de8971cd52c2de6c54a85ff79eaa1bac1e4', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '230c7d028a767e80e142eb98b573e3220909307a', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'b776080fc9069859151f46f1d61786c1eb9e5625', class: "ir-meal-report-filters__title" }, this.lcz.Lcz_Filters || 'Filters'))), h("div", { key: '75fef6943fc3cf15ad55a83f772659db969c90cd', class: "ir-meal-report-filters__body" }, h("fieldset", { key: '373c0682a09e3f2b288a21b71c25702e27235357', class: "ir-meal-report-filters__group" }, h("label", { key: '1229650975f32cda00c68dc682547f2a19dd48c4', class: "ir-meal-report-filters__label" }, "Report type"), h("wa-radio-group", { key: 'dc7e852311ec99d678d14ce86d75debb8a76080e', value: this.reportType, onchange: e => {
                this.reportTypeChange.emit(e.target.value);
            } }, h("wa-radio", { key: '016e1dd6d690511347194ef290d337cf2ce9660e', value: "GUEST_LIST" }, "Guest list"), h("wa-radio", { key: '907a281f1dece5a9ba0854848f596a1bb52edd88', value: "MEAL_COUNT" }, "Meal count"))), h("fieldset", { key: '19feb10c3fe57a6755ad9132f58524ee037b7be8', class: "ir-meal-report-filters__group" }, h("label", { key: '4daea0b9d38e04aba1041652fc66af4e4d56ab9a', class: "ir-meal-report-filters__label" }, "Stay date"), this.reportType === 'GUEST_LIST' ? (h("div", { class: "ir-meal-report-filters__date-presets" }, h("ir-custom-button", { type: "button", size: "small", variant: this.fromDate === moment().format('YYYY-MM-DD') ? 'brand' : 'neutral', appearance: this.fromDate === moment().format('YYYY-MM-DD') ? 'filled' : 'outlined', onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.presetDate.emit('today');
            }, class: "ir-meal-report-filters__preset-btn" }, "Today"), h("ir-custom-button", { type: "button", size: "small", variant: this.fromDate === moment().add(1, 'day').format('YYYY-MM-DD') ? 'brand' : 'neutral', appearance: this.fromDate === moment().add(1, 'day').format('YYYY-MM-DD') ? 'filled' : 'outlined', onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.presetDate.emit('tomorrow');
            }, class: "ir-meal-report-filters__preset-btn" }, "Tomorrow"))) : (h("div", { class: "ir-meal-report-filters__range-picker-wrapper" }, h("ir-range-picker", { fromDate: moment(this.fromDate, 'YYYY-MM-DD'), toDate: moment(this.toDate, 'YYYY-MM-DD'), minDate: moment().format('YYYY-MM-DD'), maxDate: moment().add(14, 'days').format('YYYY-MM-DD'), onDateRangeChanged: e => {
                const { fromDate, toDate } = e.detail;
                this.dateChange.emit({
                    from: fromDate.format('YYYY-MM-DD'),
                    to: toDate.format('YYYY-MM-DD')
                });
            }, withOverlay: false })))), this.reportType === 'GUEST_LIST' && (h("fieldset", { key: '9089764140d153fd87f31e9a2e73bc39563360eb', class: "ir-meal-report-filters__group" }, h("label", { key: '9b425bb5b93556940800170a3938896cefa3ada9', class: "ir-meal-report-filters__label" }, "Meal type"), mealTypes.length > 0 ? (h("div", { class: "ir-meal-report-filters__meal-types" }, mealTypes.map(type => (h("ir-custom-button", { type: "button", size: "small", variant: this.mealType === type.CODE_NAME ? 'brand' : 'neutral', appearance: this.mealType === type.CODE_NAME ? 'filled' : 'outlined', onClickHandler: async (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.mealTypeChange.emit(type.CODE_NAME);
            }, class: "ir-meal-report-filters__meal-btn" }, type.CODE_VALUE_EN))))) : (h("div", { class: "ir-meal-report-filters__warning" }, "No meal types found.")))), h("div", { key: 'b948c2af224c94bddb963980e134296032a272e8', class: "ir-meal-report-filters__footer" }, h("ir-custom-button", { key: '7ed16bf79f8514213c66448478b5920e292f0cad', type: "button", size: "small", variant: "neutral", appearance: "filled", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, class: "ir-meal-report-filters__reset-btn" }, this.lcz.Lcz_Reset || 'Reset'), h("ir-custom-button", { key: '76a57d02bc0efaafde31bf9f07c09bc7a69a8c8b', type: "button", size: "small", variant: "brand", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, this.lcz.Lcz_Apply || 'Apply')))));
    }
    static get is() { return "ir-meal-report-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-meal-report-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-meal-report-filters.css"]
        };
    }
    static get properties() {
        return {
            "reportType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'GUEST_LIST' | 'MEAL_COUNT'",
                    "resolved": "\"GUEST_LIST\" | \"MEAL_COUNT\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "report-type",
                "reflect": false,
                "defaultValue": "'GUEST_LIST'"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "from-date",
                "reflect": false
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "to-date",
                "reflect": false
            },
            "mealType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "meal-type",
                "reflect": false,
                "defaultValue": "null"
            },
            "setupEntries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ meal_type: IEntries[]; hb_preference: IEntries[] }",
                    "resolved": "{ meal_type: IEntries[]; hb_preference: IEntries[]; }",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "isLoading": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-loading",
                "reflect": false,
                "defaultValue": "false"
            },
            "lcz": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "lcz",
                "reflect": false,
                "defaultValue": "{}"
            }
        };
    }
    static get events() {
        return [{
                "method": "reportTypeChange",
                "name": "reportTypeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "'GUEST_LIST' | 'MEAL_COUNT'",
                    "resolved": "\"GUEST_LIST\" | \"MEAL_COUNT\"",
                    "references": {}
                }
            }, {
                "method": "dateChange",
                "name": "dateChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ from: string; to: string }",
                    "resolved": "{ from: string; to: string; }",
                    "references": {}
                }
            }, {
                "method": "mealTypeChange",
                "name": "mealTypeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "filterApply",
                "name": "filterApply",
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
                "method": "filterReset",
                "name": "filterReset",
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
                "method": "presetDate",
                "name": "presetDate",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "'today' | 'tomorrow'",
                    "resolved": "\"today\" | \"tomorrow\"",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-meal-report-filters.js.map
