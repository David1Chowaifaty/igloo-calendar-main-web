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
        return (h("div", { key: '921d38850a5f8aa557e19c802874dd9a4ba11860', class: "payment-item__payment-item" }, h("div", { key: '1fe87cbe6b95cd75522724202db62e679ba9222a', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '97eedd86c5f3f06700e11a889db60b152d54f5be', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'e66c749e25c31bd6eda8735249cbc45df1e009ca', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '51a4f8a9a24f5b3d1945b2bce9648e63e78853c2', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '071512b2a651a2ad27a391a7dcf32dad384e8dc1', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '8d48a98839d78eaa91670033b5fcbbc7afe93b99', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '1681f23b5b068b10918ced731b636f93610cd618', class: "payment-item__payment-toolbar" }, h("p", { key: 'e51ebda0e21a15b2ca9b37a50bf34ceac7f694f4', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '8484b55463d61f935130d039386f42b3c3bf2ad4', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '595be8217e72ded4ef51a86d12e9d5e8f9d7953b', class: "payment-item__payment-actions" }, h("div", { key: '11dacb04efc8f62ac327782f69afb9372099eaf9', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '39fef5205b8d9fbb33e874097494ce33f424d2d0', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '3c3bec587879d72b0ac995ad9f4ac181cd7c5244', name: "user", id: this._id }), h("wa-dropdown", { key: 'eeeb92d060c45f10e1da92c73659cfe1644635a6', "onwa-hide": e => {
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
            } }, h("wa-button", { key: '1646819dcd36224691c3bb2b8e0c9c15c3432073', size: "small", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '5bb00c76b3515f14fa5f262d9313c96990e25353', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '715a11fe2c1ef33d2cc32ea9a06e1aa8e2ecccbc', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: 'f6a5bb3e766c9c4d78426c2b314d21955a56b5a7', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: '997df5d0afc670db874088c0fb86eb05f05ac8b2', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: '394da5ab0d75f254f5f9d01be20011a970698075', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
