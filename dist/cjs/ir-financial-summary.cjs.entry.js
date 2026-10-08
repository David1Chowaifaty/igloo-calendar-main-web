'use strict';

var index = require('./index-CQkpA5n3.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'dd5260d7eec0610cc06e581733a5917162b1e042' }, index.h("slot", { key: '9158bb05afd06f8fa6d0668e39115e351967f499' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
