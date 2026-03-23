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
        return (index.h(index.Host, { key: '756ce665127d9e05f11f19001d7aa3c724106d7c', class: "pe-1" }, index.h("img", { key: 'feb0e37d7f1b62ad73520525cc9499c5abc173b5', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'f32878dbd8b7a2fc29d3b037d4f987234acfa242' }, index.h("p", { key: '817bbb682659f7e82c344a2889456116a4951789', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '2afe1fc7be2947ba57172a21eef00a59b5067ad5', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '18a02063f3ccd014bcc6988abba6990b9a79d519', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map