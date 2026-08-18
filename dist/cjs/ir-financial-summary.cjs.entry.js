'use strict';

var index = require('./index-CJa_TWt0.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '4f018acf5366474f1b01545a7ec41d440d8bc4e7' }, index.h("slot", { key: 'e3243eaef64c17e09c633333d1098bdcf145e220' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
