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
        return (h(Host, { key: 'e4f9fb3255ccc09f035532fd19be794e309567ed', class: "pe-1" }, h("img", { key: 'a91197076ea864cb938d03bc467dd04f8447903e', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '6279499a15c52e45c36c05a26fdd6889abb30914' }, h("p", { key: '680b515b838f0ab7d190f30ee03ac89e5de46f9c', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'd5c68b21850263aa6b355b7dd07119f5a6ad0acc', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'f01c95972adf135851e834d587f514b99e688ca7', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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