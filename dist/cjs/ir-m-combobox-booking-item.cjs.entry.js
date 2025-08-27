'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '39e236c7dd9e3670ef5485aea15491a851fc9df6', class: "pe-1" }, index.h("img", { key: '0e4d48cd787594d5ef8f616a8efd59da75e5cd2d', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '3cb0ba68f149f0d5f45e53bf3a989c36b1051148' }, index.h("p", { key: '9846b087d50c229f296837574bb9cbb013ce9664', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '9ab2ed2c0d9f863d17c2b9e202b402776d81f957', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'f9a33465ca36338b23971a3d931814fa2adea0d6', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map