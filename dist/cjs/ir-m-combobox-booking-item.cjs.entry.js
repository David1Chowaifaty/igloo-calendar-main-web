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
        return (index.h(index.Host, { key: '94494d471d6c1c12f84f07113fe063597af4ce16', class: "pe-1" }, index.h("img", { key: '617822c14f94ef882a5413ec116a4c23fdf03047', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'd6426f64851dc95f3b00ae5415a154049baa214e' }, index.h("p", { key: 'f051da38d95d8dd0ef5c554a984c43c217f491ab', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'b0995a2b3d65070f7f4173cf52bb6102da3e0292', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '02bb637744cadca8ced1434f1d0e26edc9b4a2c1', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map