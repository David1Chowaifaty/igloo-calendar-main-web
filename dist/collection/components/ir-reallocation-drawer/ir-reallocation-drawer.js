import { isRequestPending } from "../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrReallocationDrawer {
    open;
    booking;
    roomIdentifier;
    pool;
    closeModal;
    _id = `reallocation-form_${v4()}`;
    render() {
        return (h("ir-drawer", { key: 'c6792c804e44d4c856e1ec39a19500eb678efda9', label: "Reassign Unit", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && h("ir-reallocation-form", { key: 'd79bfbb284ad93167c533ac9df5e1f641ab5b90a', pool: this.pool, formId: this._id, booking: this.booking, identifier: this.roomIdentifier }), h("div", { key: '202c1b8d6f4b0f56ea45896321ab7fcca00ef7c0', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '944223b7ba3f803979079fa02cb685123f785c8f', size: "m", "data-drawer": "close", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: 'ee9e88b4c000eaf821357a5899a297cb1430e31a', form: this._id, size: "m", loading: isRequestPending('/ReAllocate_Exposed_Room'), type: "submit", variant: "brand" }, "Confirm"))));
    }
    static get is() { return "ir-reallocation-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-reallocation-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-reallocation-drawer.css"]
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
                "reflect": true,
                "attribute": "open"
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
            "roomIdentifier": {
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
                "reflect": false,
                "attribute": "room-identifier"
            },
            "pool": {
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
                "reflect": false,
                "attribute": "pool"
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
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
