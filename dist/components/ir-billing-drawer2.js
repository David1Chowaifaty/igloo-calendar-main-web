import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$t } from './ir-agent-billing2.js';
import { d as defineCustomElement$s } from './ir-air-date-picker2.js';
import { d as defineCustomElement$r } from './ir-billing2.js';
import { d as defineCustomElement$q } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$p } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$o } from './ir-booking-company-form2.js';
import { d as defineCustomElement$n } from './ir-city-ledger-fiscal-documents-table2.js';
import { d as defineCustomElement$m } from './ir-cl-invoice-dialog2.js';
import { d as defineCustomElement$l } from './ir-cl-invoice-form2.js';
import { d as defineCustomElement$k } from './ir-cl-status-tag2.js';
import { d as defineCustomElement$j } from './ir-custom-button2.js';
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

const irBillingDrawerCss = ".sc-ir-billing-drawer-h{display:block}.billing__drawer.sc-ir-billing-drawer::part(footer){display:none}";
const IrBillingDrawerStyle0 = irBillingDrawerCss;

const IrBillingDrawer = /*@__PURE__*/ proxyCustomElement(class IrBillingDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.billingClose = createEvent(this, "billingClose", 7);
    }
    /**
     * Controls whether the billing drawer is open or closed.
     *
     * When `true`, the drawer becomes visible.
     * When `false`, it is hidden.
     *
     * This prop is reflected to the host element.
     *
     * @type {boolean}
     */
    open;
    /**
     * The booking object containing reservation and guest details
     * that will be used to populate the billing view.
     *
     * @type {Booking}
     */
    booking;
    agent;
    isAllServicesAgentOwned;
    /**
     * Emitted when the billing drawer has been closed.
     *
     * Listen to this event to respond to drawer close actions.
     *
     * @event billingClose
     */
    billingClose;
    render() {
        return (h("ir-drawer", { key: '0283de4b6e4d24f8d7de720ac938199a3f37faaa', style: {
                '--ir-drawer-width': '70rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-right': '0',
                '--ir-drawer-padding-top': this.agent ? '0' : 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, class: "billing__drawer", onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.billingClose.emit();
            }, open: this.open, label: "Billing" }, this.open && h("ir-billing", { key: '90bf29dc9f1c28e7c45c6bdd104fe01024c48fb5', isAllServicesAgentOwned: this.isAllServicesAgentOwned, booking: this.booking, agent: this.agent })));
    }
    static get style() { return IrBillingDrawerStyle0; }
}, [2, "ir-billing-drawer", {
        "open": [516],
        "booking": [16],
        "agent": [16],
        "isAllServicesAgentOwned": [4, "is-all-services-agent-owned"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-billing-drawer", "ir-agent-billing", "ir-air-date-picker", "ir-billing", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-city-ledger-fiscal-documents-table", "ir-cl-invoice-dialog", "ir-cl-invoice-form", "ir-cl-status-tag", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-fd-confirm-dialog", "ir-guest-billing", "ir-input", "ir-invoice", "ir-invoice-form", "ir-pdf-viewer", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBillingDrawer);
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
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-city-ledger-fiscal-documents-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-cl-invoice-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-cl-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-cl-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-custom-button":
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

export { IrBillingDrawer as I, defineCustomElement as d };

//# sourceMappingURL=ir-billing-drawer2.js.map