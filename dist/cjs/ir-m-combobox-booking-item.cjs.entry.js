'use strict';

var index = require('./index-DgHWBwDV.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '6120f5e3da100ec68aa0834cfceba09dd03dbd2f', class: "pe-1" }, index.h("img", { key: '770dcde8d7ad0f28eab7065e74d6a0affcf408f3', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'af824fdbc48272ca5f038e0542baa865961abee7' }, index.h("p", { key: '7aaa2ee07c3b30b23af8dd45ca6ec657c0421cc7', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'eb68127eca1dfe196514ea79c218cf1187ee7911', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '7a97d5242afd07c12f087e16e537ef26a0554b12', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
