'use strict';

var index = require('./index-IDeZZwEK.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1a0fa7600ad780e0ea34f924e31954688e5e6ec9' }, index.h("slot", { key: 'c3b4bc032e300acffddeaa0be33f15b60e3cb40f' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
