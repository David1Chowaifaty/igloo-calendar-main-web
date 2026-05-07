import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'e05a558b63f1095c196a06ec7d60c80c5f59c77d', class: "pe-1" }, h("img", { key: '10f1973a2493d0dc9488c727d4cf136471f371a4', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '64482fa42987e51ba6109774a0c305cada6413d3' }, h("p", { key: 'f402c8c5a01ee396b157b742692dab9f8c2681b3', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '618b0cd9f4566bcc260af99968d3fa17c6287c11', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'd0277626f3ab61cb568fceb60f252188a431a460', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map