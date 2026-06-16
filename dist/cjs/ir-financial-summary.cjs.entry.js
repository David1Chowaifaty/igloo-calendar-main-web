'use strict';

var index = require('./index-Cn9TxUnA.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9a0ed56fd7359dcc05ceee323307db0ee664be17' }, index.h("slot", { key: '62b2a0f823ea142c4e0d6d957ae4e39aa59e0a3b' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
