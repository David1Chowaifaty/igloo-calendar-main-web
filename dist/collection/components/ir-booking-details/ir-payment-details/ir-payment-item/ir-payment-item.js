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
        const canEditOrDelete = ![PayTypes.Payment, PayTypes.CreditReceipt, PayTypes.Refund].includes(this.payment.payment_type?.code);
        const canPrint = [PayTypes.Payment, PayTypes.CreditReceipt, PayTypes.Refund].includes(this.payment.payment_type.code);
        return (h("div", { key: 'c19eb673ed7e4b8c8c7f4e02e2650b9dbde73976', class: "payment-item__payment-item" }, h("div", { key: '0ec49f0fbdf256e6b29fd98d52489bc29aeb6d9d', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '8be3e636738a4dc86ae71da5541558e88f0f2fe4', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '0bd2dde0b7fc85a779a191b6b08798d4874f2014', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'b2a7a96adffea506e1063b808951f5d0293f4919', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'fbe362b98d5f685b5f3c34b43cabb814ae160656', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '62162489247b3bffe6415117d1c7a3c5739e99ba', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'f5ee160f2ffb601bdc9bf474b58c5e89f1b9e393', class: "payment-item__payment-toolbar" }, h("p", { key: 'd6c000c7addc1aa38c502caa6237c3d7490f4a91', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '8690724bf5c3044b372e325b0589583d33e43e69', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '9ac44b6fbce2d8853493008e64a0163e4fa8dd24', class: "payment-item__payment-actions" }, h("div", { key: 'd8977d02a8829f06b62c1e9e556bab89f3e810df', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '7603ca05ec02164eb084f639aa97ac26a799a749', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '511199ef2be2be70394fe02f6135fac839af05fd', name: "user", id: this._id }), h("wa-dropdown", { key: 'c30e22884aef22792ef7b805e0cb5d4049b2c1e7', "onwa-hide": e => {
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
            } }, h("wa-button", { key: '8899e790fbafcb8bb141ce518263a247a2afe1f1', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '692e38f9c5555e7bb6ca15ea5c89863c001be1db', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: '04ff465be9a7ed8bece9b8969f9728e89810f0fb', value: "edit" }, "Edit")), canPrint && (h("wa-dropdown-item", { key: 'b6235108ed518bb18d08e47eaa974a7995fc2e29', value: "receipt" }, "Print")), canEditOrDelete && h("wa-divider", { key: '0fc2ddac62e386f75232979f1a1eed08306ca3ab' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: '854a65a421bc09eec285330c18e8192f46873f12', variant: "danger", value: "void-receipt" }, "Void with credit receipt")), canEditOrDelete && (h("wa-dropdown-item", { key: 'f640ca7763171bd246223a2a1d1b0e6be26dbeae', value: "delete", variant: "danger" }, "Delete")))))), this.payment.reference && h("p", { key: '22fda6ca968d8a954fc952327a7959e1cc58d722', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
