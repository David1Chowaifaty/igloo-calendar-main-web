import { colorVariants } from "../../../ui/ir-icons/icons";
import { h } from "@stencil/core";
export class IrPaymentItem {
    render() {
        var _a;
        const isCredit = this.payment.payment_type.operation === 'CR';
        return (h("div", { key: '4f072da6791a8cc8cad97ef599a20d2632fad0fa', class: "payment-item", part: "base" }, h("div", { key: 'ad394493e2bd87169bed846d6dd9c34273977214', class: "payment-body", part: "payment-body" }, h("div", { key: '4e82bbfbc32c9413043439754af040eb62c7f9dc', class: "payment-fields", part: "payment-fields" }, h("p", { key: '97158df97eb3cf7897ea654472d5a884f03a5fd4', class: "text-muted" }, this.payment.date), h("p", { key: '22060ff41b222a29573103f79e32625e1c4557e1' }, h("b", { key: 'dcbfcd689adb0bb7573b17380d608b290ccb83f5' }, this.payment.designation))), this.payment.reference && h("p", { key: 'c6820ccdba1fea75cf207fdf216c9767ef74cee8', class: "payment-reference text-muted" }, (_a = this.payment) === null || _a === void 0 ? void 0 : _a.reference)), h("div", { key: '1f18a326e78dae6b6d62edbe06035563ab8725c5', class: "payment-toolbar", part: "payment-toolbar" }, h("p", { key: '686d273eb3c3cc5e26c1fbce613da9e6d1a01a0f', class: `payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, isCredit ? '+' : '-', this.payment.currency.symbol, " ", this.payment.amount), h("div", { key: 'ba41aea838746074940ea98356a9b395e21342b8', class: "payment-actions" }, h("ir-button", { key: '9b386c6efc2159b9b86838026017f48e1153a50f', class: "action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: '5ab51d32489d703d52c6192c0750632849693616', class: "action-button", onClickHandler: () => {
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
