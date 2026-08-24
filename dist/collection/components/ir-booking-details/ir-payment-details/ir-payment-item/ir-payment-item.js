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
        return (h("div", { key: 'b2f71a2b7e24b836e1972d57d9c00e76b429ca12', class: "payment-item__payment-item" }, h("div", { key: '350c87666e5dec189981954585dc6238c67b6ff9', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '38ac575b5f3b99d14e1185fea1e9d8e1848ce914', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '7cec14619d006527b40a40b7ab0c07203fc53510', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'c32c10f32f9c9f7a7bca899951125846c002d562', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '03a712f6172042c17a045a85db59eed153c4e622', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '3f8c46ea7a2c0cdacf97374538c885696670c224', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'a822661f5278bf868e1ec3318cc4fad0f002e396', class: "payment-item__payment-toolbar" }, h("p", { key: '6bd17b3551634db6eb077eadf4bf4aa8bca05c02', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'f5a1e2b9e0868de65386459de08bbcad176824c8', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'fc36e563813ac91b82a6cd9974ab2345f6bbee2d', class: "payment-item__payment-actions" }, h("div", { key: '2c60d5c954a6135b2a49890181fc94b79ca2c6f4', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'cc5cf60b3dfaa997498ba7affcbf64e9c836535f', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '88de0a304259964ca98eb770fd9e022b082cd3fd', name: "user", id: this._id }), h("wa-dropdown", { key: '07f55fb42c7180ee6e1d8ea5295e894636da774b', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'fa550305ac7b865bd8b1c87dff826c704cac09fa', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '1a8f19edfe82335a3c9a7d180052ed0f9204288b', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: '57a1595b5449d5e04b383d0ee04c3d1df4ceaed1', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: '69466b2137f81e3445bde7d983e877efded70136', value: "receipt" }, "Print")), canEditOrDelete && h("wa-divider", { key: 'f92809f9dca87a24c183e8aa090d1bb47c9c192a' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: '4cf2173c3585771409993a570ccf608890c39571', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: '92b133996fc8399879a04a349fd719dfe563fd06', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: '35eb57cb1397da8aa908654dd2588f63149c481e', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
