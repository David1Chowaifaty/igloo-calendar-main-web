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
        return (index.h(index.Host, { key: '6e8b188e55d5604f82b8d1955a9e6f4c71e3ed4d', class: "pe-1" }, index.h("img", { key: '2d26edb3e5a3b48a3fea5160855457ab02e75ee5', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '71779ffd32dec54fd81b91fc6f96fb027815a6a7' }, index.h("p", { key: 'c543266a29fd5e2ceff49271b750e4feeaa9299b', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'f7e983a9c0808fd1e92b10375ac472c78e265253', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '40eecced41050fca5ec362845bc7b1c75c890f5c', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map