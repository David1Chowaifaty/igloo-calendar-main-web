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
        return (h("div", { key: 'd1d29ea8d9deacf53e2850e34691f264a25903ad', class: "payment-item__payment-item" }, h("div", { key: '5172ca737ac2811733392324eb0a9baf513bbaf5', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'e59d64ecab39e81cb212fba2cdf95e38e6e7b530', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'd51bd53ec1e71092a31aa5592e0b1a0c23ac0999', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '05ed66cdc42d7d480b7e938bee1b70e1bfa79311', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '35dceff5c9c0d59ac6032cd599773155ba626811', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '5f031d0ed2801263f93d7170c7c481f4686b22fe', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '59f40c90660c06c6c5f8f80aa4fd7c25ffad6228', class: "payment-item__payment-toolbar" }, h("p", { key: '57181d846ba5e9b4fad859d80a95045f33fc011b', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '200020160f334410f6a3d5d8684082ebd1c69567', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '347e9182b0661b393466f421e87126d8c18dee58', class: "payment-item__payment-actions" }, h("div", { key: '0af111cc820e1762c3f4f74bae0bfd2d3a97393f', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '91482d2954bf74e826f25a8d4b13080871e5170d', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '968f21b79dc0abfaa4e4700795683112028b7489', name: "user", id: this._id }), h("wa-dropdown", { key: '134edf8c812ef5c0788aa5f39dcea1894ad006c1', "onwa-hide": e => {
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
            } }, h("wa-button", { key: '63d3ca1e0b2d446fdfef99fec9cd4a176760c5b4', size: "small", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'bfa47ed1752dc22af189a881754a21e4d1f5d9fc', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'cfef479e68bd51931c4d898634f0d320b788ace4', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: '029338d24bf18de01a8d065ec655561380b97f72', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: '17c942fddc10374c248c5143f6e02f2618443fb2', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: 'e5b7453ab5636e4943821265f6627a061af91c59', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
