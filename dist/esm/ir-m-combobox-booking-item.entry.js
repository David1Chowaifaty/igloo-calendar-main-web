import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '15e36159a4a0d55f8e78bfd47ff72789002084d7', class: "pe-1" }, h("img", { key: '11e78c632f2fa679a4951eef15dcd40c7971466a', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '9ce53f100191661131737b4d63a6e672fa2adbbd' }, h("p", { key: 'a9603e26fa9c21a06f6a47ed2ca75f0306d6e950', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'eeaa1aea167b8abedfb50b3dd3cdffd413ffff50', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '2805302785baf34cf48761ecf74854a92b8aa8d0', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map