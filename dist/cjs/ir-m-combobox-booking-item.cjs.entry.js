'use strict';

var index = require('./index-CQkpA5n3.js');
var number = require('./number-D7i5wAQq.js');
require('./ir-date-BZLsqCOc.js');
require('./locales.store-BMTss6fG.js');
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
        return (index.h(index.Host, { key: 'f496c2289a6fe8698c46d7bef33fd038920ae688', class: "pe-1" }, index.h("img", { key: '707dbba64873c05276de4e3b505009771acc1e4f', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'e08ef46be98851d7bb968ab226bfefd0a1a0e56f' }, index.h("p", { key: 'bc69b09a8a64e3e0ef73c7527cdbef0312ce9c9e', class: "p-0 m-0" }, number.formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && index.h("p", { key: '59be157b55b2e707f10c639774a55f042a64020a', class: "small p-0 m-0" }, number.formatBookingNumber(this.booking.channel_booking_nbr))), index.h("p", { key: 'e4dd7edb83e57ebcdc35d44704ac02e049ed21f8', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
