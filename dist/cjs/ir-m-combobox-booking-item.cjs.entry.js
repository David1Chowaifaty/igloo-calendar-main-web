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
        return (index.h(index.Host, { key: 'b9639bde0e3670c08a5847f25b524afd09fa4746', class: "pe-1" }, index.h("img", { key: 'ac80f41839be8671086cefa10910dac2f6754b42', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'd940b5b8780ce46b2f438619cc7b227abb3ff101' }, index.h("p", { key: 'a7d282aef7ec751f0677abb589fbb117958f0429', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '681ac6dd498f71d03466c55fdf6fd0fd34e437d5', class: "small p-0 m-0" }, this.booking.channel_booking_nbr), index.h("p", { key: '5adaae4ee172e30156911151531dbc347a3e4968', class: "small p-0 m-0 text-muted" }, "BDC-", this.booking.booking_nbr)), index.h("p", { key: '9ad04e3838b5dbbc0d41d4c155dac6eba5140778', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map