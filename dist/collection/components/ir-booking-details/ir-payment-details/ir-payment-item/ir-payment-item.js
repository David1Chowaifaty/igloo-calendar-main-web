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
        const canEditOrDelete = ![PayTypes.Payment, PayTypes.CreditReceipt].includes(this.payment.payment_type?.code);
        const canPrint = [PayTypes.Payment, PayTypes.CreditReceipt].includes(this.payment.payment_type.code);
        return (h("div", { key: 'a2276d6ef5192a8452cae7337a0fbd9fa6f71a35', class: "payment-item__payment-item" }, h("div", { key: 'fbdcbc2fa119af4595fd45dabd1373970ba8ab07', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '207bcdce8fd10360d03b55f7c79d20261e9ab970', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '574bd7dc2c7176099b62b8805427f9a7f59929ff', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '7a6684705afc629f3b123a9ce629cd46d505726d', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '3fcff488763efbdad4392f0ab69c0b55bd99a8bf', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '423701d52efc968193927cde91378ae148e6e39e', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'aeb7216d4a3c4fa9f95c6b731782e29129926d43', class: "payment-item__payment-toolbar" }, h("p", { key: 'f93eb944cc946dd7230f7baa7c4e54fcad305db7', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '736da14b9fc0b5cae69590ad63d72a527c60aa3c', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '3ada7f4a8a5861b6378c136cb9ab251c8f245d53', class: "payment-item__payment-actions" }, h("div", { key: '2483bd63671696a962a06696e30327ebb161b5fc', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '6aacfb63731d1667fc666b1bde6a2155ed335a54', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'ba36a56ffd4054f089c26a6281cb4dfece13b946', name: "user", id: this._id }), h("wa-dropdown", { key: '1bef89e6ea7d92b0f89bb35e85ade4eaf670740c', "onwa-hide": e => {
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
            } }, h("wa-button", { key: '9c61a7ac2d1da55a0cf781528cab517fb871c3b2', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '999a08e3db1f1b26874626919036e5efe882ad10', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: '341cee76f0a2cd2392dc0c1f90140a3b57c91ff6', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: '3a4742deffbadde27f2d26b09a690d96e7b8d6ea', value: "receipt" }, "Print Receipt")), canEditOrDelete && h("wa-divider", { key: 'a980dc53da460430efa470e19eb4452a25f547ff' }), this.payment?.payment_type?.code === '001' && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: 'fa296bfe36e7909ad44c2c93a86975bcdf792a83', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: 'a045d48780ec7d6ee19d51a7320890d5d65c9a4e', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: '2a1f259b390a7e364f045e01f80928444f881821', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
