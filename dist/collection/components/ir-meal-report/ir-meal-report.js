import { h } from "@stencil/core";
import { MealReportService } from "../../services/meal-report/meal-report.service";
import Token from "../../models/Token";
import moment from "moment";
import locales from "../../stores/locales.store";
import axios from "axios";
import { groupEntryTablesResult } from "../../utils/utils";
export class IrMealReport {
    ticket;
    propertyid;
    baseurl;
    language = 'en';
    isPageLoading = true;
    isExporting = false;
    isDataLoading = false;
    localReportType = 'GUEST_LIST';
    localFrom = moment().format('YYYY-MM-DD');
    localTo = moment().format('YYYY-MM-DD');
    localMealType = null;
    guestList = [];
    mealCountSummary = [];
    setupEntries = {
        meal_type: [],
        hb_preference: [],
    };
    mealReportService = new MealReportService();
    tokenService = new Token();
    ticketChanged(newValue) {
        if (newValue) {
            this.tokenService.setToken(newValue);
            this.init();
        }
    }
    componentWillLoad() {
        if (this.baseurl) {
            this.tokenService.setBaseUrl(this.baseurl);
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    async handlePropertyChange() {
        await this.init();
    }
    async init() {
        try {
            this.isPageLoading = true;
            this.isDataLoading = true;
            const setupEntries = await this.mealReportService.getSetupEntriesByTableNameMulti(['_MEAL_TYPE', '_HB_PREFERENCE']);
            const grouped = groupEntryTablesResult(setupEntries);
            const meal_type = grouped.meal_type || [];
            const hb_preference = grouped.hb_preference || [];
            this.setupEntries = {
                meal_type,
                hb_preference,
            };
            if (meal_type.length > 0) {
                if (!this.localMealType) {
                    this.localMealType = meal_type[0].CODE_NAME;
                }
            }
            await this.applyFilters();
        }
        catch (error) {
            // Handling handled via UI
        }
        finally {
            this.isPageLoading = false;
            this.isDataLoading = false;
        }
    }
    async applyFilters() {
        try {
            this.isDataLoading = true;
            const response = await this.mealReportService.getMealReport({
                property_id: this.propertyid,
                from: this.localFrom,
                to: this.localTo,
                report_type: this.localReportType,
                meal_type_code: this.localMealType,
                is_export_to_excel: false,
            });
            this.guestList = response.My_Result.Guest_List || [];
            this.mealCountSummary = response.My_Result.Meal_Count_Summary || [];
        }
        catch (error) {
            // Handling handled via UI
        }
        finally {
            this.isDataLoading = false;
        }
    }
    resetFilters() {
        this.localReportType = 'GUEST_LIST';
        this.localFrom = moment().format('YYYY-MM-DD');
        this.localTo = moment().format('YYYY-MM-DD');
        if (this.setupEntries.meal_type.length > 0) {
            this.localMealType = this.setupEntries.meal_type[0].CODE_NAME;
        }
        this.applyFilters();
    }
    async setPresetDate(type) {
        const date = type === 'today' ? moment() : moment().add(1, 'day');
        this.localFrom = date.format('YYYY-MM-DD');
        if (type === 'today' && this.localReportType === 'MEAL_COUNT') {
            this.localTo = moment().add(14, 'days').format('YYYY-MM-DD');
        }
        else {
            this.localTo = this.localFrom;
        }
    }
    async handleExport() {
        try {
            this.isExporting = true;
            const response = await this.mealReportService.getMealReport({
                property_id: this.propertyid,
                from: this.localFrom,
                to: this.localTo,
                report_type: this.localReportType,
                meal_type_code: this.localMealType,
                is_export_to_excel: true,
            });
            const link = response.My_Params_Get_Meal_Report?.Link_excel;
            if (link) {
                // Use clean axios to bypass interceptors (avoiding network errors)
                const cleanAxios = axios.create();
                const responseBlob = await cleanAxios.get(link, { responseType: 'blob' });
                // Force download via local blob URL
                const blob = new Blob([responseBlob.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                const filename = link.split('/').pop() || 'meal_report.xlsx';
                a.setAttribute('download', filename);
                document.body.appendChild(a);
                a.click();
                // Cleanup
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }
        }
        catch (error) {
            // Export Error handled silently or via UI
        }
        finally {
            this.isExporting = false;
        }
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        const lcz = locales.entries || {};
        const summary = this.mealCountSummary || [];
        const sum = (key) => summary.reduce((acc, day) => acc + (Number(day[key]) || 0), 0);
        const mealMetrics = [
            { label: 'Breakfast', icon: 'mug-saucer', intent: 'brand', adults: sum('Breakfast_Ad'), children: sum('Breakfast_Ch') },
            { label: 'Lunch', icon: 'utensils', intent: 'success', adults: sum('Lunch_Ad'), children: sum('Lunch_Ch') },
            { label: 'Dinner', icon: 'moon', intent: 'warning', adults: sum('Dinner_Ad'), children: sum('Dinner_Ch') },
        ];
        return (h("ir-page", { label: "Meal Report", class: 'page' }, h("ir-custom-button", { slot: "page-header", type: "button", size: "small", appearance: "outlined", loading: this.isExporting, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.handleExport();
            }, class: "ir-meal-report__export-btn" }, h("wa-icon", { name: "download", slot: "start", style: { fontSize: '14px' } }), lcz.Lcz_Export || 'Export'), this.localReportType === 'MEAL_COUNT' && (h("div", { class: "ir-meal-report__metrics" }, mealMetrics.map(metric => (h("ir-metric-card", { key: metric.label, label: metric.label, icon: metric.icon, intent: metric.intent, value: metric.adults + metric.children, unit: "guests", caption: `Adults ${metric.adults} · Children ${metric.children}`, loading: this.isDataLoading }))))), h("div", { class: "ir-meal-report__layout" }, h("ir-meal-report-filters", { reportType: this.localReportType, fromDate: this.localFrom, toDate: this.localTo, mealType: this.localMealType, setupEntries: this.setupEntries, isLoading: this.isDataLoading, lcz: lcz, onReportTypeChange: e => {
                this.localReportType = e.detail;
                this.applyFilters();
                if (e.detail === 'GUEST_LIST') {
                    this.localTo = this.localFrom;
                }
            }, onDateChange: e => {
                this.localFrom = e.detail.from;
                this.localTo = e.detail.to;
            }, onMealTypeChange: async (e) => {
                this.localMealType = e.detail;
            }, onFilterApply: () => this.applyFilters(), onFilterReset: () => this.resetFilters(), onPresetDate: e => this.setPresetDate(e.detail) }), h("wa-card", { class: "ir-meal-report__results" }, h("div", null, this.localReportType === 'GUEST_LIST' ? (h("ir-meal-guest-list", { guestList: this.guestList })) : (h("ir-meal-count-summary", { mealCountSummary: this.mealCountSummary })))))));
    }
    static get is() { return "ir-meal-report"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-meal-report.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-meal-report.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
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
                "attribute": "ticket"
            },
            "propertyid": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "propertyid"
            },
            "baseurl": {
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
                "attribute": "baseurl"
            },
            "language": {
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
                "attribute": "language",
                "defaultValue": "'en'"
            }
        };
    }
    static get states() {
        return {
            "isPageLoading": {},
            "isExporting": {},
            "isDataLoading": {},
            "localReportType": {},
            "localFrom": {},
            "localTo": {},
            "localMealType": {},
            "guestList": {},
            "mealCountSummary": {},
            "setupEntries": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "ticketChanged"
            }, {
                "propName": "propertyid",
                "methodName": "handlePropertyChange"
            }];
    }
}
