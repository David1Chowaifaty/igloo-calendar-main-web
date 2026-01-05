import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '348897d65ab73685b40e0fb80a97bf626c7e5576', class: "pe-1" }, h("img", { key: '2396fe526627ef1adc85702c641f54575b0384c3', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'ac4b902cd02d407458eab58c793e09e5b575d6bc' }, h("p", { key: '568f03600731a0f12cda6e226dc1fea4afb4b634', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '04b67f844e359f3b727527b6afb0a9fa782e46e7', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '18d4409368af2f0ea41c32a08ea32729f9ed2bcf', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map