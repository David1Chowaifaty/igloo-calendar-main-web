'use strict';

var index = require('./index-CJ0kc5p1.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '9ce09380ab6453cbedfb7e66d97ec378fbd68a01', class: "pe-1" }, index.h("img", { key: '258aa4d21ed8c7c2b9134a049f00374acebd1287', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'f7c0ecab0c8d437413293ff9845a4a199d73c406' }, index.h("p", { key: 'd9fb02dd7641c5650ba6ced05b6d16119558af51', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'c5f4cc1f7ee1a56b31267fae8314dcea7e95b690', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'aa5d8dd15df3ae30b1dfc5d6f9807f0bb42a3c28', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
