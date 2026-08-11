'use strict';

var index = require('./index-CJa_TWt0.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: 'a10c93b00895ece1cb56ed659c458eeca8e3ab54', class: "pe-1" }, index.h("img", { key: '42d65a0c5565f5387f0419e6002044d030d85afb', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'f708d032f5846c1cb26013a2b8639576d67567e5' }, index.h("p", { key: 'a17cfed317faf391f7a8512786c85d8195c933aa', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '5933df983b9741ea56b1ea96ea2fcdc403ce2279', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '9f765c9fe697f970b3609c865198daa93b390a5b', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
