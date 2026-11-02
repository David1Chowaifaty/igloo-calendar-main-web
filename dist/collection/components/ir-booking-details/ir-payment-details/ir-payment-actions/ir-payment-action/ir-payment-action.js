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
        return (h("div", { key: '0c5203f390a03f48d029e7bc62f201289b55f4ef', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, h("div", { key: '5dffecbb16374f651dc756af4b1dc9840d835ada', class: 'action-row' }, !isFutureAction && (h("div", { key: '728949840a6d33d984484c291acc6e3c9b77d199', class: 'overdue_action' }, h("svg", { key: 'e99c8a391d132f71d304ad21ccd13c0237487940', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '1f225c917763d4d9596b24094f0816f0a1872683', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: '7881624ca144fa89382503b262256e2b90cd2cda', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (h("div", { key: '977fde93e7aa89b8c58950a7f1f7be771d21f4fa', class: 'future_action ' }, h("svg", { key: 'e2e8d6fff7bb6be6493732d5281e5ad41ebf6753', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: 'ff046616da79e0ff581fa62f5ea32556ba9d64c7', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: '33a9ce6e0671b2c82ef984749cad6b0b84ead731', class: "alert-message" }, moment(new Date(this.paymentAction.due_on)).isSame(new Date()) ? t('Lcz_Today', { fallback: 'Today' }) : t('Lcz_FutureLabel', { fallback: 'Future' })))), h("div", { key: '086cea232e64a5eabc650443e70a104b394e60fe', class: "meta-grid" }, h("div", { key: '5f8b60ec4396b775d9a30f8c18de102639dc4dc0', class: "payment-meta" }, h("p", { key: 'ff1dcebf5e38ec4f05ae13e1ab9a70e8ecfb7968', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: '4267585416c3fed752f84d4a3f9f4f32ea830873', class: "date_action" }, formatDate(new Date(this.paymentAction.due_on), 'ddd, MMM DD YYYY'))))), h("div", { key: 'a21bf4e0eaf965a2b7809c0f1e22eb1c8f4fcc12', style: { width: 'fit-content' } }, h("ir-button", { key: '4339bae82781e58e1e246a903ea7b712eb2eb61c', btn_color: "dark", text: t('Lcz_Pay', { fallback: 'Pay' }), size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
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
