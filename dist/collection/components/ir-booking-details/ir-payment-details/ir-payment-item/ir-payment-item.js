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
        return (h("div", { key: '473786ce667e9ffa68b65aa88c109fc313f1193b', class: "payment-item__payment-item" }, h("div", { key: '919a0d8d4b205ecf9a888c298d4cc6644c77b8ad', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '91ff98f7d31544e658ed0dc8f25eb011429d7185', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '1ec4e09b209a69ea3206dc45582874081af06c5e', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '8f27b437885e7098676a241b682488698d2a77ab', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '8c137446f6fb832a4f9f5777b9c501d94945afb6', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '798554d976609a31167359270c99d55393f18c5c', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '11286e01ff2b5f3905b4adc92cd145293d8eba0f', class: "payment-item__payment-toolbar" }, h("p", { key: '077c37623ab2ee3eedbbdb969879da79a89e5282', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '11ac1c0f5c6732ab5d0efa9380b8a4774404f56d', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'b6df9d5a90628c5d3db6873a475eff022e0e6cee', class: "payment-item__payment-actions" }, h("div", { key: '4ba6de133b896cfae6fb978c0bf2a3a72fe1774a', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '9e65451bfb6f54078132b180bad80156dd5b9bb5', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'efc9683fd78c4d94e940b9327b9d1524fcb0fe30', name: "user", id: this._id }), h("wa-dropdown", { key: 'e49c6cb030b38cd3921faf7852e4c9d2a156597e', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '9c683ca5211f9374b0197f82c67980ea4af0bd05', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '6b1176c386ec798011ad9cc8db8ee81261f03403', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'f020f2d20550da025215f63544255aeef4fbbcb8', value: "receipt" }, h("wa-icon", { key: '2b6dfe6c9ced81fa58e54f572e8e572942b7fb1f', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'cf1194c13c3be93e3ad253292b376d02ef8780af', value: "edit" }, h("wa-icon", { key: 'f491e6dbc0be0fdeaf7962203fa97231f6f30be8', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '97223b59dac2d0fb466e0abfb0d8135e7a749325', value: "delete", variant: "danger" }, h("wa-icon", { key: '082d7f92889b2a8f632b53af144432052d181573', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'eb7a32472336e4949738b46805e6d5023be7ed30', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
