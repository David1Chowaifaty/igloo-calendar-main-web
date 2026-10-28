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
        return (index.h(index.Host, { key: 'e02b5817b35098467c03368c93d825400cae2634', class: "pe-1" }, index.h("img", { key: '878aca49dda5357a811c891e089f9f5092c519d1', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'e2c5a300e987b14b8496a3627798b8dc0b0f8eb7' }, index.h("p", { key: 'fe18c529cf6df940e198dded02caa33b2ebb704b', class: "p-0 m-0" }, number.formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && index.h("p", { key: 'f4a7700578354d8e0ba9bd490c6e2188f385195d', class: "small p-0 m-0" }, number.formatBookingNumber(this.booking.channel_booking_nbr))), index.h("p", { key: '7f6f80c4f2c5a8cc74b9dcd4eb10c8fa2d9a4fd5', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
