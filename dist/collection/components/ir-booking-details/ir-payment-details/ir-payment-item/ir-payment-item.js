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
        return (h("div", { key: '84da4de2dd5e0c92ff600829871940a5cf9b6cc9', class: "payment-item__payment-item" }, h("div", { key: 'c2897308110f6d4aea16165f374780fa7bf01a1e', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'd3ff55420b4a1092f722137a757a3a00c04a4dea', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '4c7e68008e45a1a515233f5ad2d1b6e464bc1b38', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '278e9e9c0ecbb4c676d9599bd9a72ebf7900507c', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '7caaa43d837ac0ff3403e561e5fa81d497f0b940', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'c50f1deeb9355b89ff170d24b0555fe4b488e92b', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'b427d6600b4ade25634c7e5876f59ec3f5da2524', class: "payment-item__payment-toolbar" }, h("p", { key: '47da31df8ff0fdfaaac3c52c80b1c0b0a7311b28', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '6998a6c3427da3ac737a005c09ab8bc14b731290', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '2052b33a10659260d86b83d10020d8427a743534', class: "payment-item__payment-actions" }, h("div", { key: 'acb1defb181ed460f6715650d2b7c6804799d0d4', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '419a917ac17b51b9c368f12d28f5918b1269801f', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '720c6d838fa8cfc250d9a8df703ea37a2d418988', name: "user", id: this._id }), h("wa-dropdown", { key: '122b7ce0754a794c019ff3000d6e52901b32a94e', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'c5b82dfadd1564f674dcfd2da1e9e815869a636e', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'd9e7a7a9246fb037c6c94bb9b21f397e6f26d9ee', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: 'e8feb5c6eb609dd7484a227ef60448b097ba70b2', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: '82895677585252c04227b1a7721782d9b01581d5', value: "receipt" }, "Print")), canEditOrDelete && h("wa-divider", { key: 'd5b4cf24c9d59ee2b241157d564bf00f81c113ed' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: '7b8e40ef78b213c85cc75218a030b23e9990f6e6', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: '1c771082ddd569e1c47bc8ead124e6db27a0221f', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: 'fba0d88d37cfadff9a5d5eb0e15368b5a90c153e', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
