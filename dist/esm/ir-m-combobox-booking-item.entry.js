import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '7ebf6680f03bb389a3b2549c5acf55dcfada18c5', class: "pe-1" }, h("img", { key: '77c62c932678f77978c5db3a94f8d2a848750f42', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '1a66adabdc9ff549dd8790569672dd6bca5d55e4' }, h("p", { key: '6e1c5e0cff21e97210234ea8cd37cbeffe8c4943', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '789c3cc79f503127019d90f9c0b9afc3d1453bb4', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '4fb4159e0bbcbfd7a94506ddb4dcfa8e4f33387a', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map