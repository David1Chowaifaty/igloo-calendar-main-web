'use strict';

var index = require('./index-CQkpA5n3.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '78c7adff7928c69f92500a3a2b476bd6f8a6cd90' }, index.h("slot", { key: 'abca508f68f573d246f9fb890687cbf582f57b3a' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
