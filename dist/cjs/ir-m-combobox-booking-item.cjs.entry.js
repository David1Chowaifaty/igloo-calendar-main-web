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
        return (index.h(index.Host, { key: '4bb660beff06bc5f2f7e467378142b7b133b469c', class: "pe-1" }, index.h("img", { key: 'abd74c380118cadee1c4683a18d257721b786083', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'e347ab018a649ad36eb2e5721d4eea2e171ac9bd' }, index.h("p", { key: '69ae3b34964364584cc9e24ed40063eb14025a63', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'a58303d5866fe49d51df9a24d368391a4b7a0292', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '54ba1bd5b86e9f9e8ccb7a0032a72061c606189c', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map