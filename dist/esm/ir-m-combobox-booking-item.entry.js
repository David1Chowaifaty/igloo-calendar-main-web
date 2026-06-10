import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '9c943bbd77b279bd41f902d881c82d1e05ddb3ae', class: "pe-1" }, h("img", { key: '5c08a4e6751eaccdbaa2d253428f268081b1513d', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '937bcec0ce7e3089ba0033dedbe5571748c4abdf' }, h("p", { key: '857fe3a4024c6bdfc737156d1b4ec596a5f990e8', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '37093c96d4f20361286cc2653fb45335c0fd1c91', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '4ce358cf09af4737528ab5f9ddc58d3a27d181b7', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map