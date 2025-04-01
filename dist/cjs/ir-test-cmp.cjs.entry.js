'use strict';

var index = require('./index-Dmp0dHfN.js');

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block}";

const IrTestCmp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a, _b;
        return (index.h(index.Host, { key: '07aa3e5ccf48770957eb2201c5729ac002b8a84b', class: "card p-4" }, index.h("ir-range-picker", { key: '3d42c992e7bd19a5cb93fd44be0c62d14f438d7c', onDateRangeChanged: e => (this.dates = e.detail), fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.fromDate, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.toDate })));
    }
};
IrTestCmp.style = irTestCmpCss;

exports.ir_test_cmp = IrTestCmp;
//# sourceMappingURL=ir-test-cmp.entry.cjs.js.map

//# sourceMappingURL=ir-test-cmp.cjs.entry.js.map