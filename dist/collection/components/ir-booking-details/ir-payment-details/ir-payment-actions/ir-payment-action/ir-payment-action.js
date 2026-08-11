import { h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import moment from "moment";
export class IrPaymentAction {
    paymentAction;
    generatePayment;
    render() {
        const paymentActionType = this.paymentAction.type.toLowerCase();
        const isFutureAction = paymentActionType === 'future';
        return (h("div", { key: '6af2718858fd25a1a5e2615a33e806cf0c7c5357', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, h("div", { key: '180c0bf14b7800fb1dd243319f94a63d82be4b5b', class: 'action-row' }, !isFutureAction && (h("div", { key: '3a4293adb6f04f637def023723ee281d98912cce', class: 'overdue_action' }, h("svg", { key: 'c0e05844da01a0396a9d154ebc998a1f9ce61dca', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '88707d9c023889dd36459e47ae1a88a8e2137a51', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: 'b94c391d4dfe703110e33f56e3fbc15ade62ab7c', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (h("div", { key: '7711f64b668e59d68cadd3cf9354d722625aae69', class: 'future_action ' }, h("svg", { key: '019ad75dfe3f59dfd9e01a0a06a2c2252fd09dd3', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: 'b1dc46edae5b9d4f3865e47772a5ebd5238f6065', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: '32cba0a941a2513bd071263f6c14ec142401341e', class: "alert-message" }, moment(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), h("div", { key: '2d0a0aaecb909b269d5adcd566ec03dcf5beb5d9', class: "meta-grid" }, h("div", { key: '591a5e897d8a4184280347e7e76d7fd0854e0d36', class: "payment-meta" }, h("p", { key: '82a63d30f66455b811875cfe3a35a8c6f19a5c0e', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: 'c7b04470fbc6a373ad8cf276d8a55f74a3d4b43a', class: "date_action" }, moment(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY'))))), h("div", { key: 'c49b35a62ea1c020d624515a8fba7ad17aeaa797', style: { width: 'fit-content' } }, h("ir-button", { key: '87f47c8bbb16d03ec24903d5b99823e145ee9bad', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
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
                            "id": "src/services/payment.service.ts::IPaymentAction",
                            "referenceLocation": "IPaymentAction"
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
                            "id": "src/services/payment.service.ts::IPaymentAction",
                            "referenceLocation": "IPaymentAction"
                        }
                    }
                }
            }];
    }
}
