'use strict';

var index = require('./index-CJa_TWt0.js');

const irUnvoicedBookingsSummaryCss = () => `:host{display:block}`;

const IrUnvoicedBookingsSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b4f0ee9f0d65197dde61cc8d770555a3175252ba' }, index.h("slot", { key: 'a656e79a2ecc0805a0c23459062a05c920803841' })));
    }
};
IrUnvoicedBookingsSummary.style = irUnvoicedBookingsSummaryCss();

exports.ir_unvoiced_bookings_summary = IrUnvoicedBookingsSummary;
