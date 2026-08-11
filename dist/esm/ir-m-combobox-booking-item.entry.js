import { r as registerInstance, h, H as Host } from './index-CaNXuIlM.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'b2578de6900dad5d92f10ba391dd22271fa22308', class: "pe-1" }, h("img", { key: '885cfe202b0f9389007266bdec31caf424b46cb7', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '1669a669fe32d5a02f5de18b88b75f7074e47e5f' }, h("p", { key: 'ceb95a917fcc06c3738ab28ab4b692ce56f0d180', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'b155b516e47deff5bd73c067a3190961cd7b06f6', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'd0d33c2435b47e6dd9034e21cae7e184f97bd08f', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
