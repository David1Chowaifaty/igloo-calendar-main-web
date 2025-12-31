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
        return (index.h(index.Host, { key: 'b578b9930d71a6307a7a4c075d8633724aba43e5', class: "pe-1" }, index.h("img", { key: '7919de44003054bc0b4f9de4123844bf78529f2c', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '0d0a20b26ada6061c73a2f73fdf09796c3fcdc7a' }, index.h("p", { key: 'd6d6271e2d9ce7ce6effbe3477dd2a06e8dac908', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '15cd56e1d63e6a09ebdc3c68e2ae8c7e6793f17d', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'd6362d9342f95af85a9d9f46434bd6d99cc36ded', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map