import { h } from "@stencil/core";
import { v4 } from "uuid";
export class AcPagesMenu {
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
    static get is() { return "ac-pages-menu"; }
    static get originalStyleUrls() {
        return {
            "$": ["ac-pages-menu.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ac-pages-menu.css"]
        };
    }
    static get properties() {
        return {
            "pages": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ACPages[]",
                    "resolved": "ACPages[]",
                    "references": {
                        "ACPages": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ac-pages-menu/ac-pages-menu.tsx",
                            "id": "src/components/ac-pages-menu/ac-pages-menu.tsx::ACPages"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "location": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'sheet' | 'nav'",
                    "resolved": "\"nav\" | \"sheet\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "location",
                "reflect": false,
                "defaultValue": "'nav'"
            }
        };
    }
    static get events() {
        return [{
                "method": "linkClicked",
                "name": "link-clicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ac-pages-menu.js.map
