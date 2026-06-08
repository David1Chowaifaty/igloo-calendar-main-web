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
        return (index.h(index.Host, { key: 'd25f1ce6ef9a090382a6557ae5a368a01d967871', class: "pe-1" }, index.h("img", { key: '2e8d1f8d0a194bfa61417dfec11886e31e2ffd8e', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '091f05151ce675d4f3f356d5eeb4c105a5787f18' }, index.h("p", { key: 'cf94ffc1d9914f25238e7dc01004343c1cda7262', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '8fc7a906ac04fcbefa943fe1e85ce8b759aa6509', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '65e27d9c5a78446d2c8c67470b40658f139e028b', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map