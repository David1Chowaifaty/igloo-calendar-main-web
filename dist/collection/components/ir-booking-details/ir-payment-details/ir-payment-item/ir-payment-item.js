import { colorVariants } from "../../../ui/ir-icons/icons";
import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
export class IrPaymentItem {
    render() {
        var _a, _b, _c, _d;
        const isCredit = this.payment.payment_type.operation === 'CR';
        return (
        // <div class="payment-item" part="base">
        //   <div class="payment-body" part="payment-body">
        //     <div class="payment-fields" part="payment-fields">
        //       <p class="text-muted">{this.payment.date}</p>
        //       <p>
        //         <b>{this.payment.payment_type.description ?? this.payment.designation}</b>
        //       </p>
        //     </div>
        //     {this.payment.reference && <p class="payment-reference text-muted">{this.payment?.reference}</p>}
        //   </div>
        //   <div class="payment-toolbar" part="payment-toolbar">
        //     <p class={`payment-amount ${isCredit ? 'is-credit' : 'is-debit'}`}>
        //       {formatAmount(this.payment.currency.symbol, this.payment.payment_type.code === '012' ? this.payment.amount * -1 : this.payment.amount)}
        //     </p>
        //     <div class="payment-actions">
        //       <ir-button
        //         class="action-button"
        //         variant="icon"
        //         onClickHandler={() => {
        //           this.editPayment.emit(this.payment);
        //         }}
        //         icon_name="edit"
        //         style={colorVariants.secondary}
        //       ></ir-button>
        //       <ir-button
        //         class="action-button"
        //         onClickHandler={() => {
        //           this.deletePayment.emit(this.payment);
        //         }}
        //         variant="icon"
        //         style={colorVariants.danger}
        //         icon_name="trash"
        //       ></ir-button>
        //     </div>
        //   </div>
        // </div>
        h("div", { key: 'ef49ef3ec25ab7fe065dd4272859a28c687699de', class: "payment-item__payment-item" }, h("div", { key: 'e0a50f803e04c59fdc2bcc6e722393ed434b883e', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '3213807247c5cddf3eb69023ce83b0a492cbc905', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '4d8e2f771c3a6ee5304be94068ef67a7646deced', class: "payment-item__payment-date" }, this.payment.date), h("p", { key: '5c1a76e1b88321dadd737acff9e94977486cd778', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.payment_type.code === '012' ? this.payment.amount * -1 : this.payment.amount)), h("p", { key: '11eb2c639ac121cdca9b8a8b1583436ed994baf5', class: "payment-item__payment-description" }, h("b", { key: 'f3e473c054eb9459bef9eb6b22eab3b05ab135d8' }, (_a = this.payment.payment_type.description) !== null && _a !== void 0 ? _a : this.payment.designation))), this.payment.reference && h("p", { key: '5b7afd273cd84e8d5e192c7d3449d58805fc7723', class: "payment-item__payment-reference" }, (_b = this.payment) === null || _b === void 0 ? void 0 : _b.reference)), h("div", { key: '40d7e9601d0f3e269dede735d6f63a5baa3b4d75', class: "payment-item__payment-toolbar" }, h("p", { key: '987c3d003417d1c8785296ce41f8ff524f879a88', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.payment_type.code === '012' ? this.payment.amount * -1 : this.payment.amount)), h("p", { key: '02393758d4d52fac8555b5cd188b03fcca1995bb', class: "payment-item__payment-description" }, h("b", { key: '5f95d873aeff278d1d13b8d12ea8a54b29e353f5' }, (_c = this.payment.payment_type.description) !== null && _c !== void 0 ? _c : this.payment.designation)), h("div", { key: '33defcba94fd34966174fb3daca9bc50378e153e', class: "payment-item__payment-actions" }, h("ir-button", { key: 'f5d6338c97b4c7dc9a8f7135d16dd29d259ded6c', class: "payment-item__action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: 'b28b7b7a44e426f8253cca811e5ed86e02e4c5c7', class: "payment-item__action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash" }))), this.payment.reference && h("p", { key: 'bd5102ec0f21239c45c93da7cc0715381c05df12', class: "payment-item__payment-reference" }, (_d = this.payment) === null || _d === void 0 ? void 0 : _d.reference)));
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
