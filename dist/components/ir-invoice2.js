import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
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
    viewMode = 'invoice';
    isLoading;
    _id = `invoice-form__${v4()}`;
    render() {
        return (h(Host, { key: '58a5061aeed9a3d8e8aa7da0b169de9fd452090a' }, h("ir-drawer", { key: 'd92f3d9264a6363f4e4a483836b21ae48d0e6cc5', style: {
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
            } }, h("div", { key: '5007e14f56b774fb9e1a76937e1a5577ee005d2f', class: "d-flex align-items-center", slot: "header-actions" }, h("wa-switch", { key: 'f597b4ed984f58d045b72f6e2b012ce6f3693c57', onchange: e => {
                if (e.target.checked) {
                    this.viewMode = 'proforma';
                }
                else {
                    this.viewMode = 'invoice';
                }
            } }, "Pro-forma")), this.open && (h("ir-invoice-form", { key: 'afa28e3bf03bed3e0caf7a55f1e1b6d71e7f6e89', viewMode: this.viewMode, for: this.for, roomIdentifier: this.roomIdentifier, booking: this.booking, autoPrint: this.autoPrint, formId: this._id, invoiceInfo: this.invoiceInfo, onLoadingChange: e => (this.isLoading = e.detail) })), h("div", { key: 'c7d9511150949abcd089eb5c0df96d6e29bee5c1', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'ed0690671fdb86c59c6d612a3efb76fd211624ec', size: "medium", appearance: "filled", class: "w-100 flex-fill", variant: "neutral", onClickHandler: () => {
                this.closeDrawer();
            } }, "Cancel"), h("ir-custom-button", { key: '396d68ac9932e35a2682f26640ad5f7ec8a39c41', loading: this.isLoading, value: "invoice", type: "submit", form: this._id, class: "w-100 flex-fill", size: "medium", variant: "brand" }, "Confirm")))));
    }
    static get style() { return IrInvoiceStyle0; }
}, [2, "ir-invoice", {
        "open": [1540],
        "booking": [16],
        "for": [1],
        "roomIdentifier": [1, "room-identifier"],
        "autoPrint": [4, "auto-print"],
        "invoiceInfo": [16],
        "viewMode": [32],
        "isLoading": [32],
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