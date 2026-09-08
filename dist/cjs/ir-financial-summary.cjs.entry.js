'use strict';

var index = require('./index-P5Mginch.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2feb203f9a608ce1501bab3497e7fb8ed70ecfd0' }, index.h("slot", { key: '25126bc1e8f190b254555cc5904e2528fc023439' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
