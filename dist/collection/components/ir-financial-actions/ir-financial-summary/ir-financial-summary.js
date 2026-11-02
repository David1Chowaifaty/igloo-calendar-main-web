import { Host, h } from "@stencil/core";
export class IrFinancialSummary {
    render() {
        return (h(Host, { key: '44f7ce66d3786ba08a17c77ce61e83eb74e3cf29' }, h("slot", { key: '85fb9b199e758650820442a3e4401890ad72f561' })));
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
