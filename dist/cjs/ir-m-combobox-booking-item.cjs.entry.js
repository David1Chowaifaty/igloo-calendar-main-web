'use strict';

var index = require('./index-DYQrLNin.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '869a78532475f242bd2408bdb3839582e1ac0a11', class: "pe-1" }, index.h("img", { key: 'c563a23c0bb6b9b4486a7ea14f1e779c8dfc0fd2', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '246611efda45d71057491ae0f4f3de00ff25be8e' }, index.h("p", { key: '8c7dec06147da96ccb5b88ee19b1db7559819c9b', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '2d081e0c34d4d1f95c092c6d845a82d59c06aa78', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '0b4712565cb2d86b37910d71817b7c89d8a065b9', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
