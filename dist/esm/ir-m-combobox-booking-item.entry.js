import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '86459ecb9a236973ad8ed08d73efa010c538ea13', class: "pe-1" }, h("img", { key: '9a79003087c4cdba44b4e5fac91e73ce63e36bed', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'bed615743e15903e09af3973470e0854a56a5513' }, h("p", { key: 'cccfcd6a4f8c9dce226281a38ea71a2219471bde', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '728b93ef8ce5ac96f09f3d4c14a40be2b7490ffc', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '690ee0936f13b2c1da531fc8e644ab4dddc946b8', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map