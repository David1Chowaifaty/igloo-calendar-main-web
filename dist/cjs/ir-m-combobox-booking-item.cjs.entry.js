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
        return (index.h(index.Host, { key: '0cc4e3109d57c90467ed62d7dc02c74a3a7db143', class: "pe-1" }, index.h("img", { key: '11cb7b1716f10dde3ba4f4eded049fd1d4ae5c59', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'd8c080ff06d80efeb1c5e9c87ef102a8afac4311' }, index.h("p", { key: '12300ff9083709435ffa6538f96cb2bc26238ef9', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'a538be51b2c6104fa99e9a2ba8e7374f9ff8eb84', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'd285de58955efe5370a766cab8b828329e272ff7', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map