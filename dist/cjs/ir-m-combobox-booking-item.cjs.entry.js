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
        return (index.h(index.Host, { key: 'dd5ee85ce658b5e6ab62b3e533fa10c3bcc9fbea', class: "pe-1" }, index.h("img", { key: '0d9630db9cdee83ae9a1f7566f2163370f4a46d9', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'd78fc818c05a70f7c7c20dca236bbf178b949017' }, index.h("p", { key: '248e88a7b251357a68d7f59b2779a88a0671ff6f', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '2f6d5f05c7565344c85c6cfbe4f1ee22e6c619a3', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '7598848bfc6a9e21944a3e150b38491e8341368c', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map