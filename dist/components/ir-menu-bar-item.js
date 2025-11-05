import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-new-badge2.js';

const irMenuBarItemCss = "*{padding:0;margin:0;box-sizing:border-box}:host{--mbi-color:#393c40;--mbi-color-hover:#16181b;--mbi-color-active:#212529;--mbi-bg-hover:#f4f5fa;--mbi-bg-active:#e9ecef;--mbi-pad:0.5rem 1.125rem 0.5rem 3.375rem}:host{display:block;width:100%;clear:both;font-weight:400;color:var(--mbi-color);text-align:inherit;white-space:nowrap;background-color:transparent;border:0;border-radius:0;cursor:pointer;transition:background-color 0.15s ease-in-out, color 0.15s ease-in-out;box-sizing:border-box !important;padding:var(--mbi-pad) !important}:host([href]){padding:0 !important}:host(:hover),:host(:focus){color:var(--mbi-color-hover);background-color:var(--mbi-bg-hover);text-decoration:none;outline:none}:host(:active){color:var(--mbi-color-active);background-color:var(--mbi-bg-active)}:host ::slotted(*){padding:0;margin:0;box-sizing:border-box}:host ::slotted(a),:host ::slotted(button),.menu-bar-item__link{display:block;width:100%;clear:both;font:inherit;font-weight:400;text-align:inherit !important;white-space:nowrap;color:inherit;background:transparent;border:0;border-radius:0;cursor:pointer;transition:background-color 0.15s ease-in-out, color 0.15s ease-in-out;box-sizing:border-box !important;padding:var(--mbi-pad) !important;text-decoration:none}:host ::slotted(a:hover),:host ::slotted(button:hover),:host ::slotted(a:focus),:host ::slotted(button:focus),.menu-bar-item__link:hover,.menu-bar-item__link:focus{text-decoration:none;outline:none}@media (min-width: 768px){:host,:host ::slotted(a),:host ::slotted(button),.menu-bar-item__link{padding:0.625rem 1.25rem !important;font-size:0.875rem;line-height:1;font-weight:400;color:#2a2e30}:host([href]){padding:0 !important}}";
const IrMenuBarItemStyle0 = irMenuBarItemCss;

const IrMenuBarItem$1 = /*@__PURE__*/ proxyCustomElement(class IrMenuBarItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.menuBarItemClick = createEvent(this, "menu-bar-item-click", 7);
        /**
         * Displays an `ir-new-badge` next to the trigger when set.
         */
        this.newBadge = false;
    }
    render() {
        return (h(Host, { key: '9b846f2544dcb5c0dc1bb3b417c64c583602de91', role: "menuitem", tabindex: "-1", part: "item", onClick: e => {
                if (!this.href)
                    this.menuBarItemClick.emit(e);
            } }, this.href ? (h("a", { target: this.target, onClick: e => {
                const ce = this.menuBarItemClick.emit(e);
                if (ce.defaultPrevented) {
                    e.preventDefault();
                }
            }, class: "menu-bar-item__link", href: this.href }, h("slot", null))) : (h("slot", null)), this.newBadge && h("ir-new-badge", { key: '5b9450dd9e04efb063d845add44ba9a4f3019f0c' })));
    }
    static get style() { return IrMenuBarItemStyle0; }
}, [1, "ir-menu-bar-item", {
        "href": [1],
        "target": [1],
        "newBadge": [516, "new"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-menu-bar-item", "ir-new-badge"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-menu-bar-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMenuBarItem$1);
            }
            break;
        case "ir-new-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrMenuBarItem = IrMenuBarItem$1;
const defineCustomElement = defineCustomElement$1;

export { IrMenuBarItem, defineCustomElement };

//# sourceMappingURL=ir-menu-bar-item.js.map