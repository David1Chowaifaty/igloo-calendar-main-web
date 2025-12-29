import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'b3954c386ac15004b6a7898ca9944aeb0d557bdc', class: "pe-1" }, h("img", { key: '73f5c569670195e3ac2eb76086f6baf85528d2b5', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '86fca23a53190cd91f63b981fd19e94391e1fff8' }, h("p", { key: '15308cfefd6f3fe9c460fa47aaea00cde1f9c4b5', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '0ae3192b78c21902d456119c03f9cdf4f0adc7f9', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '918c5e40002dfa3369adbef9926623634d230ac6', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map