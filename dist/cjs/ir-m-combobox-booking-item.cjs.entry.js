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
        return (index.h(index.Host, { key: '51b947d64bc8765f634c289d88e5422fd53c9206', class: "pe-1" }, index.h("img", { key: 'ebaf0fd286f2b1caf298dc8ecd71a66526f00cbd', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '631955c2db0ac948ead6b6029514c84fc8058614' }, index.h("p", { key: 'a9cc2f36b2ded70d71dcb5c50dc5615210b656e4', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '522869d3be16b74ab46784736ce16a873b03fd56', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '5feeec5cd7b3a9f653a678396b512f164abb9bc0', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map