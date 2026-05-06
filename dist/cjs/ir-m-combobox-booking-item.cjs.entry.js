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
        return (index.h(index.Host, { key: '5f644e5f9242faa27a740a4d2aeabb09fceb0223', class: "pe-1" }, index.h("img", { key: 'eab7f1e156482bf64ede9e1b9719ba14f9b559a5', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'f5167bc635b686759fb3c33ada3dc50961c676c8' }, index.h("p", { key: '6ff5171f2007734d75e26f6deff14f865b740203', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '7be45802e50a8bb6126449f76d26d4db4a2ab4da', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '8db98064eaf838ff2bdb44d49d8b91de7d59b802', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map