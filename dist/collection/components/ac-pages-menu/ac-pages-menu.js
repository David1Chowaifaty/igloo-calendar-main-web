import { h } from "@stencil/core";
import { v4 } from "uuid";
export class AcPagesMenu {
    constructor() {
        this.pages = [];
        this.location = 'nav';
    }
    render() {
        const isSheet = this.location === 'sheet';
        return (h("ul", { key: '12757f36510ab3ca42c9ed717f799379bcf783f2', class: "navigation-items", id: "main-menu-navigation", "data-menu": "menu-navigation" }, this.pages.map(page => {
            var _a, _b;
            const id = (_a = page.id) !== null && _a !== void 0 ? _a : v4();
            if (page.subMenus) {
                return (h("li", { key: id, id: id, "data-menu": "dropdown", class: `dropdown navigation-item ac-menu-dropdown ${isSheet ? 'mobile-nav-item' : ''} ${page.className}` }, h("a", { class: "dropdown-toggle navigation-link", href: "#", "data-toggle": "dropdown" }, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), h("ul", { class: "dropdown-menu" }, page.subMenus.map(submenu => {
                    var _a, _b;
                    const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4();
                    return (h("li", { key: menuId, id: menuId, class: `navigation-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, h("a", { onClick: e => this.linkClicked.emit(e), class: "dropdown-item", href: submenu.href, "data-toggle": "dropdown" }, submenu.icon && h("i", { class: submenu.icon }), h("span", null, submenu.label))));
                }))));
            }
            return (h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  navigation-item` }, h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: `navigation-link` }, page.icon && h("i", { class: page.icon }), h("span", null, page.label))));
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
