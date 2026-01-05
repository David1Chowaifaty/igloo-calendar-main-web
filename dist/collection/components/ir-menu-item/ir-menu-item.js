import { Fragment, Host, h } from "@stencil/core";
export class IrMenuItem {
    href;
    selected;
    badge;
    render() {
        const contentClass = {
            'menu-item__link': true,
            'menu-item__link--selected': !!this.selected,
            'menu-item__link--clickable': !!this.href,
        };
        const content = (h(Fragment, { key: 'e376ef40c6520b4d8a4809f21cf80ecc644ae494' }, h("span", { key: '4582e8feb108280d90c3eebeb262fa6056cbdca4', class: "menu-item__icon" }, h("slot", { key: '667e575a7c0113257f35815b71ee98ba4bb30c69', name: "icon" })), h("span", { key: '1f6bfdac078a7bd3fe425664ccba386c81383304', class: "menu-item__label" }, h("slot", { key: 'f3f593f37f22d73fa0eb92b368c370b06eb7c399' })), this.badge ? (h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (h(Host, { key: '671cfaa06d79e149efd89a7f904f05f3d31f5c32' }, this.href ? (h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (h("div", { class: contentClass }, content))));
    }
    static get is() { return "ir-menu-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-menu-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-menu-item.css"]
        };
    }
    static get properties() {
        return {
            "href": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "href",
                "reflect": true
            },
            "selected": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "selected",
                "reflect": true
            },
            "badge": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "badge",
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=ir-menu-item.js.map
