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
        return (h("div", { key: '5679c68bd980bc81e21390d5350f2094420ef56f', class: "payment-item__payment-item" }, h("div", { key: '586ae12fc16ee5e05bd6add9ed357ab457bda27f', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'f0728e2546c10d3d54afa4684646b99d1ccba6f9', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '3435bcc7c42f55dd5455f18c016f077388bcadb5', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '45e46c46f2fd187da2d006e37f2b0ca9d19f93ca', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '6faf403a8e6fef6990a951451f1cea61f2b38a90', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'd0fc320694fedc1ee91fa99e78204ea7f81249c5', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '4c1a06d2f2a792ea712da777eeb60b62d44e6aaf', class: "payment-item__payment-toolbar" }, h("p", { key: '10d25865322fcf12c48795a21f73d487a1628d74', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '961904e0d2ca580ff23fd0fe972fb012d47a72b2', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '95a831387ea5bfc57e67797ce5db00534ce83146', class: "payment-item__payment-actions" }, h("div", { key: 'f71b9b19e6d58b616989b08d9f9fb0436a99e186', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'e32065be775701708ff54866296bebec746982b4', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'e9e4dd11f03c5cac4707b5de80831072fb2a082b', name: "user", id: this._id }), h("wa-dropdown", { key: '522efca3f77ab64eb7b845c110ffb3fb8a4d7d3c', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'cd0e9025aa53f1e34b96477a047aebbd1d95c5a2', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'a9d809ef15ba3e1fa850ee7bde98bb84b4325c83', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '67630330774812019412b925d96edc223db1973d', value: "receipt" }, h("wa-icon", { key: '093f27a38ea332ef08e240405a8f2e4a5f19d1d7', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '42d691d5d42f5db1383bd3f007778a0449ecbaf4', value: "edit" }, h("wa-icon", { key: 'f12e0e64763332f3ed493e2f75e51bc77f75225d', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '24f97778fcf2673b9560b29d73667d2f7debb9f6', value: "delete", variant: "danger" }, h("wa-icon", { key: '45dc950aae82b995c187f12b45f124276a7eb4f8', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'f9daf4806c5a77499ae4d957e3f97eb2dcee07c5', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
