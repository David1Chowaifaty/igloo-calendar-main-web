import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '69908241b1d74948b08be6195966add69da2dd70', class: "pe-1" }, h("img", { key: 'cb4d03924e55d2b0993d7a645a231af0b7acf16e', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'b917671c438063d4620c0093e5e857ffe46c9f09' }, h("p", { key: '78977c903845e215f8abd8ae107fe7028bc2738d', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '3c40202e2649a8b114e70058177b3f727ccd27b5', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'b3d5fe4a2778c641c843366e1ecb660fb59738ff', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map