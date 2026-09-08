import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import { PAYMENT_TYPES_WITH_METHOD } from "../global.variables";
import { v4 } from "uuid";
import { PayStatus, PayTypes } from "../../../../types/enums";
import { formatDate } from "../../../../utils/date/index";
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
        return (h("div", { key: '0505a8c977d1b52fc76d45349fe9d7a48d3a1f7e', class: "payment-item__payment-item" }, h("div", { key: '9730ea9b415d386e4a2de344bd1aa6d0a5e9a24f', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'da2bf334f83d28697269d9c6463526a4f2f9d973', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'e0a4728c71dfb66e8f52ad9a35641a14e894be37', class: "payment-item__payment-date" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("p", { key: '4f2854e0388f219cfc54b489260dff7c4a6d7176', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '3119772ecc793ca6bd250e5239413b8cb286518f', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'd672e599cc3895a1974a13abe785fcbd2393965a', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '745fee5ecf02207a8b9c9a3a829951dd3861ba1f', class: "payment-item__payment-toolbar" }, h("p", { key: 'e0fa172134c4543b1eb6efb83a41bb06ae04f332', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '3f3bcbce32fadffd4fe8c91564543f4125bbe2d3', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '7798edb24fc1b7529eade63c93a161a1738107c3', class: "payment-item__payment-actions" }, h("div", { key: 'da450dfa49c749bfb6cdb15ea8d75c6a070adef7', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '14289cdd0f4ebdf5a535264cc55d1c6612166576', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '1f3f49d2cd652f8df3250210d9de46d11274f430', name: "user", id: this._id }), h("wa-dropdown", { key: '78601648057af5521d3ef3f4dca57174d9342c78', "onwa-hide": e => {
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
            } }, h("wa-button", { key: '1b7e688665f204c412472f0059483a9d2fdfcd6e', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '3749c5a2213d79489216c731ee1a3bdea421af1f', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: 'f63a33a33542749cae5f1910f04d79b68a4b97a7', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: '71afda39019967ee28b715c1deb025b4ff4484c8', value: "receipt" }, "Print")), canEditOrDelete && h("wa-divider", { key: '1500a9d2fee822234f1239cd4fcdc0434debdb5d' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: 'e891a089eaefd2e37ff78c63781071d171489a1e', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: '98a1ffc9b75e9d0b80bd743c5391ad474d619205', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: '9ec11b429e883f831282fc51ee96ab6d2cf7ddae', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
