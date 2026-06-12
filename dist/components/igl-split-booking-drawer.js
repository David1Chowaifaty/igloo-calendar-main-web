import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-drawer2.js';

const iglSplitBookingDrawerCss = ".sc-igl-split-booking-drawer-h{display:block}";
const IglSplitBookingDrawerStyle0 = iglSplitBookingDrawerCss;

const IglSplitBookingDrawer$1 = /*@__PURE__*/ proxyCustomElement(class IglSplitBookingDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
    }
    booking;
    identifier;
    open;
    closeModal;
    get room() {
        return this.booking?.rooms?.find(r => r.identifier === this.identifier);
    }
    render() {
        return (h("ir-drawer", { key: 'fd07719b34b62486c668aa336bf3b9fa9dcce512', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && h("igl-split-booking-form", { key: 'f2e0bde924b3a7efb33fe6dedf676d6fb8ccac52', booking: this.booking, identifier: this.identifier }), h("div", { key: '62192fd6f6f7b9573509aebff78fd7afb8d83ead', slot: "footer" }, h("ir-custom-button", { key: '838d82a819c7c0461b21446c40de740b83f4fcba', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '91ad413dcaab157e835337060c57f0eefff2a6c4', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
    static get style() { return IglSplitBookingDrawerStyle0; }
}, [2, "igl-split-booking-drawer", {
        "booking": [16],
        "identifier": [1],
        "open": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-split-booking-drawer", "ir-custom-button", "ir-drawer"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-split-booking-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglSplitBookingDrawer$1);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IglSplitBookingDrawer = IglSplitBookingDrawer$1;
const defineCustomElement = defineCustomElement$1;

export { IglSplitBookingDrawer, defineCustomElement };

//# sourceMappingURL=igl-split-booking-drawer.js.map