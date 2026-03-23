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
        return (h("div", { key: '6e6d2abf2edba1b94b3b66164d80c2809e3ca936', class: "payment-item__payment-item" }, h("div", { key: 'd125a607bd255e28a7f9c0b54fca46fa9fadd971', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '5970d9b07858e2becb4afbf957458a85e6bd1ee8', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '48f8dc2c40fa0e4e4a92b9d05778c152faf26193', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '87994a93a94cc3d8ce658779a5d37e51243b86d2', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'bcb94db219bd73d2412bf1e90b34fa69960463e6', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '6ef841f24e19d7d1c80e1df93bfdd5ca16419f93', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '45aa9c022a58525908500aa13f1814c232edd2e1', class: "payment-item__payment-toolbar" }, h("p", { key: '9895a85438334855c0a36ac478fec64897a1ef5b', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '100fac2cd3ddfac1c8bff6b83c5180c784b918e5', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '9ec0370f4bf19b40cda234009bf7775ec9ac5d95', class: "payment-item__payment-actions" }, h("div", { key: 'b7a0ae66657e32ec31b0b6a19f981bd04535d445', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'ddbafeaa9d397b3b28afe1228001bf11576cc922', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '1ad7d51706e9edc811a2753a6defffd58faaddb2', name: "user", id: this._id }), h("wa-dropdown", { key: 'f50582507b5f47f9fbb95b1a3f497ea8c19a0cfe', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '4d99f27bdc0d47edc498e33bd0eefb1dfb010f1b', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '4b2c690508c514da1d9e00360dcf52977a298e99', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'f198e250b2cc84d27295d7685f2f596b07761105', value: "receipt" }, h("wa-icon", { key: '3560a4035c4c19b4e824f1dd6de83a649d6df37c', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '766f5927b2ba9f6a20c8e129a3d5aa231ff0a741', value: "edit" }, h("wa-icon", { key: '5596a4304c17f5e5bd2f3b9985fe401231715c17', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '1f48a4040c00ea2767a021a1f4dc214fc73f186c', value: "delete", variant: "danger" }, h("wa-icon", { key: '1b42ed20a44f54dbee28fd8ca8e0b6dca84a95f7', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '648bb5e926ec45266f5f02b68d3a7d204f4e7d69', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
