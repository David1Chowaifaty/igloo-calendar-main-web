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
        return (index.h(index.Host, { key: '185c149f5984a93dbdfc3f467675f9f913b11114', class: "pe-1" }, index.h("img", { key: 'c2b1bec6286db53e84a2008b4b798a1fff3234f1', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '6b89dd40aa700413595c2015a6ffe0b661a57b28' }, index.h("p", { key: '087ab0f93d48c70752b2bad377291ae3af675f3e', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '2bb4f74b3a5baffd57892c87ea5ca711acf48ffb', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'a897146bff424f2dc16fee906ace7b4a32f38428', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map