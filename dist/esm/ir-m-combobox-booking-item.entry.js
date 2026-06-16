import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '0b26a344e6429b4980cbe14c098b51e2564597b1', class: "pe-1" }, h("img", { key: 'bb6c1b3d653a7b0eedb5154dce4074130162ac20', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'f5fc7b6f07522d6f2a5b98bc2718cdbc1962d56f' }, h("p", { key: '6ef06117c78116204df5406da8fdab07e6862451', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '10ca01979a7be9362242d0bf0373bc3d50e4d991', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '5231c6afdf939af79d91e4727fdd8e45cec2aae8', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map