'use strict';

var index = require('./index-Bg4VKYKR.js');

const irFinancialSummaryCss = () => `.sc-ir-financial-summary-h{display:block}`;

const IrFinancialSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9d1276ea5fe35ab28d0d82c3233d08782eb9d60f' }, index.h("slot", { key: 'e0ce2bacc1b1a401d06b8dc3e93521216b0285a8' })));
    }
};
IrFinancialSummary.style = irFinancialSummaryCss();

exports.ir_financial_summary = IrFinancialSummary;
