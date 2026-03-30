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
        return (index.h(index.Host, { key: '1041c17a769502d4920ea11ce32afa95351c8507', class: "pe-1" }, index.h("img", { key: 'c9ec769cb2f67a0dc11e2471f0536709f8e69777', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '083a0050f2356fe381a2e26f3e4b71e88c1bbdf5' }, index.h("p", { key: 'f330dd7df3f76daf95b38367c218bf850860081a', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '0c7c00069a34a00826b30c8f28729f86ca3821e9', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'f0ffd3107e79c004d993b0b5d5201de0b64cdc22', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map