import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-dialog2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-property-switcher-dialog-content2.js';

const irPropertySwitcherCss = ".sc-ir-property-switcher-h{display:block}.property-switcher__trigger.sc-ir-property-switcher{width:200px;padding:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.property-switcher__dialog.sc-ir-property-switcher::part(body){padding:0}";
const IrPropertySwitcherStyle0 = irPropertySwitcherCss;

const IrPropertySwitcher$1 = /*@__PURE__*/ proxyCustomElement(class IrPropertySwitcher extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.propertyChange = createEvent(this, "propertyChange", 7);
    }
    get el() { return this; }
    mode = 'dialog';
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
        return (h(Host, { key: '58992ccc205d036ba2de0c7d532adf3be165c140' }, this.trigger(), h("ir-dialog", { key: 'fca5ef636f2dd2a91a2bd67cdd1b0cd67cf1ab88', onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, withoutHeader: true, open: this.open, label: "Find property", class: "property-switcher__dialog" }, this.open && (h("ir-property-switcher-dialog-content", { key: '2a4ae5d5841b7202f42261e7fd6f0cbe546949c9', open: this.open, selectedPropertyId: this.selectedProperty?.id, onPropertySelected: this.handlePropertySelected })))));
    }
    static get style() { return IrPropertySwitcherStyle0; }
}, [2, "ir-property-switcher", {
        "mode": [1],
        "open": [32],
        "selectedProperty": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-property-switcher", "ir-custom-button", "ir-dialog", "ir-input", "ir-property-switcher-dialog-content"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-property-switcher":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPropertySwitcher$1);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-property-switcher-dialog-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrPropertySwitcher = IrPropertySwitcher$1;
const defineCustomElement = defineCustomElement$1;

export { IrPropertySwitcher, defineCustomElement };

//# sourceMappingURL=ir-property-switcher.js.map