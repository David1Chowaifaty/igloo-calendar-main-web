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
        return (h(Host, { key: 'dfc2a62c73bb84a8c9f2c1486123bf543176a3fc', class: "pe-1" }, h("img", { key: '07a8dfc175228762c127f06a50573f4ced227d6b', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'a92534bef3b2a1418d99184ff66a6c1d1dc5b9a1' }, h("p", { key: 'fac24e76e4e6b8257317992f1c3f59f9d0069895', class: "p-0 m-0" }, formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && h("p", { key: '0cd31050598d5678fdb364c2ce4e98ae5e593df2', class: "small p-0 m-0" }, formatBookingNumber(this.booking.channel_booking_nbr))), h("p", { key: '7bba68dc378023868ba8ac5ae287e58ad6f985d1', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
