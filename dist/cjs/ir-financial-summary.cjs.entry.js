'use strict';

var index = require('./index-IDeZZwEK.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'fb724395f0c46216c43b759b6b4195fb16d8b389' }, index.h("slot", { key: 'c2b67004392cb036b1f49e944c0d1dee49e4f42d' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
