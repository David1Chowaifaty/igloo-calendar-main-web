import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icon2.js';

const irSidebarCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding:var(--ir-sidebar-padding, 0.5rem 0)}.sidebar-right.active{right:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding:var(--ir-sidebar-padding, 0.5rem 0)}.sidebar-title{display:flex;align-items:center;justify-content:space-between;padding:0 1rem;border-bottom:1px solid #e4e5ec}.sidebar-title p{font-weight:500;font-size:1.2rem}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";
const IrSidebarStyle0 = irSidebarCss;

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
            h("div", { key: 'b2eed7a5ae1e98bc8d635aa00b9fe35d63f4effa', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            h("div", { key: '54a1e1679664cddfa24ae65839ba27993ee23464', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (h("div", { key: 'c26abd29a8d51c320511abddb8918f478d4d41e8', class: 'sidebar-title' }, h("p", { key: '2809968dc5bfd6c3d4250aac0486b1a363e67a8e', class: 'p-0 m-0' }, this.label), h("div", { key: '1fbaf16bb47313a28dde2197b5f5df0f1e1e0031', class: 'p-0 m-0 sidebar-icon-container' }, h("ir-icon", { key: '2c6ad581f21f17ef643ba54352a1c7bd07d7e785', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, h("svg", { key: '4fc4919ab0cda2a394c1f67393219758d38369e2', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '5af9db7bf32e06174470620b7445a885b6017083', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), h("slot", { key: '03782cfa47902d2b4f670ea22cf144ea941c7df2', name: "sidebar-body" })),
        ];
    }
    static get watchers() { return {
        "sidebarStyles": ["handleSidebarStylesChange"]
    }; }
    static get style() { return IrSidebarStyle0; }
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