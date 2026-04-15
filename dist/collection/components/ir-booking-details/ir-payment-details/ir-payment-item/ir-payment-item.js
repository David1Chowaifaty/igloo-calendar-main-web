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
        return (h("div", { key: '6a34883b4022f4cfd3f883cdd766b490a04438ec', class: "payment-item__payment-item" }, h("div", { key: '9fdd57ad8e1ec9406360ede6fdf493b09df4ebe2', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'c78192afb5a7e4404bb711a881b23dcea61d9018', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'df7fdd46f84d07255f3837af3b39368b4f5b9256', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '6da9a15a7f8960396b425fbf8c73a0ac626cc8c8', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '4e6d1c2c73be8b60f0a2c567ef662e8bef4052ea', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'f755ebf58a93db40ba3120ed869d8627a0a99494', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'b237110c8e6d706e8a0841d2b394422a22a58e85', class: "payment-item__payment-toolbar" }, h("p", { key: 'bb84ec68b249b17c1a1d2870381de3227d9cd67e', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'd9f2eb813cafaf97e283bc8357ea4c12dc47b105', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '74b0fb314920c32e55ecee1f6fd7a54ffd41c75f', class: "payment-item__payment-actions" }, h("div", { key: 'ae539d998545f2c0077c8952ec19aa25dd869fd3', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'ccd9a86db4d5be9ce5bc8a6e9520b707f5343005', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'db6eb005052a8e5e70fac91cb7980b855764de15', name: "user", id: this._id }), h("wa-dropdown", { key: 'd3f7096dcb8c03e8e6dda8734c940da6adfb8e8c', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '9027bde4140b82a414bd50d90c0e10f33cd91ea1', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'dc73cb29fcb0387aeb85672d208b1f935d7c8e99', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'aa6b2e827d75bf77c08a83a2c73e88c8724aa148', value: "receipt" }, h("wa-icon", { key: 'ec1d0350921f87f76ce8cb97c94fadcc7dfbddb1', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'a88a781921e7f7d06d0189a1d8e866b41aadc446', value: "edit" }, h("wa-icon", { key: 'abfb8e483d43fdf7a621ddf4dc5086cd1ce33044', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: 'ab34c0e3cbd8566e71ef00e9c1aa29b3f4695f50', value: "delete", variant: "danger" }, h("wa-icon", { key: '74d335b8640787d9f2c201d7224db71c190352d6', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '4bccf7955143345217fa61163e161d0cdfbfc086', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
