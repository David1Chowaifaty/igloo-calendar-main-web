'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '7ebf6680f03bb389a3b2549c5acf55dcfada18c5', class: "pe-1" }, index.h("img", { key: '77c62c932678f77978c5db3a94f8d2a848750f42', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '1a66adabdc9ff549dd8790569672dd6bca5d55e4' }, index.h("p", { key: '6e1c5e0cff21e97210234ea8cd37cbeffe8c4943', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '789c3cc79f503127019d90f9c0b9afc3d1453bb4', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '4fb4159e0bbcbfd7a94506ddb4dcfa8e4f33387a', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map