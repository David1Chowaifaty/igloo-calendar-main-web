import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as handleBodyOverflow } from './utils.js';
import { d as defineCustomElement$1 } from './ir-icon2.js';

const irSidebarCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding-block:var(--ir-sidebar-padding-block, 0);padding-inline:var(--ir-sidebar-padding-inline, 0.5rem);padding-top:var(--ir-sidebar-padding-top, unset);padding-bottom:var(--ir-sidebar-padding-bottom, unset);padding-left:var(--ir-sidebar-padding-left, unset);padding-right:var(--ir-sidebar-padding-right, unset)}.sidebar-right.active{right:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding-block:var(--ir-sidebar-padding-block, 0);padding-inline:var(--ir-sidebar-padding-inline, 0.5rem);padding-top:var(--ir-sidebar-padding-top, unset);padding-bottom:var(--ir-sidebar-padding-bottom, unset);padding-left:var(--ir-sidebar-padding-left, unset);padding-right:var(--ir-sidebar-padding-right, unset)}.sidebar-title{display:flex;align-items:center;justify-content:space-between;padding:0 1rem;border-bottom:1px solid #e4e5ec}.sidebar-title p{font-weight:500;font-size:1.2rem}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";
const IrSidebarStyle0 = irSidebarCss;

const IrSidebar = /*@__PURE__*/ proxyCustomElement(class IrSidebar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.irSidebarToggle = createEvent(this, "irSidebarToggle", 7);
        this.beforeSidebarClose = createEvent(this, "beforeSidebarClose", 7);
        /**
         * Which side of the screen the sidebar appears on.
         * Options: `'left'` or `'right'`.
         */
        this.side = 'right';
        /**
         * Whether to show the close (X) button in the sidebar header.
         */
        this.showCloseButton = true;
        /**
         * Whether the sidebar is open.
         * Can be used with two-way binding.
         */
        this.open = false;
    }
    componentDidLoad() {
        this.applyStyles();
    }
    handleSidebarStylesChange() {
        this.applyStyles();
    }
    handleOpenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            handleBodyOverflow(newValue);
        }
    }
    handleKeyDown(e) {
        if (e.key === 'Escape' && this.open) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            return this.toggleSidebar();
        }
        else {
            return;
        }
    }
    /**
     * Toggles the sidebar's visibility.
     *
     * - If `preventClose` is true, emits `beforeSidebarClose` and does nothing else.
     * - Otherwise, emits `irSidebarToggle` with the current `open` state.
     *
     * Example:
     * ```ts
     * const el = document.querySelector('ir-sidebar');
     * await el.toggleSidebar();
     * ```
     */
    async toggleSidebar() {
        if (this.preventClose) {
            this.beforeSidebarClose.emit();
            return;
        }
        this.irSidebarToggle.emit(this.open);
    }
    /**
     * Applies inline styles defined in `sidebarStyles` to the sidebar container.
     */
    applyStyles() {
        for (const property in this.sidebarStyles) {
            if (this.sidebarStyles.hasOwnProperty(property)) {
                this.sidebarRef.style[property] = this.sidebarStyles[property];
            }
        }
    }
    render() {
        let className = '';
        if (this.open) {
            className = 'active';
        }
        else {
            className = '';
        }
        return [
            h("div", { key: '466b554fffb38d3d9d0f2638d404cf0b09bb2b3b', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            h("div", { key: '54e1b9779670c5058127419bb744e03fa4d9dd22', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (h("div", { key: 'db9696caaddff0a5891c973a2f75c5195b1900ac', class: 'sidebar-title' }, h("p", { key: 'f98d7c7fdcd8a7c59358eedd2703b31ada5ff14e', class: 'p-0 m-0' }, this.label), h("div", { key: '04393e8f96472e9b7d7f1f533b4cbe9286ae0e58', class: 'p-0 m-0 sidebar-icon-container' }, h("ir-icon", { key: '42304cf1caef32a0e1e2d9c32099dab6991b3e6a', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, h("svg", { key: 'bc08ec52e3b3205c7d44750de8aa8eba53158415', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '461de5851dbabb5d6eabd868a78e032a32e13d05', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), h("slot", { key: 'b5d9e69d3a9c9d2cb2ede9bf624587e74ada39a1', name: "sidebar-body" })),
        ];
    }
    get el() { return this; }
    static get watchers() { return {
        "sidebarStyles": ["handleSidebarStylesChange"],
        "open": ["handleOpenChange"]
    }; }
    static get style() { return IrSidebarStyle0; }
}, [1, "ir-sidebar", {
        "name": [1],
        "side": [1],
        "showCloseButton": [4, "show-close-button"],
        "open": [1540],
        "sidebarStyles": [16],
        "label": [1],
        "preventClose": [4, "prevent-close"],
        "toggleSidebar": [64]
    }, [[16, "keydown", "handleKeyDown"]], {
        "sidebarStyles": ["handleSidebarStylesChange"],
        "open": ["handleOpenChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-sidebar", "ir-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSidebar);
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrSidebar as I, defineCustomElement as d };

//# sourceMappingURL=ir-sidebar2.js.map