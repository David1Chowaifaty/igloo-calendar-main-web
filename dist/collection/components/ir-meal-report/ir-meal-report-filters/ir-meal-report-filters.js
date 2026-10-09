import { h } from "@stencil/core";
import { t } from "../../../services/locale/t";
import { getSetupEntryLabel } from "../../../services/setup/index";
import moment from "moment";
export class IrMealReportFilters {
    reportType = 'GUEST_LIST';
    fromDate;
    toDate;
    mealType = null;
    setupEntries;
    isLoading = false;
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
        return (h("ir-filter-card", { key: '01b298b4f2a32dbf38e9ae63d6f03799d90f778a' }, h("wa-radio-group", { key: '455e6441bac64b5ba2d527387f221a763d94cae3', label: t('Lcz_ReportType', { fallback: 'Report type' }), size: "s", orientation: "horizontal", value: this.reportType, onchange: e => {
                this.reportTypeChange.emit(e.target.value);
            } }, h("wa-radio", { key: '07f55ba131f88afaf54f11cd0ce1cf506ad7afb7', style: { flex: '1' }, appearance: "button", value: "GUEST_LIST" }, t('Lcz_GuestList', { fallback: 'Guest list' })), h("wa-radio", { key: 'de32c1f7210c3e5b1e0dabdc9ebb5542d9b26501', style: { flex: '1' }, appearance: "button", value: "MEAL_COUNT" }, t('Lcz_MealCount', { fallback: 'Meal count' }))), this.reportType === 'GUEST_LIST' ? (h("wa-radio-group", { label: t('Lcz_StayDate', { fallback: 'Stay date' }), size: "s", orientation: "horizontal", value: selectedPreset, onchange: e => {
                this.presetDate.emit(e.target.value);
            } }, h("wa-radio", { style: { flex: '1' }, appearance: "button", value: "today" }, t('Lcz_Today', { fallback: 'Today' })), h("wa-radio", { style: { flex: '1' }, appearance: "button", value: "tomorrow" }, t('Lcz_Tomorrow', { fallback: 'Tomorrow' })))) : (h("div", null, h("ir-date-range-filter", { label: t('Lcz_StayDate', { fallback: 'Stay date' }), fromDate: this.fromDate, showQuickActions: false, toDate: this.toDate, minDate: moment().format('YYYY-MM-DD'), maxDate: moment().add(14, 'days').format('YYYY-MM-DD'), onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dateChange.emit({
                    from,
                    to,
                });
            }, withClear: false, selectionMode: "auto" }))), this.reportType === 'GUEST_LIST' &&
            (mealTypes.length > 0 ? (h("wa-radio-group", { defaultValue: this.mealType, label: t('Lcz_MealType', { fallback: 'Meal type' }), size: "s", orientation: "horizontal", value: this.mealType, style: { width: '100%' }, onchange: e => {
                    this.mealTypeChange.emit(e.target.value);
                } }, mealTypes.map(type => (h("wa-radio", { style: { flex: '1' }, appearance: "button", value: type.CODE_NAME }, getSetupEntryLabel(type)))))) : (h("div", { class: "ir-meal-report-filters__warning" }, t('Lcz_NoMealTypesFound', { fallback: 'No meal types found.' })))), h("div", { key: '93606dd5e3ee10be24384c4ebdc6f62e9a4abd13', slot: "footer" }, h("ir-custom-button", { key: 'b8883105a2203c5d22ff60e7a8b15989226edf3c', type: "button", size: "s", variant: "neutral", appearance: "filled", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            } }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: '463786e0f7903c20af1802063696cc50c4259de8', type: "button", size: "s", variant: "brand", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, t('Lcz_Apply', { fallback: 'Apply' })))));
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
                    "original": "{ meal_type: SetupEntries[]; hb_preference: SetupEntries[] }",
                    "resolved": "{ meal_type: SetupEntries[]; hb_preference: SetupEntries[]; }",
                    "references": {
                        "SetupEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::SetupEntries",
                            "referenceLocation": "SetupEntries"
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
