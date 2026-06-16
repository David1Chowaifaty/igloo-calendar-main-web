'use strict';

var index = require('./index-Cn9TxUnA.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '219bbfe4f22feada04843fd5cbe6b4d5160a19c3', class: "pe-1" }, index.h("img", { key: 'cb8dabb08c76ffd57f9eabf4a55e3ec64c50f570', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'af5427d237f47775221a8ec23d0e77308510473e' }, index.h("p", { key: '9596cb4696ccaf984a478ea3f7eb03992254dc13', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'c27a2539905c9b24c5f1a8eaf2953fcb19f3f52a', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'd92979847fcf5a1e43faaef78c247b3aed78faa7', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
