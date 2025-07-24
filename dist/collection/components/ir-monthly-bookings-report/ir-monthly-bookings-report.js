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
                };
            };
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const { date, include_previous_year } = this.filters;
            const currentReports = await this.propertyService.getMonthlyStats({
                from_date: date.firstOfMonth,
                to_date: date.lastOfMonth,
                property_id: this.property_id,
                is_export_to_excel: isExportToExcel,
            });
            let enrichedReports = [];
            if (include_previous_year) {
                const previousYearReports = await this.propertyService.getMonthlyStats({
                    from_date: moment(date.firstOfMonth, 'YYYY-MM-DD').add(-1, 'year').format('YYYY-MM-DD'),
                    to_date: moment(date.lastOfMonth, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'),
                    property_id: this.property_id,
                });
                enrichedReports = currentReports.map(current => {
                    const previous = previousYearReports.find(prev => prev.day === moment(current.day, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'));
                    return Object.assign(Object.assign({}, getReportObj(current)), { last_year: previous ? getReportObj(previous) : null });
                });
            }
            else {
                enrichedReports = currentReports.map(getReportObj);
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
        var _a;
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Daily Occupancy"), h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getReports(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, h("ir-monthly-bookings-report-filter", { isLoading: this.isLoading === 'filter', class: "filters-card", baseFilters: this.baseFilters }), h("ir-monthly-bookings-report-table", { reports: this.reports })))));
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
            "property_id": {}
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
