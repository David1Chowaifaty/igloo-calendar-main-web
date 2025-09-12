import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'd1afc27166b37c5e1a4a09e03589a863ab882032', class: "pe-1" }, h("img", { key: '5581eeaf7d4c5095e87c042aa99c5da92eb4a66a', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '9ca1d0ba11a128e7018a56713325655f123244c2' }, h("p", { key: 'e86ae9a266dda385f2b1af89424740802ae0c397', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '1b5955298676885583a3c1082e9f44e14a7dac4f', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '5830807ddf230a1cedde242ea064afa4462626bc', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map