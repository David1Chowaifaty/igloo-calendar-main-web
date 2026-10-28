'use strict';

var index = require('./index-IDeZZwEK.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9d2476507ae32acc6199862b9992c5e8ab47193e' }, index.h("slot", { key: '9aa131e85c1196080baf26050c1369f7ffe58ef7' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
