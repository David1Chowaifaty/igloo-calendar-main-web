'use strict';

var index = require('./index-IDeZZwEK.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0a3eb107fc5630ebda926c4fa2309d889d3dd315' }, index.h("slot", { key: '329291c531e4966e1c0d05aa44ac05438b87d25f' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
