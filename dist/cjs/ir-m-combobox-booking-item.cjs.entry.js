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
        return (index.h(index.Host, { key: '9d30161a11023617fda54095097c0126a76c7a46', class: "pe-1" }, index.h("img", { key: '7338761ce8210f8523cb183b6a6ca42e311c4227', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '3ffa48ded088809afcc804e7dd86670fb3fe4020' }, index.h("p", { key: '7ead5f11e6bca4caa0d4f47ce0a49856ec5180bc', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'fe2b7892b914dbab05d1393ae2748035caa71a5e', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '20099a28eb066da7dcdff73905ba32b377ca4620', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map