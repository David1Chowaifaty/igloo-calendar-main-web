import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '74cf4373ee18fa51a50eec7a96e0f7334ffb10f5', class: "pe-1" }, h("img", { key: '874d196b9173b5d5529162a588c93af234a0101d', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '5bbab028e58eedf3d179e91cc6a411b153d2288f' }, h("p", { key: '7897c761068d34f849b00bfbdc1d2bedffa9d6e9', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '6882cda1b827ad8277eb1dfa0e1659d355d4095c', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'b88cab933b36c1277127655b10e8dfa204c364f0', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map