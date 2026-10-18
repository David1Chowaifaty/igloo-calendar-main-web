import { Host, h } from "@stencil/core";
export class IrFinancialSummary {
    render() {
        return (h(Host, { key: '31625657c3975cd3f3eab77d423447986e80a119' }, h("slot", { key: '0bf574b48eee895b6e59480e08d7dbd15f0a58e4' })));
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
