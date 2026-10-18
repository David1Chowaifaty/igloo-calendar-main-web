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
        return (h("div", { key: '805881930bdd7a54ae7ee618dad73d5cd2c6118d', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, h("div", { key: 'a12250d4957fd6ede5097904ecf249b89e21acbe', class: 'action-row' }, !isFutureAction && (h("div", { key: '00778db1255c066a263097da4dbb826ae75a429c', class: 'overdue_action' }, h("svg", { key: 'be8184042092589ea998f28791b712a143fd9f93', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: 'fc3b0237c83fef1bb9203dc07f27c34f02d84507', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: 'dafe3af9f00d5625f68523daf3326bd647c3342d', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (h("div", { key: '0c4506b3e95793484d1240f62c9df78dc5195263', class: 'future_action ' }, h("svg", { key: '3604c655a39d1833e8908447a58de5224586496b', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: '36c5ced7ac870acea8032fd8d67811b6022a1d38', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: 'f3e229de213a62fb90013a93a0d3e5b0716570dd', class: "alert-message" }, moment(new Date(this.paymentAction.due_on)).isSame(new Date()) ? t('Lcz_Today', { fallback: 'Today' }) : t('Lcz_FutureLabel', { fallback: 'Future' })))), h("div", { key: '1bb18c880cffd273925e660531869400530bf984', class: "meta-grid" }, h("div", { key: '991b616a59d973b5883173dad8702ee7b795c296', class: "payment-meta" }, h("p", { key: '76a604eab50b94bcdfaec98c825887c35d0635df', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: '18b8bdae82fb9b7c5600785a87c76015e72018bc', class: "date_action" }, formatDate(new Date(this.paymentAction.due_on), 'ddd, MMM DD YYYY'))))), h("div", { key: '789b71484b7578abce8363ae1b011b7957becfb4', style: { width: 'fit-content' } }, h("ir-button", { key: 'bbab3a33212ac8d3adfb601ab79df8a7dfd81121', btn_color: "dark", text: t('Lcz_Pay', { fallback: 'Pay' }), size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
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
