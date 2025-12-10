import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-dialog2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irCheckoutDialogCss = ":host{display:block}";
const IrCheckoutDialogStyle0 = irCheckoutDialogCss;

const IrCheckoutDialog = /*@__PURE__*/ proxyCustomElement(class IrCheckoutDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.checkoutDialogClosed = createEvent(this, "checkoutDialogClosed", 7);
    }
    open;
    /**
     * Booking data for the current room checkout action.
     */
    booking;
    /**
     * Unique identifier of the room being checked out.
     */
    identifier;
    isLoading = 'page';
    buttons = new Set();
    invoiceInfo;
    checkoutDialogClosed;
    bookingService = new BookingService();
    async checkoutRoom({ e, source }) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = source;
            await this.bookingService.handleExposedRoomInOut({
                booking_nbr: this.booking.booking_nbr,
                room_identifier: this.identifier,
                status: '002',
            });
            this.isLoading = null;
            this.checkoutDialogClosed.emit({ reason: source === 'checkout&invoice' ? 'openInvoice' : 'dialog' });
        }
        catch (error) {
            console.error(error);
        }
    }
    handleOpenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.init();
        }
    }
    async init() {
        if (!this.open) {
            return;
        }
        try {
            this.isLoading = 'page';
            this.invoiceInfo = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr });
            this.setupButtons();
        }
        catch (error) {
        }
        finally {
            this.isLoading = null;
        }
    }
    setupButtons() {
        const toBeInvoicedRooms = this.invoiceInfo.invoiceable_items.filter(item => item.type === 'BSA' && item.reason?.code !== '001');
        //check if all rooms are invoiced
        const allRoomInvoiced = toBeInvoicedRooms.length === 0;
        if (allRoomInvoiced) {
            this.buttons.add('checkout');
            return;
        }
        //invoice and checkout : if some rooms are not invoiced
        this.buttons.add('invoice_checkout');
        //checkout without invoice :available except for last room in a booking
        if (toBeInvoicedRooms.length > 1) {
            this.buttons.add('checkout_without_invoice');
        }
    }
    render() {
        return (h("ir-dialog", { key: 'a9d3702f001eb7db6eccdc7fcb7dcc115c9c2f97', open: this.open, label: "Alert", style: { '--ir-dialog-width': 'fit-content' }, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.checkoutDialogClosed.emit();
            } }, this.isLoading === 'page' ? (h("div", { class: "dialog__loader-container" }, h("ir-spinner", null))) : (h("p", null, "Are you sure you want to Check Out this unit?")), h("div", { key: 'f898f3d8da17946c3b8cc5854053a9a04af4c961', slot: "footer", class: "ir-dialog__footer" }, h(Fragment, { key: 'fcc7a1c9d41bcf11bdebe2990102aca19ad0a321' }, h("ir-custom-button", { key: '8881385fc2d6f961ebe5a29c5387c5b3811b62eb', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, locales.entries.Lcz_Cancel), this.buttons.has('checkout') && (h("ir-custom-button", { key: '532179338b98d2165eba052a7073694b417bc9b5', size: "medium",
            // loading={this.isLoading}
            onClickHandler: e => this.checkoutRoom({ e, source: 'checkout' }), variant: 'brand', loading: this.isLoading === 'checkout' }, "Checkout")), this.buttons.has('checkout_without_invoice') && (h("ir-custom-button", { key: '0ee3759a7862e38b92294fbda27cdf725ee24f81', loading: this.isLoading === 'skipCheckout', size: "medium",
            // loading={this.isLoading}
            onClickHandler: e => this.checkoutRoom({ e, source: 'skipCheckout' }), variant: 'brand', appearance: this.buttons.has('invoice_checkout') ? 'outlined' : 'accent' }, "Checkout without invoice")), this.buttons.has('invoice_checkout') && (h("ir-custom-button", { key: 'c721cbbd7fbd56cbe67f1c502f0238b8936a22c4', size: "medium", loading: this.isLoading === 'checkout&invoice', onClickHandler: e => {
                this.checkoutRoom({ e, source: 'checkout&invoice' });
            }, variant: 'brand', appearance: 'accent' }, "Checkout & invoice"))))));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
    static get style() { return IrCheckoutDialogStyle0; }
}, [1, "ir-checkout-dialog", {
        "open": [516],
        "booking": [16],
        "identifier": [1],
        "isLoading": [32],
        "buttons": [32],
        "invoiceInfo": [32]
    }, undefined, {
        "open": ["handleOpenChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-checkout-dialog", "ir-custom-button", "ir-dialog", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCheckoutDialog);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-dialog":
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

export { IrCheckoutDialog as I, defineCustomElement as d };

//# sourceMappingURL=ir-checkout-dialog2.js.map