import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '9fd326d6b73f303f25c127e8674257d90510f83a', class: "pe-1" }, h("img", { key: '8448b0585e57b1808db5bb9d89c1115f25920bab', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '5e8784001670479b07d35f043db32f40cadffe45' }, h("p", { key: '412aa5c6bfc928e2e1407a0996bc980b801196b0', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '5e0183030df89f7dceb0a4dc49d9101bea356303', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '5c09cf6391498d03da480fa43968abe332c5dc67', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map