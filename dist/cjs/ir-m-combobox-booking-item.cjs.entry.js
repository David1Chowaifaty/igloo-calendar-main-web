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
        return (index.h(index.Host, { key: '86459ecb9a236973ad8ed08d73efa010c538ea13', class: "pe-1" }, index.h("img", { key: '9a79003087c4cdba44b4e5fac91e73ce63e36bed', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'bed615743e15903e09af3973470e0854a56a5513' }, index.h("p", { key: 'cccfcd6a4f8c9dce226281a38ea71a2219471bde', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '728b93ef8ce5ac96f09f3d4c14a40be2b7490ffc', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '690ee0936f13b2c1da531fc8e644ab4dddc946b8', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map