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
        return (index.h(index.Host, { key: '5a80ede181a38d4fe6822b172f4a1df6c33847c5', class: "pe-1" }, index.h("img", { key: 'd410d7d451b5d1094770beb8f970d1ae4c2bc5f5', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '03e1029e9896946bf1fd8ff1ce93f6307c4400ee' }, index.h("p", { key: 'b85a3b8427edbae079b04a9ecff7c2033b4cc136', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '0e33dbae660c1e56f4d4bfcb39f5c6fc6ee0034b', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'ae9159003ae4ce1da277e9aeb712d18a2e6f9e8e', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map