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
        return (index.h(index.Host, { key: '26962866a769351bf3957087f20174729dd335f4', class: "pe-1" }, index.h("img", { key: '17e076196ed30883dec580cf372d1cebd7c25bee', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '9dfb7f5541eeab56d78ee48de369e4262bb59c4d' }, index.h("p", { key: '4feaeb877cba3a8e9569cb0a76894b1b85d185d5', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'a629e37c9cbb584f84f1f6af1ce2bd8b91f58d51', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'eb174bf2a3ec29d2f37080c3da3b8465025112ce', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map