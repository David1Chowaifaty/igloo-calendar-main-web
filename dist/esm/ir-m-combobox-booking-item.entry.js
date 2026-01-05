import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'ded06660aafa7f3d863f18759b2329180ba7eba9', class: "pe-1" }, h("img", { key: '1a7c2143dd1da779b26416c4e1cfe44697698240', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '3c004c51c2131ca6997e2ced9900ce5112989a56' }, h("p", { key: '95891bd2ec368dd5e937126dbe3dd1258c823038', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'cd597ba9cec9f3d32d0bde2dec2465b9265901a0', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '0dab3b43c6d2a346ff81b7b63cdfa1570f542e5b', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map