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
import { PropertyService } from "../../services/property.service";
import { RoomService } from "../../services/room.service";
import locales from "../../stores/locales.store";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { v4 } from "uuid";
export class IrSalesByCountry {
    constructor() {
        this.language = '';
        this.ticket = '';
        this.isLoading = null;
        this.isPageLoading = true;
        this.token = new Token();
        this.roomService = new RoomService();
        this.propertyService = new PropertyService();
        this.baseFilters = {
            FROM_DATE: moment().add(-7, 'days').format('YYYY-MM-DD'),
            TO_DATE: moment().format('YYYY-MM-DD'),
            BOOK_CASE: '001',
            WINDOW: 7,
            include_previous_year: false,
        };
    }
    componentWillLoad() {
        this.salesFilters = this.baseFilters;
        if (this.ticket) {
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
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
            const requests = [this.roomService.fetchLanguage(this.language), this.getCountrySales()];
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
    async getCountrySales(isExportToExcel = false) {
        try {
            const _a = this.salesFilters, { include_previous_year } = _a, filterParams = __rest(_a, ["include_previous_year"]);
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const currentSales = await this.propertyService.getCountrySales(Object.assign({ AC_ID: this.property_id, is_export_to_excel: isExportToExcel }, filterParams));
            const shouldFetchPreviousYear = !isExportToExcel && include_previous_year && filterParams.WINDOW === 365;
            let enrichedSales = [];
            if (shouldFetchPreviousYear) {
                const previousYearSales = await this.propertyService.getCountrySales(Object.assign(Object.assign({ AC_ID: this.property_id, is_export_to_excel: false }, filterParams), { FROM_DATE: moment(filterParams.FROM_DATE).subtract(1, 'year').format('YYYY-MM-DD'), TO_DATE: moment(filterParams.TO_DATE).subtract(1, 'year').format('YYYY-MM-DD') }));
                enrichedSales = currentSales.map(current => {
                    var _a;
                    const previous = previousYearSales.find(prev => prev.COUNTRY.toLowerCase() === current.COUNTRY.toLowerCase());
                    return {
                        id: v4(),
                        country: current.COUNTRY,
                        nights: current.NIGHTS,
                        percentage: current.PCT,
                        last_year_percentage: (_a = previous === null || previous === void 0 ? void 0 : previous.PCT) !== null && _a !== void 0 ? _a : null,
                        revenue: currentSales.REVENUE,
                    };
                });
            }
            else {
                enrichedSales = currentSales.map(record => ({
                    id: v4(),
                    country: record.COUNTRY,
                    nights: record.NIGHTS,
                    percentage: record.PCT,
                    last_year_percentage: null,
                    revenue: currentSales.REVENUE,
                }));
            }
            this.salesData = enrichedSales;
        }
        catch (error) {
            console.error('Failed to fetch sales data:', error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Sales by Country"), h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales.entries.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getCountrySales(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, h("ir-sales-filters", { isLoading: this.isLoading === 'filter', onApplyFilters: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.salesFilters = e.detail;
                this.getCountrySales();
            }, baseFilters: this.baseFilters }), h("ir-sales-table", { class: "card mb-0", records: this.salesData })))));
    }
    static get is() { return "ir-sales-by-country"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-by-country.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-by-country.css"]
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
            "isLoading": {},
            "isPageLoading": {},
            "property_id": {},
            "salesData": {},
            "salesFilters": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "ticketChanged"
            }];
    }
}
//# sourceMappingURL=ir-sales-by-country.js.map
