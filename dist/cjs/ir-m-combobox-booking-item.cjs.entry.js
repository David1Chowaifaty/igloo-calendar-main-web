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
        return (index.h(index.Host, { key: 'eb2436c6d3791029d1e09ecac38e99c495166610', class: "pe-1" }, index.h("img", { key: '339c62b4d87819e92bc55e7441324d02ba4eda06', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '390dc2ae15a4e263d926713f429138c99c6b9587' }, index.h("p", { key: '1cfb0cd3c0d7ac7722ab6b1fc9713625afe85aaa', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '35989b05e8bb9ee2fd8bf7c0c685f94251b23af3', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '906030039eb2ce2460c5d16f0a09bc2d862979d9', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map