'use strict';

var index = require('./index-CQkpA5n3.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '10838b5b45e36bd8b56f1dda13e21595f7b17fec' }, index.h("slot", { key: '650fb787d15d6b67641c0bec9cc16ce0edcf2ebd' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
