'use strict';

var index = require('./index-Bg4VKYKR.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '84a823faffd905c427730da9cb58c1c973d7a7e6' }, index.h("slot", { key: '8ea785c2ce296916128a3f68d75a143939621df1' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
