import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '2f45802d36f7038de7eef85306655670f94f8e47' }, h("ir-interceptor", { key: 'ddeba8b33571b044466df22503c8e1fb6016e6f3' }), h("ir-toast", { key: 'c4f16b13e0e468c26acff672888556bbef04383e' }), h("main", { key: '68a5b4290b3b70891e91c4a024618dfffddbbf7a', class: "ir-page__container" }, h("header", { key: '4019cc7a2deb1c47687da9affe541b90418fd60f', class: "tax-page__header" }, h("slot", { key: 'e03b5fae11560102793cce858e0601d4c822db80', name: "heading" }, h("div", { key: 'a4e2c58f4232c66e968d3ca242d4d525989797fb', class: "tax-page__heading" }, h("h3", { key: '168df18346b2c638953758ff46f7fc6755c53f90', class: "page-title" }, this.label), this.description && (h("p", { key: '6c6da3eecc5f20155b2c67bf515fc79c34e046dd', class: "page__description" }, this.description, h("slot", { key: 'c0d91a2d8bf42bd0e9ddcbd5f478b462e4a8df72', name: "page-description" }))))), h("slot", { key: '94dc6422d9be08363ee96252df78630887004812', name: "page-header" })), h("slot", { key: 'a15269569077a2543dde9afb6d1298c1dafa3ae2' }))));
    }
    static get is() { return "ir-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-page.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-page.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                "attribute": "label",
                "reflect": false
            },
            "description": {
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
                "attribute": "description",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-page.js.map
