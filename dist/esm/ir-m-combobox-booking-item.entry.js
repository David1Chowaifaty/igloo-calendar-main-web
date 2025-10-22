import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '7bf70516ab6e00205b17391c551a2b3a0edcbe7b', class: "pe-1" }, h("img", { key: 'ea534ccb2094ae3734550935ebfbeee16ede4c74', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'e4fb546562cc70c363704a2cc5753d8d0bd68851' }, h("p", { key: 'bbfff029589c802f2e6dbdc17dcdba34dba04090', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '672d6642df75014b977647265b5dc561c86e19df', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '2452c6f760b6c3cf8a256b884f6e4f04fb5e55ea', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map