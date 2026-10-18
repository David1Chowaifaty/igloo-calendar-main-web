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
        return (h("div", { key: 'cd21c0d5f53190375f017b9a6f44cb8619fbb129', class: "payment-item__payment-item" }, h("div", { key: 'a679c96de22e980a345e1b0fb3a921007964ef8c', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '5e099622df15a4eaecfa42e94d9a72d933bca813', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '8352ccc2eba2e7d7db932b61855ef0aac271aeb7', class: "payment-item__payment-date" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("p", { key: '21354eaa8d78232a361bc63fc0d8f817f31d966a', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '6ded095ffbc61a69e0af4f52b31054ac6eb2bded', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '6f0f0cfb7abd910f6247e11b233862024c1a6838', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '6d1aeb01a1880be0ec87a64f0f48cc6bdaf9114a', class: "payment-item__payment-toolbar" }, h("p", { key: '641cf04a09f877b26ddbe2a9a9d0c8f8e8c91b4b', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '5dc9ee2d0c82842d507cccb4abd846b5f7686805', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'e0deeb9db5a1a6a6cbbf642ab8a68441af5ec5bc', class: "payment-item__payment-actions" }, h("div", { key: 'cce22763b17846059a03086336989a5f81997386', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '72ebb10954879ba0f4278f52e31826bdcca6a6b5', for: this._id }, h("span", { key: '2ddb39411bd5ff6a15d0d29950bcd96ccf41da4f', class: "payment-item__tooltip-label" }, t('Lcz_User', { fallback: 'user' })), ': ', this.payment.time_stamp.user), h("wa-icon", { key: '792ce13726f161b81b4c9e290f0aca6c29691b08', name: "user", id: this._id }), h("wa-dropdown", { key: '9f232f7bb62dcc3bc01619178028908fc9824b81', "onwa-hide": e => {
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
            } }, h("wa-button", { key: '6a17f595ecfd65401acc98b2fabfc04688b8158f', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '0901bd5af1bf972eec8557c6e3cc6742dccb83ce', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: 'ecd6ac6e5f5d56dfd5d05ac75e5c8f9f2f6ab6c4', value: "edit" }, t('Lcz_Edit', { fallback: 'Edit' }))), canPrint && (h("wa-dropdown-item", { key: '15508f5362b94e975fc5155fb0d8588390e123a8', value: "receipt" }, t('Lcz_Print', { fallback: 'Print' }))), canEditOrDelete && h("wa-divider", { key: '8b7361cf803d7852d0e61827cb55b1b89cb89585' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: 'aad2f05baf2a0a6afbf6f79bb8abca90a9ec8552', variant: "danger", value: "void-receipt" }, t('Lcz_VoidWithCreditReceipt', { fallback: 'Void with credit receipt' }))), canEditOrDelete && (h("wa-dropdown-item", { key: 'b3b330f0d4dca3c5de3b79bee1168b627a58178b', value: "delete", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' }))))))), this.payment.reference && h("p", { key: '3c56fde31a0a0ce4f291b45052aad7c475803de2', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
