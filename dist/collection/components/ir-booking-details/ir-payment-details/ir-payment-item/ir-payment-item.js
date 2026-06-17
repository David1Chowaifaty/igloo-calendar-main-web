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
        return (h("div", { key: '5ece5466d966dfe61dec4d7d703c6d6d732613e0', class: "payment-item__payment-item" }, h("div", { key: 'e6e1b2803af2d67056e3a6efd16470653519ee1c', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '8c4d0f8517bfd64815a0aa9dae39887c4e5b6e6c', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'e437afdc90d2c93b3df3e8b9cbda89ddae3945dd', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '7f20dc1675cec66b32032355fbffb9bfd5b9ffc9', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'bc69e68a2947e5edc8fdec9707ceda98e483b509', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '931ad368e1ffe6caa223e2a9c51755dc91c3584f', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'e07099d397362d4843caa2746d163f32bbf390af', class: "payment-item__payment-toolbar" }, h("p", { key: 'dd0b92ca3f59a3ab9278c6c9b75d397a00913399', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'b093f8072822d8df49a5c2bade4b239b292d5944', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '1079ec5d625947ec90fc0895775e918468bbd01c', class: "payment-item__payment-actions" }, h("div", { key: 'b8bb7be4bccc28bf2753319eb5945f6c94999635', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '6cd9d513e6e8ecadadb65f66f29fab1385e10b42', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'd9532a81e50dcff325e5c3389d2927a05f38a61b', name: "user", id: this._id }), h("wa-dropdown", { key: 'fa53b2e91ccf6407784547868f6aa4d7f17a6989', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'd70e35a0e3ead5e0836d256933ca86d8adcbac51', size: "small", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'f3ca483324340280f4aca9bc03411ef854cb1732', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'cc55793284d9a6af9cd1f8438588fbe2cbc44abf', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: '63b6d6b3913dcf5847697862d9b0e4d5bb529636', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: '1e0703be447f151b7bb6f546353679b6a9137793', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: '0f28f313784ab0ae62f3d70ec68bba001caddb6a', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
            }];
    }
}
