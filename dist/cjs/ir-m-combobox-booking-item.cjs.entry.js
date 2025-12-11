'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: 'd79e0a3ac21d64c1f06a00ae2ae62b0f28aea345', class: "pe-1" }, index.h("img", { key: '88117a3c5a7cfb0938cf626f72c0ea23924b4b0b', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'ffedd6e05c26aa95204a82bfc681da916254b09f' }, index.h("p", { key: 'a9ea9349ef5abb032c65179c5b24de7e0eb15359', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '6a510b6641c57321592c73a3a08d041ba3ea2d7e', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '66f5416f45967b9f59135f3cfe9cc89fe1c66826', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map