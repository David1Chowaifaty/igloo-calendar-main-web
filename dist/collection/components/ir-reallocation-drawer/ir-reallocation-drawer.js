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
        return (h("ir-drawer", { key: '7d63b749a1fd67b08b4768936ad43e5cb47f7554', label: "Reassign Unit", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && h("ir-reallocation-form", { key: '545d4dacd48144bd933677e8b79cd662701af360', pool: this.pool, formId: this._id, booking: this.booking, identifier: this.roomIdentifier }), h("div", { key: 'fd8db73250d96c97d9b1f64899d9604e409d90a7', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'b8762f43f2dc07db31b9e4f7f43e2ba3454c8a70', size: "medium", "data-drawer": "close", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '4b72d0bd8450ea8a20a2942150bb64dac7cc8bbe', form: this._id, size: "medium", loading: isRequestPending('/ReAllocate_Exposed_Room'), type: "submit", variant: "brand" }, "Confirm"))));
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
                "attribute": "room-identifier",
                "reflect": false
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
                "attribute": "pool",
                "reflect": false
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
//# sourceMappingURL=ir-reallocation-drawer.js.map
