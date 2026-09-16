'use strict';

var index = require('./index-CQkpA5n3.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '3b9ce8ef6c1994e6de86004bc99579c329c23255' }, index.h("slot", { key: '9797b6d0853df841ebd3b10649d751e52d4d039a' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
