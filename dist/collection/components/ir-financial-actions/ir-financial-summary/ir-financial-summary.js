import { Host, h } from "@stencil/core";
export class IrFinancialSummary {
    render() {
        return (h(Host, { key: '9a0ed56fd7359dcc05ceee323307db0ee664be17' }, h("slot", { key: '62b2a0f823ea142c4e0d6d957ae4e39aa59e0a3b' })));
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
