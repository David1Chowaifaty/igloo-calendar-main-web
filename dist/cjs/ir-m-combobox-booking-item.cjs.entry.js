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
        return (index.h(index.Host, { key: 'ffdaab691dd3f732f180a49c4cd88c839fec0053', class: "pe-1" }, index.h("img", { key: '7315dd402a61dabd88bf2df82d5184f054c8eb0c', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '1821188a731eb4bdf35b30e20d48d4793a1c544a' }, index.h("p", { key: 'b82b0ab4bdc621de0f6215c885e95464c12fadfd', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '70865486a0e351f645fae349bb0ca8ca0170de6a', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '5a0d43204d05f607567bd2806533e22db79e43b6', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map