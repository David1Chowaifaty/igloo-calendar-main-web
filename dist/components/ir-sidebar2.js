import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icon2.js';

const irSidebarCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding:var(--ir-sidebar-padding, 0.5rem 0)}.sidebar-right.active{right:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding:var(--ir-sidebar-padding, 0.5rem 0)}.sidebar-title{display:flex;align-items:center;justify-content:space-between;padding:0 1rem;border-bottom:1px solid #e4e5ec}.sidebar-title p{font-weight:500;font-size:1.2rem}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";

const IrSidebar = /*@__PURE__*/ proxyCustomElement(class IrSidebar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.irSidebarToggle = createEvent(this, "irSidebarToggle", 7);
        this.side = 'right';
        this.showCloseButton = true;
        this.open = false;
    }
    applyStyles() {
        for (const property in this.sidebarStyles) {
            if (this.sidebarStyles.hasOwnProperty(property)) {
                this.sidebarRef.style[property] = this.sidebarStyles[property];
            }
        }
    }
    handleSidebarStylesChange() {
        this.applyStyles();
    }
    componentWillLoad() {
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidLoad() {
        // If esc key is pressed, close the modal
        this.applyStyles();
        document.addEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
        if (e.key === 'Escape') {
            return this.toggleSidebar();
        }
        else {
            return;
        }
    }
    // Unsubscribe to the event when the component is removed from the DOM
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    async toggleSidebar() {
        this.irSidebarToggle.emit(this.open);
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
            h("div", { key: '59423db95897acbc1a7a8edf98a0538b8c5e2906', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            h("div", { key: '8304bf96719b8fc3d7519d89e5360a35306f8a3c', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (h("div", { key: '2739a18c0b81f36b86b1d1477d0e2fab691f90b0', class: 'sidebar-title' }, h("p", { key: 'eaa25e8cd060fc40408e23eca3fcc82c285b7330', class: 'p-0 m-0' }, this.label), h("div", { key: 'c53550decffda8c89584d4e65f50f7eb5763f3e6', class: 'p-0 m-0 sidebar-icon-container' }, h("ir-icon", { key: 'fa3c6063cfaa8cfdb521dfec9441518c6959e626', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, h("svg", { key: '8ea68d53f3223a1dc86873975d12e72c1c34eae3', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '25fe07ce89894a26139c8a73abec4225234f9543', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), h("slot", { key: 'fb040f0019904c7a83ac3298cd23f89276c23a1d', name: "sidebar-body" })),
        ];
    }
    static get watchers() { return {
        "sidebarStyles": ["handleSidebarStylesChange"]
    }; }
    static get style() { return irSidebarCss; }
}, [1, "ir-sidebar", {
        "name": [1],
        "side": [1],
        "showCloseButton": [4, "show-close-button"],
        "open": [1540],
        "sidebarStyles": [16],
        "label": [1],
        "toggleSidebar": [64]
    }, undefined, {
        "sidebarStyles": ["handleSidebarStylesChange"]
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

//# sourceMappingURL=ir-sidebar2.js.map