import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icons2.js';
import { v as v4 } from './v4.js';

const acPagesMenuCss = ":host{display:flex}.navigation-item{margin:0}.navigation-items{list-style:none}.navigation-items .dropdown-item{margin:0;padding:10px 20px !important;font-weight:400;font-size:1rem;line-height:1 !important}.navigation-item{margin:0;color:white !important}.navigation-link{display:block;padding:0.75rem 1rem;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.navigation-link:hover{background-color:rgba(255, 255, 255, 0.05);color:#1f2937;text-decoration:none}.mobile-nav-items{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item{margin:0}.navigation-item .dropdown-toggle::after{content:none !important}.mobile-nav-link{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (min-width: 768px){.navigation-items{display:flex;list-style:none;align-items:center;margin:0;padding:0}.navigation-link{display:flex;align-items:center;padding:0.8rem 0.6rem;color:white !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}}";
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
        if (isSheet) {
            return (h("ul", { class: "mobile-nav-items accordion", "data-menu": "menu-navigation" }, this.pages.map(page => {
                var _a, _b;
                const id = (_a = page.id) !== null && _a !== void 0 ? _a : v4();
                if (page.subMenus) {
                    const _collapseId = `collapse-${page.label.toLowerCase()}`;
                    return (h("li", { key: id, id: id, class: `mobile-nav-item ${page.className}` }, h("button", { class: "btn mobile-nav-link d-flex align-items-center justify-content-between", style: { width: '100%' }, "data-toggle": "collapse", "data-parent": "#mainMenuNavigation", "aria-expanded": "false", "data-target": `#${_collapseId}`, "aria-controls": _collapseId }, h("span", null, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), h("ir-icons", { name: "angle-down" })), h("ul", { class: "collapse ", id: _collapseId }, page.subMenus.map(submenu => {
                        var _a, _b;
                        const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4();
                        return (h("li", { key: menuId, id: menuId, class: `mobile-nav-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, h("a", { onClick: e => this.linkClicked.emit(e), class: "mobile-nav-link", href: submenu.href }, submenu.icon && h("i", { class: submenu.icon }), h("span", null, submenu.label))));
                    }))));
                }
                return (h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  mobile-nav-item` }, h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: "mobile-nav-link" }, page.icon && h("i", { class: page.icon }), h("span", null, page.label))));
            })));
        }
        return (h("ul", { class: "navigation-items", "data-menu": "menu-navigation" }, this.pages.map(page => {
            var _a, _b;
            const id = (_a = page.id) !== null && _a !== void 0 ? _a : v4();
            if (page.subMenus) {
                return (h("li", { key: id, id: id, onMouseEnter: e => {
                        if (window.innerWidth < 765) {
                            return;
                        }
                        e.target.classList.add('show');
                    }, onMouseLeave: e => {
                        if (window.innerWidth < 765) {
                            return;
                        }
                        e.target.classList.remove('show');
                    }, "data-menu": "dropdown", class: `dropdown  navigation-item ac-menu-dropdown ${isSheet ? 'mobile-nav-item' : ''} ${page.className}` }, h("a", { class: "dropdown-toggle navigation-link", href: "#", "data-toggle": "dropdown" }, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), h("ul", { class: "dropdown-menu " }, page.subMenus.map(submenu => {
                    var _a, _b;
                    const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4();
                    return (h("li", { key: menuId, id: menuId, class: `navigation-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, h("a", { onClick: e => this.linkClicked.emit(e), class: "dropdown-item", href: submenu.href }, submenu.icon && h("i", { class: submenu.icon }), h("span", null, submenu.label))));
                }))));
            }
            return (h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  navigation-item` }, h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: `navigation-link` }, page.icon && h("i", { class: page.icon }), h("span", null, page.label))));
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
    const components = ["ac-pages-menu", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ac-pages-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AcPagesMenu);
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AcPagesMenu as A, defineCustomElement as d };

//# sourceMappingURL=ac-pages-menu2.js.map