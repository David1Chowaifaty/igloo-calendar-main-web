'use strict';

var index = require('./index-IDeZZwEK.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '44f7ce66d3786ba08a17c77ce61e83eb74e3cf29' }, index.h("slot", { key: '85fb9b199e758650820442a3e4401890ad72f561' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
