'use strict';

var index = require('./index-DgHWBwDV.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '3a76a03680449756835122d685558d165e9c49a2' }, index.h("slot", { key: 'd1f2cef5b0e5ffb605fdba03bf20b248e33fce27' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
