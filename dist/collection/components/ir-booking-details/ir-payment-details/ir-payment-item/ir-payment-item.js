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
        return (h("div", { key: '036f022f68c317de1f367325131fdac532b02d98', class: "payment-item__payment-item" }, h("div", { key: '204c90dd691732827fd1215331809e0673ca2f3b', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'a248e9cc72642bee042fafb69deb9a520403c94c', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '2b11a66efe1e12e05f9640dba09d6df373b03219', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'f14963f1fb74f431fc20f0ae13220cf36260630c', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'c28f1309144f75896bae28f335cc4e76ac20fa75', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '59560df4e0cfa46183ea14f6b86748a79d886928', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '44a6ff1d59b5b2e78ee544c6f0d384b395626418', class: "payment-item__payment-toolbar" }, h("p", { key: '59a97e2c8b74fb5033b084cc3a90526b7356cf6f', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'cca3c45f9424d0de57ae5d188dd56a48fa925277', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '8e32992db0eba4ebf0d99ea805fb73a69c57a1b5', class: "payment-item__payment-actions" }, h("div", { key: 'd4a904a1446904540564ec35207c16d3771a92b3', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '8d59e23a6b39e2ea5cd84f2df5a2ef41276559f1', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'cd92af44f61effc456329fbfc0090a30bb8baed0', name: "user", id: this._id }), h("wa-dropdown", { key: '38eaf7b7f8bb04c5a1c9333553e31f68b9e83672', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '2bc4993874a5cc587e48ecfe6165b01078de32ab', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'e06f69389c216bec8f5b9a3f8600b2e46e1825fc', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '09affa1f365bba56506dfdfd860a3b81f690278b', value: "receipt" }, h("wa-icon", { key: '3555bbcc414c683415dffbe86fe31c66f4fdb32e', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'fd0549a99ab8adef7273c54d9bbfeae94cfb8d5e', value: "edit" }, h("wa-icon", { key: '0568eca47690c849ac1d97a537b547b2fac216b0', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '635bec4a9a0b3e86916ddaf56d6afbb9a36fa12c', value: "delete", variant: "danger" }, h("wa-icon", { key: '82705ff4d436f3c72ea77407315f542f5df2e433', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'a1f0cc0d00aa09c0477e708b56d3fd7ce054f355', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
