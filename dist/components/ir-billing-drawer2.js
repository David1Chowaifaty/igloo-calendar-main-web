import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$b } from './ir-billing2.js';
import { d as defineCustomElement$a } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$9 } from './ir-booking-company-form2.js';
import { d as defineCustomElement$8 } from './ir-custom-button2.js';
import { d as defineCustomElement$7 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$6 } from './ir-custom-input2.js';
import { d as defineCustomElement$5 } from './ir-dialog2.js';
import { d as defineCustomElement$4 } from './ir-drawer2.js';
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
        return (h("ir-drawer", { key: '97a7849b786f85d214ab2dea6cd26e427fefd26b', style: {
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
            }, open: this.open, label: "Billing" }, this.open && h("ir-billing", { key: '39d807781310e675327ff5e7b76cf561041f9c20', booking: this.booking })));
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
    const components = ["ir-billing-drawer", "ir-billing", "ir-booking-billing-recipient", "ir-booking-company-form", "ir-custom-button", "ir-custom-date-picker", "ir-custom-input", "ir-dialog", "ir-drawer", "ir-invoice", "ir-invoice-form", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBillingDrawer);
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-custom-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-drawer":
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