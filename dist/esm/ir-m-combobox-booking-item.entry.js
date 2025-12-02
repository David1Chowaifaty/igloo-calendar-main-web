import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '818708da3fdc9f3a5d6c9e71bed70badd5b20c7a', class: "pe-1" }, h("img", { key: '70d0c70f5b278ef512b7d3a1f219b7ff40a71f5a', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '7cb43042522607361e0566b4488929584537c2a2' }, h("p", { key: '16533db2926e5eb3546ca7d6ae1b581a4e1ff128', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '8a13904c600aadbcb9b2661396bb87d55ae42071', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'b3124c8eb4f20007a396d9b316b77bd28d969990', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map