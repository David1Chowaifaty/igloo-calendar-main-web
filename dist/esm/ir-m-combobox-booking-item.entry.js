import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '94494d471d6c1c12f84f07113fe063597af4ce16', class: "pe-1" }, h("img", { key: '617822c14f94ef882a5413ec116a4c23fdf03047', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'd6426f64851dc95f3b00ae5415a154049baa214e' }, h("p", { key: 'f051da38d95d8dd0ef5c554a984c43c217f491ab', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'b0995a2b3d65070f7f4173cf52bb6102da3e0292', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '02bb637744cadca8ced1434f1d0e26edc9b4a2c1', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map