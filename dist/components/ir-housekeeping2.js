import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { R as RoomService } from './room.service.js';
import { c as calendar_data } from './calendar-data.js';
import { u as updateHKStore } from './housekeeping.store.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$l } from './ir-button2.js';
import { d as defineCustomElement$k } from './ir-combobox2.js';
import { d as defineCustomElement$j } from './ir-delete-modal2.js';
import { d as defineCustomElement$i } from './ir-hk-team2.js';
import { d as defineCustomElement$h } from './ir-hk-unassigned-units2.js';
import { d as defineCustomElement$g } from './ir-hk-user2.js';
import { d as defineCustomElement$f } from './ir-icon2.js';
import { d as defineCustomElement$e } from './ir-icons2.js';
import { d as defineCustomElement$d } from './ir-input-text2.js';
import { d as defineCustomElement$c } from './ir-interceptor2.js';
import { d as defineCustomElement$b } from './ir-loading-screen2.js';
import { d as defineCustomElement$a } from './ir-password-validator2.js';
import { d as defineCustomElement$9 } from './ir-phone-input2.js';
import { d as defineCustomElement$8 } from './ir-popover2.js';
import { d as defineCustomElement$7 } from './ir-select2.js';
import { d as defineCustomElement$6 } from './ir-sidebar2.js';
import { d as defineCustomElement$5 } from './ir-switch2.js';
import { d as defineCustomElement$4 } from './ir-textarea2.js';
import { d as defineCustomElement$3 } from './ir-title2.js';
import { d as defineCustomElement$2 } from './ir-toast2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irHousekeepingCss = ".sc-ir-housekeeping-h{display:block}";
const IrHousekeepingStyle0 = irHousekeepingCss;

const IrHousekeeping = /*@__PURE__*/ proxyCustomElement(class IrHousekeeping extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toast = createEvent(this, "toast", 7);
        this.language = '';
        this.ticket = '';
        this.isLoading = false;
        this.roomService = new RoomService();
        this.houseKeepingService = new HouseKeepingService();
        this.token = new Token();
    }
    componentWillLoad() {
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.houseKeepingService.getExposedHKSetup(this.propertyid);
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
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_sales_rate_plans: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            updateHKStore('default_properties', { token: this.ticket, property_id: propertyId, language: this.language });
            const requests = [this.houseKeepingService.getExposedHKSetup(propertyId), this.roomService.fetchLanguage(this.language, ['_HK_FRONT', '_PMS_FRONT'])];
            if (this.propertyid) {
                requests.unshift(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                    include_sales_rate_plans: true,
                }));
            }
            await Promise.all(requests);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    saveAutomaticCheckInCheckout(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            this.roomService.SetAutomaticCheckInOut({
                property_id: this.propertyid,
                flag: e.detail === 'auto',
            });
            this.toast.emit({
                position: 'top-right',
                title: 'Saved Successfully',
                description: '',
                type: 'success',
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-interceptor", null), h("ir-toast", null), h("section", { class: "p-1" }, h("h3", { class: "mb-2" }, locales.entries.Lcz_HouseKeepingAndCheckInSetup), h("div", { class: "card p-1" }, h("ir-title", { borderShown: true, label: "Check-In Mode" }), h("div", { class: 'd-flex align-items-center' }, h("p", { class: "my-0 py-0 mr-1  " }, locales.entries.Lcz_CheckInOutGuestsAutomatically, ":"), h("ir-select", { LabelAvailable: false, showFirstOption: false, selectedValue: calendar_data.is_automatic_check_in_out ? 'auto' : 'manual', onSelectChange: e => this.saveAutomaticCheckInCheckout(e), data: [
                { text: locales.entries.Lcz_YesAsPerPropertyPolicy, value: 'auto' },
                { text: locales.entries.Lcz_NoIWillDoItManually, value: 'manual' },
            ] }))), h("ir-hk-team", { class: "mb-1" }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IrHousekeepingStyle0; }
}, [2, "ir-housekeeping", {
        "language": [1],
        "ticket": [1],
        "propertyid": [2],
        "p": [1],
        "isLoading": [32]
    }, [[0, "resetData", "handleResetData"]], {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-housekeeping", "ir-button", "ir-combobox", "ir-delete-modal", "ir-hk-team", "ir-hk-unassigned-units", "ir-hk-user", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-loading-screen", "ir-password-validator", "ir-phone-input", "ir-popover", "ir-select", "ir-sidebar", "ir-switch", "ir-textarea", "ir-title", "ir-toast", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-housekeeping":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHousekeeping);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-delete-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-hk-team":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-hk-unassigned-units":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-hk-user":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "requirement-check":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrHousekeeping as I, defineCustomElement as d };

//# sourceMappingURL=ir-housekeeping2.js.map