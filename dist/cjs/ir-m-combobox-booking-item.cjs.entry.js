'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    booking;
    render() {
        return (index.h(index.Host, { key: 'ddcacddb011792688299896fc9f06f35a56f93ea', class: "pe-1" }, index.h("img", { key: 'a5180ac0089fe37421fd05703335cdd9ebcdc092', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: '50ce62dcde41c85c7501c4c034808bd49a3d5a03' }, index.h("p", { key: '29f25402bb4be48595cf63c776e3fcb7ebaf3103', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: 'db6c5e061c617e82e7ec12c0d342d401ec814ece', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: '194c1b1cc92a364ca90d0f6735af4274f400d1e7', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map