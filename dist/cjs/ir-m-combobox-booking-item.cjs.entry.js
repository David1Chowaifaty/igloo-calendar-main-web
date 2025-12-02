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
        return (index.h(index.Host, { key: '818708da3fdc9f3a5d6c9e71bed70badd5b20c7a', class: "pe-1" }, index.h("img", { key: '70d0c70f5b278ef512b7d3a1f219b7ff40a71f5a', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '7cb43042522607361e0566b4488929584537c2a2' }, index.h("p", { key: '16533db2926e5eb3546ca7d6ae1b581a4e1ff128', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '8a13904c600aadbcb9b2661396bb87d55ae42071', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'b3124c8eb4f20007a396d9b316b77bd28d969990', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map