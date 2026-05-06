import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$7 } from './ir-custom-button2.js';
import { d as defineCustomElement$6 } from './ir-date-view2.js';
import { d as defineCustomElement$5 } from './ir-drawer2.js';
import { d as defineCustomElement$4 } from './ir-empty-state2.js';
import { d as defineCustomElement$3 } from './ir-reallocation-form2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';
import { v as v4 } from './v4.js';

const irReallocationDrawerCss = ".sc-ir-reallocation-drawer-h{display:block}";
const IrReallocationDrawerStyle0 = irReallocationDrawerCss;

const IrReallocationDrawer = /*@__PURE__*/ proxyCustomElement(class IrReallocationDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
    }
    open;
    booking;
    roomIdentifier;
    pool;
    closeModal;
    _id = `reallocation-form_${v4()}`;
    render() {
        return (h("ir-drawer", { key: '2bac1287a96f840badaef2aea5e2e3dbe114b5e2', label: "Reassign Unit", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && h("ir-reallocation-form", { key: 'c0e33e11f02d545ad3d6d130a7b5249a0723231c', pool: this.pool, formId: this._id, booking: this.booking, identifier: this.roomIdentifier }), h("div", { key: '55fcfa34b5a597dd63382e6c30b8a6c6802a7a49', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'e1c90f694ba9327a8213ba368b190e9eca2582dd', size: "medium", "data-drawer": "close", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '951370d5b77cbd20b78d4ca42dd8cf3c0c0ff201', form: this._id, size: "medium", loading: isRequestPending('/ReAllocate_Exposed_Room'), type: "submit", variant: "brand" }, "Confirm"))));
    }
    static get style() { return IrReallocationDrawerStyle0; }
}, [2, "ir-reallocation-drawer", {
        "open": [516],
        "booking": [16],
        "roomIdentifier": [1, "room-identifier"],
        "pool": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-reallocation-drawer", "ir-custom-button", "ir-date-view", "ir-drawer", "ir-empty-state", "ir-reallocation-form", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reallocation-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrReallocationDrawer);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-reallocation-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrReallocationDrawer as I, defineCustomElement as d };

//# sourceMappingURL=ir-reallocation-drawer2.js.map