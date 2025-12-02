'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: '72045affcc5cd10ae85d3c1c1ac55ba458cda5f4', class: "pe-1" }, index.h("img", { key: '1b0f995accc2269b53f31cf65b0820e05d43c5d0', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '9ecf1ac3e23ea480c18e05573550e6b31d859265' }, index.h("p", { key: '243c6f58b3b8db8fa81166aac83a6e59c8b0362a', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'a09a4419cc36c3c14bbe64b0a5c242e2b50a9edf', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '962ce451295e3b58b9aa00a126686c0775b09a24', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map