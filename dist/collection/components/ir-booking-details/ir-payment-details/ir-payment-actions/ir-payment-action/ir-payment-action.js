import { h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import moment from "moment";
export class IrPaymentAction {
    paymentAction;
    generatePayment;
    render() {
        const paymentActionType = this.paymentAction.type.toLowerCase();
        const isFutureAction = paymentActionType === 'future';
        return (h("div", { key: '7e363ce53c5d8890efb72f037837536b8134ec38', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, h("div", { key: 'c85f4c7d345bd089ff3c4dcdc2f3c408c7ea041f', class: 'action-row' }, !isFutureAction && (h("div", { key: 'b8a722cfdbb0c9f49bd4219d970e5b197348d925', class: 'overdue_action' }, h("svg", { key: '0cc72a2fccccf9e1aefa79e326ab478083cbe09c', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '3c1ebb66d49776b050f9a9eddf7cb5745bf41f60', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: '2f123d1d7144ab84bf3afd73d7e6a1a1c03269ae', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (h("div", { key: '6716ca2e19a3dee5a1799312683c43a203175ab5', class: 'future_action ' }, h("svg", { key: '86acd0a4343cc9fbe03df4aa14169e9baa44061f', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: '6c96c7fd1fb98a2e0c5bdc317cd72a6281616332', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: 'b8593d63aeb24c77300d37e46dd7f9e35837c00f', class: "alert-message" }, moment(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), h("div", { key: 'bf4a4984dcbf5f7a98259e5a699d4b8bfcb40628', class: "meta-grid" }, h("div", { key: '4ab01ceccdc9bbaaf10761f7b65944646f8b74d5', class: "payment-meta" }, h("p", { key: '6fde002fe27149b0819910e5f50e12cb6fcf8bbe', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: 'b8055d72a3acc0056608d460f7699f9bdf77557d', class: "date_action" }, moment(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY'))))), h("div", { key: '10717d913b30ec6a0423ad1cea9ae5f725b14f94', style: { width: 'fit-content' } }, h("ir-button", { key: 'a717eb59f623a2fbfcd97a195616507f35ceb49f', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
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
