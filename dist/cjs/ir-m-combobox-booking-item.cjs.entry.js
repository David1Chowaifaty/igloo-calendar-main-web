'use strict';

var index = require('./index-DYQrLNin.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: 'bd7d0eac1dff7d137e2fad0cfa21f2763f7978d2', class: "pe-1" }, index.h("img", { key: '956489c3e5a9bab6a0680cb3b3a7d1a73b1169d8', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '65b7f362e37243a869182ff0b476dc603eff8a1e' }, index.h("p", { key: '9a6585bf2629fd9e64889d9d1966446039d3e489', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '047cd7f17137d2c98ac36b4321c305b6fd9f2f92', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '0aa1ccbab00433cc7e51ba24ff2efc733ad522e1', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
