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
        const todayDate = moment().format('YYYY-MM-DD');
        const tomorrowDate = moment().add(1, 'day').format('YYYY-MM-DD');
        // Reflect which preset (Today/Tomorrow) is currently active based on the selected fromDate.
        const selectedPreset = this.fromDate === todayDate ? 'today' : this.fromDate === tomorrowDate ? 'tomorrow' : '';
        return (h("ir-filter-card", { key: 'b74f37108851b34ed99d75edffd1db242f75f72e' }, h("wa-radio-group", { key: 'c09991e03481ef75af7e2aa32a9e77afde6fadca', label: "Report type", size: "small", orientation: "horizontal", value: this.reportType, onchange: e => {
                this.reportTypeChange.emit(e.target.value);
            } }, h("wa-radio", { key: 'f9374e57cdadbee7e9e6f71b020c9ab77d7b9771', style: { flex: '1' }, appearance: "button", value: "GUEST_LIST" }, "Guest list"), h("wa-radio", { key: '3a9be744559f3908fe57992547b85cafbe9ee1d9', style: { flex: '1' }, appearance: "button", value: "MEAL_COUNT" }, "Meal count")), this.reportType === 'GUEST_LIST' ? (h("wa-radio-group", { label: "Stay date", size: "small", orientation: "horizontal", value: selectedPreset, onchange: e => {
                this.presetDate.emit(e.target.value);
            } }, h("wa-radio", { style: { flex: '1' }, appearance: "button", value: "today" }, "Today"), h("wa-radio", { style: { flex: '1' }, appearance: "button", value: "tomorrow" }, "Tomorrow"))) : (h("div", null, h("ir-date-range-filter", { label: "Stay date", fromDate: this.fromDate, showQuickActions: false, toDate: this.toDate, minDate: moment().format('YYYY-MM-DD'), maxDate: moment().add(14, 'days').format('YYYY-MM-DD'), onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dateChange.emit({
                    from,
                    to,
                });
            }, withClear: false, selectionMode: "auto" }))), this.reportType === 'GUEST_LIST' &&
            (mealTypes.length > 0 ? (h("wa-radio-group", { defaultValue: this.mealType, label: "Meal type", size: "small", orientation: "horizontal", value: this.mealType, style: { width: '100%' }, onchange: e => {
                    this.mealTypeChange.emit(e.target.value);
                } }, mealTypes.map(type => (h("wa-radio", { style: { flex: '1' }, appearance: "button", value: type.CODE_NAME }, type.CODE_VALUE_EN))))) : (h("div", { class: "ir-meal-report-filters__warning" }, "No meal types found."))), h("div", { key: '948a3f0fa3194c10bba4aea66ccfa0c69e689097', slot: "footer" }, h("ir-custom-button", { key: '8d280ceb6a2a5e009b589494c2e5927b19a64757', type: "button", size: "small", variant: "neutral", appearance: "filled", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            } }, this.lcz.Lcz_Reset || 'Reset'), h("ir-custom-button", { key: 'd6ed86d781d01cbf86a6168b4410aec3d462c730', type: "button", size: "small", variant: "brand", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, this.lcz.Lcz_Apply || 'Apply'))));
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
                "reflect": false,
                "attribute": "report-type",
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "to-date"
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
                "reflect": false,
                "attribute": "meal-type",
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
                            "id": "src/models/IBooking.ts::IEntries",
                            "referenceLocation": "IEntries"
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
                "reflect": false,
                "attribute": "is-loading",
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
                "reflect": false,
                "attribute": "lcz",
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
