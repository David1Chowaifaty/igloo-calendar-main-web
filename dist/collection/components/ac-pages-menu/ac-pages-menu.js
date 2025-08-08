import { h } from "@stencil/core";
import { v4 } from "uuid";
export class AcPagesMenu {
    constructor() {
        this.pages = [];
        this.location = 'nav';
    }
    render() {
        const isSheet = this.location === 'sheet';
        if (isSheet) {
            return (h("ul", { class: "mobile-nav-items accordion" }, this.pages.map(page => {
                var _a, _b;
                const id = (_a = page.id) !== null && _a !== void 0 ? _a : v4();
                if (page.subMenus) {
                    const _collapseId = `collapse-${page.label.toLowerCase()}`;
                    return (h("li", { key: id, id: id, class: `mobile-nav-item ${page.className}` }, h("button", { class: "btn mobile-nav-link d-flex align-items-center justify-content-between", style: { width: '100%' }, "data-toggle": "collapse", "data-parent": "#mainMenuNavigation", "aria-expanded": "false", "data-target": `#${_collapseId}`, "aria-controls": _collapseId }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.25rem' } }, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, page.isNew && h("span", { class: "new-badge" }, "new"), h("ir-icons", { name: "angle-down" }))), h("ul", { class: "collapse ", id: _collapseId }, page.subMenus.map(submenu => {
                        var _a, _b;
                        const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4();
                        return (h("li", { key: menuId, id: menuId, class: `mobile-nav-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, h("a", { onClick: e => this.linkClicked.emit(e), class: "mobile-nav-link", href: submenu.href }, submenu.icon && h("i", { class: submenu.icon }), h("span", null, submenu.label)), submenu.isNew && h("span", { class: "new-badge" }, "new")));
                    }))));
                }
                return (h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  mobile-nav-item` }, h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: "mobile-nav-link" }, h("span", null, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), page.isNew && h("span", { class: "new-badge" }, "new"))));
            })));
        }
        return (h("ul", { class: "navigation-items" }, this.pages.map(page => {
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
                    }, "data-menu": "dropdown", class: `dropdown  navigation-item ac-menu-dropdown ${isSheet ? 'mobile-nav-item' : ''} ${page.className}` }, h("button", { class: "btn dropdown-toggle navigation-link", "data-toggle": "dropdown" }, h("span", null, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), page.isNew && h("span", { class: "new-badge" }, "new")), h("ul", { class: "dropdown-menu " }, page.subMenus.map(submenu => {
                    var _a, _b;
                    const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4();
                    return (h("li", { key: menuId, id: menuId, class: `navigation-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, h("a", { onClick: e => this.linkClicked.emit(e), class: "dropdown-item", href: submenu.href }, h("span", null, submenu.icon && h("i", { class: submenu.icon }), h("span", null, submenu.label)), submenu.isNew && h("span", { class: "new-badge" }, "new"))));
                }))));
            }
            return (h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  navigation-item` }, h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: `navigation-link` }, h("span", null, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), page.isNew && h("span", { class: "new-badge" }, "new"))));
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
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ac-pages-menu/ac-pages-menu.tsx",
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
                "name": "linkClicked",
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
