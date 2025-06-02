import { Host, h } from "@stencil/core";
export class IrTestCmp {
    render() {
        var _a, _b;
        return (h(Host, { key: 'fa21e328941e94bf56b2938464125c0ae07cd83d', class: "card p-4" }, h("ir-range-picker", { key: 'b2c3bc99be67d9c9f22534c81e2ead287a888ba9', onDateRangeChanged: e => (this.dates = e.detail), fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.fromDate, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.toDate })));
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
