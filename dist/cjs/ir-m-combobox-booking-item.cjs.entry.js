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
        return (index.h(index.Host, { key: 'f25c745cd05bcac2a01b247db91ea1772c68cc2a', class: "pe-1" }, index.h("img", { key: 'de6321ffe3c3a2ff73947eeabe2be26527e97613', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '0d261e5b21e51548276227823c9b84d9b3c96bab' }, index.h("p", { key: 'af192871f9a08127f0b0c86ec55a02ef3112501a', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'e8247d8fcb50ac743d0f730f93aaf219ea3b1234', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '58f488c5dd0564504fb2230475c4f3da9579e852', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map