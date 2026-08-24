'use strict';

var index = require('./index-DgHWBwDV.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a6c0dbab73a6a0514c5cf325e86b8acf47a44bdf' }, index.h("slot", { key: 'cf5cb17a76d70894cd0cd8a9569d4d7fde24964f' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
