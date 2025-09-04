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
        return (index.h(index.Host, { key: 'ff6aa7675aa5777da38bff202bebc07203d21c2f', class: "pe-1" }, index.h("img", { key: 'a47813d72fe63eb5ec67a04ee94e1dd608951715', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'f3f8ab4e0c2f9a7c7a455ce2822efc9a468cec68' }, index.h("p", { key: 'f9d9b13080ac2e555f00f45d023fb57aad29b03a', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '2ddb5b31268240547135cf3e61aa28337ea0f4aa', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'b17fdf98aff9be7250183177e0d3d5c0000908df', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map