import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'deb20fa734b5d8640792c1d2707b0b3fb479b923', class: "pe-1" }, h("img", { key: '648ad989c7091df6380e9032ff1de6ba85f9cf82', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'ca45df2e9a3ed9d8003e4c7d6eb42a74918f8ed2' }, h("p", { key: '884301a0bf4189242101917015667f2898be3235', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '0d548ccbbb60c4b87261da58b810c2869876a646', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '929446f2a78b78aa6d2bebc3df2864265bb8cb6e', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map