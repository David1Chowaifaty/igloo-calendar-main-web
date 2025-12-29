import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$6 } from './ir-custom-button2.js';
import { d as defineCustomElement$5 } from './ir-date-view2.js';
import { d as defineCustomElement$4 } from './ir-drawer2.js';
import { d as defineCustomElement$3 } from './ir-empty-state2.js';
import { d as defineCustomElement$2 } from './ir-reallocation-form2.js';
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
        return (h("ir-drawer", { key: '9e29b5e7bf3bfe44b5528a039b6b7610d5bd90d7', label: "Reassign Unit", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && h("ir-reallocation-form", { key: 'f1816b6b983ae7d7ef12b1c7dca1b0cbd6316104', pool: this.pool, formId: this._id, booking: this.booking, identifier: this.roomIdentifier }), h("div", { key: '35b439107b7a68d7759ebd34cb4496356facd88c', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '04e6dbde2145426fdf782eb489e36721b9b1e120', size: "medium", "data-drawer": "close", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '26cedceb26a2b424bae422faad01f22e74137877', form: this._id, size: "medium", loading: isRequestPending('/ReAllocate_Exposed_Room'), type: "submit", variant: "brand" }, "Confirm"))));
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
    const components = ["ir-reallocation-drawer", "ir-custom-button", "ir-date-view", "ir-drawer", "ir-empty-state", "ir-reallocation-form", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reallocation-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrReallocationDrawer);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-reallocation-form":
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