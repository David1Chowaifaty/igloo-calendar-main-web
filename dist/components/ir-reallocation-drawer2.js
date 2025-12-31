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
        return (h("ir-drawer", { key: 'b3d7db362ec53649e062253e5800f54dea00d43d', label: "Reassign Unit", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && h("ir-reallocation-form", { key: '8f63999be44ec4df41160a3bafeffb8ce8877ba2', pool: this.pool, formId: this._id, booking: this.booking, identifier: this.roomIdentifier }), h("div", { key: 'e2d66e3579127ead904554c3e8b624aac1014858', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '6199b97f3c613cd1d491c71f0c848a7a535864f6', size: "medium", "data-drawer": "close", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '9af84bf1d2d9fa4c011232a2e9b3c632819d8e3b', form: this._id, size: "medium", loading: isRequestPending('/ReAllocate_Exposed_Room'), type: "submit", variant: "brand" }, "Confirm"))));
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