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
        return (index.h(index.Host, { key: 'c5b8ad121757797e00fc7a6b4e4b333103d4905c', class: "pe-1" }, index.h("img", { key: '2397e08199b92ea29e865195502dd5fc53616ba5', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '9a096a496c21479603ea1123ceec533d15906017' }, index.h("p", { key: 'abe7e18ee679e41e46de6782aca0d41a2193719a', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '98f626df3dd4bcbafe619d5f8ed5895a775b07cb', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '8d5abba8bc30a35caaf77f55c4ade90ac5d96e84', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map