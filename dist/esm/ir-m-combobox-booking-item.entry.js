import { r as registerInstance, h, H as Host } from './index-Kqbk9HdW.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'c7aa55e3726a9ae0f92fa469760f43bf51690026', class: "pe-1" }, h("img", { key: '6d3128438cab04ad40344f1899e9494e634d66ae', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '476c06d944a903cfe0eff49841fd4feb3016abd6' }, h("p", { key: 'f8453630259a1d33c122a64902d952522c66cc15', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '7cc41c2815b3be2d9d59e559220b565c1887d447', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'a93114dea0dd60cafd00c038cba170134753dae7', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
