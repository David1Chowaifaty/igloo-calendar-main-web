import { r as registerInstance, h, H as Host } from './index-CwWmK1sZ.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '96a0f82914b12ede68a57dbb5c06189e017550d1', class: "pe-1" }, h("img", { key: '4b67ad4624fc8937caf33dc48471c2cc1e82f325', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '89e7af91bdf124c8c23d30c05b2bcae405b85778' }, h("p", { key: '5ea7ef3feaac32e7966a2c272fa5cb7a0685c867', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '230a4565ead16f8b77fc6baae0cd06029da544b8', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '054d0dd11c49f633e642db94b2acc0962dfcd088', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
