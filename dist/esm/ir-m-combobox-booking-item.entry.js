import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '13c958e3430b24af4b1e36ecb74da857fdced298', class: "pe-1" }, h("img", { key: 'ca2936f34e89eb9a7b099e81ba3d3fb56f322b1e', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'ea32804a37dd45734ec703a046dd47a1a9a317fb' }, h("p", { key: '9cd69199e27d262e0dac9c35bad8b015f2cdef25', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '0906e95069a77d74d941088ca9509cbefabb2a29', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '8cb9725362e78d2c16fdf4c3a72f4b361bf4aaa5', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map