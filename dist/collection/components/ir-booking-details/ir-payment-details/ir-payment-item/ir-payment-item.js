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
        return (h("div", { key: 'f14355cf2dc0a450ff358a2ffbb40447c9370251', class: "payment-item__payment-item" }, h("div", { key: 'e67a171cd81998f3a87ee6df91553d1d4d8d90cb', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '402a3b3c4bbfdadcced05afce0c44c629a0f6014', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '04cc09aba81b8e824a05c786fc147a5067b3b8b9', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '77c58921a82379b8fdcc134a2b479fb7e493f955', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'e2c7ce298811f79b68fe23541f212ef81c715e11', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '9c49e2fd4a5eef3efe2dafbfb34481c5d03c8fb3', class: "payment-item__payment-reference" }, (_d = this.payment) === null || _d === void 0 ? void 0 : _d.reference)), h("div", { key: '72b37423c8bb74f66e45b890fdc9dafc4d8b35e7', class: "payment-item__payment-toolbar" }, h("p", { key: '850c7e18f93e95a035a27f2e10c04f70525c7830', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '6fa990450391433ecf42f6666f618cc44ed8fea1', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '767cb15872a631d5b88e5a5823419590c568ef81', class: "payment-item__payment-actions" }, h("div", { key: 'f1d7b83a8cb4ba317353ff5380fd23404eaf4227', class: "d-flex align-items-center" }, h("ir-popover", { key: 'aa1ee523b5e4767f3187885aaace44eb92889142', trigger: "hover", content: `User: ${this.payment.time_stamp.user}` }, h("ir-button", { key: 'b650d7adfb8caaf2c57a208a727dfe10ca8a20ab', variant: "icon", style: { 'color': colorVariants.secondary['--icon-button-color'], '--icon-size': '1.1rem' }, icon_name: "user" }))), h("ir-button", { key: '6511152004da5abb02af4111144e8ee6cf3fac89', class: "payment-item__action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: '6350e6aace9723d440f1089800f76d00fe798bd6', class: "payment-item__action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash" }))), this.payment.reference && h("p", { key: '995711139af04f74b386a0c33c4465fcdc2fe747', class: "payment-item__payment-reference" }, (_e = this.payment) === null || _e === void 0 ? void 0 : _e.reference)));
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
