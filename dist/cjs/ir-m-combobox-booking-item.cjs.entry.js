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
        return (index.h(index.Host, { key: 'e979bf553ccfb05e8637cca223f73953a2368ffe', class: "pe-1" }, index.h("img", { key: '4ae9de29f915e80a83ba967488ab70c1eef5c786', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '9c50e4d5229d007595a562582d27afb39ebca4c2' }, index.h("p", { key: '2454bea207915433831306ecacc2e1c622a92cbf', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'e649481bfcc28422a4c406684a2220892f413c48', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'c51607bce07b87d1063b9303954f3c62a48b9bbd', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map