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
        return (index.h(index.Host, { key: '9f155cb15dbe5bf282cd08cf798a4646e5edbef9', class: "pe-1" }, index.h("img", { key: 'aa3a8bd1748932bf8e35e3991614e314efb12e2c', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'e9fd8c786bcc93c5aac9d67ec3c0204fb918de0a' }, index.h("p", { key: 'ae0262250a21235ff1b292c81beae2ee724461bd', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'd76860822faad93da0e296798e9057bf1a3ef12f', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '1c4129ba3182b91719306491d2dadc0613403922', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map