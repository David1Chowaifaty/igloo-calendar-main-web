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
        return (index.h(index.Host, { key: '9c943bbd77b279bd41f902d881c82d1e05ddb3ae', class: "pe-1" }, index.h("img", { key: '5c08a4e6751eaccdbaa2d253428f268081b1513d', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '937bcec0ce7e3089ba0033dedbe5571748c4abdf' }, index.h("p", { key: '857fe3a4024c6bdfc737156d1b4ec596a5f990e8', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '37093c96d4f20361286cc2653fb45335c0fd1c91', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '4ce358cf09af4737528ab5f9ddc58d3a27d181b7', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map