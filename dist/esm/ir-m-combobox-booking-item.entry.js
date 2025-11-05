import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '329ee81b3574f767656fe47d0313abbce4482af4', class: "pe-1" }, h("img", { key: '5fd908eded838193bd453641fe1e401767c1934c', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '3c6995727e186aa995e808e4defefafb5784f536' }, h("p", { key: 'ed0b1940661ba6ceb366ca623f7bf9308a0a59cc', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '327436d3103562bcf16f93b0baea6a7f96bd93e9', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '9cf35a9711ae57314a55d3b2d58d00b147bcffa3', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
};
IrMComboboxBookingItem.style = IrMComboboxBookingItemStyle0;

export { IrMComboboxBookingItem as ir_m_combobox_booking_item };

//# sourceMappingURL=ir-m-combobox-booking-item.entry.js.map