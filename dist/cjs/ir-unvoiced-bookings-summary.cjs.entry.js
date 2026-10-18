'use strict';

var index = require('./index-IDeZZwEK.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'd6726c7b2c224e822d4026f19b3c733961540a98' }, index.h("slot", { key: '87d11cc184fae09a26d295938abc3482b4b2ea39' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
