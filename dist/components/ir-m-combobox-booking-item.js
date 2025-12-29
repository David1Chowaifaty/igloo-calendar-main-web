import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irMComboboxBookingItemCss = ".sc-ir-m-combobox-booking-item-h{display:flex;align-items:center;gap:1rem;color:inherit}.origin-icon.sc-ir-m-combobox-booking-item{margin-right:0.5rem;height:24px;aspect-ratio:1}";
const IrMComboboxBookingItemStyle0 = irMComboboxBookingItemCss;

const IrMComboboxBookingItem$1 = /*@__PURE__*/ proxyCustomElement(class IrMComboboxBookingItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    booking;
    render() {
        return (h(Host, { key: 'b3954c386ac15004b6a7898ca9944aeb0d557bdc', class: "pe-1" }, h("img", { key: '73f5c569670195e3ac2eb76086f6baf85528d2b5', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '86fca23a53190cd91f63b981fd19e94391e1fff8' }, h("p", { key: '15308cfefd6f3fe9c460fa47aaea00cde1f9c4b5', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '0ae3192b78c21902d456119c03f9cdf4f0adc7f9', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '918c5e40002dfa3369adbef9926623634d230ac6', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
    static get style() { return IrMComboboxBookingItemStyle0; }
}, [2, "ir-m-combobox-booking-item", {
        "booking": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-m-combobox-booking-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-m-combobox-booking-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMComboboxBookingItem$1);
            }
            break;
    } });
}

const IrMComboboxBookingItem = IrMComboboxBookingItem$1;
const defineCustomElement = defineCustomElement$1;

export { IrMComboboxBookingItem, defineCustomElement };

//# sourceMappingURL=ir-m-combobox-booking-item.js.map