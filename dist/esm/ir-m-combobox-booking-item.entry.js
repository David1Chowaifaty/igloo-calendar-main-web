import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '1bce16f1d0a3336daa09ef29a6559ba7da157062', class: "pe-1" }, h("img", { key: 'bb8c2057a207f9bc163b18f02b2a8580945dd87e', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '54a300ac155d38d407c3e1637c4c91c4e82628b4' }, h("p", { key: 'b075619eb8cef5ab92d74f79db0971d70377ff49', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'ac940d83af7ffc7b394feb733e6c5731bd8f4baa', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '21fc38158923882a75447e3c549df43267d8dc8b', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map