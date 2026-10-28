import { h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import moment from "moment";
import { formatDate } from "../../../../../utils/date/index";
import { t } from "../../../../../services/locale/t";
export class IrPaymentAction {
    paymentAction;
    generatePayment;
    render() {
        const paymentActionType = this.paymentAction.type.toLowerCase();
        const isFutureAction = paymentActionType === 'future';
        return (h("div", { key: 'aa318012bc2ca7802b8013705541876a4d2b2913', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, h("div", { key: '05e6ecedad077ece3fb83488683c9fdf4a7c42ac', class: 'action-row' }, !isFutureAction && (h("div", { key: '95b1ea1a98d56d64e0d60f9eb181d203cea70dda', class: 'overdue_action' }, h("svg", { key: '00a0d4786e253c292aee012c5e00d93fab3b980b', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '3d935a18ae9a09f900c33ffeb57f399b8984e866', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: 'd5ad8aa676a7e1b62ff58317aa6aca4b831028fe', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (h("div", { key: '63d2cd37e1f12b79a85c9990fd1d1e2670e8265d', class: 'future_action ' }, h("svg", { key: 'fd9cfaf7c613c9af3b035a3ef53ab46c955a8b29', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: '23de93ef167410122c517ac9d675b620145f2efc', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: 'e69bc9615678c8d1324f2130b64355b624b83afd', class: "alert-message" }, moment(new Date(this.paymentAction.due_on)).isSame(new Date()) ? t('Lcz_Today', { fallback: 'Today' }) : t('Lcz_FutureLabel', { fallback: 'Future' })))), h("div", { key: '1478c9cc1c39b351d3474294c32f5e1d92b92bd5', class: "meta-grid" }, h("div", { key: '4bf53e88c83e6e97a265162cf715149b54ba850d', class: "payment-meta" }, h("p", { key: '03b5744735a885ff85aa335d5294bc572b1474c1', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: 'e5ba53374bd8b75094e12712758c2d7e8bb0aec5', class: "date_action" }, formatDate(new Date(this.paymentAction.due_on), 'ddd, MMM DD YYYY'))))), h("div", { key: '5f0a3bb47a88b9c332c589760f4a4525630c1a26', style: { width: 'fit-content' } }, h("ir-button", { key: 'ccb4d09cabd837f11e532dc7387bb4431c2c0c4c', btn_color: "dark", text: t('Lcz_Pay', { fallback: 'Pay' }), size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
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
