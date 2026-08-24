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
        return (h("div", { key: '019537728c9fcb01613ed586fecc1602ed523067', class: "payment-item__payment-item" }, h("div", { key: '5189facfc40a48c7f37a609b19f7816b1427cf15', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '2b3a6e0af1445de0054420983944c1b4b12d0a44', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '5ba66e11ca61d826c694eb25fdcfb5a4035de616', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'a327c9710a7a13cea11e2b1476aa4228b2aacdfa', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '620f4eb3256cfb632fea3691e00497e33deabc71', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '388296f6bb5fce17235875de62592e492a829a3c', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '5a8e09ab409ff9ef34942109232da11cc9aaa588', class: "payment-item__payment-toolbar" }, h("p", { key: 'f0ea82fe29cb4ab9fae99d3f03e9e653ea461731', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'c9e507a5657373bb7f2f43ccd00e864bd42ecdd3', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'ee1c49589fd678d42249e97fac8431cb7cd76568', class: "payment-item__payment-actions" }, h("div", { key: 'f414fafe4fe1099daa245ffb59dbeb1e5e272f79', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '8b5b97017ece5fe4454349706684be280e337d39', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '08454866b27fd517e951d91f51eb5edd1e8b0cc9', name: "user", id: this._id }), h("wa-dropdown", { key: '4355d06270c2fe824d33047b764df479049c0292', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'f603645ba5b8b533fbbfdf888fe102c8193b6d70', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '8614052e2130cc3fd202aa2d472928f83a878c41', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: 'cca55dc09e7627e79879284f2383a11451560beb', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: '161d6f69e04aba50b720dc28671b7375ac84b681', value: "receipt" }, "Print")), canEditOrDelete && h("wa-divider", { key: '69b076d208a7e645330e9d88f86e5adbd3fb6d24' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: 'b35f615c8223bea222839f3f63db26513f2e545a', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: '241f2743066493521b5e745e01912716c1da7c8b', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: '49f6b1b6250c09cbdc76ab0cd76fd2f791df156a', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
