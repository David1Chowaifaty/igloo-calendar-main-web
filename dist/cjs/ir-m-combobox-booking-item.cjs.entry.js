'use strict';

var index = require('./index-DYQrLNin.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: 'a6a4ec4ae239ccca96ffe30b2034184fcedb9315', class: "pe-1" }, index.h("img", { key: '4ae616ae5722f6c6a88e9fa6451c378352e39ea9', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '5b6cde1ea5661bb31861367c564660c9df5205a8' }, index.h("p", { key: '14f8b8e4ffe1487d28a2357d30e1f503ec9ff445', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '70e05504315c6f87050e3169c478b3da4d829792', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'bda033e2e4837ba457a43b4f23d022a4bb3e5fd1', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
