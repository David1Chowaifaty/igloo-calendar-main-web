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
        return (index.h(index.Host, { key: '0fcd6a6d7aa2c62d648a03902fc95ea186d07372', class: "pe-1" }, index.h("img", { key: 'f7dbe87c0d6c6502d1da3f75982e15db028b72ab', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '9f6d64f13d7189c696ab6cdd0e8716455a225d38' }, index.h("p", { key: '8655e7c794750a60319fff4129aa3a0829de1df2', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'feadb3c815483b1a8b3bbbfe596dc07b4ddd0890', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '71f175c40aadc2dcfc0f27ead616854c54e3a6ad', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map