'use strict';

var index = require('./index-CJ0kc5p1.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '0aa3e899daf7db2ef8348ec23cdfffeb53447b3f', class: "pe-1" }, index.h("img", { key: '975e9d09d05bcf540f4cd0895a10125c9ae87020', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'ca4799b489ef951cb760b1f6f73422517ecb3803' }, index.h("p", { key: 'd84ab91cc19620b84dc37db389526759526ae528', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '61d9772380c2f6e5fa5259d8adedfdee4bd2058f', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'f5ec8ca2e59e60f7263d0cf7e48769285174a048', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
