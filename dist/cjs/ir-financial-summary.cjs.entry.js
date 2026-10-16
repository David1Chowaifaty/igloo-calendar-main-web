'use strict';

var index = require('./index-Bp205iz4.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '247cc2a7b45c5b50c40be7a28c4132a3d3d15b48' }, index.h("slot", { key: 'd3435daf7f70481d463c9e544cffccdea072cffc' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
