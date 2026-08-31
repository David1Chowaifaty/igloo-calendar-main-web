import { r as registerInstance, h, H as Host } from './index-C63jMJYk.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '1c9591f1bad64dd1287fe732d667d2008f2d2540', class: "pe-1" }, h("img", { key: 'f63061f294283ce682540fa0ac4cf4109ba00074', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '5839fc82d92a66882a0cc301b96840f941d5f873' }, h("p", { key: '2109d0473711882d205bf138453af52ae2008b32', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '1922cb5981227ea06b53de7634be82ef5dd3429a', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '4764b616ade1ee351917d74002831b1ea202c49a', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
