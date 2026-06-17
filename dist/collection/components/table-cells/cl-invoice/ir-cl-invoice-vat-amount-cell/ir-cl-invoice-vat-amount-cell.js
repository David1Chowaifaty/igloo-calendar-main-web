import { formatAmount } from "../../../../utils/utils";
import { Host, h } from "@stencil/core";
export class IrClInvoiceVatAmountCell {
    currencySymbol;
    amount;
    render() {
        return h(Host, { key: 'aeb71afc1a000ddecbd39c96d4c97f398b1cab87' }, formatAmount(this.currencySymbol, this.amount));
    }
    static get is() { return "ir-cl-invoice-vat-amount-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-invoice-vat-amount-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-invoice-vat-amount-cell.css"]
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
