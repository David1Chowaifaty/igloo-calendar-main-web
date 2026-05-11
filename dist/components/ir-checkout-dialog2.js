import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.store.js';
import { l as locales } from './locales.store.js';
import { I as InvoiceableItemReason } from './enums.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-dialog2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irCheckoutDialogCss = ".ir-dialog__footer{display:flex;align-items:center;gap:0.5rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}:host{display:block}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px}.early-checkout{display:grid;gap:1rem;width:100%;min-width:0;overflow-x:clip}.early-checkout ir-input,.early-checkout wa-callout,.early-checkout wa-card{min-width:0;max-width:100%}.ec-summary::part(message){display:flex;flex-direction:column;gap:0.5rem}.ec-summary__row{display:flex;justify-content:space-between;align-items:center}.ec-summary__label{font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.ec-summary__value{font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-normal, #111827)}.ec-summary__value--accent{color:var(--wa-color-brand-fill-loud, #2563eb);font-weight:600}.ec-section{display:grid;gap:0.35rem}.ec-section__title{margin:0;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--wa-color-text-quiet, #6b7280)}.ec-nights{border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem;overflow:hidden}.ec-nights__row{display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.875rem;font-size:0.8125rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ec-nights__date{color:var(--wa-color-text-quiet, #6b7280)}.ec-nights__amount{font-weight:500;font-variant-numeric:tabular-nums;color:var(--wa-color-text-normal, #111827)}.ec-nights__subtotal{display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.875rem;font-size:0.8125rem;font-weight:600;color:var(--wa-color-text-normal, #111827);background:var(--wa-color-neutral-fill-quiet, #f9fafb);border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb)}.ec-penalty__badge{margin:0;font-size:0.75rem;font-weight:500;color:var(--wa-color-warning-on-quiet, #92400e)}.ec-penalty__badge--waived{color:var(--wa-color-success-on-quiet, #065f46)}.ec-penalty__hint{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #6b7280)}.ir-dialog__footer{display:flex;flex-wrap:wrap;gap:0.5rem;width:100%}.ir-dialog__footer>*{flex:1}@media (min-width: 640px){.ir-dialog__footer{flex-wrap:nowrap;justify-content:flex-end}.ir-dialog__footer>*{flex:0 0 auto}}";
const IrCheckoutDialogStyle0 = irCheckoutDialogCss;

const IrCheckoutDialog = /*@__PURE__*/ proxyCustomElement(class IrCheckoutDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.checkoutDialogClosed = createEvent(this, "checkoutDialogClosed", 7);
    }
    open;
    booking;
    identifier;
    isLoading = 'page';
    buttons = new Set();
    invoiceInfo;
    room;
    isEarlyCheckout = false;
    remainingDays = [];
    penaltyAmount = 0;
    checkoutDialogClosed;
    bookingService = new BookingService();
    initialPenaltyStr = '0.00';
    get remainingTotal() {
        return this.remainingDays.reduce((sum, d) => sum + d.charges.total_amount, 0);
    }
    get currencySymbol() {
        return this.booking?.currency?.symbol ?? '$';
    }
    formatAmount(amount) {
        return `${this.currencySymbol}${amount.toFixed(2)}`;
    }
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
            this.checkoutDialogClosed.emit({ reason: source === 'checkout&invoice' ? 'openInvoice' : 'checkout' });
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
            this.room = this.booking.rooms.find(r => r.identifier === this.identifier);
            this.detectEarlyCheckout();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    detectEarlyCheckout() {
        const today = hooks().startOf('day');
        const toDate = hooks(this.room.to_date, 'YYYY-MM-DD');
        this.isEarlyCheckout = today.isBefore(toDate, 'date');
        if (this.isEarlyCheckout) {
            const todayStr = today.format('YYYY-MM-DD');
            this.remainingDays = (this.room.days ?? []).filter(d => d.date >= todayStr);
            const total = this.remainingTotal;
            this.penaltyAmount = total;
            this.initialPenaltyStr = total.toFixed(2);
        }
    }
    setupButtons() {
        const toBeInvoiced = this.invoiceInfo.invoiceable_items.filter(item => ![InvoiceableItemReason.AlreadyInvoiced, InvoiceableItemReason.PickupCancellationPolicy].includes(item?.reason?.code));
        const toBeInvoicedRooms = toBeInvoiced.filter(item => item.type === 'BSA');
        if (toBeInvoiced.length === 0) {
            this.buttons.add('checkout');
            return;
        }
        const allRoomInvoiced = toBeInvoicedRooms.length === 0;
        this.buttons.add('invoice_checkout');
        if (!allRoomInvoiced && toBeInvoicedRooms.length > 1) {
            this.buttons.add('checkout_without_invoice');
        }
    }
    renderEarlyCheckoutContent() {
        const unitName = this.room?.unit?.name ?? this.room?.identifier;
        const remainingCount = this.remainingDays.length;
        const total = this.remainingTotal;
        return (h("div", { class: "early-checkout" }, h("wa-callout", { class: "ec-summary", size: "small", appearance: "filled", variant: "neutral" }, h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, "Unit"), h("span", { class: "ec-summary__value" }, unitName)), h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, "Original departure"), h("span", { class: "ec-summary__value" }, hooks(this.room.to_date, 'YYYY-MM-DD').format('ddd, MMM D, YYYY'))), h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, "Checking out"), h("span", { class: "ec-summary__value" }, hooks().format('ddd, MMM D, YYYY')))), h("div", { class: "ec-section" }, h("p", { class: "ec-section__title" }, "Reclaimed Nights ", h("wa-badge", { pill: true }, remainingCount)), h("div", { class: "ec-nights" }, this.remainingDays.map(day => (h("div", { key: day.date, class: "ec-nights__row" }, h("span", { class: "ec-nights__date" }, hooks(day.date, 'YYYY-MM-DD').format('ddd, MMM D')), h("span", { class: "ec-nights__amount" }, this.formatAmount(day.charges.total_amount))))), h("div", { class: "ec-nights__subtotal" }, h("span", null, "Subtotal (Including taxes and fees)"), h("span", null, this.formatAmount(total))))), h("div", { class: "ec-section" }, h("ir-input", { label: "Cancellation Penalty", mask: "price", value: this.initialPenaltyStr, defaultValue: this.initialPenaltyStr, min: 0, max: total, hint: "Pre-filled from reclaimed nights. Modify or waive entirely.", "onText-change": (e) => {
                const val = parseFloat(e.detail);
                this.penaltyAmount = isNaN(val) ? 0 : val;
            } }, h("span", { slot: "start" }, this.currencySymbol)))));
    }
    render() {
        const isEarly = this.isEarlyCheckout && this.isLoading !== 'page';
        return (h("ir-dialog", { key: '8b566ac8044bf85b37803c339180ccff2f08b170', open: this.open, label: isEarly ? 'Early Check-Out' : 'Check-Out', style: { '--ir-dialog-width': isEarly ? 'min(36rem, calc(100vw - 2rem))' : 'fit-content' }, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.buttons.clear();
                this.checkoutDialogClosed.emit({ reason: 'cancel' });
            } }, this.isLoading === 'page' ? (h("div", { class: "dialog__loader-container" }, h("ir-spinner", null))) : this.isEarlyCheckout ? (this.renderEarlyCheckoutContent()) : (h("p", { style: { width: 'calc(31rem - var(--spacing))' } }, "Are you sure you want to check out unit ", this.room?.unit?.name, "?")), h("div", { key: '0e0d38c6fd891d7897c90a78169d3a6785159fe1', slot: "footer", class: "ir-dialog__footer" }, h(Fragment, { key: 'd16854dccf620ae14e04caa85c0ee43c00d2a139' }, h("ir-custom-button", { key: 'e351d4f6e98fd4f4c5e19fd669aab8db1f6c25d0', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel ?? 'Cancel'), this.buttons.has('checkout') && (h("ir-custom-button", { key: '59c575ea4f87b3272f614de22c247f9c53764828', size: "medium", onClickHandler: e => this.checkoutRoom({ e, source: 'checkout' }), variant: 'brand', loading: this.isLoading === 'checkout' }, isEarly ? 'Confirm Early Check-Out' : 'Checkout')), this.buttons.has('checkout_without_invoice') && (h("ir-custom-button", { key: '76e26746d3289fa61a60eefc9d7ead11ed28504b', loading: this.isLoading === 'skipCheckout', size: "medium", onClickHandler: e => this.checkoutRoom({ e, source: 'skipCheckout' }), variant: 'brand', appearance: this.buttons.has('invoice_checkout') ? 'outlined' : 'accent' }, "Checkout without invoice")), this.buttons.has('invoice_checkout') && (h("ir-custom-button", { key: '69b8f8ca61567d69e602858d928f765fc8a00d2b', size: "medium", loading: this.isLoading === 'checkout&invoice', onClickHandler: e => {
                this.checkoutRoom({ e, source: 'checkout&invoice' });
            }, variant: 'brand', appearance: 'accent' }, isEarly ? 'Check out & invoice' : 'Check out & invoice'))))));
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
        "invoiceInfo": [32],
        "room": [32],
        "isEarlyCheckout": [32],
        "remainingDays": [32],
        "penaltyAmount": [32]
    }, undefined, {
        "open": ["handleOpenChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-checkout-dialog", "ir-custom-button", "ir-dialog", "ir-input", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCheckoutDialog);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-input":
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