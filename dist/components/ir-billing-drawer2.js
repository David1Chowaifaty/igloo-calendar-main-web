import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$d } from './ir-billing2.js';
import { d as defineCustomElement$c } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$b } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$a } from './ir-booking-company-form2.js';
import { d as defineCustomElement$9 } from './ir-custom-button2.js';
import { d as defineCustomElement$8 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$7 } from './ir-dialog2.js';
import { d as defineCustomElement$6 } from './ir-drawer2.js';
import { d as defineCustomElement$5 } from './ir-empty-state2.js';
import { d as defineCustomElement$4 } from './ir-input2.js';
import { d as defineCustomElement$3 } from './ir-invoice2.js';
import { d as defineCustomElement$2 } from './ir-invoice-form2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irBillingDrawerCss = ".sc-ir-billing-drawer-h{display:block}";
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
    /**
     * Emitted when the billing drawer has been closed.
     *
     * Listen to this event to respond to drawer close actions.
     *
     * @event billingClose
     */
    billingClose;
    render() {
        return (h("ir-drawer", { key: 'f867751de919acae4cecf81938ead81bdfadbf88', style: {
                '--ir-drawer-width': '50rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.billingClose.emit();
            }, open: this.open, label: "Billing" }, this.open && h("ir-billing", { key: 'c043b19a43c633ae14c1f8004d464f1a412593c6', booking: this.booking })));
    }
    static get style() { return IrBillingDrawerStyle0; }
}, [2, "ir-billing-drawer", {
        "open": [516],
        "booking": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-billing-drawer", "ir-billing", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-custom-button", "ir-custom-date-picker", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-input", "ir-invoice", "ir-invoice-form", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBillingDrawer);
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-invoice-form":
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