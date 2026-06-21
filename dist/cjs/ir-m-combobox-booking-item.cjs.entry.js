'use strict';

var index = require('./index-DYQrLNin.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '381c6d97e3e903a93b5bbe92636ff1037530582f', class: "pe-1" }, index.h("img", { key: '18c571887b0ee42de6edc723c9ac8f4b3f280722', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '1cda19cc03bdf0a403b5719d6679985195a2c86c' }, index.h("p", { key: '55d4344108ad6acc09acb150e319cce4dc28ba93', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '104ec866a8c2aa3d660132c10df21b07728d32ed', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '48e3606153dea89105e76f8bdde0d67239e4cd2b', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
