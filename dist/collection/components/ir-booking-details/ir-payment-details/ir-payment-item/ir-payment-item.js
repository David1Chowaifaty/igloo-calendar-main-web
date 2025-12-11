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
        return (h("div", { key: '975efda06d42fafcaf2406f7b410d644f97ce119', class: "payment-item__payment-item" }, h("div", { key: '4b9c0e754125693cacacd569618f388ea64b8059', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'fe0ed3312e70c62050b5a9c250e9717726d51dc3', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '1ca29b776e9fc30a96d5ba735c59a3059f6048ce', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '62d30c96b6f8d539e7deef2ebf0eb27330146b73', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'c4bb5cd51a94dbdfb4129e4e91c8b5776049f289', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '80578ef745c4b1407cba21d6f76553c8a2c81c51', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '23e794088d3a347624272aa091f7243ff2cdfff7', class: "payment-item__payment-toolbar" }, h("p", { key: '3adb18a0ff89f727fe8f49ad1dada8653f9214e6', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'a762aa292f963f8957e051cf77cfb3cd024d31ac', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '350fdfa2411d6cab8153344be2e63344c7f18d2c', class: "payment-item__payment-actions" }, h("div", { key: '738ee81565063211a9ac1d9eb54e63904d0125ad', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'acd35b677ae91c8043a96f95784b5c1db815a51c', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'a813bcc8097be164f4626e4b7d137bb94a1d2646', name: "user", id: this._id }), h("wa-dropdown", { key: 'efce17b008071913812681bec2e748655a64efaa', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'cbcfc9c1cac56062c4570ccb99a3eb0763540298', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '2ee2d4d69282fdfa079f9cd2a49cc6de9ca7414b', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '8a5c3f81212731965c85a2dd63f69a2cb7acc26f', value: "receipt" }, h("wa-icon", { key: 'bbac27273d3e85e13fad46a7671239ab3450c387', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'fd10e9ab856a1fdefe9f9a4fe4ba9e2771411850', value: "edit" }, h("wa-icon", { key: '8a872f06444f1c507ad1e9e46777978ffc5c8ccf', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '1cf0120bbd7a897d002e09c656234537d656426d', value: "delete", variant: "danger" }, h("wa-icon", { key: '4e45afca69a47b099896e115c48534c1ff08a5a2', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'e59c35660f503e1c455ccbac3019bed3d87b4d8c', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
