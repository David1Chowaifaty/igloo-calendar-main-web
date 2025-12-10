import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '185c149f5984a93dbdfc3f467675f9f913b11114', class: "pe-1" }, h("img", { key: 'c2b1bec6286db53e84a2008b4b798a1fff3234f1', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '6b89dd40aa700413595c2015a6ffe0b661a57b28' }, h("p", { key: '087ab0f93d48c70752b2bad377291ae3af675f3e', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '2bb4f74b3a5baffd57892c87ea5ca711acf48ffb', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'a897146bff424f2dc16fee906ace7b4a32f38428', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map