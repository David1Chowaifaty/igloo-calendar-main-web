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
        return (h("div", { key: 'bc0fee3788e149608eb8bfe461234fed9ce20e21', class: "payment-item__payment-item" }, h("div", { key: '4350aedf7feb396dd914a864f46865b565333bee', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '74bc27db0eeed52612fe6806e12cdab0b80e6bbd', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'a15c65ab4c1386d07618e82b2ff83f70b2321453', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'b97a6788daf5c29e61675f38231f093112775fa6', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '19fef72ffda799d902cde9fee3a5b647819acccc', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '14b6de3df04524ec7709b786f27f8b1df7db55a1', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '07255dab8c999ec57c4e0c603aa651c5b7763b0c', class: "payment-item__payment-toolbar" }, h("p", { key: '26cf0f24db13788049cc164f6498e2f4a376079f', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '147349ab20306da9b89a46ea047dc05203e6903d', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '7d55258a9892fe67364ff626ad4e6f1231b2caa5', class: "payment-item__payment-actions" }, h("div", { key: 'c812e0c3017439ee16a87554fd1c84c5d71ae620', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'e4dd48198fddb8b739b2afea97ebf0163ed4550b', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '549c1b421203744253505a0c3c337daf7d10d2f5', name: "user", id: this._id }), h("wa-dropdown", { key: '92e081f94f92dba9e90e11ac95fdf431a86c7955', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'fee3ac2586c9f9d1491c74fdc95e786a8e54685b', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '3824ebe94438ddabeedeeb0062367106b8acca21', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'd01859fb0e3e2079a36564a49227f9c724611ff7', value: "receipt" }, h("wa-icon", { key: 'bc8b154b0f8322dc1c57faf5889b545d317da043', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'ffaa24a1b48644cf7f3baacfd34696f576086384', value: "edit" }, h("wa-icon", { key: 'aa09383a83da74277b084a1a761bf367a5a164b4', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '55e417da97228ef170512c7d3085646d0e1ebd3c', value: "delete", variant: "danger" }, h("wa-icon", { key: 'c5bc08a71b3cfdc2e30a4683ea7e3a1afc0fa25d', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'b2d715a6c8c276ca9d8485ac4a5d7cef6c37d8cd', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
