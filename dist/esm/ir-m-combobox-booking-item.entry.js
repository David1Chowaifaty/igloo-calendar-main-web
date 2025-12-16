import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '9459395e7aae1d873395f44552664ae763284403', class: "pe-1" }, h("img", { key: 'a42b2b832081d0ea6664b8e95fba2b1d547a601b', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '37d455c2c9a6d38ba24415f8cdfae54f03509d73' }, h("p", { key: '32156a8d4badb73e4928d6535093115c942ddce7', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '672cdbdcc2f1e8396ab68172b071462ea650e864', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '064f9143a98bf1259c43ff864d047e1d3879e186', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map