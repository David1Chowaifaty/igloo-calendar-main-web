'use strict';

var index = require('./index-CQkpA5n3.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '49aa2fc86fa042bb894aaf3c48fe4345fdf625f1' }, index.h("slot", { key: 'cc567196473f24c7600c736e6c94aa9013a1e416' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
