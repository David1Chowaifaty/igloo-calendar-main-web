import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';
import { a as formatBookingNumber } from './number-D2n6n8dr.js';
import './ir-date-NNCOayR_.js';
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
        return (h(Host, { key: 'ddf718887710bffb9d7012d81850642def526ec9', class: "pe-1" }, h("img", { key: 'a9ff70601b8f07c6ae0da9c60c6ea164c3dad3a6', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'cb0df4ee8a160ac4705e66be8e80acd3c3ce17dd' }, h("p", { key: '690eed1c0db519ab4230b46c3ba46950c5d240b1', class: "p-0 m-0" }, formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && h("p", { key: '5ec9436a52f6a68449703d6257df9c2e3beac018', class: "small p-0 m-0" }, formatBookingNumber(this.booking.channel_booking_nbr))), h("p", { key: 'f0bf95c0bf000c3834d832a2fb11811e984055f0', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
