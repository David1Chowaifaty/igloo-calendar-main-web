import { h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import moment from "moment";
export class IrPaymentAction {
    paymentAction;
    generatePayment;
    render() {
        const paymentActionType = this.paymentAction.type.toLowerCase();
        const isFutureAction = paymentActionType === 'future';
        return (h("div", { key: '26a1c8c15739f343316d0ad4eb6201f1de9fa361', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, h("div", { key: 'e043a911fd059f10940c60ab7916de966065bebf', class: 'action-row' }, !isFutureAction && (h("div", { key: 'f684459e1274f22e597de882fd814e2a6eb31f29', class: 'overdue_action' }, h("svg", { key: '9cc069bf6cb0eac2e0326dd3913716ea78884f0e', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '59bd8443d3ebd3eda623b66fc10efd4e7bf7199a', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: '6a59e51560f88167d9bf8bbcabd13e1c9a55e096', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (h("div", { key: 'ddd7ec6fd3eecd7f7012c8ade4731e24a8097366', class: 'future_action ' }, h("svg", { key: '3bd58e5ffbcf5215367e3e92f1dfd2cb49540552', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: '69faf991e364789bf3109e014c526a20ab713efb', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: '7428723938c16f732aaf397df0b49dffcb84cc60', class: "alert-message" }, moment(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), h("div", { key: '86cc08a94e134dede443d243a73ac2e8cf668bb1', class: "meta-grid" }, h("div", { key: '9a9e574dc3420377087ea2e0d58db3049cfc001c', class: "payment-meta" }, h("p", { key: '01262b0ba7d8fb6fc9e4464daafcb518b5e21bbd', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: '33aaab93b636412e69f1c8cd3bfd845536e40ca8', class: "date_action" }, moment(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY'))))), h("div", { key: '8ae23fbe469d1d4b0b7f698e2417d413d95b7052', style: { width: 'fit-content' } }, h("ir-button", { key: '5aa028da98c71d97a89c8c1db78306d9c0e6e9e2', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
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
