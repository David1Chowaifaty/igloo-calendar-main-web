import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
import { v4 } from "uuid";
import { t } from "../../../services/locale/t";
export class IglSplitBookingDrawer {
    booking;
    identifier;
    open;
    closeModal;
    _id = `split-booking-form_${v4()}`;
    get room() {
        return this.booking?.rooms?.find(r => r.identifier === this.identifier);
    }
    render() {
        return (h("ir-drawer", { key: '3bf853d52ce04f99b9a29d6a989562357db5579e', open: this.open, class: 'split-booking__drawer', label: `${t('Lcz_SplitUnit', { fallback: 'Split unit' })} ${this.room?.unit?.['name'] ?? ''}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit(null);
            } }, this.open && h("igl-split-booking-form", { key: '1dbca142cd7e0d252b1920a3f80025cf2e7aec93', booking: this.booking, identifier: this.identifier, formId: this._id }), h("div", { key: '56a1a2ebc064d38c71c257bd42ac2de2293e976f', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '642b4f31ecd205549b1426c089669ad3a9eecaf8', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'a4e49af7df2caaaba51ad9b498d44b5066a7a895', form: this._id, type: "submit", size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/DoReservation') }, t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
    static get is() { return "igl-split-booking-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-split-booking-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-split-booking-drawer.css"]
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
                    "original": "Room['identifier']",
                    "resolved": "string",
                    "references": {
                        "Room": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Room",
                            "referenceLocation": "Room"
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
                "attribute": "identifier"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open"
            }
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
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
