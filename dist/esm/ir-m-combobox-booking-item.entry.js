import { r as registerInstance, h, H as Host } from './index-D7D7fhZS.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'bd7d0eac1dff7d137e2fad0cfa21f2763f7978d2', class: "pe-1" }, h("img", { key: '956489c3e5a9bab6a0680cb3b3a7d1a73b1169d8', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '65b7f362e37243a869182ff0b476dc603eff8a1e' }, h("p", { key: '9a6585bf2629fd9e64889d9d1966446039d3e489', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '047cd7f17137d2c98ac36b4321c305b6fd9f2f92', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '0aa1ccbab00433cc7e51ba24ff2efc733ad522e1', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
