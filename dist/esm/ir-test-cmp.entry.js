import { r as registerInstance, h, H as Host } from './index-ChgcZQN7.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block}";

const IrTestCmp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '07aa3e5ccf48770957eb2201c5729ac002b8a84b', class: "card p-4" }, h("ir-range-picker", { key: '3d42c992e7bd19a5cb93fd44be0c62d14f438d7c', onDateRangeChanged: e => (this.dates = e.detail), fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.fromDate, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.toDate })));
    }
};
IrTestCmp.style = irTestCmpCss;

export { IrTestCmp as ir_test_cmp };
//# sourceMappingURL=ir-test-cmp.entry.js.map

//# sourceMappingURL=ir-test-cmp.entry.js.map