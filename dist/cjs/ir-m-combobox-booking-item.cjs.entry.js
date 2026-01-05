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
        return (index.h(index.Host, { key: 'ded06660aafa7f3d863f18759b2329180ba7eba9', class: "pe-1" }, index.h("img", { key: '1a7c2143dd1da779b26416c4e1cfe44697698240', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '3c004c51c2131ca6997e2ced9900ce5112989a56' }, index.h("p", { key: '95891bd2ec368dd5e937126dbe3dd1258c823038', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'cd597ba9cec9f3d32d0bde2dec2465b9265901a0', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '0dab3b43c6d2a346ff81b7b63cdfa1570f542e5b', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map