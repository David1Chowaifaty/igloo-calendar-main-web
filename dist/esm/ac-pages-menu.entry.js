import { r as registerInstance, c as createEvent, h } from './index-b3dce66a.js';
import { v as v4 } from './v4-964634d6.js';

const acPagesMenuCss = ":host{display:flex}.navigation-item{margin:0}.navigation-items{list-style:none}.navigation-items .dropdown-item{margin:0;padding:10px 20px !important;font-weight:400;font-size:1rem;line-height:1 !important}.navigation-item{margin:0;color:white !important}.navigation-link{display:block;padding:0.75rem 1rem;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.navigation-link:hover{background-color:rgba(255, 255, 255, 0.05);color:#1f2937;text-decoration:none}.mobile-nav-items{list-style:none;margin:0;padding:1rem 0}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;min-width:2rem;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.5rem !important;border-radius:4px}.mobile-nav-item{margin:0;list-style:none !important}.navigation-item .dropdown-toggle::after{content:none !important}.menu-icon-container{display:flex !important;align-items:center !important;gap:0.25rem}.mobile-nav-link{display:flex;align-items:center;justify-content:space-between;padding:0.75rem 1rem;color:#374151 !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (min-width: 768px){.navigation-items{display:flex;list-style:none;align-items:center;margin:0;padding:0}.navigation-link{display:flex;align-items:center;padding:0.8rem 0.6rem;color:white !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}}.ac-menu-dropdown .dropdown-menu{min-width:14rem}@media (min-width: 992px){.ac-menu-dropdown .dropdown-menu{left:0 !important;right:auto !important}}@media (max-width: 991.98px){.ac-menu-dropdown .dropdown-menu{right:0 !important;left:auto !important}}";
const AcPagesMenuStyle0 = acPagesMenuCss;

const AcPagesMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.linkClicked = createEvent(this, "link-clicked", 7);
    }
    pages = [];
    location = 'nav';
    linkClicked;
    Icon({ name }) {
        return [h("i", { class: name })];
    }
    render() {
        const isSheet = this.location === 'sheet';
        if (isSheet) {
            return (h("ul", { class: "mobile-nav-items accordion", id: "mainMenuNavigation" }, this.pages.map(page => {
                const id = page.id ?? v4();
                if (page.subMenus) {
                    const _collapseId = `collapse-${page.label.toLowerCase()}`;
                    return (h("li", { key: id, id: id, class: `mobile-nav-item ${page.className}` }, h("button", { class: "btn mobile-nav-link menu-icon-container justify-content-between", style: { width: '100%' }, "data-toggle": "collapse", "data-parent": "#mainMenuNavigation", "aria-expanded": "false", "data-target": `#${_collapseId}`, "aria-controls": _collapseId }, h("div", { class: 'menu-icon-container' }, page.icon && this.Icon({ name: page.icon }), h("span", null, page.label), page.isNew && (h("span", { class: "new-badge", id: page.badgeId }, "new"))), h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("ir-icons", { name: "angle-down" }))), h("ul", { class: "collapse ", id: _collapseId }, page.subMenus.map(submenu => {
                        const menuId = submenu.id ?? v4();
                        return (h("li", { key: menuId, id: menuId, class: `mobile-nav-item menu-icon-container ${submenu.className ?? ''}`, style: { width: '100%' } }, h("a", { onClick: e => {
                                e.preventDefault();
                                this.linkClicked.emit(e);
                            }, class: "mobile-nav-link w-100", href: submenu.href }, h("div", { class: "menu-icon-container" }, submenu.icon && this.Icon({ name: submenu.icon }), h("span", null, submenu.label), submenu.isNew && (h("span", { id: submenu.badgeId, class: "new-badge" }, "new"))))));
                    }))));
                }
                return (h("li", { key: id, id: id, class: `${page.className ?? ''}  mobile-nav-item` }, h("a", { href: page.href, onClick: e => {
                        e.preventDefault();
                        this.linkClicked.emit(e);
                    }, class: "mobile-nav-link" }, h("div", { class: "menu-icon-container" }, page.icon && this.Icon({ name: page.icon }), h("span", null, page.label), page.isNew && (h("span", { id: page.badgeId, class: "new-badge" }, "new"))))));
            })));
        }
        return (h("ul", { class: "navigation-items" }, this.pages.map(page => {
            const id = page.id ?? v4();
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
                    }, "data-menu": "dropdown", class: `dropdown  navigation-item ac-menu-dropdown ${isSheet ? 'mobile-nav-item' : ''} ${page.className}` }, h("button", { class: "btn dropdown-toggle menu-icon-container navigation-link ", "data-toggle": "dropdown" }, h("div", { class: "menu-icon-container" }, page.icon && this.Icon({ name: page.icon }), h("span", null, page.label)), page.isNew && (h("span", { id: page.badgeId, class: "new-badge" }, "new"))), h("ul", { class: "dropdown-menu dropdown-menu-right dropdown-menu-lg-left" }, page.subMenus.map(submenu => {
                    const menuId = submenu.id ?? v4();
                    return (h("li", { key: menuId, id: menuId, class: `navigation-item ${submenu.className ?? ''}` }, h("a", { onClick: e => {
                            this.linkClicked.emit(e);
                        }, class: "dropdown-item menu-icon-container", href: submenu.href }, h("div", { class: "menu-icon-container mr-auto" }, submenu.icon && this.Icon({ name: submenu.icon }), h("span", null, submenu.label)), submenu.isNew && (h("span", { id: submenu.badgeId, class: "new-badge" }, "new")))));
                }))));
            }
            return (h("li", { key: id, id: id, class: `${page.className ?? ''}  navigation-item` }, h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: `navigation-link` }, h("div", { class: "menu-icon-container" }, page.icon && this.Icon({ name: page.icon }), h("span", null, page.label), page.isNew && (h("span", { id: page.badgeId, class: "new-badge" }, "new"))))));
        })));
    }
};
AcPagesMenu.style = AcPagesMenuStyle0;

export { AcPagesMenu as ac_pages_menu };

//# sourceMappingURL=ac-pages-menu.entry.js.map