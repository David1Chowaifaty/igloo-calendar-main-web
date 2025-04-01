'use strict';

var index = require('./index-Dmp0dHfN.js');

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block}";

const IrTestCmp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a, _b;
        return (index.h(index.Host, { key: '2e68d5717d6fa941a7547b2214465757ef2727eb', class: "card p-4" }, index.h("ir-range-picker", { key: '8793aac95719b1804f428892fdd495a0d78a5b10', onDateRangeChanged: e => (this.dates = e.detail), fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.fromDate, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.toDate })));
    }
};
IrTestCmp.style = irTestCmpCss;

exports.ir_test_cmp = IrTestCmp;
//# sourceMappingURL=ir-test-cmp.entry.cjs.js.map

//# sourceMappingURL=ir-test-cmp.cjs.entry.js.map