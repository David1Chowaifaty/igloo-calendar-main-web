'use strict';

var index = require('./index-IDeZZwEK.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '12a9bc9f6313f160af52873b87077a72091d2f8d' }, index.h("slot", { key: '2bbf8688ebdcd5f16c17bf42b87fbc0ba386810a' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
