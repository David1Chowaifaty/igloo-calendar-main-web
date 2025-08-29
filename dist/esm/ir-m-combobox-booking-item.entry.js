import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '34d2d385b28a9cbde58cf4c99112da5e1750f356', class: "pe-1" }, h("img", { key: '604e51807fa556a71a94654665caed480b39da2c', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '93220e09ecac2a30f8e088bab2f98799a2e4f7b8' }, h("p", { key: 'efdfac96d3b11d21164ec987f7e464b153cde331', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'de3d977cc7911a43c9735e89f808a8a90066668c', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'e94a1d94d9312be2c64f387f676446cfc1da9fad', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map