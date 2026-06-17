'use strict';

var index = require('./index-OzksjAXP.js');

const irSalesByChannelSummaryCss = () => `.sc-ir-sales-by-channel-summary-h{display:block}`;

const IrSalesByChannelSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9848c2a0590a692423ff7c0be72548c1bca3eab5' }, index.h("slot", { key: '711239ff38d7e84686443f5442dd13f1948db995' })));
    }
};
IrSalesByChannelSummary.style = irSalesByChannelSummaryCss();

exports.ir_sales_by_channel_summary = IrSalesByChannelSummary;
