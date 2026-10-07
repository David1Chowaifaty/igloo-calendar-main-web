'use strict';

var index = require('./index-CQkpA5n3.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6ca73a0f2a9de1e476b4276ecc951d36129ae75f' }, index.h("slot", { key: '2ebe0b1fa2d245af0c9ed7858ab6b0dc9dd11e6e' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
