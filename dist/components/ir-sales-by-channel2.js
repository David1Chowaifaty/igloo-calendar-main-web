import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { P as PropertyService } from './property.service.js';
import { R as RoomService } from './room.service.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$g } from './ir-button2.js';
import { d as defineCustomElement$f } from './ir-checkbox2.js';
import { d as defineCustomElement$e } from './ir-date-picker2.js';
import { d as defineCustomElement$d } from './ir-filters-panel2.js';
import { d as defineCustomElement$c } from './ir-icons2.js';
import { d as defineCustomElement$b } from './ir-interceptor2.js';
import { d as defineCustomElement$a } from './ir-loading-screen2.js';
import { d as defineCustomElement$9 } from './ir-otp2.js';
import { d as defineCustomElement$8 } from './ir-otp-modal2.js';
import { d as defineCustomElement$7 } from './ir-progress-indicator2.js';
import { d as defineCustomElement$6 } from './ir-range-picker2.js';
import { d as defineCustomElement$5 } from './ir-sales-by-channel-filters2.js';
import { d as defineCustomElement$4 } from './ir-sales-by-channel-table2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-toast2.js';

const irSalesByChannelCss = ".sc-ir-sales-by-channel-h{display:block}";
const IrSalesByChannelStyle0 = irSalesByChannelCss;

var __rest = (undefined && undefined.__rest) || function (s, e) {
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
const IrSalesByChannel = /*@__PURE__*/ proxyCustomElement(class IrSalesByChannel extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.language = '';
        this.ticket = '';
        this.isLoading = null;
        this.isPageLoading = true;
        this.token = new Token();
        this.roomService = new RoomService();
        this.propertyService = new PropertyService();
        this.baseFilters = {
            FROM_DATE: hooks().add(-7, 'days').format('YYYY-MM-DD'),
            TO_DATE: hooks().format('YYYY-MM-DD'),
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
                }, filterParams), { FROM_DATE: hooks(filterParams.FROM_DATE).subtract(1, 'year').format('YYYY-MM-DD'), TO_DATE: hooks(filterParams.TO_DATE).subtract(1, 'year').format('YYYY-MM-DD') }));
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
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IrSalesByChannelStyle0; }
}, [2, "ir-sales-by-channel", {
        "language": [1],
        "ticket": [1],
        "propertyid": [1],
        "isLoading": [32],
        "isPageLoading": [32],
        "salesData": [32],
        "channelSalesFilters": [32],
        "allowedProperties": [32]
    }, undefined, {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-sales-by-channel", "ir-button", "ir-checkbox", "ir-date-picker", "ir-filters-panel", "ir-icons", "ir-interceptor", "ir-loading-screen", "ir-otp", "ir-otp-modal", "ir-progress-indicator", "ir-range-picker", "ir-sales-by-channel-filters", "ir-sales-by-channel-table", "ir-select", "ir-spinner", "ir-toast"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-sales-by-channel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSalesByChannel);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-filters-panel":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-progress-indicator":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-sales-by-channel-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-sales-by-channel-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrSalesByChannel as I, defineCustomElement as d };

//# sourceMappingURL=ir-sales-by-channel2.js.map