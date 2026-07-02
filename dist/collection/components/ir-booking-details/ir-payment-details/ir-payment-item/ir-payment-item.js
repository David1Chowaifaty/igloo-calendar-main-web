import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import { PAYMENT_TYPES_WITH_METHOD } from "../global.variables";
import moment from "moment";
import { v4 } from "uuid";
import { PayStatus, PayTypes } from "../../../../types/enums";
export class IrPaymentItem {
    payment;
    editPayment;
    deletePayment;
    issueReceipt;
    voidReceipt;
    _id = v4();
    render() {
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (PAYMENT_TYPES_WITH_METHOD.includes(this.payment.payment_type?.code)
            ? `${this.payment.payment_type?.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description) ?? this.payment.designation;
        const canEditOrDelete = this.payment.payment_type?.code === PayTypes.Payment
            ? this.payment.payment_status?.code === PayStatus.Normal
            : this.payment.payment_type?.code === PayTypes.CreditReceipt
                ? false
                : true;
        const canPrint = [PayTypes.Payment, PayTypes.CreditReceipt].includes(this.payment.payment_type.code);
        return (h("div", { key: '5b91897b6d23fd2e26f8a78c7e16e034916a48e3', class: "payment-item__payment-item" }, h("div", { key: '227b49877da12bb0d41ba6d085102d7392b8df29', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'c02ae70a53a3dc0f444e4fd52e4854f76d857e47', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '3e3fcd5d3deca6285da60bc8a202070f6fcede57', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '3d7ea86b5dc49a9e2455b9630ae40695d7cbe110', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '88d3cda4649e3d07b1419091fbc4f62ccc3cc710', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'dcfe1dc725af06e1909cf4b8cf2f2dd212e1d3b4', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'aa70c61d6da39a6c573d293a114e04911c3224ca', class: "payment-item__payment-toolbar" }, h("p", { key: '9155e90f53bc751722d5b01e155288f3fe74dde0', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '3fc6b90938140e364aedb7c7f38c77ca27be5789', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '28c31cc0d890761ae8a5c043dea68cb9d002fb21', class: "payment-item__payment-actions" }, h("div", { key: '79c3e0f28dadec062d65d869739dfd37617666d6', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '3b4bbf2a118b1d41e94af01f748f083fbcef3de7', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '6e6b735fc4477344e8724ae7b66263e885475def', name: "user", id: this._id }), h("wa-dropdown", { key: '171820608d1f6541475ad096ec808714a02de9fc', "onwa-hide": e => {
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
                    case 'void-receipt':
                        this.voidReceipt.emit(this.payment);
                        break;
                }
            } }, h("wa-button", { key: '692080d91b58aa23ce962e0665dae52cecf02326', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'd42ae783bb4cb646c27d087d1902d88103ecca11', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: 'f5fe4f44ab50d22ed5ee25ef757878baad4be6be', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: '98c81af5b128441ae6c544b742e38a354315ded3', value: "receipt" }, "Print Receipt")), canEditOrDelete && h("wa-divider", { key: '10404439d0e3ad07ac60907d8dac9892b19cce93' }), this.payment?.payment_type?.code === '001' && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: '65e9b976a703f5cb638375ec18f5e5ec127855e8', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: '25aaa4f5c018c1bbf1e4243861e3cdf448131e10', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: 'c41a00c8ef76c43e4ed95840568370f778346612', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
            }, {
                "method": "voidReceipt",
                "name": "voidReceipt",
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
