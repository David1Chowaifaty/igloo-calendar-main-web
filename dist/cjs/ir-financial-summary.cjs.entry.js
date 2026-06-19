'use strict';

var index = require('./index-CJ0kc5p1.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'e023d6e004888f1af59dc698f88817e87e0e7cf6' }, index.h("slot", { key: '3a142a0d6f15b87d321d924634cc9e644976e80a' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
