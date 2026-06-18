'use strict';

var index = require('./index-CJ0kc5p1.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '01c39d98dd17bb6cc502d987bfb3ccfbd3d8e9e9', class: "pe-1" }, index.h("img", { key: '0cb676dd984eca85344eae265e23eb42450ddeec', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '7bbeadaec20cbf2796471de4c8f8827478332650' }, index.h("p", { key: 'a227b5318492f8a75ba270d2455eb971e9ca0cfc', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'f7473215adc4a76c020b5ff3bb828fc9066ff448', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '99920595659d378868222b348e726d9044f47021', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
