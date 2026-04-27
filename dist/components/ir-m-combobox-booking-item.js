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
        return (h(Host, { key: '9fd326d6b73f303f25c127e8674257d90510f83a', class: "pe-1" }, h("img", { key: '8448b0585e57b1808db5bb9d89c1115f25920bab', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '5e8784001670479b07d35f043db32f40cadffe45' }, h("p", { key: '412aa5c6bfc928e2e1407a0996bc980b801196b0', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '5e0183030df89f7dceb0a4dc49d9101bea356303', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '5c09cf6391498d03da480fa43968abe332c5dc67', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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