'use strict';

var index = require('./index-Du1V06mp.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '0a9d62bd5d1eb488fbc538956ca2b425943b33b3', class: "pe-1" }, index.h("img", { key: 'f852c94debb0ed937860525863bb3cc939009e3c', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '2fb9e88f71b333e3a0452bd400ed8e8b9004d5b3' }, index.h("p", { key: '342db3993590518fb58234b13d3bec68afd8b670', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '7798a2589d9d51871398dc793da8058b6bcded72', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '81e98d75c1f4454b2ea52e6a003b71737c488a68', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
