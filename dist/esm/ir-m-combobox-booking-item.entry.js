import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '4feca9075df701dfb141b34d7551e5251d375b62', class: "pe-1" }, h("img", { key: 'e2ff50cfa7e361ecc942988b59990249de14a0bf', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'e6a0848facd1d073064743e7a88d91ac16682e65' }, h("p", { key: '953a4fb1e4efb1ecab1c1a2473a2c9006c17a770', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'c6090ad354eb1f433ad4d8133e5047863afa0490', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'b834a32603edaa4ba0b12ff02fa0871f1b545ec6', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map