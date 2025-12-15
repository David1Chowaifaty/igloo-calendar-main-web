import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'c3b90a9f140b596a872886af6a7c239e2933a700', class: "pe-1" }, h("img", { key: 'd33978f63b47677ac434e12eb5a246a0b2844cba', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '156067a88a4577b31bdaa134a539728df98293ca' }, h("p", { key: 'ad478f6057450f06217c731cc226b9a87f8630eb', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'b0b482d62992a534b5d55ea0e919ef2a2e03b47e', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'dd4fa8479a8a250b08f30375b3497f63979cf419', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map