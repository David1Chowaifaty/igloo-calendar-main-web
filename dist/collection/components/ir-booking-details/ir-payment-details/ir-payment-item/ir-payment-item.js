import { colorVariants } from "../../../ui/ir-icons/icons";
import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
export class IrPaymentItem {
    render() {
        var _a, _b;
        const isCredit = this.payment.payment_type.operation === 'CR';
        return (h("div", { key: '3b965a546ce8be99483253264deb130c6305ac3c', class: "payment-item", part: "base" }, h("div", { key: '05252ccfa3469945583c01054dc0a4c7dcdf6505', class: "payment-body", part: "payment-body" }, h("div", { key: 'a98ded496c7e6ee8bbf3e323b9d4008fd20ee559', class: "payment-fields", part: "payment-fields" }, h("p", { key: 'ae9f53e065b8173648d3a447c53d264e3c3c4b23', class: "text-muted" }, this.payment.date), h("p", { key: 'ee3f1f863cee227fbd9f713a6fdf9d5415597596' }, h("b", { key: '5ad2d0a9db4aab8477fc2ff940942b98e9707ecd' }, (_a = this.payment.payment_type.description) !== null && _a !== void 0 ? _a : this.payment.designation))), this.payment.reference && h("p", { key: 'b3af6e0b092e823dcc5e79d487c4b4c389fcc5a5', class: "payment-reference text-muted" }, (_b = this.payment) === null || _b === void 0 ? void 0 : _b.reference)), h("div", { key: '96f265e9665ff78dc3246007d8d3ef8c7106d75b', class: "payment-toolbar", part: "payment-toolbar" }, h("p", { key: 'a4f8b1a6eef9f0c60cd4b3d1257b72d3dc5b6211', class: `payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.payment_type.code === '012' ? this.payment.amount * -1 : this.payment.amount)), h("div", { key: 'd41b9a6e5602e534ec031d9d983103edb7a4ab51', class: "payment-actions" }, h("ir-button", { key: '6ff655eb59849949aea0347f5ceec34086c521d1', class: "action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: '15567ccd47646f5304fff4b97ff0efa68cb14350', class: "action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash" })))));
    }
    static get is() { return "ir-payment-item"; }
    static get encapsulation() { return "shadow"; }
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
            }];
    }
}
//# sourceMappingURL=ir-payment-item.js.map
