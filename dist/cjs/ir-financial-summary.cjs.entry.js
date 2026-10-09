'use strict';

var index = require('./index-CQkpA5n3.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '32f21f289e8d181628e55c0bed1337add93d0430' }, index.h("slot", { key: 'd15e96ccf7230b266c137e8c13f8e64fb6e9e672' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
