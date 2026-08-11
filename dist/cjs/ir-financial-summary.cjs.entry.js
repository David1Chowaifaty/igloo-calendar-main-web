'use strict';

var index = require('./index-jMqrfjaT.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '32ddac2b583b85afcd28fd6d8bd46b7e78329a8e' }, index.h("slot", { key: 'cfff3a8b6a83ddfade7e307abe12c172e5b72bc4' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
