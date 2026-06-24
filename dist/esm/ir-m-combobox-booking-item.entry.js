import { r as registerInstance, h, H as Host } from './index-D7D7fhZS.js';

const irMComboboxBookingItemCss = () => `.sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}`;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: '324ec3e0e6c3399d4972316fb8dd2a1e5cb8d9a8', class: "pe-1" }, h("img", { key: '0c11569e9d4fc79aac9f90e7395ada470dd930d8', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '385855e94977307a724eff6dde44986036184842' }, h("p", { key: '2d76a7f92d7bae44d2fc54f49d70c170b66b2c83', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'f4e3e2520e37ae09e1e5733745d83fa86f01d4af', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '8dac800a7cc35fd03d0f2b4b23eba08f720e0f23', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = irMComboboxBookingItemCss();

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };
