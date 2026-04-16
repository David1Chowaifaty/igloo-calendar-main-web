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
        return (index.h(index.Host, { key: 'bfc9111cfdc79b9ac33d6247712749aa5f364c80', class: "pe-1" }, index.h("img", { key: 'eedc546eaf288de4497115d3e2f14566e428198d', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '4c0bc8ffb16c4177a0414aec4a76ea886365492c' }, index.h("p", { key: '12a042e03ed50291741976bf7bffcff1dc470e79', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'f88698ef0c1a6f57e28d605ae027bc26ad4bb9cc', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '86d08114165fe7af6295b3f24b63003c7557a68f', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map