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
        return (h("div", { key: 'b77b4a15ae288983cca57b30092ccac2f8f4f593', class: "payment-item__payment-item" }, h("div", { key: 'e685dc865c41cb20eb036f61fa4cf6ddb8406988', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '093bbf97e65c06348d7a97e689f798b72eaeace5', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '84eb5033c65711deeb47d23e77912552c0d0b8db', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'ffb692aeb0eb2bf8d72d734e7321e11e9cbbe914', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '3eb9964e626743c97ba39d8cf4604688e341ac7b', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '29d497affa375f81dcaddf1d0a1eb77dee37f516', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '39d3ebbcec4bcc1cbe6b858434be48ca94a10530', class: "payment-item__payment-toolbar" }, h("p", { key: 'af7cbdd72c5ab453333010d8308ac98d3a876b7b', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '62a37dd0bc04488ce0a62f4e4dfbe0e26abdf166', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '046e9a131eced858679e53ff3e4d6aa82cfef783', class: "payment-item__payment-actions" }, h("div", { key: '8e56c25761ac947746ff36bc9a0b225fdc48aacd', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '0423b219f797b20c3ed2b6b12154fd5b81c7b8a3', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '9ed575d257fab2d476e0de903653e4a26d7a0c89', name: "user", id: this._id }), h("wa-dropdown", { key: '1dec2b9b8ba73147a76b76d111405de9bb5e7586', "onwa-hide": e => {
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
            } }, h("wa-button", { key: '2cc285f637f7b7aaefed1acb06952f6732968d24', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'e3cee7555262a85451904080667b2d0361e44c26', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: 'da873f74e529c7557aeef176ef678552ab517669', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: '456d566bd2eed311a5efd4ccdc66ec6f8fa0ab99', value: "receipt" }, "Print Receipt")), canEditOrDelete && h("wa-divider", { key: '554fcc3a95088de8378c82addd42c83819999152' }), this.payment?.payment_type?.code === '001' && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: '9635ea0dfbf9c43fbb2db70f2fe37cdadd838fae', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: '31108d8a497827c1fe9fa86ef083ecaf90339a85', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: 'de313fd315ed8540dfd6ee0744e091b871dba57c', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
