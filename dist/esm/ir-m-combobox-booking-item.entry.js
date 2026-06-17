import { r as registerInstance, h, H as Host } from './index-0Di74WDd.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '0d33354c116a8347f4b01059ce53483ec3d1fb0d', class: "pe-1" }, h("img", { key: '092870b720c817f6f523d83aa31466250f0164f6', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '60a0aaf23d5a015820fae955f4cb1a554933ba2d' }, h("p", { key: '381c16ad309af01d1f5e23709be26189c88c36b1', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '53aee3ec45083d1f7e148b351fcae32486e45088', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '4e0d946ac3832a81befa45f16218c8c52f50550a', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
