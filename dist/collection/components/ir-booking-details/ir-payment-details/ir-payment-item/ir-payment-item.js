import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import { PAYMENT_TYPES_WITH_METHOD } from "../global.variables";
import { v4 } from "uuid";
import { PayStatus, PayTypes } from "../../../../types/enums";
import { formatDate } from "../../../../utils/date/index";
import { t } from "../../../../services/locale/t";
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
        return (h("div", { key: '9ba5f34156c6f80fd3a96f861fe3b43f23e047c6', class: "payment-item__payment-item" }, h("div", { key: 'db8abbfe652aac2d1f61e4cd129cafd21cc2852d', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '47033a702caceb35e16288af6ac7d3f7a6f1f53b', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '5898986186501675b316835155853d390928ab8f', class: "payment-item__payment-date" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("p", { key: 'e5c268947df52daac46ea1e4928b71ca5949ae64', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '32d2c77efe354d6e6a855796e020695ae03a8209', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'effbaf6d82c7a0a0f6b5a478e2cd3296530e9d61', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '25fdf99a73ea9d638411c99d8cc40058c4859cfc', class: "payment-item__payment-toolbar" }, h("p", { key: 'fbe374ed5f5c47fa14fd2612d0bd92435b09c32d', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '751355e06e475725fde66666e45d641a5c7ffd4b', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'ae2173c93fd3da02f174b18a10fc6e27cd75f8f2', class: "payment-item__payment-actions" }, h("div", { key: 'bb51a861d4d64cc3268ff1e54e4893feddfe3edb', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '5ceecc274c89daab929efd5b368e95d1fae26239', for: this._id }, h("span", { key: 'fa46dfdf11a7a2dac71a04e6e01fd93b768951e3', class: "payment-item__tooltip-label" }, t('Lcz_User', { fallback: 'user' })), ': ', this.payment.time_stamp.user), h("wa-icon", { key: 'bbd6546088f8b404de8d79dc4c99e231ffc9ad33', name: "user", id: this._id }), h("wa-dropdown", { key: '203d833411b14b03d1390f84691f981dec3408a0', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'dd12c53a966e6b38dc33c98cedcd821b82cdcfdd', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'a175458589e4731eec67abae9e81ad2f75d4f328', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: 'd099ed62c9ee5c541e6bb6bef438cba9601f8906', value: "edit" }, t('Lcz_Edit', { fallback: 'Edit' }))), canPrint && (h("wa-dropdown-item", { key: '7230da7cf07fc3ce382e6e3f25c6e9c9e103688a', value: "receipt" }, t('Lcz_Print', { fallback: 'Print' }))), canEditOrDelete && h("wa-divider", { key: 'ed7412135703de423307987390b4cea3b2d01f8b' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: '0d7a1cc8197fc754796d6fa90e7a12e74e837f54', variant: "danger", value: "void-receipt" }, t('Lcz_VoidWithCreditReceipt', { fallback: 'Void with credit receipt' }))), canEditOrDelete && (h("wa-dropdown-item", { key: '861b558081bfc4d896d1479458a1615f21299db6', value: "delete", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' }))))))), this.payment.reference && h("p", { key: '0fb6aa340ed0d3082e490c562253a5ee36db4649', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
