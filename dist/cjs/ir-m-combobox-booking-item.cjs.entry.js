'use strict';

var index = require('./index-P5Mginch.js');
var number = require('./number-BU1_BuJC.js');
require('./ir-date-BH2JQpbC.js');
require('./index-BLJXadKe.js');
require('./locales.store-v9LoZcAK.js');
require('./moment-CdViwxPQ.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-inline-end:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: 'b59365208a1c25bfc3a2bbae91cff3351222847f', class: "pe-1" }, index.h("img", { key: '564a63a45837c14b9778e9536386e606c1b747ab', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'daefd8128674b46db145e6dd4e17fef5963732b9' }, index.h("p", { key: '1b3453deff16f260b297ccf3f50ca2603955061a', class: "p-0 m-0" }, number.formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && index.h("p", { key: 'e10d04e3b16bbf0c594079b6dbdba7d4a4219a90', class: "small p-0 m-0" }, number.formatBookingNumber(this.booking.channel_booking_nbr))), index.h("p", { key: '4af5a42bc695cd9cadfb74561448d8e44edeef9f', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
