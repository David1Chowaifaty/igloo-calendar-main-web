import { Host, h } from "@stencil/core";
export class IrTestCmp {
    render() {
        var _a, _b;
        return (h(Host, { key: '552fd95ad9f9e431caaaed06ead2933204b8e04e', class: "card p-4" }, h("ir-range-picker", { key: '9008919a106a35f8a44a9bed3690b7348143106e', onDateRangeChanged: e => (this.dates = e.detail), fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.fromDate, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.toDate })));
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
