import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import { PAYMENT_TYPES_WITH_METHOD } from "../global.variables";
import moment from "moment";
import { v4 } from "uuid";
export class IrPaymentItem {
    payment;
    editPayment;
    deletePayment;
    issueReceipt;
    _id = v4();
    render() {
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (PAYMENT_TYPES_WITH_METHOD.includes(this.payment.payment_type?.code)
            ? `${this.payment.payment_type?.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description) ?? this.payment.designation;
        return (h("div", { key: '67c7e9e378825d41514bf64b47701fba8d0c3abf', class: "payment-item__payment-item" }, h("div", { key: 'ce7abf04496cf02420770ae16fd335e3d01aaf58', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '355816dcaeb1d0dbe8eabf572460e2acfec92d44', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '4b20b3a2ab883659937394fb5f5c4be87be3ad7b', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '9a7fe96aed59c98e7edb406ff8569dd89ef908c7', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '2d148c46c8730794222ce010d97597ae2f8736cd', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '1df1d8291add07abf9961ef2eb94715b78b748a3', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'de7b40d9d84542a648ac1b9388f5e817caba5e0a', class: "payment-item__payment-toolbar" }, h("p", { key: '75d4b4f09c03398e47235ca7d6d9f95a88000525', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'e192aa06e0f0d3d76a2d5fe0c1c312fec8803a7d', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'db4f36cc7a5bb2288eac19f1d67a0f7cf0653d9b', class: "payment-item__payment-actions" }, h("div", { key: '1f8ed94ca4a33a182eea6c345f57cf352da775d6', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '9868e4e9cf2c12f20fd90f741292f3dcd85ad00d', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '19354466330e9ed0df65ad6c50d9f619b454409f', name: "user", id: this._id }), h("wa-dropdown", { key: 'e1441e76d70c3dbbd562d8104ad1a8a23ba2f717', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                switch (e.detail.item.value) {
                    case 'edit':
                        this.editPayment.emit(this.payment);
                        break;
                    case 'delete':
                        this.deletePayment.emit(this.payment);
                        break;
                    case 'receipt':
                        this.issueReceipt.emit(this.payment);
                        break;
                }
            } }, h("ir-custom-button", { key: 'f61a9edee08b167bdef40e14f80e6b355431b356', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'a9cdd8a9aa5306eb50a3350c8a6156ba698c2f3d', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'cf747cc0129461288034b94549095564c0f930f4', value: "receipt" }, h("wa-icon", { key: '5b5bf7d8b6c8e54e76281fce5919939778a8b8ce', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'd963e1d4ca4ab7588e5a7311e152c51b2412b75f', value: "edit" }, h("wa-icon", { key: '22394f570f9665ed08e2c4aa2307cf0b87fa1763', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '696187c43fdd4cab41ce7e0d883833dbf92bb5f7', value: "delete", variant: "danger" }, h("wa-icon", { key: '04617d3bd4d6d529ecec17e782448f2c5d1b3523', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'f1543b401434c4e164e8224c552fa3a1792b2041', class: "payment-item__payment-reference" }, this.payment?.reference)));
    }
    static get is() { return "ir-payment-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payment-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payment-item.css"]
        };
    }
    static get properties() {
        return {
            "payment": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IPayment",
                    "resolved": "IPayment",
                    "references": {
                        "IPayment": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IPayment"
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
            }
        };
    }
    static get events() {
        return [{
                "method": "editPayment",
                "name": "editPayment",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IPayment",
                    "resolved": "IPayment",
                    "references": {
                        "IPayment": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IPayment"
                        }
                    }
                }
            }, {
                "method": "deletePayment",
                "name": "deletePayment",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IPayment",
                    "resolved": "IPayment",
                    "references": {
                        "IPayment": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IPayment"
                        }
                    }
                }
            }, {
                "method": "issueReceipt",
                "name": "issueReceipt",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IPayment",
                    "resolved": "IPayment",
                    "references": {
                        "IPayment": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IPayment"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-payment-item.js.map
