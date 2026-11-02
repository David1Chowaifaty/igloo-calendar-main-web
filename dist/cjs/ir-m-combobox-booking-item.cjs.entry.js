'use strict';

var index = require('./index-IDeZZwEK.js');
var number = require('./number-xBpNWk3H.js');
require('./ir-date-CbkOKs2C.js');
require('./locale-scope-Cch-vf1R.js');
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
        return (index.h(index.Host, { key: '6c1732f14e6d0a5836fdbc4b38bc471e0f436ffa', class: "pe-1" }, index.h("img", { key: 'bc02b6d8d1729f7f347f82a501db245e33c83275', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'aee19e93f9cfb7f1f360e6d41e5e96a5cac9e15d' }, index.h("p", { key: '78e93877a107e211460b72df893293f0914ba8d3', class: "p-0 m-0" }, number.formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && index.h("p", { key: '447d412d3aba39f3cfe4b6d7a7d55fcd8539688a', class: "small p-0 m-0" }, number.formatBookingNumber(this.booking.channel_booking_nbr))), index.h("p", { key: '08555349fb383470c7d0339b456a348dae81f349', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
