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
        return (index.h(index.Host, { key: '981697ff8df57a2d48b3b9c075520c3d8c5b186e', class: "pe-1" }, index.h("img", { key: 'fa7c1d2e5b07d90e6889708bc37da723d3297ccf', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '06c11d69bbcefc3adff0a40438ad2a56f0d997ac' }, index.h("p", { key: '7daf3f6981a9298d0eaa3ced1c35f971c4cf0dc5', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'dd76acbea755875fb2cf325f2c8f7479d71ca8a4', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '842b2095191775c3d4a98860d9aa20a06c352c1e', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map