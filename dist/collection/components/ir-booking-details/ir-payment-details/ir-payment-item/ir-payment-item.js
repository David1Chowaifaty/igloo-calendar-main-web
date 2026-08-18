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
        return (h("div", { key: '22fa84e49b8336d1129b0429096896ac6da13dc3', class: "payment-item__payment-item" }, h("div", { key: 'c1ce77ed676658e0e70428c386871b622b8d8c26', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '8d36f76616df6db179b5de9ac53683cd9266bc15', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'b8edda2ce97434be98b412e93775a1da3a0366dd', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'd27c9ab2cdfb5674f4f5c8cf5e0fe05c380daa76', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'bcb66d66e1cf6a4303be881435c73a4a0da1ae69', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'c4f8b2f29028ac6c9638efa72bd96996f842cefd', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '57533d960d98197398f19b2b39c492b7a88e5670', class: "payment-item__payment-toolbar" }, h("p", { key: 'fb77c2844b95c9fd511c99bc3749fd116faeb079', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '78a7f1ce5a8302416e318776d78e599f4c34dd6f', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '9caf810be9543de6e9d7210a98dbf9f371bcba5b', class: "payment-item__payment-actions" }, h("div", { key: 'e390bc423b9af1a3f31e2ca48b3e675eab0b1221', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'e6659a55b9db7fe0147b1490f3bd7352295efe2f', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '6505c90777d57e16234c461a4e1b52799a6a528f', name: "user", id: this._id }), h("wa-dropdown", { key: 'a0f4bc80be18240fb365c26f8cc734c98f82b35e', "onwa-hide": e => {
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
            } }, h("wa-button", { key: '6339befc2e89d37c5290036dcc33a7c79013a794', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '637b0d88c14ad39aac99048df224d8a842779524', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: 'fb737af1625bbef17692a8cdaa16a26454b5797e', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: 'd43e7ad60f7326597b0d9843b85e669551e49e77', value: "receipt" }, "Print")), canEditOrDelete && h("wa-divider", { key: '706ae166a7f6fd80c82d033c41837629ed41407a' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: 'afbc7b43b64695210e8e573d86a58858b1d15704', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: 'bf202b631bdbdae75ad98b7a40f5c5106251c48f', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: 'f7fa3bf7442f9cfc635b1f4a4a7b5f121020f9de', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
