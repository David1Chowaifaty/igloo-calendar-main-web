import { r as registerInstance, h, H as Host } from './index-BYqrdgY9.js';
import { a as formatBookingNumber } from './number-BZWB3cYi.js';
import './ir-date-VwsP30iT.js';
import './index-CimhgHoX.js';
import './locales.store-C9qsbKR0.js';
import './moment-Mki5YqAR.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-inline-end:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'b59365208a1c25bfc3a2bbae91cff3351222847f', class: "pe-1" }, h("img", { key: '564a63a45837c14b9778e9536386e606c1b747ab', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'daefd8128674b46db145e6dd4e17fef5963732b9' }, h("p", { key: '1b3453deff16f260b297ccf3f50ca2603955061a', class: "p-0 m-0" }, formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && h("p", { key: 'e10d04e3b16bbf0c594079b6dbdba7d4a4219a90', class: "small p-0 m-0" }, formatBookingNumber(this.booking.channel_booking_nbr))), h("p", { key: '4af5a42bc695cd9cadfb74561448d8e44edeef9f', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
