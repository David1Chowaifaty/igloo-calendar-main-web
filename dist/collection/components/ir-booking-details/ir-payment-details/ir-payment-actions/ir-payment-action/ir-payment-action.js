import { h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import moment from "moment";
export class IrPaymentAction {
    render() {
        return (h("div", { key: '839f008a4c22d467f8aea77fd6987dc3c940f32d', class: `action-container ${this.paymentAction.type}` }, h("div", { key: 'e57672d411c0712c2342cd89a955ef31bb9c4b52', class: 'action-row' }, this.paymentAction.type === 'overdue' && this.paymentAction.amount > 0 && (h("div", { key: '14ac954dd09e1728d39c5234e3b0a58abf348503', class: 'overdue_action' }, h("svg", { key: '172ccefba9b6313b820dda31767e1bef7326a1c8', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '9f0db78644ead8f9a44eee58fc288733b12926c4', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: '310900775bcb64b961bee15225a32586282bee1d' }, "Overdue"))), this.paymentAction.type === 'future' && this.paymentAction.amount > 0 && (h("div", { key: '8d2bcb79e34a06d0b6f670db9169dcdc4dc42019', class: 'future_action ' }, h("svg", { key: '119ec7d225723d8487e41a9c59a4f7bfc73eb5b8', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: '4db618e7502646057787403499b4d5c4bf8bbc03', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: '0e94d51c9d813fac99dc73ace0becd5a00e93681' }, moment(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), h("div", { key: '81802fbf17519b60f9eb16afcc16b9e76190db86', class: "payment-meta" }, h("p", { key: '16881efbf56a8887119f8561e3de3794419fca77', class: 'amount_action' }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: 'cc56bf046f4a03bb05e931acef57eb6309a3cc09', class: 'date_action' }, moment(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY')))), this.paymentAction.amount > 0 && (h("div", { key: '5dc546960e9652b239773a37cce16811fd717b0f', style: { width: 'fit-content' } }, h("ir-button", { key: 'a75b1c4bc6470ba8e23e1529e8b677dafb02565c', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) })))));
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
