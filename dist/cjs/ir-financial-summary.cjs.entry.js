'use strict';

var index = require('./index-IDeZZwEK.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '31625657c3975cd3f3eab77d423447986e80a119' }, index.h("slot", { key: '0bf574b48eee895b6e59480e08d7dbd15f0a58e4' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
