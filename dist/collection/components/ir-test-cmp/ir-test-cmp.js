import { Host, h } from "@stencil/core";
export class IrTestCmp {
    render() {
        var _a, _b;
        return (h(Host, { key: '2e68d5717d6fa941a7547b2214465757ef2727eb', class: "card p-4" }, h("ir-range-picker", { key: '8793aac95719b1804f428892fdd495a0d78a5b10', onDateRangeChanged: e => (this.dates = e.detail), fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.fromDate, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.toDate })));
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
