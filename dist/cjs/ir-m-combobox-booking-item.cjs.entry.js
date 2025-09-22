'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0b0eeaff56e509fc8f3a6cdcf7711cff552d7256', class: "pe-1" }, index.h("img", { key: '2992243fc097fb8a8391aa2be36631814a362341', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'e0f521245b6a908734df67831a4d26fbc65cbc4c' }, index.h("p", { key: '1abad0dbca3faa53861d0e0715cdb33d339194ed', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'a61c463217ae8852f76ea0fdd186ecc112796c57', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '8c43b849c4127605c90b0e7110fb2de970b5fb52', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map