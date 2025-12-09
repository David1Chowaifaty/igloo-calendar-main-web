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
        return (index.h(index.Host, { key: 'da049c5f08813d2dd5439946ab954222265cd91b', class: "pe-1" }, index.h("img", { key: 'eaf14c7df9e27815f9f954b3c71edc20b6e50f59', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '1fd00f97244a16d77e07ec4896194031fa4458ed' }, index.h("p", { key: '90be7e2d4bff8ce030ba1ec1f0b47936fa364cd4', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '35120381abc98039716591f77a7fea631ea57da6', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'd08e38d7f926e8a320c97b23dbdcefe196816575', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map