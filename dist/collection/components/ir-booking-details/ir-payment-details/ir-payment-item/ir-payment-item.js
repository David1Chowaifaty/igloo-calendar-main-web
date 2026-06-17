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
        return (h("div", { key: '7892ece784edbde3e3001cbfd397f55094ada42f', class: "payment-item__payment-item" }, h("div", { key: '5ce9d35f79996da6a27768198a9184bd26a3ab92', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'bcacc2c8f20161fccc8537ad35cadf5b3d6f3657', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '6f8fbd3aeb0f9a0b8bd6d47020768bcb19549df3', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '8434ac72f1e86e3ac7b5241e1ce142115ee131e7', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '5c7119766f6ccb723d147e417427ff80c490f40c', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '9df30d1e2177644a0389e703b0a5c18e04be902a', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '47d0ae860995b37dc971bbc51e7febc5e17d5539', class: "payment-item__payment-toolbar" }, h("p", { key: '26e1e70365c0167483df6b4d0c7534559b40b1b3', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '4b33a5d7ce889ed8f7657bb3c99025a3042e090e', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '9c2a30972649e4a4200cda93367bc8fe8ac88066', class: "payment-item__payment-actions" }, h("div", { key: '93e16ede66f2afb0b648942a8514078297fd630f', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '872c11398b92069894d5f93eaae1a0628d3af210', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '120d97112874b11e6c510d5dfecc07cb9962b67a', name: "user", id: this._id }), h("wa-dropdown", { key: '73c3431f6e3cb6c36865fe7cb43da01574ef3f6b', "onwa-hide": e => {
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
            } }, h("wa-button", { key: '14d85172fd275d2e31495c518dfc321830547c17', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '1f37e9b364c7a1ef14095adf0de0f09cfc014b89', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'ee1dae8b67fc110e6d29ec583e8de6fd205867be', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: 'bc710dfa69750ae74d3dc67e40669be67ef9c53f', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: 'e72c1d198d061c089a4562d7a43c39f6e2b99d2a', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: 'badadd70fd384a798b2e70abe0d44e403b8c2266', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
