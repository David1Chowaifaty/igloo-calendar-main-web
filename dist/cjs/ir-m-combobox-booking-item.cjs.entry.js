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
        return (index.h(index.Host, { key: 'deb20fa734b5d8640792c1d2707b0b3fb479b923', class: "pe-1" }, index.h("img", { key: '648ad989c7091df6380e9032ff1de6ba85f9cf82', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'ca45df2e9a3ed9d8003e4c7d6eb42a74918f8ed2' }, index.h("p", { key: '884301a0bf4189242101917015667f2898be3235', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '0d548ccbbb60c4b87261da58b810c2869876a646', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '929446f2a78b78aa6d2bebc3df2864265bb8cb6e', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map