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
        return (index.h(index.Host, { key: '3b55fb8e48fb3f59cfe77f954f035d2068ed2328', class: "pe-1" }, index.h("img", { key: 'b2c87871358b04f3a44c758bcfa8007b9f9d69e7', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '7c3baee093a5b0ea886a1d1f51fdd54d1a83b7a2' }, index.h("p", { key: 'd39c4ce832e576d7a09e24db5128a0cddaa875de', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '6644fabb9032c02585889bce2701c16a77acee1d', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'cf6d6a7434775cf267687e9b06cd592039e3ee2c', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map