import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '4bb660beff06bc5f2f7e467378142b7b133b469c', class: "pe-1" }, h("img", { key: 'abd74c380118cadee1c4683a18d257721b786083', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'e347ab018a649ad36eb2e5721d4eea2e171ac9bd' }, h("p", { key: '69ae3b34964364584cc9e24ed40063eb14025a63', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'a58303d5866fe49d51df9a24d368391a4b7a0292', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '54ba1bd5b86e9f9e8ccb7a0032a72061c606189c', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map