'use strict';

var index = require('./index-DgHWBwDV.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '07ca25d09c9bdc1ad0b2d4902f66c67d9b4fcc8c' }, index.h("slot", { key: 'b53935f7718b4fb7a3746d916f95fa43a6390a2d' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
