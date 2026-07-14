import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrClInvoiceCityTaxAmountCell {
    currencySymbol;
    amount;
    cityTaxPercent;
    render() {
        return h(Host, { key: '820057ad23494caee46ae801619309ccc111c901' }, this.cityTaxPercent > 0 ? formatAmount(this.currencySymbol, this.amount) : '');
    }
    static get is() { return "ir-cl-invoice-city-tax-amount-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-invoice-city-tax-amount-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-invoice-city-tax-amount-cell.css"]
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
            },
            "cityTaxPercent": {
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
                "attribute": "city-tax-percent"
            }
        };
    }
}
