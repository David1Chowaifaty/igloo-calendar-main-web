import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$9 } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$8 } from './ir-booking-company-form2.js';
import { d as defineCustomElement$7 } from './ir-custom-button2.js';
import { d as defineCustomElement$6 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$5 } from './ir-custom-input2.js';
import { d as defineCustomElement$4 } from './ir-dialog2.js';
import { d as defineCustomElement$3 } from './ir-drawer2.js';
import { d as defineCustomElement$2 } from './ir-invoice-form2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';
import { v as v4 } from './v4.js';

const irInvoiceCss = "";
const IrInvoiceStyle0 = irInvoiceCss;

const IrInvoice = /*@__PURE__*/ proxyCustomElement(class IrInvoice extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.invoiceOpen = createEvent(this, "invoiceOpen", 7);
        this.invoiceClose = createEvent(this, "invoiceClose", 7);
    }
    /**
     * Whether the invoice drawer is open.
     *
     * This prop is mutable and reflected to the host element,
     * allowing parent components to control visibility via markup
     * or via the public `openDrawer()` / `closeDrawer()` methods.
     */
    open;
    /**
     * The booking object for which the invoice is being generated.
     * Should contain room, guest, and pricing information.
     */
    booking;
    /**
     * Determines what should happen after creating the invoice.
     * - `"create"`: create an invoice normally
     * - `"check_in-create"`: create an invoice as part of the check-in flow
     */
    mode = 'create';
    /**
     * Specifies what the invoice is for.
     * - `"room"`: invoice for a specific room
     * - `"booking"`: invoice for the entire booking
     */
    for = 'booking';
    /**
     * The identifier of the room for which the invoice is being generated.
     * Used when invoicing at room level instead of booking level.
     */
    roomIdentifier;
    /**
     * When `true`, automatically triggers `window.print()` after an invoice is created.
     * Useful for setups where the invoice should immediately be sent to a printer.
     */
    autoPrint = false;
    /**
     * Additional invoice-related metadata used when creating
     * or rendering the invoice.
     *
     * This object can include payment details, discounts,
     * tax information, or any context needed by the invoice form.
     *
     * @type {BookingInvoiceInfo}
     */
    invoiceInfo;
    /**
     * Emitted when the invoice drawer is opened.
     *
     * Fired when `openDrawer()` is called and the component
     * transitions into the open state.
     */
    invoiceOpen;
    /**
     * Emitted when the invoice drawer is closed.
     *
     * Fired when `closeDrawer()` is called, including when the
     * underlying drawer emits `onDrawerHide`.
     */
    invoiceClose;
    /**
     * Opens the invoice drawer.
     *
     * This method sets the `open` property to `true`, making the drawer visible.
     * It can be called programmatically by parent components.
     *
     * Also emits the `invoiceOpen` event.
     *
     * @returns {Promise<void>} Resolves once the drawer state is updated.
     */
    async openDrawer() {
        this.open = true;
        this.invoiceOpen.emit();
    }
    /**
     * Closes the invoice drawer.
     *
     * This method sets the `open` property to `false`, hiding the drawer.
     * Parent components can call this to close the drawer programmatically,
     * and it is also used internally when the drawer emits `onDrawerHide`.
     *
     * Also emits the `invoiceClose` event.
     *
     * @returns {Promise<void>} Resolves once the drawer state is updated.
     */
    async closeDrawer() {
        this.open = false;
        this.invoiceClose.emit();
    }
    _id = `invoice-form__${v4()}`;
    render() {
        return (h(Host, { key: '778dee5a744933a44c8e927428c85e50b4ed0d4b' }, h("ir-drawer", { key: '8bc320bcee0197d5c0d4f5c8b70552ed6c3986ae', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: "Invoice", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            } }, this.open && (h("ir-invoice-form", { key: 'bc3d12d09eac9a58e64642f3242be915d0df48c8', for: this.for, roomIdentifier: this.roomIdentifier, booking: this.booking, autoPrint: this.autoPrint, mode: this.mode, formId: this._id, invoiceInfo: this.invoiceInfo })), h("div", { key: 'c0f5238e5120e79743810d080464bf34b3c4727e', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'b1ceb88c6bef53096ee37d3a7ef0d1b71134fb84', size: "medium", appearance: "filled", class: "w-100 flex-fill", variant: "neutral", onClickHandler: () => {
                this.closeDrawer();
            } }, "Cancel"), h("ir-custom-button", { key: '7b6ed72795d060d7581989d1cca5a2c3ae40fc12', value: "pro-forma", type: "submit", size: "medium", class: "w-100 flex-fill", appearance: "outlined", variant: "brand", form: this._id }, "Pro-forma invoice"), h("ir-custom-button", { key: '3522b45faf40e09a2a2c7ba0d24d1b0c31b10fa1', loading: isRequestPending('/Issue_Invoice'), value: "invoice", type: "submit", form: this._id, class: "w-100 flex-fill", size: "medium", variant: "brand" }, "Confirm invoice")))));
    }
    static get style() { return IrInvoiceStyle0; }
}, [2, "ir-invoice", {
        "open": [1540],
        "booking": [16],
        "mode": [1],
        "for": [1],
        "roomIdentifier": [1, "room-identifier"],
        "autoPrint": [4, "auto-print"],
        "invoiceInfo": [16],
        "openDrawer": [64],
        "closeDrawer": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-invoice", "ir-booking-billing-recipient", "ir-booking-company-form", "ir-custom-button", "ir-custom-date-picker", "ir-custom-input", "ir-dialog", "ir-drawer", "ir-invoice-form", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrInvoice);
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-drawer":
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

export { IrInvoice as I, defineCustomElement as d };

//# sourceMappingURL=ir-invoice2.js.map