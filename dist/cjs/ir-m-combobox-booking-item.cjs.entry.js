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
        return (index.h(index.Host, { key: '46e053baccd6d6241c5c07e4ffb7e59de3427fa2', class: "pe-1" }, index.h("img", { key: 'd83bd03b8a83b2a11a84548d4e70b6f36aaec215', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '61b5db1c9334351faf7f66e2aa3ef2aa7534c86b' }, index.h("p", { key: '4d1c94653618d90ed77bb77e64acb03a67efc314', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'ecb96df093105b2d756a1a9d5db3554d45f5daf9', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '333d97c5993fbe4b48b5d0676389687c92dfc4f9', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map