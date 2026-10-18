import { r as registerInstance, h, H as Host } from './index-DKZeCK8T.js';
import { a as formatBookingNumber } from './number-0UrU_yO2.js';
import './ir-date-CY_qGQ63.js';
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
        return (h(Host, { key: '52254654e9febf17cfe7db032315a511939ba48a', class: "pe-1" }, h("img", { key: 'fbb71dabc4b04904d3a991ef567a936d238c719d', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'e3980383e5497f71365c7b3b418867bc87eff9db' }, h("p", { key: 'd5365ef9e74d543f61406303a61a75168ec55367', class: "p-0 m-0" }, formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && h("p", { key: 'c9d33709a523649e139934fcb4f145cd531c7a25', class: "small p-0 m-0" }, formatBookingNumber(this.booking.channel_booking_nbr))), h("p", { key: '63708296cb048eaebdf5a383391fcddf63dd4c05', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
