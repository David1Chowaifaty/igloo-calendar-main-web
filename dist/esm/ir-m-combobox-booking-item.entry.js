import { r as registerInstance, h, H as Host } from './index-Kqbk9HdW.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '6eb9ed217b11ca7def86c648ed76480a74c2bb0d', class: "pe-1" }, h("img", { key: '8370c2e036db80a133aa06a7b44df6ded5abbeca', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '44408b511557803f590963a1d73829edac7098f0' }, h("p", { key: '14fa7a1cab14251aff8d3d7d1b79ecacfd1ea0db', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'a8ba5f17cdf95a93a08c9530acf8cb8c6d2c549c', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '7b4966d251b4f3f4666a1386e6bec63a188bd1d7', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
