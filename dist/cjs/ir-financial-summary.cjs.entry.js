'use strict';

var index = require('./index-DN8J4ULi.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '38203406b0ccee33cbdd2294b6289837abf23443' }, index.h("slot", { key: '063da607e1ecff276527b7a203cab7e712d49e90' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
