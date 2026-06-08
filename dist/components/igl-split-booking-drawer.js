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
        return (h("ir-drawer", { key: 'b21cb4b432914bf9bf2c9ff6199975649b532090', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && h("igl-split-booking-form", { key: 'e8401913029c98985364d9e7bf2ee11d14e0716e', booking: this.booking, identifier: this.identifier }), h("div", { key: '750a087c181bcdf34e520a4ecc365a94a541917c', slot: "footer" }, h("ir-custom-button", { key: '96ebc285b47da82520d2c488bcce0fea90e0a963', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '93ca74e0eac1f6f3a002a36cee80cf1c594d81f6', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
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