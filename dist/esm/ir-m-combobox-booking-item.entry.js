import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '5a80ede181a38d4fe6822b172f4a1df6c33847c5', class: "pe-1" }, h("img", { key: 'd410d7d451b5d1094770beb8f970d1ae4c2bc5f5', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '03e1029e9896946bf1fd8ff1ce93f6307c4400ee' }, h("p", { key: 'b85a3b8427edbae079b04a9ecff7c2033b4cc136', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '0e33dbae660c1e56f4d4bfcb39f5c6fc6ee0034b', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'ae9159003ae4ce1da277e9aeb712d18a2e6f9e8e', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map