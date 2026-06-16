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
        return (h("ir-drawer", { key: 'f7ded771ebb624ea10034e5d229e635fc7f55b91', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && h("igl-split-booking-form", { key: '3f3d05a64c5b31ddc4a201114c2f50c20d186ba7', booking: this.booking, identifier: this.identifier }), h("div", { key: '807b1792434d02a8434aa16150e8c9b6f39f71d9', slot: "footer" }, h("ir-custom-button", { key: '2634772623d2acb88c2f884133436feb71f74401', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: 'adba0dce6784e1a42bb00c2c8335101057f90285', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
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