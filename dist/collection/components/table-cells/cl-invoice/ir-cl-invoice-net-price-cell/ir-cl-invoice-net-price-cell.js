import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrClInvoiceNetPriceCell {
    currencySymbol;
    amount;
    render() {
        return h(Host, { key: 'a21140de9e5fd6b740c1f0d6e8d528208270192d' }, formatAmount(this.currencySymbol, this.amount));
    }
    static get is() { return "ir-cl-invoice-net-price-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-invoice-net-price-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-invoice-net-price-cell.css"]
        };
    }
    static get properties() {
        return {
            "currencySymbol": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "currency-symbol"
            },
            "amount": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "amount"
            }
        };
    }
}
