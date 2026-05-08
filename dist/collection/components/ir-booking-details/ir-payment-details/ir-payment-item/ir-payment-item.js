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
        return (h("div", { key: '4aaafaf2b28fe9a6b42a53b56def03662246ede1', class: "payment-item__payment-item" }, h("div", { key: 'defe49434cbc1d351cca11689b673a7344d1fd04', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '026d59c8320baab911371b38d639162c5dc36b99', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '141b8d89838f4c7ce675bc3ff6cf1a40ac036ac5', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '9b9f9c7c58675b51b554aa6ebce7ac4b24148617', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '5b782465932caf39684ab3bfa79644d6f1ee41a3', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '3fe5268861a628e626949fd40440c46e0a1851e5', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'd42bd44d8be83d5d7d58088cc7c7618bcd30edc1', class: "payment-item__payment-toolbar" }, h("p", { key: '0494a42831e0a9dfa9ac5dca5c99d1ce2f66a506', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '27144591c5b2a90bc01f319b184a3b9b7f1f4f57', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'fa0835cfb7920bbde5686232b784a10322547bad', class: "payment-item__payment-actions" }, h("div", { key: 'c7c8ef4bb230fe486603e66598a4c22cf754b9d0', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'b129ffeaac1af2be0d6487235a089161d87474b3', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '8d6503ae9a90b4d38e3740c051afe34e42d34c2f', name: "user", id: this._id }), h("wa-dropdown", { key: '9d19c2141c3ac874becd4d8f563077b1fad71df5', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '833244855173fa5deca467adcb3ebdade3249a14', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '25e6af20763b0ce4c16f4ff57a931fd9edce216d', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'b22be026ff7b46c2d60ff36dee23752280a0a44b', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: '1f80407e4a53b8ba892400d52a0cd9b25adb0dd2', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: 'e99fc1c6947e18cc2df461cb1dba6fcb6afe2091', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: 'd9fbaa60129f8dfd4337f47db6ffb6392e2af44a', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
