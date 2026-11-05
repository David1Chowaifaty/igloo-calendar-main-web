'use strict';

var index = require('./index-IDeZZwEK.js');
var number = require('./number-xBpNWk3H.js');
require('./ir-date-CbkOKs2C.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./moment-CdViwxPQ.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-inline-end:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: 'edc8d64dc728aa27a4b266ab4f534b83d7d26696', class: "pe-1" }, index.h("img", { key: 'e694814d9f213ef9eace6cd889440dc7a5c490a3', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'cd2d9e659c185b5687fafb53b18d613db5f78272' }, index.h("p", { key: '196e994e8f8b7df8eb678b6d2bcab7f7edea15fe', class: "p-0 m-0" }, number.formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && index.h("p", { key: 'f42edc96c62fa2bc7bf6c293110e6526c59e9b9c', class: "small p-0 m-0" }, number.formatBookingNumber(this.booking.channel_booking_nbr))), index.h("p", { key: '160e4f7de224282ee3e8e58cb059ef5aa61fdecf', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
