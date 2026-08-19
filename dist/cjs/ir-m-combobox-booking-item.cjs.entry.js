'use strict';

var index = require('./index-DgHWBwDV.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: 'c7aa55e3726a9ae0f92fa469760f43bf51690026', class: "pe-1" }, index.h("img", { key: '6d3128438cab04ad40344f1899e9494e634d66ae', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '476c06d944a903cfe0eff49841fd4feb3016abd6' }, index.h("p", { key: 'f8453630259a1d33c122a64902d952522c66cc15', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '7cc41c2815b3be2d9d59e559220b565c1887d447', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'a93114dea0dd60cafd00c038cba170134753dae7', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
