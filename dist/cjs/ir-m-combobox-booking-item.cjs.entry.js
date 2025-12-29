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
        return (index.h(index.Host, { key: 'b3954c386ac15004b6a7898ca9944aeb0d557bdc', class: "pe-1" }, index.h("img", { key: '73f5c569670195e3ac2eb76086f6baf85528d2b5', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '86fca23a53190cd91f63b981fd19e94391e1fff8' }, index.h("p", { key: '15308cfefd6f3fe9c460fa47aaea00cde1f9c4b5', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '0ae3192b78c21902d456119c03f9cdf4f0adc7f9', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '918c5e40002dfa3369adbef9926623634d230ac6', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map