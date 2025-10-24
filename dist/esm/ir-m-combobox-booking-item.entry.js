import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '981697ff8df57a2d48b3b9c075520c3d8c5b186e', class: "pe-1" }, h("img", { key: 'fa7c1d2e5b07d90e6889708bc37da723d3297ccf', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '06c11d69bbcefc3adff0a40438ad2a56f0d997ac' }, h("p", { key: '7daf3f6981a9298d0eaa3ced1c35f971c4cf0dc5', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'dd76acbea755875fb2cf325f2c8f7479d71ca8a4', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '842b2095191775c3d4a98860d9aa20a06c352c1e', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map