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
        const content = (h(Fragment, { key: 'ee913d2176eb2d4bef238f70f995b09637929cdd' }, h("span", { key: '71d99718f74b612d984e2d603b57f3f8ab9476a9', class: "menu-item__icon" }, h("slot", { key: 'a2e00be35b6b833de1eaf996e6d434afd419c4f0', name: "icon" })), h("span", { key: '09f0aaded1bc60459dbf32a52e2757701e62601c', class: "menu-item__label" }, h("slot", { key: '7b3fd65799608fb3ba88aa6c1996b4a38bad7213' })), this.badge ? (h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (h(Host, { key: '1f50482a61b8d0a04025ef3536d17cd62a91fae4' }, this.href ? (h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (h("div", { class: contentClass }, content))));
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
