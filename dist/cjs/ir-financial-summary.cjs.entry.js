'use strict';

var index = require('./index-CJ0kc5p1.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '3c03b23280136de0c162b6249f69d6ac70a6d587' }, index.h("slot", { key: '6c918eb7c0fcf4f1ae5a9baa0d0b497e7ff13dfd' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
