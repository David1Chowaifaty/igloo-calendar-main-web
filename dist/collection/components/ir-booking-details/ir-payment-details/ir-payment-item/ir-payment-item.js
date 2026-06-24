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
        return (h("div", { key: 'b039f0ee66ca24e0c8de319279168f25a8b5f73a', class: "payment-item__payment-item" }, h("div", { key: 'b0879266422ec5f45643da07356c43f3f590d9af', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'eb44c17b4b61dac5a611082614290b90801fb628', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'f68aa04008298e67604edd00a3f5eca580fa38bd', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '967f92ef2bfe3dedc96a26a8040dabf843fcebfa', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '748aeb4ec6a01ee6e1629c90ab21cfa2d946e10f', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'b2ae52a044c06803d1cba221500bb8860661cada', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '51337514b694d90ca1b3a77d6096b2e6cdf7d0cc', class: "payment-item__payment-toolbar" }, h("p", { key: 'f548cb7ec38fd7b26f34ba65ae3e96bc73034b58', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'abf32126153c98d99b14a8c895dcb14116c320eb', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '7a909b675ccdb21cfbdcb5d79d9806a23863e044', class: "payment-item__payment-actions" }, h("div", { key: '1930d742dee51184755046ee4f40d462959ba90d', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '8a5c6f0c8ba2822161d4ad974b2ebbc92a7bc3d2', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'e346679d50c210441913bca8ab11fb394849c8fb', name: "user", id: this._id }), h("wa-dropdown", { key: '5ae4eacb82c6791f7c2538f96155d0b414e73850', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'eed4e0a91627d9a0e7c967debae3b90e45d7dd1d', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '1a831176015a7e9b6b885ce4272270829ab81321', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'b1d9878a1ac850f435a7304c104cfdcf2b623f93', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: 'ce19f88c0489e930391e08819deb53b40c70ede8', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: 'e0c7b32c8ca116983a3f29e683e0a029ad484e7e', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: 'acf3c5e058734c122016a38146594fb0a22c6a13', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
                            "id": "src/models/booking.dto.ts::IPayment",
                            "referenceLocation": "IPayment"
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
                            "id": "src/models/booking.dto.ts::IPayment",
                            "referenceLocation": "IPayment"
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
                            "id": "src/models/booking.dto.ts::IPayment",
                            "referenceLocation": "IPayment"
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
                            "id": "src/models/booking.dto.ts::IPayment",
                            "referenceLocation": "IPayment"
                        }
                    }
                }
            }];
    }
}
