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
        return (h(Host, { key: '41393033b06b6e2dcda7fd9953fc1047b707852a', class: "pe-1" }, h("img", { key: 'f154b2dd2887f2911fdea4a2874954af839ae7ea', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '62677954d36c7916caa844d8ccf65f1b35c1c961' }, h("p", { key: '424f11d060917f9c9ebeebbb539befd1106102bc', class: "p-0 m-0" }, formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && h("p", { key: 'd62c43c5772a4bb16cc52cc501c5e3009a19f015', class: "small p-0 m-0" }, formatBookingNumber(this.booking.channel_booking_nbr))), h("p", { key: '72645d03aaaeb4e4396876fa8b8e5fdec35b4c8b', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
