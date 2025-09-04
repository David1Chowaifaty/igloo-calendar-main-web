import { colorVariants } from "../../../ui/ir-icons/icons";
import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
export class IrPaymentItem {
    render() {
        var _a;
        const isCredit = this.payment.payment_type.operation === 'CR';
        return (h("div", { key: '9345c2b8521bd99d72721ecdb8b4360e3804dd7a', class: "payment-item", part: "base" }, h("div", { key: '2e77ce8399e1e0b1dd2568eaf5275150721593bb', class: "payment-content", part: "payment-content" }, h("div", { key: 'fbb5fb7f71502235c956c239a40e996ae28ca042', class: "payment-body", part: "payment-body" }, h("div", { key: '24f0b1393af126d7143d5fae76e909990aca60ec', class: "payment-fields", part: "payment-fields" }, h("p", { key: '0b0580121c41e5ec03f48e6cf4f3cd6bedd0da69', class: "payment-date" }, this.payment.date), h("p", { key: 'bf168fecfd2cb066527fe3939e80190ac65af2a8', class: "payment-description" }, (_a = this.payment.payment_type.description) !== null && _a !== void 0 ? _a : this.payment.designation)), this.payment.reference && (h("p", { key: 'b429defb1c964908d081430edfb0d400d3ab746a', class: "payment-reference", title: this.payment.reference }, this.payment.reference))), h("div", { key: '7185c82775a99e4c7319c1d08e523100fb80ddfd', class: "payment-amount-section", part: "payment-amount-section" }, h("p", { key: 'ee3326af8ff6f51b0d90b9a85af86133e39ce430', class: `payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.payment_type.code === '012' ? this.payment.amount * -1 : this.payment.amount)), h("div", { key: 'bff660670d53b9b5a7e3fb433a98a828a9c8630f', class: "payment-actions", part: "payment-actions" }, h("ir-button", { key: '1044e3486f808682e3ced320146c8f76dc060ca3', class: "action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary, size: "sm" }), h("ir-button", { key: '6e48340333d435d59ca1fd79ba609e80272cd01c', class: "action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash", size: "sm" }))))));
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
