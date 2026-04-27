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
        return (index.h(index.Host, { key: '322390de18d14850835a4dec91b790ff7590ced9', class: "pe-1" }, index.h("img", { key: 'cd9775747657e16a75f73776deae431bd3d2ae19', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'b3953b39d0f1766db147a869d6ce492d2180ea2e' }, index.h("p", { key: 'd79bb4ea0fe878a018d5b5ad5eb65fd959c75487', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'd2bad4309ed180a29740cd4f3430f79ae2eef19a', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '09d1fe34c7b7de34d4fa6ff3e0555b2475f840f1', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map