'use strict';

var index = require('./index-CJa_TWt0.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2e5e5927d7d6ddba577ea5cd49dc853a7a9e1fa8' }, index.h("slot", { key: 'dffb4d36e0a97c9e28057b7257efada779a938ee' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
