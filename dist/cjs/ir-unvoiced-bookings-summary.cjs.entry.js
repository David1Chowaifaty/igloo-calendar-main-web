'use strict';

var index = require('./index-P5Mginch.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'da5dfcd1aee66b4b55b08266c3b3547b9bd81caf' }, index.h("slot", { key: '77a4df413b3e62432bff897a1c34ff91c9ffbd7b' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
