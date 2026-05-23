import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { i as isAgentMode } from './functions.js';
import { d as defineCustomElement$t } from './ir-agent-billing2.js';
import { d as defineCustomElement$s } from './ir-air-date-picker2.js';
import { d as defineCustomElement$r } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$q } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$p } from './ir-booking-company-form2.js';
import { d as defineCustomElement$o } from './ir-city-ledger-fiscal-documents-table2.js';
import { d as defineCustomElement$n } from './ir-cl-invoice-dialog2.js';
import { d as defineCustomElement$m } from './ir-cl-invoice-form2.js';
import { d as defineCustomElement$l } from './ir-cl-status-tag2.js';
import { d as defineCustomElement$k } from './ir-custom-button2.js';
import { d as defineCustomElement$j } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$i } from './ir-date-range-filter2.js';
import { d as defineCustomElement$h } from './ir-date-select2.js';
import { d as defineCustomElement$g } from './ir-dialog2.js';
import { d as defineCustomElement$f } from './ir-drawer2.js';
import { d as defineCustomElement$e } from './ir-empty-state2.js';
import { d as defineCustomElement$d } from './ir-fd-confirm-dialog2.js';
import { d as defineCustomElement$c } from './ir-guest-billing2.js';
import { d as defineCustomElement$b } from './ir-input2.js';
import { d as defineCustomElement$a } from './ir-invoice2.js';
import { d as defineCustomElement$9 } from './ir-invoice-form2.js';
import { d as defineCustomElement$8 } from './ir-pdf-viewer2.js';
import { d as defineCustomElement$7 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$6 } from './ir-print-room2.js';
import { d as defineCustomElement$5 } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$4 } from './ir-printing-label2.js';
import { d as defineCustomElement$3 } from './ir-printing-pickup2.js';
import { d as defineCustomElement$2 } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irBillingCss = ".sc-ir-billing-h{display:flex;flex-direction:column;height:100%}";
const IrBillingStyle0 = irBillingCss;

const IrBilling = /*@__PURE__*/ proxyCustomElement(class IrBilling extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.billingClose = createEvent(this, "billingClose", 7);
    }
    get el() { return this; }
    booking;
    isAllServicesAgentOwned;
    agent;
    async handleBookingChange() {
        this.isAgentMode = isAgentMode(this.agent);
        this.setTabGroupActive();
    }
    isAgentMode = false;
    currentTab;
    billingClose;
    componentWillLoad() {
        this.isAgentMode = isAgentMode(this.agent);
    }
    componentDidLoad() {
        this.setTabGroupActive();
    }
    setTabGroupActive() {
        requestAnimationFrame(() => {
            if (this.isAgentMode) {
                this.currentTab = 'agent';
            }
        });
    }
    render() {
        if (this.isAgentMode) {
            return (h("wa-tab-group", { activation: "manual", "onwa-tab-show": e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.currentTab = e.detail.name.toString();
                }, active: this.currentTab }, h("wa-tab", { panel: "guest", disabled: this.isAllServicesAgentOwned }, "Guest"), h("wa-tab", { panel: "agent" }, "Agent"), h("wa-tab-panel", { name: "guest" }, this.currentTab === 'guest' && h("ir-guest-billing", { booking: this.booking })), h("wa-tab-panel", { name: "agent" }, this.currentTab === 'agent' && h("ir-agent-billing", { booking: this.booking }))));
        }
        return h("ir-guest-billing", { booking: this.booking });
    }
    static get watchers() { return {
        "agent": ["handleBookingChange"]
    }; }
    static get style() { return IrBillingStyle0; }
}, [2, "ir-billing", {
        "booking": [16],
        "isAllServicesAgentOwned": [4, "is-all-services-agent-owned"],
        "agent": [16],
        "isAgentMode": [32],
        "currentTab": [32]
    }, undefined, {
        "agent": ["handleBookingChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-billing", "ir-agent-billing", "ir-air-date-picker", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-city-ledger-fiscal-documents-table", "ir-cl-invoice-dialog", "ir-cl-invoice-form", "ir-cl-status-tag", "ir-custom-button", "ir-custom-date-picker", "ir-date-range-filter", "ir-date-select", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-fd-confirm-dialog", "ir-guest-billing", "ir-input", "ir-invoice", "ir-invoice-form", "ir-pdf-viewer", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-billing":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBilling);
            }
            break;
        case "ir-agent-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-city-ledger-fiscal-documents-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-cl-invoice-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-cl-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-cl-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-guest-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-pdf-viewer":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBilling as I, defineCustomElement as d };

//# sourceMappingURL=ir-billing2.js.map