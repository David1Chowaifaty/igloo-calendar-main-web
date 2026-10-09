'use strict';

var index = require('./index-CQkpA5n3.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b69169b6a959c180e361186be09e00cc7fec4617' }, index.h("slot", { key: '66edef2dc5488f94369edf1f4223c272cda2c438' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
