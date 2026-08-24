import locales from "../../../stores/locales.store";
import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrPickup {
    booking;
    /**
     * Pre-filled pickup information coming from the booking.
     * When provided, the pickup form initializes with this data and
     * the user may update or remove it.
     */
    defaultPickupData;
    /**
     * Total number of persons included in the booking.
     * Used to compute vehicle capacity and validate pickup options.
     */
    numberOfPersons = 0;
    /**
     * Unique booking reference number used to associate pickup updates
     * with a specific reservation.
     */
    bookingNumber;
    /**
     * The date range of the booking (check-in and check-out).
     * Determines allowed pickup dates and validation rules.
     */
    bookingDates;
    agent;
    /**
     * Controls whether the pickup drawer/modal is open.
     * When true, the drawer becomes visible and initializes the form.
     */
    open;
    isLoading = false;
    canSubmitPickup = false;
    /**
     * Emitted when the pickup drawer should be closed.
     * Triggered when the user dismisses the drawer or when the
     * inner pickup form requests the modal to close.
     */
    closeModal;
    _id = `pickup-form-${v4()}`;
    render() {
        return (h("ir-drawer", { key: '9f40a1cef001c58ca48f84beab6efc3a4ed3b17a', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: locales.entries.Lcz_Pickup, open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && (h("ir-pickup-form", { key: '9742aaaecbdb0e0d2af67fc13893ba82c4e0f70c', booking: this.booking, agent: this.agent, onCanSubmitPickupChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.canSubmitPickup = e.detail;
            }, defaultPickupData: this.defaultPickupData, numberOfPersons: this.numberOfPersons, bookingNumber: this.bookingNumber, bookingDates: this.bookingDates, onLoadingChange: e => (this.isLoading = e.detail), onCloseModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            }, formId: this._id })), h("div", { key: '0274f8a5bb9cf70b58c433cd19100af9322b5a88', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: 'dd36b43e5f34b7b4dfb6d30ee1a270a3fa6a0fb9', class: `flex-fill`, size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, locales.entries.Lcz_Cancel), this.canSubmitPickup && (h("ir-custom-button", { key: 'e76e253180393afa080a1db0f95aad0423b64ff6', type: "submit", loading: this.isLoading, form: this._id, size: "m", class: `flex-fill`, variant: "brand" }, locales.entries.Lcz_Save)))));
    }
    static get is() { return "ir-pickup"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pickup.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pickup.css"]
        };
    }
    static get properties() {
        return {
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "defaultPickupData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IBookingPickupInfo | null",
                    "resolved": "IBookingPickupInfo",
                    "references": {
                        "IBookingPickupInfo": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IBookingPickupInfo",
                            "referenceLocation": "IBookingPickupInfo"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Pre-filled pickup information coming from the booking.\nWhen provided, the pickup form initializes with this data and\nthe user may update or remove it."
                },
                "getter": false,
                "setter": false
            },
            "numberOfPersons": {
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
                    "text": "Total number of persons included in the booking.\nUsed to compute vehicle capacity and validate pickup options."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "number-of-persons",
                "defaultValue": "0"
            },
            "bookingNumber": {
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
                    "text": "Unique booking reference number used to associate pickup updates\nwith a specific reservation."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "booking-number"
            },
            "bookingDates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ from: string; to: string }",
                    "resolved": "{ from: string; to: string; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The date range of the booking (check-in and check-out).\nDetermines allowed pickup dates and validation rules."
                },
                "getter": false,
                "setter": false
            },
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
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
                    "text": "Controls whether the pickup drawer/modal is open.\nWhen true, the drawer becomes visible and initializes the form."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "canSubmitPickup": {}
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the pickup drawer should be closed.\nTriggered when the user dismisses the drawer or when the\ninner pickup form requests the modal to close."
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
