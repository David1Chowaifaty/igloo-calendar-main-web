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
import { Host, h } from "@stencil/core";
import Token from "../../models/Token";
import { PropertyService } from "../../services/property.service";
import { RoomService } from "../../services/room.service";
import locales from "../../stores/locales.store";
import moment from "moment";
export class IrSalesByChannel {
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
        this.channelSalesFilters = this.baseFilters;
        if (this.ticket) {
            this.token.setToken(this.ticket);
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
            const requests = [this.propertyService.getExposedAllowedProperties(), this.roomService.fetchLanguage(this.language)];
            const [properties] = await Promise.all(requests);
            this.allowedProperties = [...properties];
            this.baseFilters = Object.assign(Object.assign({}, this.baseFilters), { LIST_AC_ID: this.allowedProperties.map(p => p.id) });
            this.channelSalesFilters = Object.assign({}, this.baseFilters);
            await this.getChannelSales();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getChannelSales(isExportToExcel = false) {
        try {
            const _a = this.channelSalesFilters, { include_previous_year } = _a, filterParams = __rest(_a, ["include_previous_year"]);
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const currentSales = await this.propertyService.getChannelSales(Object.assign({
                // AC_ID: this.propertyid,
                is_export_to_excel: isExportToExcel
            }, filterParams));
            const shouldFetchPreviousYear = !isExportToExcel && include_previous_year;
            let enrichedSales = [];
            if (shouldFetchPreviousYear) {
                const previousYearSales = await this.propertyService.getChannelSales(Object.assign(Object.assign({
                    // AC_ID: this.propertyid.toString(),
                    is_export_to_excel: isExportToExcel
                }, filterParams), { FROM_DATE: moment(filterParams.FROM_DATE).subtract(1, 'year').format('YYYY-MM-DD'), TO_DATE: moment(filterParams.TO_DATE).subtract(1, 'year').format('YYYY-MM-DD') }));
                enrichedSales = currentSales.map(current => {
                    const previous = previousYearSales.find(prev => prev.SOURCE.toLowerCase() === current.SOURCE.toLowerCase());
                    return Object.assign(Object.assign({}, current), { last_year: previous ? previous : null });
                });
            }
            else {
                enrichedSales = currentSales.map(record => (Object.assign(Object.assign({}, record), { last_year: null })));
            }
            // --- Group by PROPERTY_ID and sort so that hotels with most revenue are on top ---
            const totalsByProperty = enrichedSales.reduce((acc, r) => {
                var _a;
                acc[r.PROPERTY_ID] = ((_a = acc[r.PROPERTY_ID]) !== null && _a !== void 0 ? _a : 0) + r.REVENUE;
                return acc;
            }, {});
            enrichedSales.sort((a, b) => {
                var _a, _b;
                const tA = (_a = totalsByProperty[a.PROPERTY_ID]) !== null && _a !== void 0 ? _a : 0;
                const tB = (_b = totalsByProperty[b.PROPERTY_ID]) !== null && _b !== void 0 ? _b : 0;
                // 1) Sort groups by total revenue (desc)
                if (tB !== tA)
                    return tB - tA;
                // 2) Within the same property, sort each channel row by REVENUE (desc),
                //    then by SOURCE for a stable, readable order
                if (a.PROPERTY_ID === b.PROPERTY_ID) {
                    if (b.REVENUE !== a.REVENUE)
                        return b.REVENUE - a.REVENUE;
                    return a.SOURCE.localeCompare(b.SOURCE);
                }
                // 3) Tie-breaker when two different properties have identical totals
                return String(a.PROPERTY_NAME).localeCompare(String(b.PROPERTY_NAME));
            });
            // -------------------------------------------------------------------------------
            this.salesData = [...enrichedSales];
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
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Sales by Channel"), h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales.entries.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getChannelSales(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, h("ir-sales-by-channel-filters", { isLoading: this.isLoading === 'filter', onApplyFilters: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.channelSalesFilters = Object.assign({}, e.detail);
                this.getChannelSales();
            }, allowedProperties: this.allowedProperties, baseFilters: this.baseFilters }), h("ir-sales-by-channel-table", { allowedProperties: this.allowedProperties, class: "card mb-0", records: this.salesData })))));
    }
    static get is() { return "ir-sales-by-channel"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-by-channel.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-by-channel.css"]
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
                "attribute": "propertyid",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "isPageLoading": {},
            "salesData": {},
            "channelSalesFilters": {},
            "allowedProperties": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "ticketChanged"
            }];
    }
}
//# sourceMappingURL=ir-sales-by-channel.js.map
