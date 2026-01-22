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
        return (h("ir-drawer", { key: 'e534d991f1b19c29dbada8d0d12432efc726f073', label: "Reassign Unit", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && h("ir-reallocation-form", { key: '4248c09b82c3f52d1d8754a899b1dc637c6b273e', pool: this.pool, formId: this._id, booking: this.booking, identifier: this.roomIdentifier }), h("div", { key: '2d58d3d7b6bddd31329b08068e11c951b3820d5c', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'b9e68c50b00c420666b22a9aad219146c095c01e', size: "medium", "data-drawer": "close", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: 'c6498d2b325d1aaf732f98c4b58445c622d0dcf0', form: this._id, size: "medium", loading: isRequestPending('/ReAllocate_Exposed_Room'), type: "submit", variant: "brand" }, "Confirm"))));
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