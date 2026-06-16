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
        return (h("ir-drawer", { key: '2de5d60839339946c97975e6f695aea9555f1f0b', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && h("igl-split-booking-form", { key: '4e931860f377898f96893aa4116c9f8596344aae', booking: this.booking, identifier: this.identifier }), h("div", { key: '5202446cf168f73ca594083c5881b6b952b09df0', slot: "footer" }, h("ir-custom-button", { key: '77c09a10e55c5c727cbf8de98a544d50541d92ff', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: 'a83dcf69613a0b63ffd1c39d4a0d35e3cfbcc635', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
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