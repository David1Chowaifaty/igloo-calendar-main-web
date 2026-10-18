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
        const content = (h(Fragment, { key: 'd525cfdacd003940de04d021b8276262dd71ab0a' }, h("span", { key: '54da96b5420f72487c2b501206ec2eab69fffa96', class: "menu-item__icon" }, h("slot", { key: '8a09f4a48ce25949cc6058e8054ae26fdb140f11', name: "icon" })), h("span", { key: 'e3ccf2d711a27cec004298bb2f121a6e50de5d21', class: "menu-item__label" }, h("slot", { key: '437e00ea8e54d4be11d42f57b2de20bee1f3e1ed' })), this.badge ? (h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (h(Host, { key: 'e5e8480562cc693c00b65056d1e6d356aaed84cf' }, this.href ? (h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (h("div", { class: contentClass }, content))));
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
