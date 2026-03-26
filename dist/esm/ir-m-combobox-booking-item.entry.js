import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '9f155cb15dbe5bf282cd08cf798a4646e5edbef9', class: "pe-1" }, h("img", { key: 'aa3a8bd1748932bf8e35e3991614e314efb12e2c', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'e9fd8c786bcc93c5aac9d67ec3c0204fb918de0a' }, h("p", { key: 'ae0262250a21235ff1b292c81beae2ee724461bd', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'd76860822faad93da0e296798e9057bf1a3ef12f', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '1c4129ba3182b91719306491d2dadc0613403922', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map