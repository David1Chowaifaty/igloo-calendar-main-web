import { r as registerInstance, h, H as Host } from './index-0a4a209a.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '3a8ec0983afa98c2205a555b5b45f19ab1ffff19', class: "card p-4" }, h("ir-range-picker", { key: '6261df5f80cf84102b4180ea8e46751df3b2ac48', onDateRangeChanged: e => (this.dates = e.detail), fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.fromDate, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.toDate })));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

export { IrTestCmp as ir_test_cmp };

//# sourceMappingURL=ir-test-cmp.entry.js.map