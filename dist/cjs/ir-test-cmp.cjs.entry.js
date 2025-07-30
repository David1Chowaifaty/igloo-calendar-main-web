'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a, _b;
        return (index.h(index.Host, { key: '24a67d75753271fa69160cb29e70c5707c6a3fae', class: "card p-4" }, index.h("ir-range-picker", { key: 'ef9041ae5bb2ff3ef26e8cbe8813df0865f09bd9', onDateRangeChanged: e => (this.dates = e.detail), fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.fromDate, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.toDate })));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

exports.ir_test_cmp = IrTestCmp;

//# sourceMappingURL=ir-test-cmp.cjs.entry.js.map