import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (h(Host, { key: 'ddcacddb011792688299896fc9f06f35a56f93ea', class: "pe-1" }, h("img", { key: 'a5180ac0089fe37421fd05703335cdd9ebcdc092', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '50ce62dcde41c85c7501c4c034808bd49a3d5a03' }, h("p", { key: '29f25402bb4be48595cf63c776e3fcb7ebaf3103', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'db6c5e061c617e82e7ec12c0d342d401ec814ece', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '194c1b1cc92a364ca90d0f6735af4274f400d1e7', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map