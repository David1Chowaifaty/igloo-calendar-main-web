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
        return (index.h(index.Host, { key: 'a1a9b0c991b6781f41e7052cdf016a2312448c88', class: "pe-1" }, index.h("img", { key: 'b5e5b1be1f1086d88f98e37a98b65492bbcac735', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'fdc0620ba26bf54467e6209834f3884b0d1d0b85' }, index.h("p", { key: '58c2b42a293a26e55caf02812ecf84632f53086e', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '01d02c6e0284b5b484f0ff73f9d18a04967076bd', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'f39a4ccc946a3cac1d2790b1a1afd980ab315408', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map