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
        const content = (h(Fragment, { key: '2701cb71d57e8dde28a8a509265f4b6252f2ff9a' }, h("span", { key: '82a76aaa6a672588fa03555fde574801c9b531b9', class: "menu-item__icon" }, h("slot", { key: 'a108467342056591f15c28df63dba8c1c0ef6b53', name: "icon" })), h("span", { key: '772311af11e4b867b88667a787e1b9ec3bcb49b5', class: "menu-item__label" }, h("slot", { key: 'b8117bf43ce2dcb0f56da794e60c004f1a70a1aa' })), this.badge ? (h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (h(Host, { key: '024f878da6ee3f70949aeb89df766ca653e33139' }, this.href ? (h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (h("div", { class: contentClass }, content))));
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
                "reflect": true,
                "attribute": "href"
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
                "reflect": true,
                "attribute": "selected"
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
                "reflect": true,
                "attribute": "badge"
            }
        };
    }
}
