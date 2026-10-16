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
        return (h("ir-drawer", { key: '763ebd6b95cc9d02e1f0fa37c0c02962d141eec9', open: this.open, class: 'split-booking__drawer', label: `${t('Lcz_SplitUnit', { fallback: 'Split unit' })} ${this.room?.unit?.['name'] ?? ''}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit(null);
            } }, this.open && h("igl-split-booking-form", { key: 'a6c945ce285eecdd39182ec93bc89827e0e2d5d7', booking: this.booking, identifier: this.identifier, formId: this._id }), h("div", { key: '7bc325989aff7b9ac1768a8904f9e17b77eb52f7', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'dd1b83d359fdabeae800a18e07990f1accb3806d', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'f4ba2d5d49696d8df3617cba236936c0c634a91c', form: this._id, type: "submit", size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/DoReservation') }, t('Lcz_Confirm', { fallback: 'Confirm' })))));
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
