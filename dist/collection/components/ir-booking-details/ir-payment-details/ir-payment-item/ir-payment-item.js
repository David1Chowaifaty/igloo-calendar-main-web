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
        const canEditOrDelete = ![PayTypes.Payment, PayTypes.CreditReceipt, PayTypes.Refund].includes(this.payment.payment_type?.code);
        const canPrint = [PayTypes.Payment, PayTypes.CreditReceipt, PayTypes.Refund].includes(this.payment.payment_type.code);
        return (h("div", { key: 'ee331db4bc90298c2d4ffd4229d1aaccc0a8d9bd', class: "payment-item__payment-item" }, h("div", { key: 'b242a66c3d1c716174ecce149b5826ba2e11d6c3', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '919799e559b10a176b736bd4cea2a32fa9b9e019', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'fde7e07b00631652871fda99d6a0de8e48b2ccf4', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '7d0d8ed4c4829541cc6305971e9d34e2d9a50dc8', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'ce256adf73aaa531e42636795c9eb2f3f02959e8', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '7b5663605c5351c6e8760fd0782ac6673a5c1cfb', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '48baff372110ba8c62607cf5130f019a8cb6cd76', class: "payment-item__payment-toolbar" }, h("p", { key: '63d28e5d131194627ed9fc8cfddd7f24246c9df7', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'ceca02d4dcafa86c3056046da68c0da648e13023', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '8eb2c78162a233f08170a7b69ad2fcf64d8840f5', class: "payment-item__payment-actions" }, h("div", { key: '8e51c7f72ee29c76f19db09c8870a3b6c46c3269', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '4f1ec4b3f9da722995dd15d981cd50873026a292', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'c100dcd0c98a3f23c4c13c3ca401706124f0918d', name: "user", id: this._id }), h("wa-dropdown", { key: '7f3b01f537b3028ab44972938554d6e26c41f639', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'e50dde223c409457217c62edeaa4986780e98339', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'ddb39e97a1d1f11cb4452ac4bd76f91a9e3d881a', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: '485550589135782c87a695e73f24b70264d9dc10', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: 'c1d54164e0cdf577a96bd0f2c34e48a22bbdb98c', value: "receipt" }, "Print")), canEditOrDelete && h("wa-divider", { key: 'bdacab528d27d76dcea4e1a75cd88f41bc060f03' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: 'b40d96bbea71cae675ec017621a211dfa57a81a3', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: 'b78f34d2928bc5c33b72d6b47297a6577278c07c', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: '0e8df7504880ad57a1c4fc6892b0859c1a0f5a98', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
