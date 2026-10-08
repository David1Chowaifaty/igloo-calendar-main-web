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
        return (index.h(index.Host, { key: '195a4f87c6cb1ba781357557855214c00aca213a', class: "pe-1" }, index.h("img", { key: 'f26b0e3cf619f7d8e3e09ebf8219e6315a0a571a', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '24dbbb052e305d12596e4233409c034affe6e840' }, index.h("p", { key: 'c7500609fee2ec7f5cc9d914833a3fde7e6280b5', class: "p-0 m-0" }, number.formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && index.h("p", { key: '1d7a949980678f90718f3aabbad96910918047dd', class: "small p-0 m-0" }, number.formatBookingNumber(this.booking.channel_booking_nbr))), index.h("p", { key: '7f233e6617f40f66e510ec3c35064b978b1045d2', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
