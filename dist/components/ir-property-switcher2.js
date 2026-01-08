import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-dialog2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-property-switcher-dialog-content2.js';

const irPropertySwitcherCss = ".sc-ir-property-switcher-h{display:block}.property-switcher__trigger.sc-ir-property-switcher{width:200px;padding:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.property-switcher__dialog.sc-ir-property-switcher::part(body){padding:0}";
const IrPropertySwitcherStyle0 = irPropertySwitcherCss;

const IrPropertySwitcher = /*@__PURE__*/ proxyCustomElement(class IrPropertySwitcher extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.propertyChange = createEvent(this, "propertyChange", 7);
    }
    get el() { return this; }
    mode = 'dialog';
    ticket;
    open = false;
    selectedProperty;
    /** Emits whenever the user selects a new property from the switcher dialog. */
    propertyChange;
    trigger() {
        return (h("ir-custom-button", { onClickHandler: () => {
                this.open = !this.open;
            }, withCaret: true, variant: "neutral", appearance: "plain" }, h("p", { class: "property-switcher__trigger" }, this.selectedProperty?.name ?? 'Select property')));
    }
    handlePropertySelected = (event) => {
        this.selectedProperty = event.detail;
        this.open = false;
        this.propertyChange.emit(event.detail);
    };
    render() {
        return (h(Host, { key: '287a8b94ebdd635ce0fd8afc3eaaa27b48f9ec78' }, this.trigger(), h("ir-dialog", { key: '09944cba0f9f35d15316864cc6ae17b85624dbd3', onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, withoutHeader: true, open: this.open, label: "Find property", class: "property-switcher__dialog" }, this.open && (h("ir-property-switcher-dialog-content", { key: '1d3243ff3d342cb0234e364572b3f3de4d2815bf', open: this.open, selectedPropertyId: this.selectedProperty?.id, onPropertySelected: this.handlePropertySelected })))));
    }
    static get style() { return IrPropertySwitcherStyle0; }
}, [2, "ir-property-switcher", {
        "mode": [1],
        "ticket": [1],
        "open": [32],
        "selectedProperty": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-property-switcher", "ir-custom-button", "ir-dialog", "ir-input", "ir-property-switcher-dialog-content"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-property-switcher":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPropertySwitcher);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-property-switcher-dialog-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPropertySwitcher as I, defineCustomElement as d };

//# sourceMappingURL=ir-property-switcher2.js.map