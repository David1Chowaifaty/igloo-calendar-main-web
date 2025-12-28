import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$7 } from './ir-custom-button2.js';
import { d as defineCustomElement$6 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$5 } from './ir-date-view2.js';
import { d as defineCustomElement$4 } from './ir-drawer2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
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
        return (h("ir-drawer", { key: '94b77a5086ff4782b2c285dd9dec45adc20e6d9e', label: "Reassign Unit", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && h("ir-reallocation-form", { key: '1f24940b7daedbaf7919c072ca8f8f777ec32952', formId: this._id, booking: this.booking, identifier: this.roomIdentifier }), h("div", { key: 'e86ec09ae677cf37a45bde6b866c9b757a6dc0f9', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '44abe00f39bc18b9ade972350ce1675c662c502c', size: "medium", "data-drawer": "close", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: 'fad562b3298fff2a3d2dad555b3ba28109e57782', form: this._id, size: "medium", loading: isRequestPending('/ReAllocate_Exposed_Room'), type: "submit", variant: "brand" }, "Confirm"))));
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
    const components = ["ir-reallocation-drawer", "ir-custom-button", "ir-custom-date-picker", "ir-date-view", "ir-drawer", "ir-input", "ir-reallocation-form", "ir-validator"];
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
        case "ir-custom-date-picker":
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
        case "ir-input":
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