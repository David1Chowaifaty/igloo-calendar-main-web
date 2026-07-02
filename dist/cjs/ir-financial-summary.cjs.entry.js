'use strict';

var index = require('./index-DYQrLNin.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'd41c9a020b4a0526c3900dc84a8ad62a7b693df4' }, index.h("slot", { key: 'b169e676cdf345efc9be1039c1ab14c8fcebecf4' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
