import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { o as objectType, n as numberType, e as enumType, s as stringType, b as booleanType } from './index2.js';
import { T as Token } from './Token.js';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { H as groupEntryTablesResult } from './utils.js';
import { d as defineCustomElement$m } from './ir-air-date-picker2.js';
import { d as defineCustomElement$l } from './ir-button2.js';
import { d as defineCustomElement$k } from './ir-custom-button2.js';
import { d as defineCustomElement$j } from './ir-date-range-filter2.js';
import { d as defineCustomElement$i } from './ir-date-select2.js';
import { d as defineCustomElement$h } from './ir-empty-state2.js';
import { d as defineCustomElement$g } from './ir-filter-card2.js';
import { d as defineCustomElement$f } from './ir-icons2.js';
import { d as defineCustomElement$e } from './ir-input2.js';
import { d as defineCustomElement$d } from './ir-interceptor2.js';
import { d as defineCustomElement$c } from './ir-loading-screen2.js';
import { d as defineCustomElement$b } from './ir-meal-count-summary2.js';
import { d as defineCustomElement$a } from './ir-meal-guest-list2.js';
import { d as defineCustomElement$9 } from './ir-meal-report-filters2.js';
import { d as defineCustomElement$8 } from './ir-metric-card2.js';
import { d as defineCustomElement$7 } from './ir-otp2.js';
import { d as defineCustomElement$6 } from './ir-otp-modal2.js';
import { d as defineCustomElement$5 } from './ir-page2.js';
import { d as defineCustomElement$4 } from './ir-spinner2.js';
import { d as defineCustomElement$3 } from './ir-toast2.js';
import { d as defineCustomElement$2 } from './ir-toast-alert2.js';
import { d as defineCustomElement$1 } from './ir-toast-provider2.js';

const ParamsGetMealReportSchema = objectType({
    property_id: numberType(),
    report_type: enumType(['GUEST_LIST', 'MEAL_COUNT']),
    from: stringType(),
    to: stringType(),
    meal_type_code: stringType().optional().nullable(),
    is_export_to_excel: booleanType().optional().default(false),
});
const ParamsSetHBPreferenceSchema = objectType({
    property_id: numberType(),
    room_identifier: stringType(),
    code: stringType(),
});

class MealReportService {
    async getMealReport(props) {
        const payload = ParamsGetMealReportSchema.parse(props);
        const { data } = await axios.post(`/Get_Meal_Report`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async setHBPreference(props) {
        const payload = ParamsSetHBPreferenceSchema.parse(props);
        const { data } = await axios.post(`/Set_HB_Preference`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
    }
    async getSetupEntriesByTableNameMulti(entries) {
        const { data } = await axios.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI`, { TBL_NAMES: entries });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

const irMealReportCss = ".sc-ir-meal-report-h{display:block}.ir-meal-report__export-btn.sc-ir-meal-report{height:100%}.ir-meal-report__metrics.sc-ir-meal-report{display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:var(--wa-space-m);margin-bottom:var(--wa-space-m)}.ir-meal-report__layout.sc-ir-meal-report{display:flex;flex-direction:column;gap:var(--wa-space-m);margin-top:var(--wa-space-xs)}.ir-meal-report__results.sc-ir-meal-report{min-width:0}@media (min-width: 992px){.ir-meal-report__layout.sc-ir-meal-report{flex-direction:row;align-items:flex-start}.ir-meal-report__layout.sc-ir-meal-report>ir-meal-report-filters.sc-ir-meal-report{flex:0 0 320px;min-width:0}.ir-meal-report__layout.sc-ir-meal-report>.ir-meal-report__results.sc-ir-meal-report{flex:1 1 auto}}";
const IrMealReportStyle0 = irMealReportCss;

const IrMealReport = /*@__PURE__*/ proxyCustomElement(class IrMealReport extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    ticket;
    propertyid;
    baseurl;
    language = 'en';
    isPageLoading = true;
    isExporting = false;
    isDataLoading = false;
    localReportType = 'MEAL_COUNT';
    localFrom = hooks().format('YYYY-MM-DD');
    localTo = hooks().format('YYYY-MM-DD');
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
        this.localFrom = hooks().format('YYYY-MM-DD');
        this.localTo = hooks().format('YYYY-MM-DD');
        if (this.setupEntries.meal_type.length > 0) {
            this.localMealType = this.setupEntries.meal_type[0].CODE_NAME;
        }
        this.applyFilters();
    }
    async setPresetDate(type) {
        const date = type === 'today' ? hooks() : hooks().add(1, 'day');
        this.localFrom = date.format('YYYY-MM-DD');
        if (type === 'today' && this.localReportType === 'MEAL_COUNT') {
            this.localTo = hooks().add(14, 'days').format('YYYY-MM-DD');
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
    static get watchers() { return {
        "ticket": ["ticketChanged"],
        "propertyid": ["handlePropertyChange"]
    }; }
    static get style() { return IrMealReportStyle0; }
}, [2, "ir-meal-report", {
        "ticket": [1],
        "propertyid": [2],
        "baseurl": [1],
        "language": [1],
        "isPageLoading": [32],
        "isExporting": [32],
        "isDataLoading": [32],
        "localReportType": [32],
        "localFrom": [32],
        "localTo": [32],
        "localMealType": [32],
        "guestList": [32],
        "mealCountSummary": [32],
        "setupEntries": [32]
    }, undefined, {
        "ticket": ["ticketChanged"],
        "propertyid": ["handlePropertyChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-meal-report", "ir-air-date-picker", "ir-button", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-empty-state", "ir-filter-card", "ir-icons", "ir-input", "ir-interceptor", "ir-loading-screen", "ir-meal-count-summary", "ir-meal-guest-list", "ir-meal-report-filters", "ir-metric-card", "ir-otp", "ir-otp-modal", "ir-page", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-meal-report":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMealReport);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-filter-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-meal-count-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-meal-guest-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-meal-report-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-metric-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrMealReport as I, defineCustomElement as d };

//# sourceMappingURL=ir-meal-report2.js.map