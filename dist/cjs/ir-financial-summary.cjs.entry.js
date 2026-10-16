'use strict';

var index = require('./index-IDeZZwEK.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2727f3b59d194877023289d301d0172e69ca4cdf' }, index.h("slot", { key: '90a246545e23e4e0df2820060cb20e395f358044' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
