import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-drawer2.js';

const irMenuDrawerCss = ":host{display:block}.menu__drawer::part(header){border-bottom:0}.menu__drawer::part(body){padding:calc(var(--spacing) - 0.5rem)}";
const IrMenuDrawerStyle0 = irMenuDrawerCss;

const IrMenuDrawer = /*@__PURE__*/ proxyCustomElement(class IrMenuDrawer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.menuOpenChanged = createEvent(this, "menuOpenChanged", 7);
    }
    open;
    menuOpenChanged;
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
    handleOpenChange() {
        this.menuOpenChanged.emit(this.open);
    }
    render() {
        return (h("ir-drawer", { key: '62b87e1d87896affbe317a2f1f7a9fbebe942f00', class: "menu__drawer", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, style: { '--ir-drawer-width': '25rem' }, placement: "start" }, h("slot", { key: '573a40eee1e9d9ba921c7901e5c8151816b6466a', name: "label", slot: "label" }), h("slot", { key: 'c9397496f7fd1c8d73367f027e98e23c172fe0bc' }), h("slot", { key: '073aa62b1f3752e08459003f3bbbe4162dcba0ed', name: "footer", slot: "footer" })));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
    static get style() { return IrMenuDrawerStyle0; }
}, [1, "ir-menu-drawer", {
        "open": [1540],
        "openDrawer": [64]
    }, undefined, {
        "open": ["handleOpenChange"]
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