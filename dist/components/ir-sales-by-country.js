import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { R as RoomService } from './room.service.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$c } from './ir-button2.js';
import { d as defineCustomElement$b } from './ir-checkbox2.js';
import { d as defineCustomElement$a } from './ir-date-picker2.js';
import { d as defineCustomElement$9 } from './ir-icons2.js';
import { d as defineCustomElement$8 } from './ir-interceptor2.js';
import { d as defineCustomElement$7 } from './ir-loading-screen2.js';
import { d as defineCustomElement$6 } from './ir-range-picker2.js';
import { d as defineCustomElement$5 } from './ir-sales-filters2.js';
import { d as defineCustomElement$4 } from './ir-sales-table2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-toast2.js';

const irSalesByCountryCss = ".sc-ir-sales-by-country-h{display:block}";
const IrSalesByCountryStyle0 = irSalesByCountryCss;

const IrSalesByCountry$1 = /*@__PURE__*/ proxyCustomElement(class IrSalesByCountry extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.language = '';
        this.ticket = '';
        this.isLoading = true;
        this.token = new Token();
        this.roomService = new RoomService();
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
            this.isLoading = true;
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
            const requests = [this.roomService.fetchLanguage(this.language)];
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
            this.isLoading = false;
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Sales by Country"), h("ir-button", { size: "sm", btn_color: "outline", text: locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, h("ir-sales-filters", null), h("ir-sales-table", { class: "card" })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IrSalesByCountryStyle0; }
}, [2, "ir-sales-by-country", {
        "language": [1],
        "ticket": [1],
        "propertyid": [2],
        "p": [1],
        "isLoading": [32],
        "property_id": [32]
    }, undefined, {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-sales-by-country", "ir-button", "ir-checkbox", "ir-date-picker", "ir-icons", "ir-interceptor", "ir-loading-screen", "ir-range-picker", "ir-sales-filters", "ir-sales-table", "ir-select", "ir-toast"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-sales-by-country":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSalesByCountry$1);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-sales-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-sales-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrSalesByCountry = IrSalesByCountry$1;
const defineCustomElement = defineCustomElement$1;

export { IrSalesByCountry, defineCustomElement };

//# sourceMappingURL=ir-sales-by-country.js.map