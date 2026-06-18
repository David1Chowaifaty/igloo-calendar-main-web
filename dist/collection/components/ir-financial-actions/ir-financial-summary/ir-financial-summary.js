import { Host, h } from "@stencil/core";
export class IrFinancialSummary {
    render() {
        return (h(Host, { key: 'ad00b4527ec1946c929cc9ea1e4015fb90445f4c' }, h("slot", { key: '72b284593482de2b4aba5d51fd66e6066a84a052' })));
    }
    static get is() { return "ir-financial-summary"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-financial-summary.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-financial-summary.css"]
        };
    }
}
