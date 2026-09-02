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
        return (h("div", { key: 'f79193676a0bfe1444d93d9efc0f01cd7b5db7c0', class: "payment-item__payment-item" }, h("div", { key: '21441185fbdcf918e818bfa1109777b60914fc68', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'bab320d07776582bf83bf34242e1d3e679960ce2', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '9eba874e9f326f26bbd568479a045cfb83f31d83', class: "payment-item__payment-date" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("p", { key: 'a208d33e60a615d66354d24150c178dbc6e2ce0c', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '57a6f638187a3028b4d28fd962c4d4b03429e9cc', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'ad664eb2d6cf2240ade669004e7154faf0565011', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '760fe3d42a5cf092e282e27499bcc91bc653a2a0', class: "payment-item__payment-toolbar" }, h("p", { key: '3f14dd6c1d7e34c6777fd6437997dd31a5ee47e1', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '8ff2fe67f441aa902ef1a554fbce2ef8cca7b9b2', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '3eea1010b004d03c72d9ebb446bd63d4e4d99f0f', class: "payment-item__payment-actions" }, h("div", { key: 'bf432dcb7af93f6295c0b9ec3caa51cf5bfcd6a0', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '0b885e067e1136ff13617977284b69ce396ffc12', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'd68ace9deb3cffb45193db766db1c68ff90730f5', name: "user", id: this._id }), h("wa-dropdown", { key: '29143a05a011553c41e4c873ad7d1fe33571cecb', "onwa-hide": e => {
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
            } }, h("wa-button", { key: '1d9de6e5518dff7fcb7fa7110635dacdfbc08c76', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'ae4be6bc2b1c5a9bab7357e837f56c3396eb3a0d', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: '10f7552c0b5bb80b5085ea72184f97ffcc4c6439', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: '7aa3be233d17b423941a7ab5766595b0c66f41a0', value: "receipt" }, "Print")), canEditOrDelete && h("wa-divider", { key: '77607d3713feeba3ae3996272fd70e6c828b2ef3' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: '3b7e66cb68efa4360ba0eda28944db2fa8021f3a', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: 'fd78a66d1c3d2041ebfa652711ad044a6a9471c7', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: '6023c7370df331b8021e475543f7029a7bfe3941', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
