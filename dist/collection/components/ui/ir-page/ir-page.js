import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '306844eba3590966ead43c3a98be21dba5dbf910' }, h("ir-interceptor", { key: 'f3b84ecdca062b1ac0d8b04f392b5ec62acf8dc0' }), h("ir-toast", { key: '8737ea370d42b48868200f6c99e06725d90d9a51' }), h("main", { key: '57bf36b2da4c93158b625c2f81d8ae93e3ef7c44', class: "ir-page__container" }, h("header", { key: 'c900b32107470cd2f3e4cf7b60d9e1a7fa99df81', class: "tax-page__header" }, h("slot", { key: '9efe748487c61f6d208226a1b10b3235b3e80167', name: "heading" }, h("div", { key: '769a6639816de66df7b1847926760d8bb165756c', class: "tax-page__heading" }, h("h3", { key: '934097caa0c0c54b152f9ecd3c9f509bc9a7ac8c', class: "page-title" }, this.label), this.description && (h("p", { key: 'c7106892fb78816002b7dd4b5d253ca48fcbc8ac', class: "page__description" }, this.description, h("slot", { key: '006d7cbb36b2a51dda25e1998517de2c1281640f', name: "page-description" }))))), h("slot", { key: '153f39574252a7ced66622e4c3b44c761a17aeaa', name: "page-header" })), h("slot", { key: '011878acf203b599cabc6616828271e5354f8674' }))));
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
