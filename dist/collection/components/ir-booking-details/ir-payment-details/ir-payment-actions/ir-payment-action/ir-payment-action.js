import { h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import moment from "moment";
export class IrPaymentAction {
    paymentAction;
    generatePayment;
    render() {
        const paymentActionType = this.paymentAction.type.toLowerCase();
        const isFutureAction = paymentActionType === 'future';
        return (h("div", { key: '3f3125933123dcd0505c5bd75e506d886e0a6425', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, h("div", { key: '0e57134b96c69b67f8e77d12143d397aa9a60a12', class: 'action-row' }, !isFutureAction && (h("div", { key: '611eb7419e3f631ee2f3f381b1dabc1abaff310e', class: 'overdue_action' }, h("svg", { key: '2b59d20aaea6cbc6f1db6bd72e708dc20a2dadfd', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '098dbc530781992c0bbc230834e337be9f54aa9b', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: '7a0ece9f6b12d83aeeb5830a5b8041d904b3eb74', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (h("div", { key: '30339d794f901dd5ff02c92f5dd64c29d8f7b439', class: 'future_action ' }, h("svg", { key: '59e2b397aeec791a3e247f27a63eeb231967dcdf', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: 'ebb6848fc62e3ba0876b57029afc3a6ea815538c', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: 'a8ec6a375cc0977a5373aa2a86df97f31b055ff1', class: "alert-message" }, moment(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), h("div", { key: 'be7527a3ab2b46473fd972c05cbcc4b1b14ea342', class: "meta-grid" }, h("div", { key: '439d1d73f4d690cc617c19af86cdd398dfd099bd', class: "payment-meta" }, h("p", { key: '4feb6c7ef2276ac8d987d11532008c54d8933c94', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: '3a832da018d42d65e5b59fa6ee5b2d9df8ff1a8d', class: "date_action" }, moment(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY'))))), h("div", { key: '6b8480e3be5eac6eb055ae7f73f5f647d3cb27cb', style: { width: 'fit-content' } }, h("ir-button", { key: 'd55529612689454d73f12e72ebce77d7c8179682', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
    }
    static get is() { return "ir-payment-action"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payment-action.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payment-action.css"]
        };
    }
    static get properties() {
        return {
            "paymentAction": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IPaymentAction",
                    "resolved": "IPaymentAction",
                    "references": {
                        "IPaymentAction": {
                            "location": "import",
                            "path": "@/services/payment.service",
                            "id": "src/services/payment.service.ts::IPaymentAction"
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
                "method": "generatePayment",
                "name": "generatePayment",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IPaymentAction",
                    "resolved": "IPaymentAction",
                    "references": {
                        "IPaymentAction": {
                            "location": "import",
                            "path": "@/services/payment.service",
                            "id": "src/services/payment.service.ts::IPaymentAction"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-payment-action.js.map
