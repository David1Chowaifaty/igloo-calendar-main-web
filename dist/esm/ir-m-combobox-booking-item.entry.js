import { r as registerInstance, h, H as Host } from './index-D8DCR0yx.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'e87741d9c6bed4d586065af7fcb9886bfa67d27c', class: "pe-1" }, h("img", { key: 'c9935a257cdb4580eb298cfdbeee008ea30d4c12', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'e49a5ef1c248d5ef3ddc570467020099770e8d0e' }, h("p", { key: 'd76b8fe752d86c609a67572b4cdccf4e2515df6d', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '7696524c72de701ca16c460d722ac83e532cea7b', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '6cbd0ae30cc58a4e8d8fc4026faaafc0d52623b6', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
