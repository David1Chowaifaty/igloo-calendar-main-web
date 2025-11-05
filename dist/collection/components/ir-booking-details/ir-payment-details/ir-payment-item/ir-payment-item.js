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
        return (h("div", { key: '3a62f2fe23825ec1516873ebaad2d1561a3cb21a', class: "payment-item__payment-item" }, h("div", { key: 'ca9675bfeea76a900bcbf0c9e79e2f267ca18b53', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '065c835202960b6f69228cfdec42425a9a170c91', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '723c5d8f051791f1aa8ff2f68e7f97bb78348a54', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'a7049639c7ff40e98ff4b56cd0b34521834043d2', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '79f48995c8e0ada16ee8fb4a5f782baa6ab79583', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '089480619a10ab951002e89f2c4838ac16753288', class: "payment-item__payment-reference" }, (_d = this.payment) === null || _d === void 0 ? void 0 : _d.reference)), h("div", { key: '501e18fd37b8b8d94034dd0db40ba66f14becf54', class: "payment-item__payment-toolbar" }, h("p", { key: '01bfd6f3af2d2f211d5b468ce2da5fe6bd1eeb6a', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '1e385aa120e2b6adb1739c28961d09cd7d5083c8', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '0d2de6bc6e089ed66ba2f359b04507dbf3271d8a', class: "payment-item__payment-actions" }, h("div", { key: 'b93f47198d887ac7912b24859a0c1877c20dda05', class: "d-flex align-items-center" }, h("ir-popover", { key: '718441870b2a7aa10f07a0fa9f1ae3688dcf0887', trigger: "hover", content: `User: ${this.payment.time_stamp.user}` }, h("ir-button", { key: '41c76ac337df2581f1d2bdf814ce8c7ad1ae2aa3', variant: "icon", style: { 'color': colorVariants.secondary['--icon-button-color'], '--icon-size': '1.1rem' }, icon_name: "user" }))), h("ir-button", { key: '62cd1cc15c7dc944a8cb2ebdbbf36bdd1dacdff8', class: "payment-item__action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: '22c5c3607ec10cf3bc4bfb9f341381c0badb39e3', class: "payment-item__action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash" }))), this.payment.reference && h("p", { key: '594b8ace3354d52a111cf685367f94320de89e7e', class: "payment-item__payment-reference" }, (_e = this.payment) === null || _e === void 0 ? void 0 : _e.reference)));
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
