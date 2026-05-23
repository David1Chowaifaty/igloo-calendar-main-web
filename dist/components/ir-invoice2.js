import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$h } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$g } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$f } from './ir-booking-company-form2.js';
import { d as defineCustomElement$e } from './ir-custom-button2.js';
import { d as defineCustomElement$d } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$c } from './ir-dialog2.js';
import { d as defineCustomElement$b } from './ir-drawer2.js';
import { d as defineCustomElement$a } from './ir-empty-state2.js';
import { d as defineCustomElement$9 } from './ir-input2.js';
import { d as defineCustomElement$8 } from './ir-invoice-form2.js';
import { d as defineCustomElement$7 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$6 } from './ir-print-room2.js';
import { d as defineCustomElement$5 } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$4 } from './ir-printing-label2.js';
import { d as defineCustomElement$3 } from './ir-printing-pickup2.js';
import { d as defineCustomElement$2 } from './ir-proforma-invoice-preview2.js';
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
    invoice = null;
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
    componentWillLoad() {
        if (this.booking) {
            if (hooks().isBefore(hooks(this.booking.from_date, 'YYYY-MM-DD'), 'dates') && this.viewMode === 'invoice') {
                this.viewMode = 'proforma';
            }
        }
    }
    handleBookingChange() {
        if (!this.booking) {
            return;
        }
        if (hooks().isBefore(hooks(this.booking.from_date, 'YYYY-MM-DD'), 'dates') && this.viewMode === 'invoice') {
            this.viewMode = 'proforma';
        }
    }
    render() {
        return (h(Host, { key: 'c42569278e205fc69deb3e43d71db1b8a90d6844' }, h("ir-drawer", { key: '3fdfee4b7e8b3eb3ed57c7aacf2f51f354ffea39', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: "Issue Invoice", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            } }, h("div", { key: '4979de1672c4abcfd466506abd1f091db1193683', class: "d-flex align-items-center", slot: "header-actions" }, h("wa-switch", { key: '5f7c16a558d0de89bf3d41f9a96a92e9f124d0cc', defaultChecked: this.viewMode === 'proforma', checked: this.viewMode === 'proforma', onchange: e => {
                if (e.target.checked) {
                    this.viewMode = 'proforma';
                }
                else {
                    this.viewMode = 'invoice';
                }
            } }, "Pro forma")), this.open && (h("ir-invoice-form", { key: 'aff574713b36be9f2937f44bab4330e506c88b39', viewMode: this.viewMode, for: this.for, roomIdentifier: this.roomIdentifier, booking: this.booking, autoPrint: this.autoPrint, formId: this._id, onPreviewProformaInvoice: e => (this.invoice = e.detail.invoice), invoiceInfo: this.invoiceInfo, onLoadingChange: e => (this.isLoading = e.detail) })), h("div", { key: 'a78abe4a8d4064eb9c2f138d3ab4c2986b54bf5e', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '3b9acefa95c7e4f973f73c9e6bb750178ee23961', size: "medium", appearance: "filled", class: "w-100 flex-fill", variant: "neutral", onClickHandler: () => {
                this.closeDrawer();
            } }, "Cancel"), h("ir-custom-button", { key: '783c56b464ba5a7d3fd7f386cad3ad8f90ce9dee', disabled: this.invoiceInfo?.invoiceable_items?.filter(i => i.is_invoiceable)?.length === 0, loading: this.isLoading, value: "invoice", type: "submit", form: this._id, class: "w-100 flex-fill", size: "medium", variant: "brand", id: `confirm-btn_${this._id}` }, "Confirm")), h("ir-preview-screen-dialog", { key: '09b8299a073f09d1f2f91d419ae5a94b87a4f400', onOpenChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    this.invoice = null;
                }
            }, open: this.invoice !== null }, h("ir-proforma-invoice-preview", { key: '8626ad5888d68c28f80196f4531b8cce64f7c10e', invoice: this.invoice, property: calendar_data.property, booking: this.booking })))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
    static get style() { return IrInvoiceStyle0; }
}, [2, "ir-invoice", {
        "open": [1540],
        "booking": [16],
        "for": [1],
        "roomIdentifier": [1, "room-identifier"],
        "autoPrint": [4, "auto-print"],
        "invoiceInfo": [16],
        "invoice": [32],
        "viewMode": [32],
        "isLoading": [32],
        "openDrawer": [64],
        "closeDrawer": [64]
    }, undefined, {
        "booking": ["handleBookingChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-invoice", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-custom-button", "ir-custom-date-picker", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-input", "ir-invoice-form", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrInvoice);
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-invoice-form":
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

export { IrInvoice as I, defineCustomElement as d };

//# sourceMappingURL=ir-invoice2.js.map