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
        return (index.h(index.Host, { key: 'b429ff994c919dd7971fc4b2ccc1c8e2e212af06', class: "pe-1" }, index.h("img", { key: 'c6ccc9fe931c957c8cfe3e88475c6cd1838a61ab', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '7f40a50d7a14f4a33cd5c397407ffffc86b154e8' }, index.h("p", { key: 'ce6b3cc29c9bb66b2cd72d76d20f72d61dec1c7b', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '57110995a90a7d91630f5b1982433639ebbfdb89', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'b00e6599fbf95b90bfb685f92453b256a98a10c0', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map