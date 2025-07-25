import { Host, h } from "@stencil/core";
export class IrTestCmp {
    render() {
        var _a, _b;
        return (h(Host, { key: 'ebe59770dd1603e1fd363b2d74cd7c3b7eeeea71', class: "card p-4" }, h("ir-range-picker", { key: '9fe015f8f428ac3465c3fbfff140ed5fb4cd351a', onDateRangeChanged: e => (this.dates = e.detail), fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.fromDate, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.toDate })));
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
