import { Host, h } from "@stencil/core";
export class IrTestCmp {
    render() {
        var _a, _b;
        return (h(Host, { key: 'e0caa6bcdfeb4ab8813f0098585097f553d53a24', class: "card p-4" }, h("ir-range-picker", { key: '86586606b4f17684c15fbf38b07d755b3ff4a56b', onDateRangeChanged: e => (this.dates = e.detail), fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.fromDate, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.toDate })));
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
