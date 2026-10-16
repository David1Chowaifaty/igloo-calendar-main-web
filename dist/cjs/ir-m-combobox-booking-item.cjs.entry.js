'use strict';

var index = require('./index-Bp205iz4.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '96a0f82914b12ede68a57dbb5c06189e017550d1', class: "pe-1" }, index.h("img", { key: '4b67ad4624fc8937caf33dc48471c2cc1e82f325', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '89e7af91bdf124c8c23d30c05b2bcae405b85778' }, index.h("p", { key: '5ea7ef3feaac32e7966a2c272fa5cb7a0685c867', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '230a4565ead16f8b77fc6baae0cd06029da544b8', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '054d0dd11c49f633e642db94b2acc0962dfcd088', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
