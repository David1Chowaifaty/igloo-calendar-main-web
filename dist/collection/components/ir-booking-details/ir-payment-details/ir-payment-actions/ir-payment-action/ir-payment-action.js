import { h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import moment from "moment";
export class IrPaymentAction {
    paymentAction;
    generatePayment;
    render() {
        const paymentActionType = this.paymentAction.type.toLowerCase();
        const isFutureAction = paymentActionType === 'future';
        return (h("div", { key: '5476ae72f733767092c882af4cf6b0325433dde9', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, h("div", { key: '5220d9ae4e8048da15055629c826e582b4a6a4c1', class: 'action-row' }, !isFutureAction && (h("div", { key: '0919d3851281bfb743e1bb3f1ab04378de4e282d', class: 'overdue_action' }, h("svg", { key: '6f51e947b4f964a2cba64f8eb693a32080c87a10', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '0ae5de630032cd3341e1162f47e20ba1f7edc2ff', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: 'ecbc7b522e6288b5d4f5ffe229d91f2c87585f78', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (h("div", { key: '3bf048d4fb0c33929fbd513e8a81b85bd9c2171f', class: 'future_action ' }, h("svg", { key: '02c92d65cc58648e78b5eadec1ca6cda3e7ead1e', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: '108af1d071d778735134da210a1891e73e12b6b0', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: '574ff1e4e2f7374e7ca5858502d7ddefa3ea1ff8', class: "alert-message" }, moment(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), h("div", { key: '6d17e3c18dbba76ed677b30bdd35f3e57e32d743', class: "meta-grid" }, h("div", { key: '84e66b9fb522c62c0a3244f8d5d5ac90dd259606', class: "payment-meta" }, h("p", { key: '533839145035cd901bd0ddcf28413b88a55ba804', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: 'e2f8226c1ee850d0a2f370da17d22c8cc6299ee1', class: "date_action" }, moment(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY'))))), h("div", { key: '961fde7a5c223392a47d5657155a05f20c6ed766', style: { width: 'fit-content' } }, h("ir-button", { key: '17da91f3002a30a8117dd6ba6132b06006576b96', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
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
