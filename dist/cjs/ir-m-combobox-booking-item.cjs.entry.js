'use strict';

var index = require('./index-DYQrLNin.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '48029d518537269ffd5b4cc2bff0f1e2f3497276', class: "pe-1" }, index.h("img", { key: '8767b968e1cc66559f075fe97a2cdd7c2d53db56', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'c1b8db194b5cc1512285d2ef0a9e8e64d465953f' }, index.h("p", { key: '391bd2ab3ca45b420fa46d49d364f3d3459ff5db', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '1fb6488ce0bbc17fc2b6c413dc608b2bd4fc54a8', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '4b1b2f04ba6096a51defed0e2dcea77d08110198', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
