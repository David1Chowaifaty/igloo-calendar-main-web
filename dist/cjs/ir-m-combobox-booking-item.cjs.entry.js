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
        return (index.h(index.Host, { key: 'c2e243653402d0be1a13ea9f244c592d16247ad1', class: "pe-1" }, index.h("img", { key: '218b6ca218758c0f6fe924e5ab1b1de946395564', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '8c14857cf8c2f472f364a45b5df46b3fe2e16d5b' }, index.h("p", { key: '16dd030ba4b5a57f2f494270d361592344d1db6e', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '0a575791415ded3c1ba07081e9cd68fc59775bc8', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '46edfaf828914cf016565c6d69809b3a7fdb6e8e', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map