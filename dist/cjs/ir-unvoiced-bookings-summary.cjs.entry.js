'use strict';

var index = require('./index-Bp205iz4.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0d6babf323fb8a5d9626bfe515d24ffe42ce5559' }, index.h("slot", { key: '99cc9abb90b408faa52e596cbdb96e5b86894fce' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
