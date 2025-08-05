import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { v as v4 } from './v4.js';

const acPagesMenuCss = ":host{display:flex}.nav-item{margin:0}.nav-items{list-style:none;margin:0;padding:1rem 0}.nav-item{margin:0;color:white !important}.nav-link{display:block;padding:0.75rem 1rem;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.nav-link:hover{background-color:rgba(255, 255, 255, 0.05);color:#1f2937;text-decoration:none}@media (min-width: 768px){.nav-items{display:flex;list-style:none;align-items:center;margin:0;padding:0}.nav-link{display:flex;align-items:center;padding:0.8rem 0.6rem;color:white !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}}";
const AcPagesMenuStyle0 = acPagesMenuCss;

const AcPagesMenu = /*@__PURE__*/ proxyCustomElement(class AcPagesMenu extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.linkClicked = createEvent(this, "linkClicked", 7);
        this.pages = [];
        this.location = 'nav';
    }
    render() {
        const isSheet = this.location === 'sheet';
        return (h("ul", { key: 'bf5b6a1f4443f4a4220ffa6e5fbfd84fceb6a1bf', class: "nav-items", id: "main-menu-navigation", "data-menu": "menu-navigation" }, this.pages.map(page => {
            var _a, _b;
            const id = (_a = page.id) !== null && _a !== void 0 ? _a : v4();
            if (page.subMenus) {
                return (h("li", { key: id, id: id, "data-menu": "dropdown", class: `dropdown nav-item ac-menu-dropdown ${isSheet ? 'mobile-nav-item' : ''} ${page.className}` }, h("a", { class: "dropdown-toggle nav-link", href: "#", "data-toggle": "dropdown" }, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), h("ul", { class: "dropdown-menu" }, page.subMenus.map(submenu => {
                    var _a, _b;
                    const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4();
                    return (h("li", { key: menuId, id: menuId, class: `nav-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, h("a", { onClick: e => this.linkClicked.emit(e), class: "dropdown-item", href: submenu.href, "data-toggle": "dropdown" }, submenu.icon && h("i", { class: submenu.icon }), h("span", null, submenu.label))));
                }))));
            }
            return (h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  nav-item` }, h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: `nav-link` }, page.icon && h("i", { class: page.icon }), h("span", null, page.label))));
        })));
    }
    static get style() { return AcPagesMenuStyle0; }
}, [0, "ac-pages-menu", {
        "pages": [16],
        "location": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ac-pages-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "ac-pages-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AcPagesMenu);
            }
            break;
    } });
}

export { AcPagesMenu as A, defineCustomElement as d };

//# sourceMappingURL=ac-pages-menu2.js.map