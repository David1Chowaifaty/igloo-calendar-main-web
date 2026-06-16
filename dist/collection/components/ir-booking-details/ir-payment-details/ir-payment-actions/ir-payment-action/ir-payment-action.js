import { h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import moment from "moment";
export class IrPaymentAction {
    paymentAction;
    generatePayment;
    render() {
        const paymentActionType = this.paymentAction.type.toLowerCase();
        const isFutureAction = paymentActionType === 'future';
        return (h("div", { key: 'ff8a1bb97b8b66163ade6a82d3f9466c32863724', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, h("div", { key: '6460c1bb53645230d11d7efa7f4460c8c270545e', class: 'action-row' }, !isFutureAction && (h("div", { key: '8367f2e97ec3b35935352795a02f372981cfae16', class: 'overdue_action' }, h("svg", { key: '85f68eec3be2701db4000c6b882422d4a501900c', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '596be376d219d3af53bd42c6f4a0a9fa0bdc0ce1', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: '6d3d7909a7a1456748a8e0397ae9b7ef3baf0e4f', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (h("div", { key: '8f75fd36127c01ebe6170d6d5864ec9a4407f20e', class: 'future_action ' }, h("svg", { key: '04aaf94d34e1013c6cbe5ac06a708c7bb49fcb56', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: '0c063b7b91d3110f327df49ad0604f30ea990e83', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: 'a9940c7675df8e6096ab0f63e475825ecad2d975', class: "alert-message" }, moment(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), h("div", { key: '7562b1f86a15d9e0f6e1251e2e52bd0b1606dbb8', class: "meta-grid" }, h("div", { key: '281a5008e7d51873c9d2664aef459e94d9f8433b', class: "payment-meta" }, h("p", { key: '1b1f40b2583c2ce8dafbd5fa93a58126694d4051', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: '4808659c04710dd2b28b08b2ddc68d31a3c253c3', class: "date_action" }, moment(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY'))))), h("div", { key: '2de929419c11519a7153f90fbbd0fee24cf0249c', style: { width: 'fit-content' } }, h("ir-button", { key: '236e0f53ec2ca2462fdf0ac27f8505d5ec877b58', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
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
