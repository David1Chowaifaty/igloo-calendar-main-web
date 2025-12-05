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
        return (h("div", { key: '680b5806472224ef21b26b1be409d6a0ba0a0635', class: "payment-item__payment-item" }, h("div", { key: 'aff1813e29fe3cbd141d0005b0f9c115b8484e71', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'c6a9f0d2e2b77d9c41c5617232d90b6da29c193f', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '195132f153218e8e7fe2c68871cebc27d0896ae6', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '3ec05d6a60792103b3e4756f54e25306ba20ee3c', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '49883eaa4c4af338ea035402488d17b82b76a1c7', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '8d0973db2ebbeb49de117146b32c3dcb1c049711', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'be8ce8e0936530b7d74656e614f128acf1ad4763', class: "payment-item__payment-toolbar" }, h("p", { key: '61e5af72f7c4d38fe1938df7003eacc13bc7247c', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '5ba319cd8cf00f5793d0e3a916bea276d0081b5f', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '0c082abcc34909fefeccbba0aa5a807a75f4cc51', class: "payment-item__payment-actions" }, h("div", { key: '9194b2116fa139810293b1804f440580cda68295', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '4a06b5c7b4d2719e4f73c2e7f3a4335e2462dbd0', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '524a5b51306f0a252c70dfd5707bde06c55e68cf', name: "user", id: this._id }), h("wa-dropdown", { key: '16bae63621c06359f996bfe2c3d78f9ff4a0563e', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'd2606a135f555fca5f431015a1a4e3d84178a58a', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'a202d72e33056ea876e35c7a36668c58f2d8b5e5', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '7faa85647744ffa87eeab4db81f59df26005c501', value: "receipt" }, h("wa-icon", { key: '136ce5df193316c9f1abe55a161a019c26a3c84e', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '2513c5dd21ca6482cc26d81d06450d229738cdd4', value: "edit" }, h("wa-icon", { key: '58941d21793acb37cc875271759f5775d33ca29c', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '6ec81984ea2b3d2f550aa7b0ae785acf8e6a7138', value: "delete", variant: "danger" }, h("wa-icon", { key: '593c7eb130db327c77659c2674b015b340864584', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '46085969885c82f21e599f6fd41096ae5fdfa7cb', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
