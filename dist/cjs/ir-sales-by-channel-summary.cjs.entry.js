'use strict';

var index = require('./index-Cn9TxUnA.js');

const irSalesByChannelSummaryCss = () => `.sc-ir-sales-by-channel-summary-h{display:block}`;

const IrSalesByChannelSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '619b979c9fb11edf764c3cf50651a360c56e7b07' }, index.h("slot", { key: 'dbf4b861dba4c58e539675619b57c59097fd8d2a' })));
    }
};
IrSalesByChannelSummary.style = irSalesByChannelSummaryCss();

exports.ir_sales_by_channel_summary = IrSalesByChannelSummary;
