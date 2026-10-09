'use strict';

var index = require('./index-CQkpA5n3.js');
var number = require('./number-BAlv3tpP.js');
require('./ir-date-wIaf9EWb.js');
require('./locale-scope-C7rmpwuA.js');
require('./language-observer-DKp37LIu.js');
require('./moment-CdViwxPQ.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-inline-end:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: 'dfc2a62c73bb84a8c9f2c1486123bf543176a3fc', class: "pe-1" }, index.h("img", { key: '07a8dfc175228762c127f06a50573f4ced227d6b', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'a92534bef3b2a1418d99184ff66a6c1d1dc5b9a1' }, index.h("p", { key: 'fac24e76e4e6b8257317992f1c3f59f9d0069895', class: "p-0 m-0" }, number.formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && index.h("p", { key: '0cd31050598d5678fdb364c2ce4e98ae5e593df2', class: "small p-0 m-0" }, number.formatBookingNumber(this.booking.channel_booking_nbr))), index.h("p", { key: '7bba68dc378023868ba8ac5ae287e58ad6f985d1', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
