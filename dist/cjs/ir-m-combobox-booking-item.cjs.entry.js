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
        return (index.h(index.Host, { key: 'd38d34b323f44f70c05696559cf392a87b9a31be', class: "pe-1" }, index.h("img", { key: 'df03a02cb5f99c7cd3e411967c084ee57ac7e5ac', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '749453fd49cce7fa7a51ef279dfb50a81662ad8c' }, index.h("p", { key: '6169f27252adcf701d286b10e77e7c8bf2266b14', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'fc470bf40b70d15230dacfdd4df49fb72f45edf0', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '0bcec9d491a8f5eede828d15e7620648fdff9a9f', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map