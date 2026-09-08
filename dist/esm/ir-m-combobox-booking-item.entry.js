import { r as registerInstance, h, H as Host } from './index-BYqrdgY9.js';
import { a as formatBookingNumber } from './number-5RTWeFsH.js';
import './ir-date-CLlijQNQ.js';
import './index-CimhgHoX.js';
import './locales.store-BfROgg7a.js';
import './language-observer-CHgzsZkY.js';
import './moment-Mki5YqAR.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-inline-end:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'ff8c263c884278cc08d3d4a16ecaacfce6591dfd', class: "pe-1" }, h("img", { key: 'e727e9342ba8c7aeb5c3fd5caa00e060be7bd1be', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '00657d95cc131fe1bab3fc0818e048d37cb8efd7' }, h("p", { key: 'bc7d00c172ec7f2bf062ddb48e328cea181a4092', class: "p-0 m-0" }, formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && h("p", { key: 'febce33d3a3ca0d2f94e1eb0eec5e0fe48a989b0', class: "small p-0 m-0" }, formatBookingNumber(this.booking.channel_booking_nbr))), h("p", { key: '96081b1ea2d3f4ba8f3b64b47d628d883f93cad0', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
