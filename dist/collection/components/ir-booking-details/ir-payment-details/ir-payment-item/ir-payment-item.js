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
        return (h("div", { key: '11d65ac7e3944a506162f6389798bff6ffd7b569', class: "payment-item__payment-item" }, h("div", { key: '643a443bebd6ee99d457cde212732e5b6c6697e9', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '796f6bfad866d716c1c022f14cbed5b9ccc981b3', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '6974b80cf87bd4babe950cb9468dac1150b131be', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'e2c00d5b01a5e0c9749cf0415b1804e6e4dc2e1c', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'b12d93c9b754590c2077c89546122e165abcdaac', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'b1dfbc696fa577f371359f08af096a4269c3dfd2', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '1c70ed14130edf2cb3ebaa1fa8e3d25d861f5e02', class: "payment-item__payment-toolbar" }, h("p", { key: '17de1767586eeea9efef1423ff60205db0d502aa', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'e19a1881756dc523a56b165e08581732d19d1d99', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'f68c07abe84a5b9be54ee005241ae21b16e9511e', class: "payment-item__payment-actions" }, h("div", { key: 'd3106c2985d818e8a245f140b5f8b860dcb04ba4', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '770274e49af95ecb9ec8020628f2b4f08629285d', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'ad84b3e03077fcb369cc2e9e930275760c80ef5d', name: "user", id: this._id }), h("wa-dropdown", { key: 'c566a01c273d42ce6cf3b220ef7ca4597a8a8532', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'b44f4f8d5bf9cd39d475c0738976744935a6b147', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '504d4601d83d569b72c4ec15bff9ac8534d1c465', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '6cb137ff73520d2c275fdc9316297e0e019c0322', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: '0bb3bf7668916f640c4be4f9dae254e0d7b3c743', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: 'e985e462bd206d0734b857e9669ee46e583a8525', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: '636842e7cc50e14aa245a187c85c8ed5d481ab6b', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
