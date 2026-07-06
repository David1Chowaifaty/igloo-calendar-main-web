import { r as registerInstance, h, H as Host } from './index-D7D7fhZS.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'f1c1e90d362e5455eddfa523d0cb77b5c01e31b5', class: "pe-1" }, h("img", { key: 'eb506c29dbb180ef77cbb92677d72b06704ba632', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'c62d496a6873a0c362fb5097d2210fd3feb8b9fc' }, h("p", { key: 'd9f5c1ca2e2ffdd503a0a912e979fe9478cf761b', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '518aabd9887efc4a060643d36f73978abb3cca66', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '089c58196029770a01fe932a9158953f404aaa03', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
