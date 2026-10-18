'use strict';

var index = require('./index-IDeZZwEK.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a246607d8d0a770558df131a231e77821c80902f' }, index.h("slot", { key: 'c22ffc09c6747ce268320d7a503a62388b2cb59f' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
