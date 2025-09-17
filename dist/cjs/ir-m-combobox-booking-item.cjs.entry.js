'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'd18c383c87334c79b526870658ead7eae33bf445', class: "pe-1" }, index.h("img", { key: '86703e530e227aca2e267a6ddc9396a95a6aaa50', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), index.h("div", { key: 'eb9a8fb99440533153efb368fe4fc1c00ce90a29' }, index.h("p", { key: '6689965030753e47b49ba38f46de3e057d65f368', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && index.h("p", { key: '8a1cec673a131a088b9ef14fdaf38b4594077bda', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), index.h("p", { key: 'dbf1f57f0a83fdb448cfd59b07e31ae40de147d4', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

exports.ir_m_combobox_booking_item = IrMComboboxBookingItem;

//# sourceMappingURL=ir-m-combobox-booking-item.cjs.entry.js.map