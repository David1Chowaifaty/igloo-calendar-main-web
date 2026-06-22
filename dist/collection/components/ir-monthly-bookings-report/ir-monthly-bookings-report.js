import Token from "../../models/Token";
import { h } from "@stencil/core";
import moment from "moment";
import locales from "../../stores/locales.store";
import { RoomService } from "../../services/room.service";
import { PropertyService } from "../../services/property.service";
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
    tokenService = new Token();
    roomService = new RoomService();
    propertyService = new PropertyService();
    componentWillLoad() {
        this.baseFilters = {
            date: {
                description: moment().format('MMMM YYYY'),
                firstOfMonth: moment().startOf('month').format('YYYY-MM-DD'),
                lastOfMonth: moment().endOf('month').format('YYYY-MM-DD'),
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
        return (h("ir-page", { label: "Daily Occupancy" }, h("ir-custom-button", { variant: "neutral", onClickHandler: async (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                await this.getReports(true);
            }, appearance: "outlined", slot: "page-header", loading: this.isLoading === 'export' }, h("wa-icon", { name: "download", slot: "start" }), locales.entries?.Lcz_Export), h("section", { class: "report-layout" }, h("section", null, h("div", { class: "report-stats-row" }, h("ir-metric-card", { class: "report-metric", icon: this.stats?.Occupancy_Difference_From_Previous_Month < 0 ? 'arrow-trend-down' : 'arrow-trend-up', label: "Average Occupancy", value: this.stats.AverageOccupancy ? this.stats?.AverageOccupancy.toFixed(2) : null, unit: "%", trend: this.stats?.Occupancy_Difference_From_Previous_Month, trendLabel: "from last month", caption: this.stats?.Occupancy_Difference_From_Previous_Month != null && this.stats?.AverageOccupancy != null
                ? `Last month: ${(this.stats.AverageOccupancy - this.stats.Occupancy_Difference_From_Previous_Month).toFixed(2)}%`
                : undefined }), h("ir-metric-card", { class: "report-metric", icon: "hotel", label: "Total Units", value: this.stats?.TotalUnitsBooked ? this.stats?.TotalUnitsBooked.toString() : null, caption: "Booked" }), h("ir-metric-card", { class: "report-metric", icon: "user-group", label: "Total Guests", value: this.stats?.Total_Guests ? this.stats?.Total_Guests?.toString() : null, caption: "Stayed" }), h("ir-metric-card", { class: "report-metric", icon: "calendar", label: "Peak Days", value: this.stats?.PeakDays.length === 0 ? null : this.stats?.PeakDays?.map(pd => moment(pd.Date, 'YYYY-MM-DD').format('D').concat('th')).join(' - '), caption: `${Math.max(...(this.stats.PeakDays?.map(pd => pd.OccupancyPercent) || []))}% occupancy` })), h("div", { class: "report-content-row" }, h("ir-monthly-bookings-report-filter", { isLoading: this.isLoading === 'filter', class: "filters-card", baseFilters: this.baseFilters }), h("ir-monthly-bookings-report-table", { reports: this.reports }))))));
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
