'use strict';

var index = require('./index-P5Mginch.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b08cbe14c2b37618e98fc138d855daca97d6e1a7' }, index.h("slot", { key: '3559506d36b293c332bf64dba38e2bc119b08fab' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
