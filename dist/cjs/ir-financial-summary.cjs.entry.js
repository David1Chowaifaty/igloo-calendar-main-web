'use strict';

var index = require('./index-OzksjAXP.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '87d81dc4ed9102a8bd0405f133a2a210932b4a11' }, index.h("slot", { key: '30bce0d9a6a3c847aa728145c27e5b72f8bcbb7b' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
