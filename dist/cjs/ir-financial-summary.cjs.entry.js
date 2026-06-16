'use strict';

var index = require('./index-Cn9TxUnA.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '8df288cf4adc2529a4d47e1345e880670610cea8' }, index.h("slot", { key: '9ca86bbd3ab61a7a112200305e10177636378df2' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
