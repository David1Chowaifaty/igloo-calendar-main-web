import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '285ccf75b1214a0633e2dbe99371940405acdb8e', class: "pe-1" }, h("img", { key: '90ee2a8506a379a64d92dfc209f393a0827aa2fe', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'f481e35c91811dc0e6a6220ec52364b0664de6f3' }, h("p", { key: 'd77da522d4b871be68e6fd28eaf0fb736a53e67f', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'aef8c227794d78c1b52ac1c7eebc3d3523275d9b', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'fb883af15e6383b411ee32e59399685c1ab8dc31', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map