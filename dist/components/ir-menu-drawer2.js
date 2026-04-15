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
        return (h("ir-drawer", { key: 'a939ae1dd3656a9fd2fb52a1e13d42e348a53841', class: "menu__drawer", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            }, style: { '--ir-drawer-width': '25rem' }, placement: "start" }, h("slot", { key: '4bd903cd7d19c5875c0b39dd85125d422fecfea8', name: "label", slot: "label" }), h("slot", { key: 'e05c94c61a86a3e235762daad9e3e049efa2235d' }), h("slot", { key: '00f66fe48b076c74054d8a68aae378d2f106a3b6', name: "footer", slot: "footer" })));
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