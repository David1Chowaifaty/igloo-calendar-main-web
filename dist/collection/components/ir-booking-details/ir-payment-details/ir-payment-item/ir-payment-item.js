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
        return (h("div", { key: 'd2ed3dd8bf62559e4e2c4b3fb98c0642156e6aba', class: "payment-item__payment-item" }, h("div", { key: '0b63e031a6befdb8bc450819ce20e36868f82620', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '537e6644924b202e82ea6d46a37f29e5d56e37a5', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'ed0304a4c79fcbf8d3e8c790853bd0a90708e08e', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'f157d626ff19c791e6832e0f24e46d8eca90e378', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'd416c63ae95dc427b8613ddacd0176b7b2118be6', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '5b6d22fbe1cf8cb0c03d88dfdc075b7e7ffce873', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '478693299ab95c40d41adc7e26e90712d8dd7a1e', class: "payment-item__payment-toolbar" }, h("p", { key: '6b6911bfbdd1e25a93d7e1a32f25215343811c78', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '1684d0cc14b35cfdbc1f52432b42612811e904c9', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '6a3c5c84b1660ad0013f80f29c33790ebd12db0b', class: "payment-item__payment-actions" }, h("div", { key: '0013303f5b5e15ea0794e98e36199e7366dd8893', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'c7b5d2170155b3b77177affa9a37aa0e8ebb6dd4', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'e455122212eb3979693fac019847700d3c0975ec', name: "user", id: this._id }), h("wa-dropdown", { key: 'e9ff027093597a7bdcf59c2512fb7c0669a6e4d3', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '74710c3e8bce89476a626d384af8e74bf9018c0b', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'b7da988de7151a15f8dadd89a77ddc5848ff5bdb', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'fa155ae2cada684c85c53cb366f45f63e978450d', value: "receipt" }, h("wa-icon", { key: 'bdcc60c3f7c25aaf8c84449d0f6c02c7d5c451ce', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'b61845887ecaa3f8a112709902bdf399f040dea4', value: "edit" }, h("wa-icon", { key: '7e2e4cf70d51bc70a8b38220acdd8477b7fe0493', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '0dd0dd0ac0484038d85a77cb408f71fa0a92e67c', value: "delete", variant: "danger" }, h("wa-icon", { key: 'ab36cae5b9aa9ede12717e2afdcd5d120f0c455f', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'be1ca47a8c5e129f1e250661a67a685d0a83e698', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
