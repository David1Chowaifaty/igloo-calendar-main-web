'use strict';

var index = require('./index-P5Mginch.js');
var number = require('./number-CTy3I_TP.js');
require('./ir-date-DUrZBFOV.js');
require('./index-BLJXadKe.js');
require('./locales.store-DIYxw5lk.js');
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
        return (index.h(index.Host, { key: 'ff8c263c884278cc08d3d4a16ecaacfce6591dfd', class: "pe-1" }, index.h("img", { key: 'e727e9342ba8c7aeb5c3fd5caa00e060be7bd1be', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '00657d95cc131fe1bab3fc0818e048d37cb8efd7' }, index.h("p", { key: 'bc7d00c172ec7f2bf062ddb48e328cea181a4092', class: "p-0 m-0" }, number.formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && index.h("p", { key: 'febce33d3a3ca0d2f94e1eb0eec5e0fe48a989b0', class: "small p-0 m-0" }, number.formatBookingNumber(this.booking.channel_booking_nbr))), index.h("p", { key: '96081b1ea2d3f4ba8f3b64b47d628d883f93cad0', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;
