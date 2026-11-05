import { r as registerInstance, h, H as Host } from './index-DKZeCK8T.js';
import { a as formatBookingNumber } from './number-B8waOzTO.js';
import './ir-date-XXNYhmSL.js';
import './locale-scope-Jre4lb6k.js';
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
        return (h(Host, { key: 'edc8d64dc728aa27a4b266ab4f534b83d7d26696', class: "pe-1" }, h("img", { key: 'e694814d9f213ef9eace6cd889440dc7a5c490a3', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'cd2d9e659c185b5687fafb53b18d613db5f78272' }, h("p", { key: '196e994e8f8b7df8eb678b6d2bcab7f7edea15fe', class: "p-0 m-0" }, formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && h("p", { key: 'f42edc96c62fa2bc7bf6c293110e6526c59e9b9c', class: "small p-0 m-0" }, formatBookingNumber(this.booking.channel_booking_nbr))), h("p", { key: '160e4f7de224282ee3e8e58cb059ef5aa61fdecf', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
