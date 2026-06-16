import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '6ce8beeaa4b328ddc15cbf8335ac46728392684c', class: "pe-1" }, h("img", { key: '28b41179f34eb2c9108a31687fd12fea8ad929f2', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '2c3ba2e2c74a46d723de6af910a68df8c07bdc75' }, h("p", { key: '93ca9a9c4f1d3564fa2257c16d0707e8746df696', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'd8ce0f038707c7d324fec504cc7a199be308edbb', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '45be93db889fe476966a0013352c946d3e68cc47', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map