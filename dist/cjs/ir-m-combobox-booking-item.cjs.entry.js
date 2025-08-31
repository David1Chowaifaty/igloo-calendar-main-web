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
        return (index.h(index.Host, { key: 'f07116196ef72ec56038e00ef2655439dfa4f818', class: "pe-1" }, index.h("img", { key: '26e65e4e569db147325fc2f38e3e3de49df1b63f', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '3e4b478ddf06b46a263612ab566e0c5bdefc9183' }, index.h("p", { key: 'af2a32cb46c81d3b623d346b4d465aafbc41cf0d', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '6f1cd68106cf65746d91d82e28d3237f7d44a56b', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'ca36a7e011ca8c77fea6b55e03091031e96168b4', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map