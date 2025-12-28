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
        return (h("div", { key: '3dec4329d37f7e3541ba95e0e566cb38de3f3a7b', class: "payment-item__payment-item" }, h("div", { key: '2ef7d88fa270f92e108a293ec2f47fec6baba9a3', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '6250dd3b0c4ede2049ea19ad4e3bd5d4dc90c1a7', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '688e63e9aea3609036559dd8ed4a37f652b750df', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '94ed1d563462928124a493ad70e4441cc830b70d', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '70d6e0f9cba4d23eef1c8cda3c902253dcdd3731', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '2a2abe16f6c611d8905da9b5af0c97a4221ee16e', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '2e0f2f120f46f3194637b211394685b9510d15e3', class: "payment-item__payment-toolbar" }, h("p", { key: '19f8f6dad6665d9e18026ab03b377da2ac85a4e0', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'f7574cb7496e0315c25d219c44640cc9441a0551', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '8539169b759061aea668c71a2238f57c841f8964', class: "payment-item__payment-actions" }, h("div", { key: '27cd87a5deecb36e0a8cd702cd463a7d2935235d', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'b9a1b40001c49c862ac59fd9c4dbd5aef716b412', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'b0a3ce4cf8f17a7f9654552aa521ca68a914d696', name: "user", id: this._id }), h("wa-dropdown", { key: 'bb92303a890fa9713a02ea4fbbf527a075da385d', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '3fa9b8d3f79162300aac3dabcb92773db157fec9', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '95ebf43f8bc08e9b862d650d1b6bee5a1b3c602f', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'e2ff6ee900b18e14d3927236da5f71add3f78835', value: "receipt" }, h("wa-icon", { key: 'bb3fedd9f72c82cbf6ee65151c84cb1fb7af7502', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '2c599f842cfbd4916c5099c8a4eae5d79b8092e9', value: "edit" }, h("wa-icon", { key: '81835324f1703037438f916dd187e8b424f58ae6', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '02dafaa5a48db37ae7a39f980abedccd7f22a9dc', value: "delete", variant: "danger" }, h("wa-icon", { key: 'ffdc689cb7154e0a79a8de1b8157cab6f1cc9635', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '42f3b88a20bfc796154d2f96d8e2f28ff9e2a4ac', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
