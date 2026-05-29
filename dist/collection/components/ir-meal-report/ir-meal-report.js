import { Host, h } from "@stencil/core";
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
        hb_preference: []
    };
    mealReportService = new MealReportService();
    tokenService = new Token();
    ticketChanged(newValue) {
        if (newValue) {
            this.tokenService.setToken(newValue);
            this.init();
        }
    }
    async componentWillLoad() {
        if (this.baseurl) {
            this.tokenService.setBaseUrl(this.baseurl);
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            await this.init();
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
            console.error('Meal Report Init Error:', error);
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
            console.error('Fetch Report Error:', error);
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
        this.guestList = [];
        this.mealCountSummary = [];
        this.applyFilters();
    }
    async setPresetDate(type) {
        const date = type === 'today' ? moment() : moment().add(1, 'day');
        this.localFrom = date.format('YYYY-MM-DD');
        this.guestList = [];
        this.mealCountSummary = [];
        if (type === 'today' && this.localReportType === 'MEAL_COUNT') {
            this.localTo = moment().add(14, 'days').format('YYYY-MM-DD');
        }
        else {
            this.localTo = this.localFrom;
        }
        await this.applyFilters();
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
            console.error('Export Error:', error);
        }
        finally {
            this.isExporting = false;
        }
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        const mealType = this.setupEntries?.meal_type || [];
        const headerTitle = this.localReportType === 'GUEST_LIST'
            ? 'Guest list'
            : 'Meal count';
        const mealTypeLabel = this.localReportType === 'GUEST_LIST' && mealType.length > 0
            ? (mealType.find(t => t.CODE_NAME === this.localMealType)?.CODE_VALUE_EN || '')
            : '';
        const formatDate = (dateStr) => {
            const m = moment(dateStr);
            return `${m.format('ddd')} ${m.format('MMM DD, YYYY')}`;
        };
        const formattedFrom = formatDate(this.localFrom);
        const formattedTo = formatDate(this.localTo);
        const lcz = locales.entries || {};
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Meal report"), h("ir-custom-button", { type: "button", size: "small", appearance: "outlined", loading: this.isExporting, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.handleExport();
            }, style: { height: '100%' } }, h("wa-icon", { name: "file", slot: "end", style: { fontSize: '14px' } }), lcz.Lcz_Export || 'Export')), h("div", { class: "d-flex flex-column flex-lg-row mt-1", style: { gap: '1rem' } }, h("div", { class: "card mb-0 p-1 d-flex flex-column sales-filters-card shadow-sm border", style: { width: '300px', flexShrink: '0' }, onKeyDown: (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            } }, h("div", { class: "d-flex align-items-center justify-content-between sales-filters-header p-2 border-bottom mb-2" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { class: "m-0 p-0 flex-grow-1 font-weight-bold", style: { fontSize: '13px' } }, lcz.Lcz_Filters || 'Filters'))), h("div", { class: "p-2 d-flex flex-column", style: { gap: '1.25rem' } }, h("fieldset", { class: "filter-group" }, h("label", { class: "mb-2 d-block small font-weight-bold text-dark" }, "Report type"), h("wa-radio-group", { value: this.localReportType, onchange: e => {
                const val = e.target.value;
                this.localReportType = val;
                this.guestList = [];
                this.mealCountSummary = [];
                if (val === 'GUEST_LIST') {
                    this.localTo = this.localFrom;
                }
            } }, h("wa-radio", { value: "GUEST_LIST" }, "Guest list"), h("wa-radio", { value: "MEAL_COUNT" }, "Meal count"))), h("fieldset", { class: "filter-group" }, h("label", { class: "mb-2 d-block small font-weight-bold text-dark" }, "Stay date"), this.localReportType === 'GUEST_LIST' ? (h("div", { class: "d-flex flex-column gap-2" }, h("div", { class: "d-flex gap-2" }, h("ir-custom-button", { type: "button", size: "small", variant: this.localFrom === moment().format('YYYY-MM-DD') ? 'brand' : 'neutral', appearance: this.localFrom === moment().format('YYYY-MM-DD') ? 'filled' : 'outlined', onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.setPresetDate('today');
            }, style: { flex: '1' } }, "Today"), h("ir-custom-button", { type: "button", size: "small", variant: this.localFrom === moment().add(1, 'day').format('YYYY-MM-DD') ? 'brand' : 'neutral', appearance: this.localFrom === moment().add(1, 'day').format('YYYY-MM-DD') ? 'filled' : 'outlined', onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.setPresetDate('tomorrow');
            }, style: { flex: '1' } }, "Tomorrow")))) : (h("div", { class: "d-flex flex-column gap-2 date-filter-group p-2 bg-light border rounded" }, h("ir-range-picker", { fromDate: moment(this.localFrom, 'YYYY-MM-DD'), toDate: moment(this.localTo, 'YYYY-MM-DD'), minDate: moment().format('YYYY-MM-DD'), maxDate: moment().add(14, 'days').format('YYYY-MM-DD'), onDateRangeChanged: e => {
                const { fromDate, toDate } = e.detail;
                this.localFrom = fromDate.format('YYYY-MM-DD');
                this.localTo = toDate.format('YYYY-MM-DD');
                this.guestList = [];
                this.mealCountSummary = [];
            }, withOverlay: false })))), this.localReportType === 'GUEST_LIST' && (h("fieldset", { class: "filter-group" }, h("label", { class: "mb-2 d-block small font-weight-bold text-dark" }, "Meal type"), mealType.length > 0 ? (h("div", { class: "d-flex flex-wrap gap-1" }, mealType.map(type => (h("ir-custom-button", { type: "button", size: "small", variant: this.localMealType === type.CODE_NAME ? 'brand' : 'neutral', appearance: this.localMealType === type.CODE_NAME ? 'filled' : 'outlined', onClickHandler: async (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.localMealType = type.CODE_NAME;
                this.guestList = [];
                this.mealCountSummary = [];
                await this.applyFilters();
            }, style: { fontSize: '10px', '--ir-button-padding': '0.2rem 0.4rem' } }, type.CODE_VALUE_EN))))) : (h("div", { class: "p-2 border rounded bg-warning bg-opacity-10 text-warning extra-small" }, "No meal types found.")))), h("div", { class: "d-flex align-items-center justify-content-end gap-2 mt-auto pt-3 border-top filter-actions" }, h("ir-custom-button", { type: "button", size: "small", variant: "neutral", appearance: "filled", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.resetFilters();
            }, style: { display: 'inline-block', marginRight: '1rem' } }, lcz.Lcz_Reset || 'Reset'), h("ir-custom-button", { type: "button", size: "small", variant: "brand", loading: this.isDataLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.applyFilters();
            } }, lcz.Lcz_Apply || 'Apply')))), h("div", { class: "flex-grow-1 card mb-0 overflow-hidden shadow-sm border-0" }, h("div", { class: "card-header bg-white py-2 px-3 border-bottom d-flex align-items-center" }, h("h3", { class: "h6 fw-bold mb-0 text-dark flex-grow-1" }, headerTitle, h("span", { class: "text-muted small ms-2 fw-normal" }, "(", formattedFrom, this.localReportType === 'MEAL_COUNT' ? ` - ${formattedTo}` : '', ")", this.localReportType === 'GUEST_LIST' && mealTypeLabel && ` - ${mealTypeLabel}`)), this.localReportType === 'GUEST_LIST' && this.guestList?.length > 0 && (h("span", { class: "badge bg-light text-dark border extra-small" }, this.guestList.length, " Units"))), h("div", { class: "card-body p-0 position-relative", style: { minHeight: '400px' } }, this.isDataLoading && (h("div", { class: "loading-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-50 z-index-2" }, h("ir-spinner", null))), this.localReportType === 'GUEST_LIST' ? (h("ir-meal-guest-list", { guestList: this.guestList })) : (h("ir-meal-count-summary", { mealCountSummary: this.mealCountSummary })))))), h("ir-toast-provider", null)));
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
                "attribute": "ticket",
                "reflect": false
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
                "attribute": "propertyid",
                "reflect": false
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
                "attribute": "baseurl",
                "reflect": false
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
                "attribute": "language",
                "reflect": false,
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
//# sourceMappingURL=ir-meal-report.js.map
