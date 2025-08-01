import { Host, h } from "@stencil/core";
export class IrTestCmp {
    render() {
        return (h(Host, { key: '8ff5f8ef17ae84cd6fa7ced627aaf1612086e967', class: "card p-4" }, h("ir-m-combobox", { key: 'bf1550b4cbe3a6d5c1e9782ccbc2b21f1e27b3c1' })));
    }
    static get is() { return "ir-test-cmp"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-test-cmp.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-test-cmp.css"]
        };
    }
    static get states() {
        return {
            "dates": {}
        };
    }
}
//# sourceMappingURL=ir-test-cmp.js.map
