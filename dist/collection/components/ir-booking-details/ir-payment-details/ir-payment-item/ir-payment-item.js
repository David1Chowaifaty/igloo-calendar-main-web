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
        return (h("div", { key: 'fbca15196221d56ca6db3168dd85017bc1abd5ae', class: "payment-item__payment-item" }, h("div", { key: 'c57368222344035a9bdbc86d1980e3dfb8ad8400', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '5c7584aaed9588d7283ab13ccff6123a0c073eb8', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '3afb0270d51ef0670e563302c5c21afe3885107a', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'a77665af3d27b727816e16cbdb4dec0495baff6b', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'f08e39a1c112fece93c49b38d0a38a7a0e96d284', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '09552a9364f9ae7f926dd26f0ad56d6d96eeee33', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '89607a8e43ecb1b1096bc4aae7c7e97b44ca90fd', class: "payment-item__payment-toolbar" }, h("p", { key: 'f13db918fc0101bddecf085e1ed41ed028ab5a9a', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '0ab6d0ad8e4bf7b31c523e14ce4f2db27d63c12a', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '0ebababbec508f9bcc642faf5d72a9985c9376f5', class: "payment-item__payment-actions" }, h("div", { key: '35bf1507cfe1e1b52fefe41f6daeb4f235da63d1', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'f9d6404b50d9af4e61eaa168c94459c952b9eb30', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '9192ba654b2f7f64de68de18ec2366525c67ae11', name: "user", id: this._id }), h("wa-dropdown", { key: 'afcb82e62ffc1a80b81ae75f7f06ca0319ae7e88', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'ac46d918afea94bb7865487476edba60eabf2a7d', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'f0921b5a6fefeb6463d38de06b9daa9b6a85bea4', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'caa274981696ac08140eb02686b40a61589454da', value: "receipt" }, h("wa-icon", { key: 'f146454073ce48c91975fcbed04b60d7dfed9ce9', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '1a35eb22066f25971e59fa78352f3164c526b5d9', value: "edit" }, h("wa-icon", { key: 'e74964b120000dc403dea2912061cb57c70068cc', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '040ac2e7a7b593c89efd3c5ec69821dfc7b9ff65', value: "delete", variant: "danger" }, h("wa-icon", { key: '8709b411055a395f843994636d0078366bad72c0', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'ccf257c59baee715666c586b1424a35d4849df7a', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
