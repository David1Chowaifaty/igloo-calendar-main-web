'use strict';

var index = require('./index-DgHWBwDV.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'e3a02aa90e0d459ea044fdc0bc234a5089c97b5a' }, index.h("slot", { key: '5d1687da120340994ed8571007ac38b98e3e2b6c' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
