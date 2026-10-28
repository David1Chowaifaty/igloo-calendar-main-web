import { Host, h } from "@stencil/core";
export class IrFinancialSummary {
    render() {
        return (h(Host, { key: '0a3eb107fc5630ebda926c4fa2309d889d3dd315' }, h("slot", { key: '329291c531e4966e1c0d05aa44ac05438b87d25f' })));
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
