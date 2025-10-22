import { colorVariants } from "../../../ui/ir-icons/icons";
import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import { PAYMENT_TYPES_WITH_METHOD } from "../global.variables";
import moment from "moment";
export class IrPaymentItem {
    render() {
        var _a, _b, _c, _d, _e;
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (_c = (PAYMENT_TYPES_WITH_METHOD.includes((_a = this.payment.payment_type) === null || _a === void 0 ? void 0 : _a.code)
            ? `${(_b = this.payment.payment_type) === null || _b === void 0 ? void 0 : _b.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description)) !== null && _c !== void 0 ? _c : this.payment.designation;
        return (h("div", { key: '7bb0b9b105c8ccb3df4a08b5153d97095be5377e', class: "payment-item__payment-item" }, h("div", { key: 'fb41872c2470981c82f0ca9f1ec73066c7eba766', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '4d13f9490aee597cd0ebb408df9fb594bed8235d', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '0310f8d6f466138186262df45ae11be6a6c9a1a4', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '2a4b510b360fd014f52346d8aea608041e09e4b6', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'c564e307aedb7619de886ffb975eecf113c4474c', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '1c84ad1de32d5f5103a8846e89bfa1e315cc54d4', class: "payment-item__payment-reference" }, (_d = this.payment) === null || _d === void 0 ? void 0 : _d.reference)), h("div", { key: '19d2a47f1da0f18f377b32d4f88d2d921a360c9f', class: "payment-item__payment-toolbar" }, h("p", { key: '33eb3cdcba2bf332a4c3ff4cb7781707e25cb666', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'c0ba14e4913de67b935f3c635e5a5613a823652f', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '06a1896f8beb6ca5dfa45f209b9f8a299705fe9f', class: "payment-item__payment-actions" }, h("div", { key: '0c308368d6dbcee9523012cfd5e357e82ffd3b98', class: "d-flex align-items-center" }, h("ir-popover", { key: '08e90ab9fae2bbab8e8a2864f0ff101a0d535b41', trigger: "hover", content: `User: ${this.payment.time_stamp.user}` }, h("ir-button", { key: 'f5a3a992d7e70fe6b6c0ffef8bcc655406169d6a', variant: "icon", style: { 'color': colorVariants.secondary['--icon-button-color'], '--icon-size': '1.1rem' }, icon_name: "user" }))), h("ir-button", { key: '9982109c736d9a7be6188e625b21449ad86155e5', class: "payment-item__action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: 'cacd8b06e7579f37cc43575a75450f69656b3d85', class: "payment-item__action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash" }))), this.payment.reference && h("p", { key: '9d7e0a2d8fe5dfbc184ee2639849cde4e82dccc4', class: "payment-item__payment-reference" }, (_e = this.payment) === null || _e === void 0 ? void 0 : _e.reference)));
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
            }];
    }
}
//# sourceMappingURL=ir-payment-item.js.map
