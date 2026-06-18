import { r as registerInstance, h, H as Host } from './index-D8DCR0yx.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '9ce09380ab6453cbedfb7e66d97ec378fbd68a01', class: "pe-1" }, h("img", { key: '258aa4d21ed8c7c2b9134a049f00374acebd1287', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'f7c0ecab0c8d437413293ff9845a4a199d73c406' }, h("p", { key: 'd9fb02dd7641c5650ba6ced05b6d16119558af51', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'c5f4cc1f7ee1a56b31267fae8314dcea7e95b690', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'aa5d8dd15df3ae30b1dfc5d6f9807f0bb42a3c28', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
