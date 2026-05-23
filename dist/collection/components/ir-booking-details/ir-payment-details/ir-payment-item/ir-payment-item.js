import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import { PAYMENT_TYPES_WITH_METHOD } from "../global.variables";
import moment from "moment";
import { v4 } from "uuid";
export class IrPaymentItem {
    payment;
    editPayment;
    deletePayment;
    issueReceipt;
    _id = v4();
    render() {
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (PAYMENT_TYPES_WITH_METHOD.includes(this.payment.payment_type?.code)
            ? `${this.payment.payment_type?.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description) ?? this.payment.designation;
        return (h("div", { key: 'c58647937b3bbbc460149afec73ef5d8e786f3e4', class: "payment-item__payment-item" }, h("div", { key: '3f023f63728654a98fd808c902efcdaa542f957b', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '3832ad1b5d1c7ba5907a5142fa2db2a82b232c3f', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '5a05494abd955f4959099b0df43a135bedab2920', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '27770a1ec32241171f5a90fb16c335e087bb418d', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'e9ca44b5c43f7c3549ee30ef90bb386353e41a11', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '5967b0aa00f9e46374bb5e845d842318663660ec', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'ddf70da7774c092b5aff660a8a0dddff130b1d17', class: "payment-item__payment-toolbar" }, h("p", { key: 'f328c9c9a3b44d2c0d58d260cbd21951dd126406', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'c7b12ee342e63ef191493291451d8b800859cb18', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '5775997c1deb947d2c39b543c408804aad70fdb8', class: "payment-item__payment-actions" }, h("div", { key: '9ef279bb905ec1262f8fadf61674ca620880ef42', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '527951fb979ff7416cafd78e89e4a23b16c404f8', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'e6d630a817333274e0f34ec591fcf5695d866522', name: "user", id: this._id }), h("wa-dropdown", { key: 'e3bd83e89e9c5165b264a7bda7f50faf963ae919', "onwa-hide": e => {
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
                }
            } }, h("ir-custom-button", { key: 'f52ef710737081076b94bc9c4eba4cf422bd8b2d', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'de047ae001c2dec87c77e4205dff51a28012e10d', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'c950c062fd85dcae046f5638755599f856e689e9', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: '4193c50b3356db3250b0b17388928dc55a7e062e', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: 'afd6d16f43edc345b288326cbd04d1e48e984fb6', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: '5c463c5b8d82f6f5208be3c8051492574077513c', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
                            "id": "src/models/booking.dto.ts::IPayment"
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
                            "id": "src/models/booking.dto.ts::IPayment"
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
                            "id": "src/models/booking.dto.ts::IPayment"
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
                            "id": "src/models/booking.dto.ts::IPayment"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-payment-item.js.map
