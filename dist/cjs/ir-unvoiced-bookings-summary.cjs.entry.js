'use strict';

var index = require('./index-jMqrfjaT.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'f316174cffa12ffe6e3fe59cf85024ecae1e811d' }, index.h("slot", { key: '2febdc54babdea8bd955bc9809f68154086335ab' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
