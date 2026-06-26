'use strict';

var index = require('./index-DYQrLNin.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '4c657bba31c1eba65a96a2b9c3f305e7e7696932', class: "pe-1" }, index.h("img", { key: '75708b24b8540a3e53eabff2b26f46c85c8f8466', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '4eb0a82749d4888c70b5ea3e0f6ee5e42b7e869a' }, index.h("p", { key: '302907dd6412ac8ede511f3c25875d0d91fc38fd', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'a3275b3905dff34239cb7007a5179dff11211f57', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'a33d44b61320c478501e7defc059553decfbd0ea', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
