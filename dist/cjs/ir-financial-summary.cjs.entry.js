'use strict';

var index = require('./index-CQkpA5n3.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '59ad75a0c284b3108f44038abeb559e75105b9e2' }, index.h("slot", { key: '88d79775e1c7000b1766d4b5ee1579958abd08d8' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
