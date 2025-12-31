import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-drawer2.js';

const irMenuDrawerCss = ":host{display:block}.menu__drawer::part(header){border-bottom:0}.menu__drawer::part(body){padding:calc(var(--spacing) - 0.5rem)}";
const IrMenuDrawerStyle0 = irMenuDrawerCss;

const IrMenuDrawer = /*@__PURE__*/ proxyCustomElement(class IrMenuDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    open;
    componentWillLoad() {
        document.addEventListener('keydown', this.handleDocumentKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
    handleDocumentKeyDown = (e) => {
        const isModifierPressed = e.ctrlKey || e.metaKey;
        if (isModifierPressed && e.key === 'b') {
            e.preventDefault();
            this.open = !this.open;
        }
    };
    async openDrawer() {
        this.open = true;
    }
    render() {
        return (h("ir-drawer", { key: '127e90a1317c1b84ab50da0db0ff589eb9b063d4', class: "menu__drawer", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, style: { '--ir-drawer-width': '25rem' }, placement: "start" }, h("slot", { key: '1a74ecb902f199e93091c0408403228a5fd11810', name: "label", slot: "label" }), h("slot", { key: 'cfcce1cc1d7df6fd5e4d51d257d537e02336d357' }), h("slot", { key: '5781ef473fe98d0a2a387d918de14f8ff3b217cf', name: "footer", slot: "footer" })));
    }
    static get style() { return IrMenuDrawerStyle0; }
}, [1, "ir-menu-drawer", {
        "open": [1540],
        "openDrawer": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-menu-drawer", "ir-drawer"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-menu-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMenuDrawer);
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrMenuDrawer as I, defineCustomElement as d };

//# sourceMappingURL=ir-menu-drawer2.js.map