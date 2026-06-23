'use strict';

var index = require('./index-DYQrLNin.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '951528b32d0d866eccc58c2c79f562bd5a34b956', class: "pe-1" }, index.h("img", { key: '71e059eb603039ce849f0a74e11071ab2e862c10', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'a7458b37f6fc13ed5d1765e55adc9df456ff2ba6' }, index.h("p", { key: '243e960c28b04e98a5c9df13fb95ee6753928d3f', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'a20a2c8453b1d44213181f2702b472bd60ed7a99', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'e260621b95074a35bda3d0d2e44a00ec8661ebe5', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
