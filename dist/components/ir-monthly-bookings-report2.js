import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { R as RoomService } from './room.service.js';
import { P as PropertyService } from './property.service.js';
import { d as defineCustomElement$h } from './ir-button2.js';
import { d as defineCustomElement$g } from './ir-checkbox2.js';
import { d as defineCustomElement$f } from './ir-icons2.js';
import { d as defineCustomElement$e } from './ir-interceptor2.js';
import { d as defineCustomElement$d } from './ir-loading-screen2.js';
import { d as defineCustomElement$c } from './ir-monthly-bookings-report-filter2.js';
import { d as defineCustomElement$b } from './ir-monthly-bookings-report-table2.js';
import { d as defineCustomElement$a } from './ir-otp2.js';
import { d as defineCustomElement$9 } from './ir-otp-modal2.js';
import { d as defineCustomElement$8 } from './ir-progress-indicator2.js';
import { d as defineCustomElement$7 } from './ir-select2.js';
import { d as defineCustomElement$6 } from './ir-spinner2.js';
import { d as defineCustomElement$5 } from './ir-stats-card2.js';
import { d as defineCustomElement$4 } from './ir-toast2.js';
import { d as defineCustomElement$3 } from './ir-toast-alert2.js';
import { d as defineCustomElement$2 } from './ir-toast-provider2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

const irMonthlyBookingsReportCss = ".sc-ir-monthly-bookings-report-h{display:block}";
const IrMonthlyBookingsReportStyle0 = irMonthlyBookingsReportCss;

const IrMonthlyBookingsReport = /*@__PURE__*/ proxyCustomElement(class IrMonthlyBookingsReport extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    isPageLoading = true;
    isLoading = null;
    reports = [];
    filters;
    property_id;
    stats;
    baseFilters;
    tokenService = new Token();
    roomService = new RoomService();
    propertyService = new PropertyService();
    componentWillLoad() {
        this.baseFilters = {
            date: {
                description: hooks().format('MMMM YYYY'),
                firstOfMonth: hooks().startOf('month').format('YYYY-MM-DD'),
                lastOfMonth: hooks().endOf('month').format('YYYY-MM-DD'),
            },
            include_previous_year: false,
        };
        this.filters = this.baseFilters;
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleApplyFiltersChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = e.detail;
        this.getReports();
    }
    async init() {
        try {
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.roomService.fetchLanguage(this.language), this.getReports()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getReports(isExportToExcel = false) {
        try {
            const getReportObj = (report) => {
                return {
                    day: report.Date,
                    units_booked: report.Units_booked,
                    occupancy_percent: report.Occupancy,
                    adr: report.ADR,
                    rooms_revenue: report.Rooms_Revenue,
                    total_guests: report?.Total_Guests,
                };
            };
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const { date, include_previous_year } = this.filters;
            const requests = [
                this.propertyService.getMonthlyStats({
                    from_date: date.firstOfMonth,
                    to_date: date.lastOfMonth,
                    property_id: this.property_id,
                    is_export_to_excel: isExportToExcel,
                }),
            ];
            if (include_previous_year) {
                requests.push(this.propertyService.getMonthlyStats({
                    from_date: hooks(date.firstOfMonth, 'YYYY-MM-DD').add(-1, 'year').format('YYYY-MM-DD'),
                    to_date: hooks(date.lastOfMonth, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'),
                    property_id: this.property_id,
                }));
            }
            const results = await Promise.all(requests);
            const currentReports = results[0];
            let enrichedReports = [];
            const { DailyStats, ...rest } = currentReports;
            this.stats = { ...rest };
            if (include_previous_year && results[isExportToExcel ? 0 : 1]) {
                const previousYearReports = results[isExportToExcel ? 0 : 1];
                let formattedReports = previousYearReports.DailyStats.map(getReportObj);
                enrichedReports = DailyStats.map(getReportObj).map(current => {
                    const previous = formattedReports.find(prev => prev.day === hooks(current.day, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'));
                    return {
                        ...current,
                        last_year: previous ?? null,
                    };
                });
            }
            else {
                enrichedReports = DailyStats.map(getReportObj);
            }
            this.reports = [...enrichedReports];
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Daily Occupancy"), h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales.entries?.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getReports(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("section", null, h("div", { class: "d-flex flex-column flex-md-row w-100", style: { gap: '1rem', alignItems: 'stretch' } }, h("ir-stats-card", { icon: this.stats?.Occupancy_Difference_From_Previous_Month < 0 ? 'arrow-trend-down' : 'arrow-trend-up', cardTitle: "Average Occupancy", value: this.stats.AverageOccupancy ? this.stats?.AverageOccupancy.toFixed(2) + '%' : null, subtitle: `${this.stats?.Occupancy_Difference_From_Previous_Month < 0 ? '' : '+'}${this.stats?.Occupancy_Difference_From_Previous_Month.toFixed(2)}% from last month` }), h("ir-stats-card", { icon: "hotel", cardTitle: "Total Units", value: this.stats?.TotalUnitsBooked ? this.stats?.TotalUnitsBooked.toString() : null, subtitle: "Booked" }), h("ir-stats-card", { icon: "user_group", cardTitle: "Total Guests", value: this.stats?.Total_Guests ? this.stats?.Total_Guests?.toString() : null, subtitle: "Stayed" }), h("ir-stats-card", { icon: "calendar", cardTitle: "Peak Days", value: this.stats?.PeakDays.length === 0 ? null : this.stats?.PeakDays?.map(pd => hooks(pd.Date, 'YYYY-MM-DD').format('D').concat('th')).join(' - '), subtitle: `${Math.max(...(this.stats.PeakDays?.map(pd => pd.OccupancyPercent) || []))}% occupancy` })), h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, h("ir-monthly-bookings-report-filter", { isLoading: this.isLoading === 'filter', class: "filters-card", baseFilters: this.baseFilters }), h("ir-monthly-bookings-report-table", { reports: this.reports }))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrMonthlyBookingsReportStyle0; }
}, [2, "ir-monthly-bookings-report", {
        "language": [1],
        "ticket": [1],
        "propertyid": [2],
        "p": [1],
        "isPageLoading": [32],
        "isLoading": [32],
        "reports": [32],
        "filters": [32],
        "property_id": [32],
        "stats": [32]
    }, [[0, "applyFilters", "handleApplyFiltersChange"]], {
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-monthly-bookings-report", "ir-button", "ir-checkbox", "ir-icons", "ir-interceptor", "ir-loading-screen", "ir-monthly-bookings-report-filter", "ir-monthly-bookings-report-table", "ir-otp", "ir-otp-modal", "ir-progress-indicator", "ir-select", "ir-spinner", "ir-stats-card", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-monthly-bookings-report":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMonthlyBookingsReport);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-monthly-bookings-report-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-monthly-bookings-report-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-progress-indicator":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-stats-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrMonthlyBookingsReport as I, defineCustomElement as d };

//# sourceMappingURL=ir-monthly-bookings-report2.js.map