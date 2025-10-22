'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7bf70516ab6e00205b17391c551a2b3a0edcbe7b', class: "pe-1" }, index.h("img", { key: 'ea534ccb2094ae3734550935ebfbeee16ede4c74', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'e4fb546562cc70c363704a2cc5753d8d0bd68851' }, index.h("p", { key: 'bbfff029589c802f2e6dbdc17dcdba34dba04090', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '672d6642df75014b977647265b5dc561c86e19df', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '2452c6f760b6c3cf8a256b884f6e4f04fb5e55ea', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map