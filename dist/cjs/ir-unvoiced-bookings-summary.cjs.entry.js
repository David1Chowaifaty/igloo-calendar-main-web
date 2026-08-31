'use strict';

var index = require('./index-DN8J4ULi.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '3c9b9940d4744b8cee97b0939e31fc452bb540c3' }, index.h("slot", { key: '1f2f6cacd4fb61fcc0fd269365d5519b8b4c8e8a' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
