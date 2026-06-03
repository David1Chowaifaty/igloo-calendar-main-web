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
        return (index.h(index.Host, { key: '74cf4373ee18fa51a50eec7a96e0f7334ffb10f5', class: "pe-1" }, index.h("img", { key: '874d196b9173b5d5529162a588c93af234a0101d', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '5bbab028e58eedf3d179e91cc6a411b153d2288f' }, index.h("p", { key: '7897c761068d34f849b00bfbdc1d2bedffa9d6e9', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '6882cda1b827ad8277eb1dfa0e1659d355d4095c', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'b88cab933b36c1277127655b10e8dfa204c364f0', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map