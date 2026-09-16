import ApiClient from "../../models/ApiClient";
import { h } from "@stencil/core";
import moment from "moment";
import { RoomService } from "../../services/room.service";
import { PropertyService } from "../../services/property.service";
import { formatDate } from "../../utils/date/index";
import { LocaleController } from "../../services/locale/locale.controller";
import { LanguageSync } from "../../services/locale/language-sync";
import { SCREEN_TABLES } from "../../services/locale/screen-tables";
import { t } from "../../services/locale/t";
import { formatCount, formatNumber, formatPercent } from "../../utils/number";
export class IrMonthlyBookingsReport {
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
    apiClientService = new ApiClient();
    roomService = new RoomService();
    propertyService = new PropertyService();
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new LanguageSync(SCREEN_TABLES.monthlyBookingsReport, () => this.init());
    componentWillLoad() {
        this.baseFilters = {
            date: {
                description: formatDate(moment(), 'MMMM YYYY'),
                firstOfMonth: moment().startOf('month').format('YYYY-MM-DD'),
                lastOfMonth: moment().endOf('month').format('YYYY-MM-DD'),
            },
            include_previous_year: false,
        };
        this.filters = this.baseFilters;
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.apiClientService.setApiClient(this.ticket);
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
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = LocaleController.load({ language: this.language, tables: SCREEN_TABLES.monthlyBookingsReport });
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
                    language: LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [localeReady, this.getReports()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: LocaleController.language,
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
                    adults: report.Adults,
                    children: report.Children,
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
                    from_date: moment(date.firstOfMonth, 'YYYY-MM-DD').add(-1, 'year').format('YYYY-MM-DD'),
                    to_date: moment(date.lastOfMonth, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'),
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
                    const previous = formattedReports.find(prev => prev.day === moment(current.day, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'));
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
        return (h("ir-page", { label: t('Lcz_DailyOccupancy', { fallback: 'Daily Occupancy' }) }, h("ir-custom-button", { variant: "neutral", onClickHandler: async (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                await this.getReports(true);
            }, appearance: "outlined", slot: "page-header", loading: this.isLoading === 'export' }, h("wa-icon", { name: "download", slot: "start" }), t('Lcz_Export', { fallback: 'Export' })), h("section", { class: "report-layout" }, h("section", null, h("div", { class: "report-stats-row" }, h("ir-metric-card", { class: "report-metric", icon: this.stats?.Occupancy_Difference_From_Previous_Month < 0 ? 'arrow-trend-down' : 'arrow-trend-up', label: t('Lcz_AverageOccupancy', { fallback: 'Average Occupancy' }), value: this.stats.AverageOccupancy ? formatNumber(this.stats.AverageOccupancy, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : null, unit: "%", trend: this.stats?.Occupancy_Difference_From_Previous_Month, trendLabel: t('Lcz_FromLastMonth', { fallback: 'from last month' }), caption: this.stats?.Occupancy_Difference_From_Previous_Month != null && this.stats?.AverageOccupancy != null
                ? `${t('Lcz_LastMonth', { fallback: 'Last month:' })} ${formatPercent(this.stats.AverageOccupancy - this.stats.Occupancy_Difference_From_Previous_Month, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                : undefined }), h("ir-metric-card", { class: "report-metric", icon: "hotel", label: t('Lcz_TotalUnits', { fallback: 'Total Units' }), value: this.stats?.TotalUnitsBooked ? formatCount(this.stats.TotalUnitsBooked) : null, caption: t('Lcz_Booked', { fallback: 'Booked' }) }), h("ir-metric-card", { class: "report-metric", icon: "user-group", label: t('Lcz_TotalGuests', { fallback: 'Total Guests' }), value: this.stats?.Total_Guests ? formatCount(this.stats.Total_Guests) : null, caption: t('Lcz_Stayed', { fallback: 'Stayed' }) }), h("ir-metric-card", { class: "report-metric", icon: "calendar", label: t('Lcz_PeakDays', { fallback: 'Peak Days' }), value: this.stats?.PeakDays.length === 0 ? null : this.stats?.PeakDays?.map(pd => formatDate(pd.Date, 'Do')).join(' - '), caption: t('Lcz_PercentOccupancy', { fallback: '%1% occupancy', params: [formatNumber(Math.max(...(this.stats.PeakDays?.map(pd => pd.OccupancyPercent) || [])))] }) })), h("div", { class: "report-content-row" }, h("ir-monthly-bookings-report-filter", { isLoading: this.isLoading === 'filter', class: "filters-card", baseFilters: this.baseFilters }), h("ir-monthly-bookings-report-table", { reports: this.reports }))))));
    }
    static get is() { return "ir-monthly-bookings-report"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-monthly-bookings-report.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-monthly-bookings-report.css"]
        };
    }
    static get properties() {
        return {
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
                "defaultValue": "''"
            },
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
                "attribute": "ticket",
                "defaultValue": "''"
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
            "p": {
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
                "attribute": "p"
            }
        };
    }
    static get states() {
        return {
            "isPageLoading": {},
            "isLoading": {},
            "reports": {},
            "filters": {},
            "property_id": {},
            "stats": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "language",
                "methodName": "languageChanged"
            }, {
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "applyFilters",
                "method": "handleApplyFiltersChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
