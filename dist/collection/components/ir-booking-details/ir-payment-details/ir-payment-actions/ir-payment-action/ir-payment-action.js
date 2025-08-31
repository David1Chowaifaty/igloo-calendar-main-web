import { h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import moment from "moment";
export class IrPaymentAction {
    render() {
        return (h("div", { key: 'fd203b12f5d252e1894c282904bd209f87ed822d', class: `action-container ${this.paymentAction.type.toLowerCase()}` }, h("div", { key: 'e685660195cf0de71c5876bfd570dc8dd26a23bd', class: 'action-row' }, this.paymentAction.type.toLowerCase() === 'overdue' && this.paymentAction.amount > 0 && (h("div", { key: '2f4196a5de47856fed705351253c58cc7649c23a', class: 'overdue_action' }, h("svg", { key: '446858022dfcaf0b4773f7e13ffe232d3ca3b008', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '3f3bb4e03be58e75ce6db802ed1b98cb4638f5f8', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: 'cdeab32ddf22d0b1319629c06a51e76f55419106', class: "alert-message" }, "Overdue"))), this.paymentAction.type.toLowerCase() === 'future' && this.paymentAction.amount > 0 && (h("div", { key: '6e0d7e107ad408af5baebdc47874c3b8a89b5c0f', class: 'future_action ' }, h("svg", { key: '0ac2881334260e7cd17528d2142cd112730c33c6', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: 'fc0203b1defeeee8bbaa82b8147049789caf7f7b', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: '84bdb35eebdd5bd8bdf40900e2e5bbd09e3be9df', class: "alert-message" }, moment(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), h("div", { key: '6def694a4cd0612062f0f2370a1bac19e9a7197e', class: "meta-grid" }, h("div", { key: 'ea5ec48db1aa3dd2d09a0a6055b977a09fd39f0d', class: "payment-meta" }, h("p", { key: '024c07c207b4dcacaf1b51fccbedd2eb7f3bf020', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: 'afb9c254462d5d2d64976ef8f4b73e5bdac0e970', class: "date_action" }, moment(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY'))), h("p", { key: '58684d8136a3ffe0f2477d55214e164ab26cdb03', class: "payment-reason" }, this.paymentAction.reason.trim()))), this.paymentAction.amount > 0 && (h("div", { key: 'ad499556ee81877c60c3b462ecd31462df843e60', style: { width: 'fit-content' } }, h("ir-button", { key: '2b5f36aca1b0bdd6dba699c6deca1fb1931f9c9a', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) })))));
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
