'use strict';

var index = require('./index-DYQrLNin.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0e3eab2523e8166c0e31dcdce5dfabf43957e3d0' }, index.h("slot", { key: '31a0a01da3915af01d58ce353d41fd89b4847ce3' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
