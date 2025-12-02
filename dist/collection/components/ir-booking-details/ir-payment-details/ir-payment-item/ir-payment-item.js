import { colorVariants } from "../../../ui/ir-icons/icons";
import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import { PAYMENT_TYPES_WITH_METHOD } from "../global.variables";
import moment from "moment";
export class IrPaymentItem {
    payment;
    editPayment;
    deletePayment;
    issueReceipt;
    render() {
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (PAYMENT_TYPES_WITH_METHOD.includes(this.payment.payment_type?.code)
            ? `${this.payment.payment_type?.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description) ?? this.payment.designation;
        return (h("div", { key: 'f5f1fb17e44f3e64a7c3ec9cbb51b5c1b3b3de80', class: "payment-item__payment-item" }, h("div", { key: '20cccac9f1d4b443d2452adbd1725d595f4b32f7', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '16f57e01807c509c834aab8bb6f1b0a34584f2a1', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '233065642c8ad2a1dbe8c2118a1da873303e2751', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'a9be945b645e4557f566348b682564a4ceae4ab1', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'ffa2757364c11bdfa7a823075e6cae7981876885', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '539d74c9b5b9b98af9b83b1333aa86b47c0c7c55', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'd3732954ac08555ce96e8e0ffd9340e3e790f3b6', class: "payment-item__payment-toolbar" }, h("p", { key: '751b4bb0e6a5a7759cdadc1f75c3b869e9c6faeb', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '09ef75c96a04446ffae9a5d0ebba54249774d4dd', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'becccaa0d347f18be45f2d0204ddf05e04b8b320', class: "payment-item__payment-actions" }, h("div", { key: '7195f03a7e2e5e2478de7d1025026d0f70d7db58', class: "d-flex align-items-center" }, h("ir-popover", { key: '3b214c2eb98af32206191f606f30950f255d1795', trigger: "hover", content: `User: ${this.payment.time_stamp.user}` }, h("ir-button", { key: '0fc6ff8d7619cc28e3b1388dc4080fb31131d269', variant: "icon", style: { 'color': colorVariants.secondary['--icon-button-color'], '--icon-size': '1.1rem' }, icon_name: "user" })), h("wa-dropdown", { key: '710213a3f48824eef553b94e77f685bbdf7eaea6', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '9a27feef3b8a43150bff9124e37225cd50a78093', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '2a2e0f9e8a7e76e51cce841d9d7128e4ea58602c', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'e6be092fbf2916b469089ba2bd33a1c9f477980b', value: "receipt" }, h("wa-icon", { key: '9febec2a7a47bf89edc54069c7e2722e4858b71a', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'bb84b462a1992a0785bb195b345e32ce3319f2da', value: "edit" }, h("wa-icon", { key: '3d511836bc2a5ded3925fd5e9e2897d4febc8b49', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '7c9632f0e74386fcc087c121ca6173d5dca12efc', value: "delete", variant: "danger" }, h("wa-icon", { key: '7af9b2c7a5f1fe6ac6d291f61901cf40b88af542', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '099678715b5862cf9b2bba4d4ccdf33fa21bb408', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
