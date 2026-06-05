import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'f25c745cd05bcac2a01b247db91ea1772c68cc2a', class: "pe-1" }, h("img", { key: 'de6321ffe3c3a2ff73947eeabe2be26527e97613', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '0d261e5b21e51548276227823c9b84d9b3c96bab' }, h("p", { key: 'af192871f9a08127f0b0c86ec55a02ef3112501a', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'e8247d8fcb50ac743d0f730f93aaf219ea3b1234', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '58f488c5dd0564504fb2230475c4f3da9579e852', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map