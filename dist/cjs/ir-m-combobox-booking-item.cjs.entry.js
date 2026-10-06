'use strict';

var index = require('./index-CQkpA5n3.js');
var number = require('./number-V_ghj2hm.js');
require('./ir-date-SZW0yc7z.js');
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
        return (index.h(index.Host, { key: '1fca7d72fc73f6731b8dcabf063b807cb5d2ed9a', class: "pe-1" }, index.h("img", { key: '9b2331df9f59724250e39d3eff84e007e97a8202', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'f6f471d5f7955680c809efb80ad121bde3396d13' }, index.h("p", { key: '0faca436147ce74f99c1b39ac5ddd7cb82262514', class: "p-0 m-0" }, number.formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && index.h("p", { key: '611dde7211b100ca1f699761be2375650b466164', class: "small p-0 m-0" }, number.formatBookingNumber(this.booking.channel_booking_nbr))), index.h("p", { key: 'c11968566dc1c9f15d0415b111d3cd7ae7e78e2f', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
