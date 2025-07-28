var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import Token from "../../models/Token";
import { Host, h } from "@stencil/core";
import moment from "moment";
import locales from "../../stores/locales.store";
import { RoomService } from "../../services/room.service";
import { PropertyService } from "../../services/property.service";
export class IrMonthlyBookingsReport {
    constructor() {
        this.language = '';
        this.ticket = '';
        this.isPageLoading = true;
        this.isLoading = null;
        this.reports = [];
        this.tokenService = new Token();
        this.roomService = new RoomService();
        this.propertyService = new PropertyService();
    }
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
            const { DailyStats } = currentReports, rest = __rest(currentReports, ["DailyStats"]);
            this.stats = Object.assign({}, rest);
            if (include_previous_year && results[isExportToExcel ? 1 : 2]) {
                const previousYearReports = results[isExportToExcel ? 1 : 2];
                let formattedReports = previousYearReports.DailyStats.map(getReportObj);
                enrichedReports = DailyStats.map(getReportObj).map(current => {
                    const previous = formattedReports.find(prev => prev.day === moment(current.day, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'));
                    return Object.assign(Object.assign({}, current), { last_year: previous !== null && previous !== void 0 ? previous : null });
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
    StatsCard({ icon, subtitle, title, value }) {
        if (!value) {
            return null;
        }
        return (h("div", { class: "card p-1 d-flex flex-column flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("p", { class: "m-0 p-0" }, title), h("ir-icons", { name: icon })), h("h4", { class: "m-0 p-0" }, h("b", { class: "m-0 p-0" }, value)), subtitle && h("p", { class: "m-0 p-0 small text-muted" }, subtitle)));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Daily Occupancy"), h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getReports(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("section", null, h("div", { class: "d-flex flex-column flex-md-row w-100", style: { gap: '1rem', alignItems: 'stretch' } }, this.StatsCard({
            icon: ((_b = this.stats) === null || _b === void 0 ? void 0 : _b.Occupancy_Difference_From_Previous_Month) < 0 ? 'arrow-trend-down' : 'arrow-trend-up',
            title: 'Average Occupancy',
            value: this.stats.AverageOccupancy ? ((_c = this.stats) === null || _c === void 0 ? void 0 : _c.AverageOccupancy.toFixed(2)) + '%' : null,
            subtitle: `${((_d = this.stats) === null || _d === void 0 ? void 0 : _d.Occupancy_Difference_From_Previous_Month) < 0 ? '' : '+'}${(_e = this.stats) === null || _e === void 0 ? void 0 : _e.Occupancy_Difference_From_Previous_Month.toFixed(2)}% from last month`,
        }), this.StatsCard({
            icon: 'hotel',
            title: 'Total Units',
            value: ((_f = this.stats) === null || _f === void 0 ? void 0 : _f.TotalUnitsBooked) ? (_g = this.stats) === null || _g === void 0 ? void 0 : _g.TotalUnitsBooked.toString() : null,
            subtitle: 'Booked',
        }), this.StatsCard({
            icon: 'calendar',
            title: 'Peak Days',
            value: ((_h = this.stats) === null || _h === void 0 ? void 0 : _h.PeakDays.length) === 0 ? null : (_k = (_j = this.stats) === null || _j === void 0 ? void 0 : _j.PeakDays) === null || _k === void 0 ? void 0 : _k.map(pd => moment(pd.Date, 'YYYY-MM-DD').format('D').concat('th')).join(' - '),
            subtitle: `${Math.max(...(((_l = this.stats.PeakDays) === null || _l === void 0 ? void 0 : _l.map(pd => pd.OccupancyPercent)) || []))}% occupancy`,
        })), h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, h("ir-monthly-bookings-report-filter", { isLoading: this.isLoading === 'filter', class: "filters-card", baseFilters: this.baseFilters }), h("ir-monthly-bookings-report-table", { reports: this.reports }))))));
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
                "attribute": "language",
                "reflect": false,
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
                "attribute": "ticket",
                "reflect": false,
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
                "attribute": "propertyid",
                "reflect": false
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
                "attribute": "p",
                "reflect": false
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
//# sourceMappingURL=ir-monthly-bookings-report.js.map
