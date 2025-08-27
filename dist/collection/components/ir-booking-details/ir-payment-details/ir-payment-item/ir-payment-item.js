import { colorVariants } from "../../../ui/ir-icons/icons";
import { h } from "@stencil/core";
export class IrPaymentItem {
    render() {
        var _a, _b;
        const isCredit = this.payment.payment_type.operation === 'CR';
        return (h("div", { key: '4f072da6791a8cc8cad97ef599a20d2632fad0fa', class: "payment-item", part: "base" }, h("div", { key: 'ad394493e2bd87169bed846d6dd9c34273977214', class: "payment-body", part: "payment-body" }, h("div", { key: '4e82bbfbc32c9413043439754af040eb62c7f9dc', class: "payment-fields", part: "payment-fields" }, h("p", { key: '97158df97eb3cf7897ea654472d5a884f03a5fd4', class: "text-muted" }, this.payment.date), h("p", { key: '22060ff41b222a29573103f79e32625e1c4557e1' }, h("b", { key: 'dcbfcd689adb0bb7573b17380d608b290ccb83f5' }, (_a = this.payment.payment_type.description) !== null && _a !== void 0 ? _a : this.payment.designation))), this.payment.reference && h("p", { key: '7e2bd5d050fcfc3485141a3d746070bd96dede4d', class: "payment-reference text-muted" }, (_b = this.payment) === null || _b === void 0 ? void 0 : _b.reference)), h("div", { key: '0cbbcf1b78d8839e90bf685cf2e1c00362f51138', class: "payment-toolbar", part: "payment-toolbar" }, h("p", { key: '6cfd89697ab2bd838c32ea9ee3e65f870bbf8351', class: `payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, isCredit ? '+' : '-', this.payment.currency.symbol, " ", this.payment.amount), h("div", { key: 'a29a1b948a20b6393afb6c4ce344dbecb53d0fb0', class: "payment-actions" }, h("ir-button", { key: 'ad4a52ce325f794ad5f5d6c179e7c60d9688a893', class: "action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: 'bc450f131eeb62e44287b0a7fc55a83c558fe3f7', class: "action-button", onClickHandler: () => {
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
