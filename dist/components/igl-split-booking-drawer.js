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
        return (h("ir-drawer", { key: 'bbf09ff611f2c850178d07482ccfc60afac12b6a', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && h("igl-split-booking-form", { key: '0c6c7f5ee8c0233c0f7c76285a7eea863440d9ab', booking: this.booking, identifier: this.identifier }), h("div", { key: 'd4d334555c2c6305dc076a7a13a2baaa29105ecf', slot: "footer" }, h("ir-custom-button", { key: '4388334ea991cb7f397871302df3d09ddf1411c5', size: "medium", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '993e7760fe3803f104aab86d985507ab040ad937', form: "split-booking-form", type: "submit", size: "medium", appearance: "accent", variant: "brand" }, "Confirm"))));
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