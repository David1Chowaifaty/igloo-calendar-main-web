'use strict';

var index = require('./index-DgHWBwDV.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9363ec251ee82f03f9ed751166427df2f49401af' }, index.h("slot", { key: '79067e3468dbdc1180cc70009880795a65ed56e1' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
