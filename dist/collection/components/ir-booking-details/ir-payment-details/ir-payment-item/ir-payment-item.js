import { colorVariants } from "../../../ui/ir-icons/icons";
import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
export class IrPaymentItem {
    render() {
        var _a, _b, _c, _d;
        const isCredit = this.payment.payment_type.operation === 'CR';
        return (h("div", { key: '7fdb2148668b464d9006909940120adbe5056c80', class: "payment-item__payment-item" }, h("div", { key: '9b18f14a63a8287d7bc305e4cd44872c7f618597', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '05c67b021b5b5d1d10096aa4a461bc6682657cf8', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'efdeae11a9592ec01105911943f3d6b98243b93b', class: "payment-item__payment-date" }, this.payment.date), h("p", { key: 'a559bdf42084594d12b2b93475c8ab5893bde3be', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '9a44153e42e63200c6c739a69124c3384c4ac529', class: "payment-item__payment-description" }, h("b", { key: 'de95bfa7e82bec3ddbd2dd58d848f55d00060707' }, (_a = this.payment.payment_type.description) !== null && _a !== void 0 ? _a : this.payment.designation))), this.payment.reference && h("p", { key: 'ecd0429e0654b1b88191e1ef6b3fbdae62bd4e75', class: "payment-item__payment-reference" }, (_b = this.payment) === null || _b === void 0 ? void 0 : _b.reference)), h("div", { key: '4ee7d42ce70ba128236a45c7862caed80ce4b715', class: "payment-item__payment-toolbar" }, h("p", { key: '4339848d45f0368cd0f964c22762bd69af6a6282', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '1b5ef3f2d14e3ce9656ae353890e860b46c50820', class: "payment-item__payment-description" }, h("b", { key: '98c821811535957e33fb8f513c9707bf81c038df' }, (_c = this.payment.payment_type.description) !== null && _c !== void 0 ? _c : this.payment.designation)), h("div", { key: '82e0acb526ee0b2adba983f325b5d48cb0210c75', class: "payment-item__payment-actions" }, h("ir-button", { key: '6c71e7cb40f94d42b5f1f5a11295c4da8d20e6a4', class: "payment-item__action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: '80f1d309b7c013c364d6603bcdbcd663c93a0926', class: "payment-item__action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash" }))), this.payment.reference && h("p", { key: '4dfc422173b60ea11b578dae6277f092b7f460ff', class: "payment-item__payment-reference" }, (_d = this.payment) === null || _d === void 0 ? void 0 : _d.reference)));
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
