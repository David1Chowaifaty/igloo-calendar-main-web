'use strict';

var index = require('./index-CJ0kc5p1.js');

const irSalesByChannelSummaryCss = () => `.sc-ir-sales-by-channel-summary-h{display:block}`;

const IrSalesByChannelSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '796e5bb45ecdd8d53293ae87c4c1ba2a0df50f90' }, index.h("slot", { key: '54bfbf571d806083234e162843b3ff9d7930265d' })));
    }
};
IrSalesByChannelSummary.style = irSalesByChannelSummaryCss();

exports.ir_sales_by_channel_summary = IrSalesByChannelSummary;
