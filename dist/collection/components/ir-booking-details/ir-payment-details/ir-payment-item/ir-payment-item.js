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
        return (h("div", { key: '3023ae056a6f88f50c4d3a6ebe27afa393785e68', class: "payment-item__payment-item" }, h("div", { key: 'bb24e0fd012d6a818cdc6a5d9ae39c30620fb95e', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'dfc37b90efc747d5c7fbb4f1274d8823c84ef06f', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'ef9bb253a1439d2e6097b9e4cee314af6829a5a3', class: "payment-item__payment-date" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("p", { key: '4e3978b06252cbee42fdb0cb55293deae5ddede9', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'b33d78157f2830bb83d9d4ccefbdde42fa1d1883', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '658923736eb6a8174c706c541caca86cf1f9d72f', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'ac0be83010d44307322588ffd887753a4fdcd1ee', class: "payment-item__payment-toolbar" }, h("p", { key: 'df98babd9c3a84d51306fc4d219f170ecf4d15c4', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '5a34e3061d3a4c90e52910e3a5e58bd191728567', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '31e974683e50ab5f4c4774912ae26f67119583cf', class: "payment-item__payment-actions" }, h("div", { key: '2e09e2c8a1c4a61223b66dac7751d95969f441aa', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '8c7b2c65bcc7481779ee47349c1baa6f36f83783', for: this._id }, h("span", { key: '6f749052865e85ab70e0143e1fbcedccf0376819', class: "payment-item__tooltip-label" }, t('Lcz_User', { fallback: 'user' })), ': ', this.payment.time_stamp.user), h("wa-icon", { key: '1af4b2992eb63b6d09fd1e654761f2130ed85085', name: "user", id: this._id }), h("wa-dropdown", { key: '0e3ab3bd8f826fc828817f358862c479b8a6b0ac', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'e255a187f9fee56e76a70637183619440fd86e23', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'e6981e76abe00a10a6ffae8c2732de93cf65fa18', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: '1300050c2a1372457a5f56171087ebaa7d6f6942', value: "edit" }, t('Lcz_Edit', { fallback: 'Edit' }))), canPrint && (h("wa-dropdown-item", { key: '3eded4552c4605e24ddb95ff034e8aadc2434e95', value: "receipt" }, t('Lcz_Print', { fallback: 'Print' }))), canEditOrDelete && h("wa-divider", { key: '687001676bb092591f1c20235b68b5ecff086ee6' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: '75d38d6ac0e25735696f862c575f862da33d0fe0', variant: "danger", value: "void-receipt" }, t('Lcz_VoidWithCreditReceipt', { fallback: 'Void with credit receipt' }))), canEditOrDelete && (h("wa-dropdown-item", { key: '4abc9975b7cf2f6326f8317ed2ac33f9b813f5c6', value: "delete", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' }))))))), this.payment.reference && h("p", { key: '93ac5d9eddf56fe9df83613cc83aa4b7ddcd3130', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
