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
        return (index.h(index.Host, { key: '9459395e7aae1d873395f44552664ae763284403', class: "pe-1" }, index.h("img", { key: 'a42b2b832081d0ea6664b8e95fba2b1d547a601b', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '37d455c2c9a6d38ba24415f8cdfae54f03509d73' }, index.h("p", { key: '32156a8d4badb73e4928d6535093115c942ddce7', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '672cdbdcc2f1e8396ab68172b071462ea650e864', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '064f9143a98bf1259c43ff864d047e1d3879e186', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map