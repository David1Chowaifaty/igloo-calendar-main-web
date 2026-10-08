import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';
import { a as formatBookingNumber } from './number-1PczWhnt.js';
import './ir-date-CASx9LWM.js';
import './locale-scope-CapRuPkM.js';
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
        return (h(Host, { key: '195a4f87c6cb1ba781357557855214c00aca213a', class: "pe-1" }, h("img", { key: 'f26b0e3cf619f7d8e3e09ebf8219e6315a0a571a', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '24dbbb052e305d12596e4233409c034affe6e840' }, h("p", { key: 'c7500609fee2ec7f5cc9d914833a3fde7e6280b5', class: "p-0 m-0" }, formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && h("p", { key: '1d7a949980678f90718f3aabbad96910918047dd', class: "small p-0 m-0" }, formatBookingNumber(this.booking.channel_booking_nbr))), h("p", { key: '7f233e6617f40f66e510ec3c35064b978b1045d2', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
