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
        return (h("div", { key: '84e8b3591e334b8b8d15197d239db688ed3fa504', class: "payment-item__payment-item" }, h("div", { key: '5bc4a26e1d042ab97ae72995a48f19916b9c56af', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '69975a91e23f1c8e1cf6ccbb99aa49d4264a7070', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '266cd85340a20e588d3d12d5ea9910b8240ccddc', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'b63391f1b7ae48bce33b42309017baed94c60a98', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '54f19235c85d4b402dadbceed4e476763f9840b6', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'abfa5b0b400a4776c5c916f7435a264691db24ac', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '06d75e36120618c30b787078804e22a2040608b0', class: "payment-item__payment-toolbar" }, h("p", { key: '5ef646fa3e7dbe3359edd0cffeb447e8489090aa', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '35034a127e7c0768c7f5611289fa7d16d2a59526', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'ccc9f1f8eb02c70c42c0a6770a92606d4870c184', class: "payment-item__payment-actions" }, h("div", { key: '05d7a65fd53bc43f727e7bdf831603deaef284e0', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'e283e697ff5e078f54ee1306dde056e24669c4e6', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '9f2041c1af3ab829ddebad1e5c11ecda0535989c', name: "user", id: this._id }), h("wa-dropdown", { key: 'ca28237a12f86c55c8ecacf8f5d7cdf309b899db', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'eed50af38946e86da8ce0665e724727fd1a54479', size: "small", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'cc0c4e7601620e9458ed867acbbc31c479201d64', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '9641f645a4c22d402434f8ff93a62af3a57a7bd4', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: '405707bdfe8a0a946a40ab3f7c72aae951220501', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: 'd0ff3bab36032916bd86cefd6306d78c59043e43', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: 'cf85d4e66d205d287754420f1506e0095dbda7a4', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
