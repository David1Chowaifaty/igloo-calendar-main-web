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
        return (index.h(index.Host, { key: '52254654e9febf17cfe7db032315a511939ba48a', class: "pe-1" }, index.h("img", { key: 'fbb71dabc4b04904d3a991ef567a936d238c719d', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'e3980383e5497f71365c7b3b418867bc87eff9db' }, index.h("p", { key: 'd5365ef9e74d543f61406303a61a75168ec55367', class: "p-0 m-0" }, number.formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && index.h("p", { key: 'c9d33709a523649e139934fcb4f145cd531c7a25', class: "small p-0 m-0" }, number.formatBookingNumber(this.booking.channel_booking_nbr))), index.h("p", { key: '63708296cb048eaebdf5a383391fcddf63dd4c05', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
