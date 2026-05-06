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
        return (index.h(index.Host, { key: 'e4f9fb3255ccc09f035532fd19be794e309567ed', class: "pe-1" }, index.h("img", { key: 'a91197076ea864cb938d03bc467dd04f8447903e', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '6279499a15c52e45c36c05a26fdd6889abb30914' }, index.h("p", { key: '680b515b838f0ab7d190f30ee03ac89e5de46f9c', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'd5c68b21850263aa6b355b7dd07119f5a6ad0acc', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'f01c95972adf135851e834d587f514b99e688ca7', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map