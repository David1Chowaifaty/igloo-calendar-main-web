import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'ae98e7ae11b7ccd0f533950a92c2914b1394c0c7', class: "pe-1" }, h("img", { key: 'd7e9bc063f2a4fb7c5b5899c2f0522240c96bb7f', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '477f019f6b767366f638a59b0da2339dac704643' }, h("p", { key: '717d691d3912c8181f130fcd60e51caf1cafda70', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'ba0bdfb4a2ed69829ba523c76b80ff6f338894cf', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'c71daf37cc9a112e4470db2b0b7c380c202b2e68', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map