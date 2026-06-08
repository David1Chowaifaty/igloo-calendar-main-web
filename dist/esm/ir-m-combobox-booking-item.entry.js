import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'd25f1ce6ef9a090382a6557ae5a368a01d967871', class: "pe-1" }, h("img", { key: '2e8d1f8d0a194bfa61417dfec11886e31e2ffd8e', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '091f05151ce675d4f3f356d5eeb4c105a5787f18' }, h("p", { key: 'cf94ffc1d9914f25238e7dc01004343c1cda7262', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '8fc7a906ac04fcbefa943fe1e85ce8b759aa6509', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '65e27d9c5a78446d2c8c67470b40658f139e028b', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map