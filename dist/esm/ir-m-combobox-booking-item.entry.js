import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '45b32a567595207fa031f04ad3c8953fd6eac34d', class: "pe-1" }, h("img", { key: '468a66de13aff8af7b25b39f9715125d96836cc5', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'aaa6d80b7d1d5d7f278faaff89b24576e72ee89d' }, h("p", { key: '713a36a277ae14a925a3ee0d3f6852554190484b', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '49c76610e78e06e0c83c7db4613cf7f22f51df37', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '69f95de39b52b25c057d818e68025d2d64aff73d', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map