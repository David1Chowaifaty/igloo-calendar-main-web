'use strict';

var index = require('./index-CJa_TWt0.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c0b245e35bbd0434bd2cb9646d70a6d9ff2b2898' }, index.h("slot", { key: '170151e4a1dfb068b773330675bab08f8e65387c' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
