import { BookingService } from "../../services/booking-service/booking.service";
import locales from "../../stores/locales.store";
import { Fragment, h } from "@stencil/core";
export class IrCheckoutDialog {
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
    room;
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
        return (h("ir-dialog", { key: '129cbc1f989d0de19022b01e44c1df399bab6391', open: this.open, label: "Alert", style: { '--ir-dialog-width': 'fit-content' }, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.checkoutDialogClosed.emit({ reason: 'cancel' });
            } }, this.isLoading === 'page' ? (h("div", { class: "dialog__loader-container" }, h("ir-spinner", null))) : (h("p", { style: { width: 'calc(31rem - var(--spacing))' } }, "Are you sure you want to check out unit ", this.room?.unit?.name, "?")), h("div", { key: 'c6ab8a5bf3c84503386fa16aed35e7bd60679692', slot: "footer", class: "ir-dialog__footer" }, h(Fragment, { key: 'f470309bcf60ba66a371e4e9085c7bb53268c179' }, h("ir-custom-button", { key: '81ea5ab6546a075e961c463cec27844e029bd290', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel ?? 'Cancel'), this.buttons.has('checkout') && (h("ir-custom-button", { key: 'c7058df29201dea5684294d089200ed98577db80', size: "medium",
            // loading={this.isLoading}
            onClickHandler: e => this.checkoutRoom({ e, source: 'checkout' }), variant: 'brand', loading: this.isLoading === 'checkout' }, "Checkout")), this.buttons.has('checkout_without_invoice') && (h("ir-custom-button", { key: '63cbf2480e92638d99e3f5996c52daf3fe970d52', loading: this.isLoading === 'skipCheckout', size: "medium",
            // loading={this.isLoading}
            onClickHandler: e => this.checkoutRoom({ e, source: 'skipCheckout' }), variant: 'brand', appearance: this.buttons.has('invoice_checkout') ? 'outlined' : 'accent' }, "Checkout without invoice")), this.buttons.has('invoice_checkout') && (h("ir-custom-button", { key: 'a972da63a17665e0ffadd2eee3813fd8792cd252', size: "medium", loading: this.isLoading === 'checkout&invoice', onClickHandler: e => {
                this.checkoutRoom({ e, source: 'checkout&invoice' });
            }, variant: 'brand', appearance: 'accent' }, "Checkout & invoice"))))));
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
                    "text": "Booking data for the current room checkout action."
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
                    "text": "Unique identifier of the room being checked out."
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
            "room": {}
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
