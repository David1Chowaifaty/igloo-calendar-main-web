import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import { PAYMENT_TYPES_WITH_METHOD } from "../global.variables";
import moment from "moment";
import { v4 } from "uuid";
import { PayStatus, PayTypes } from "../../../../types/enums";
export class IrPaymentItem {
    payment;
    editPayment;
    deletePayment;
    issueReceipt;
    voidReceipt;
    _id = v4();
    render() {
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (PAYMENT_TYPES_WITH_METHOD.includes(this.payment.payment_type?.code)
            ? `${this.payment.payment_type?.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description) ?? this.payment.designation;
        const canEditOrDelete = ![PayTypes.Payment, PayTypes.CreditReceipt].includes(this.payment.payment_type?.code);
        const canPrint = [PayTypes.Payment, PayTypes.CreditReceipt].includes(this.payment.payment_type.code);
        return (h("div", { key: '3f8b41152a88e5b19d0f3f746522b91e6ff9948a', class: "payment-item__payment-item" }, h("div", { key: '316317900e71d33e6c087a938775feb34a3c5da0', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '8b35dff3f31749af54d3482401a129b69a13f534', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'd99c806c1fc3bc78cd4c294f608852445cbc1e6a', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'b936c875c2f9a8cff9d1df20269baa31ed8fe62c', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '6ff4849a8bf13d029ee3e82cf0fc8957b4200909', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '5e615f39058a4f44b2b96f9b470a604743c78afa', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'fa28ce0ef93cb3f3dc2dfabe81e9ac7e0e171682', class: "payment-item__payment-toolbar" }, h("p", { key: '2349727305ca271b99152516486ef5ee9c7fa0f7', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '729a2f6af586ff5a642633476d8a9b092e0a63c5', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'ec9aef8227bf287d7ffe1cdc43d0ecf703687b57', class: "payment-item__payment-actions" }, h("div", { key: 'ac91c0e7fc4a6a1d58127af5cc5b18474c82aa89', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'a605581881c70220e8abc110dfa88cf4af50f6e9', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '002e25d3c95e58d8e20f6869a7341d203f956e09', name: "user", id: this._id }), h("wa-dropdown", { key: 'de88e47203863ff54b1f37d460dde1c645571d60', "onwa-hide": e => {
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
                    case 'void-receipt':
                        this.voidReceipt.emit(this.payment);
                        break;
                }
            } }, h("wa-button", { key: 'bae4a955aba7b5a069ee7c02addd32c643623196', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '2c6a3217100186097bf8c625fcfc3a8b08e0d11e', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: '3bbc3bba59b5d5303da20df35e8a64abba96e261', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: 'ef3fb471109980b85a9b3c01f98afe05f7ff1e40', value: "receipt" }, "Print Receipt")), canEditOrDelete && h("wa-divider", { key: 'da36c55ce5cd2b71b7bb0895202bfbc0339d7937' }), this.payment?.payment_type?.code === '001' && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: '87e248aaf69899fb5e00fa59a218099014afd98d', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: 'c3be8f027bf7a462904347346546883514db5201', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: '697036cfbf26cd34506ff42fab7a142cbae9fd3a', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
            }, {
                "method": "voidReceipt",
                "name": "voidReceipt",
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
