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
        return (h(Host, { key: '46e053baccd6d6241c5c07e4ffb7e59de3427fa2', class: "pe-1" }, h("img", { key: 'd83bd03b8a83b2a11a84548d4e70b6f36aaec215', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '61b5db1c9334351faf7f66e2aa3ef2aa7534c86b' }, h("p", { key: '4d1c94653618d90ed77bb77e64acb03a67efc314', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'ecb96df093105b2d756a1a9d5db3554d45f5daf9', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '333d97c5993fbe4b48b5d0676389687c92dfc4f9', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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