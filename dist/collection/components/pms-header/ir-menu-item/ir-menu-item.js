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
        const content = (h(Fragment, { key: '17ae85a3d4dcf5bccf4cfb7616fe98b1bf4b9194' }, h("span", { key: '21b963d49165f2efba2b2840a7b61af83a731379', class: "menu-item__icon" }, h("slot", { key: '87e0121ac08c682762476d46fedd6bc61f4d618c', name: "icon" })), h("span", { key: 'dad8cf1b93fac6d902f984ddaff0dd0b5b8e61f9', class: "menu-item__label" }, h("slot", { key: '73e40a224df95ba52f6a16c2265331d5be92b069' })), this.badge ? (h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (h(Host, { key: '0ac73e73b73197932595d1eee3654a3252b4c607' }, this.href ? (h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (h("div", { class: contentClass }, content))));
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
