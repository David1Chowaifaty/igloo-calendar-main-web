import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '11c8044f73a54f0309b173cfa7984743345e63e5', class: "pe-1" }, h("img", { key: '03723270e4e9a422d5a0b5ef601af804dcb7baa9', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'c944356db8da6e38ddbd4e3d362fd55450318119' }, h("p", { key: 'ec4d271f62c871a2d58644a547176d53ac48675a', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '5bacc0e03d415018ca209af59b710816c978bc00', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '220cf9503879d7991f0260f08d843c5996c60889', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map