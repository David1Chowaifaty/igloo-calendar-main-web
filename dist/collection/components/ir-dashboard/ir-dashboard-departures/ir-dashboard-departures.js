import { isEarlyCheckout } from "../../../utils/booking";
import { Host, h } from "@stencil/core";
import { loadDepartures } from "../dashboard.data";
/**
 * Departures panel of the dashboard: the existing departures table plus its check-out and invoice dialogs.
 * Early check-outs are handed to the root, which opens them inside booking details.
 */
export class IrDashboardDepartures {
    propertyId;
    date;
    /** Property without front desk: every departing room in one list, no check-out actions. */
    pmsDisabled = false;
    checkoutState = null;
    invoiceState = null;
    /** Early check-out that must be completed from the booking-details drawer. */
    checkoutRedirect;
    reload() {
        return loadDepartures(this.propertyId, this.date);
    }
    handleCheckoutRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const { booking, identifier } = event.detail;
        const room = booking?.rooms?.find(r => r.identifier === identifier);
        if (isEarlyCheckout(room)) {
            this.checkoutRedirect.emit({ bookingNumber: Number(booking.booking_nbr), identifier });
            return;
        }
        this.checkoutState = event.detail;
    }
    async handleCheckoutDialogClosed(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const state = { ...this.checkoutState };
        this.checkoutState = null;
        switch (event.detail.reason) {
            case 'checkout':
                await this.reload();
                break;
            case 'openInvoice':
                this.invoiceState = state;
                await this.reload();
                break;
        }
    }
    handleInvoiceClose(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.invoiceState = null;
    }
    render() {
        return (h(Host, { key: 'cc414b8cdb88a82ea2b699ed152a684c0882d4d9' }, h("ir-departures-table", { key: 'aca88804bbd694f74cc25146e3fd3b79ab1c4b89', hidePagination: true, pmsDisabled: this.pmsDisabled, onCheckoutRoom: event => this.handleCheckoutRoom(event) }), h("ir-checkout-dialog", { key: '011a6abb4a0c9d43e90c32faa1bfaaa129e8471c', booking: this.checkoutState?.booking, identifier: this.checkoutState?.identifier, open: this.checkoutState !== null, onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), h("ir-invoice", { key: 'f0ee1a6acd8fb45795f83a20a14bb7a8a97540c7', booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null, onInvoiceClose: event => this.handleInvoiceClose(event) })));
    }
    static get is() { return "ir-dashboard-departures"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dashboard-departures.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dashboard-departures.css"]
        };
    }
    static get properties() {
        return {
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "reflect": false,
                "attribute": "property-id"
            },
            "date": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ISODate",
                    "resolved": "string",
                    "references": {
                        "ISODate": {
                            "location": "import",
                            "path": "@/utils/calendar-dates",
                            "id": "src/utils/calendar-dates.ts::ISODate",
                            "referenceLocation": "ISODate"
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
                "setter": false,
                "reflect": false,
                "attribute": "date"
            },
            "pmsDisabled": {
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
                    "text": "Property without front desk: every departing room in one list, no check-out actions."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pms-disabled",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "checkoutState": {},
            "invoiceState": {}
        };
    }
    static get events() {
        return [{
                "method": "checkoutRedirect",
                "name": "checkoutRedirect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Early check-out that must be completed from the booking-details drawer."
                },
                "complexType": {
                    "original": "CheckoutRedirectEvent",
                    "resolved": "CheckoutRedirectEvent",
                    "references": {
                        "CheckoutRedirectEvent": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-dashboard/types.ts::CheckoutRedirectEvent",
                            "referenceLocation": "CheckoutRedirectEvent"
                        }
                    }
                }
            }];
    }
}
