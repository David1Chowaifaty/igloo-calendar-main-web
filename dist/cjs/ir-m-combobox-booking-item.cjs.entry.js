'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '9fd326d6b73f303f25c127e8674257d90510f83a', class: "pe-1" }, index.h("img", { key: '8448b0585e57b1808db5bb9d89c1115f25920bab', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '5e8784001670479b07d35f043db32f40cadffe45' }, index.h("p", { key: '412aa5c6bfc928e2e1407a0996bc980b801196b0', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '5e0183030df89f7dceb0a4dc49d9101bea356303', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '5c09cf6391498d03da480fa43968abe332c5dc67', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map