import { BookingService } from "../../services/booking-service/booking.service";
import locales from "../../stores/locales.store";
import { Fragment, h } from "@stencil/core";
import { InvoiceableItemReason } from "../../types/enums";
import moment from "moment";
export class IrCheckoutDialog {
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
        const today = moment().startOf('day');
        const toDate = moment(this.room.to_date, 'YYYY-MM-DD');
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
        return (h("div", { class: "early-checkout" }, h("wa-callout", { class: "ec-summary", size: "small", appearance: "filled", variant: "neutral" }, h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, "Unit"), h("span", { class: "ec-summary__value" }, unitName)), h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, "Original departure"), h("span", { class: "ec-summary__value" }, moment(this.room.to_date, 'YYYY-MM-DD').format('ddd, MMM D, YYYY'))), h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, "Checking out"), h("span", { class: "ec-summary__value" }, moment().format('ddd, MMM D, YYYY')))), h("div", { class: "ec-section" }, h("p", { class: "ec-section__title" }, "Reclaimed Nights ", h("wa-badge", { pill: true }, remainingCount)), h("div", { class: "ec-nights" }, this.remainingDays.map(day => (h("div", { key: day.date, class: "ec-nights__row" }, h("span", { class: "ec-nights__date" }, moment(day.date, 'YYYY-MM-DD').format('ddd, MMM D')), h("span", { class: "ec-nights__amount" }, this.formatAmount(day.charges.total_amount))))), h("div", { class: "ec-nights__subtotal" }, h("span", null, "Subtotal (Including taxes and fees)"), h("span", null, this.formatAmount(total))))), h("div", { class: "ec-section" }, h("ir-input", { label: "Cancellation Penalty", mask: "price", value: this.initialPenaltyStr, defaultValue: this.initialPenaltyStr, min: 0, max: total, hint: "Pre-filled from reclaimed nights. Modify or waive entirely.", "onText-change": (e) => {
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
    static get is() { return "ir-checkout-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-checkout-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-checkout-dialog.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true
            },
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "identifier": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "identifier",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "buttons": {},
            "invoiceInfo": {},
            "room": {},
            "isEarlyCheckout": {},
            "remainingDays": {},
            "penaltyAmount": {}
        };
    }
    static get events() {
        return [{
                "method": "checkoutDialogClosed",
                "name": "checkoutDialogClosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CheckoutDialogCloseEvent",
                    "resolved": "{ reason: \"cancel\" | \"checkout\" | \"openInvoice\"; }",
                    "references": {
                        "CheckoutDialogCloseEvent": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-checkout-dialog/ir-checkout-dialog.tsx",
                            "id": "src/components/ir-checkout-dialog/ir-checkout-dialog.tsx::CheckoutDialogCloseEvent"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
//# sourceMappingURL=ir-checkout-dialog.js.map
