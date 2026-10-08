'use strict';

var index = require('./index-CQkpA5n3.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '914f09b92b1a77447f7c5db42672d675b0b5302e' }, index.h("slot", { key: 'd9a761cc67291ea0cc59d7c425114db319488ac4' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
