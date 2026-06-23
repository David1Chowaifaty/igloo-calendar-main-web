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
        return (h("div", { key: 'b4439f6b150237ecd3708b15cec866408eec55c1', class: "payment-item__payment-item" }, h("div", { key: '1b23387644ccdc9b8de75216b5da68113812d709', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'f5799349d30819ff22c63e5e50786f517b238040', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '8976b9835b1fc93b5b90dc52d7191bcabe444f5d', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'bd463a9ccce5021f540e22433957dcdb0415d7ab', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '32c8e9a4fa32d236b825796470ba2bc97e27d0dc', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '0bde4528068970d7246af33f79a57818cfc32cc2', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '28da6d438dac75f7922f8053f6ac3a7a83aa89da', class: "payment-item__payment-toolbar" }, h("p", { key: 'afeaa02c3584ac2cab253802df701834f3311af5', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'c8e556c1fe4b12b574b648416e44904d58a6ddee', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'a79c3ec52a8ce486618349a5a8501a91efb33bd8', class: "payment-item__payment-actions" }, h("div", { key: '64c453732300286b06a04d3bc98a83879bc3bb1e', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '8baa592a518ad85876c43e48c62e279d4dafc793', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '683cb9a7c728efef27b220d25fbd226f98e577dc', name: "user", id: this._id }), h("wa-dropdown", { key: 'd23a4cc0cf7394ab18dc6b4d28e827590a6bf081', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'a0a728f096d485f697e679d50087df34397e2226', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'be1c709484aef087f0a020ff026322fc14dcc11b', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '5fca4abb2ecb93123d41dd27ce04acf61926ae4a', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: 'ef6ea14d30e7da7f497f2b4edebc122733860e4f', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: 'f62e1cb472f61f2228dcef0f51e6499c02689487', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: '82209c151f356c398adc7fa1ef74782194717582', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
