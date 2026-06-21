'use strict';

var index = require('./index-DYQrLNin.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '044fb6e0f55c475c866b5741014f5a2363ec13c3' }, index.h("slot", { key: 'a76ed09328f4b1fe11bec6eea9e8449133868ed0' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
