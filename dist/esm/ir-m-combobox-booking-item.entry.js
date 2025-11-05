import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'c2bec89307d3263d4a749a9b695b36578f05229a', class: "pe-1" }, h("img", { key: 'fc66cd5a93b32d937d4b7c9956a5751b37a365b7', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'f48c3fcb66c3c120fcbb2ad4703a0a78cf8bf14c' }, h("p", { key: '3619d8c14f1b6cb08a7f2e3f05056650062def69', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '9e41180dc84803422d55fc30fc438446a1669c0f', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '3b6f0ece04129415aeb27268e017b231e1657ccb', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map