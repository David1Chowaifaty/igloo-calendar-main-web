import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'ae3c45d20ed5f74489f13edca933bfdef7ad5046' }, h("ir-interceptor", { key: 'ccc52276aee25bb99365ad30a964a8397db956b7' }), h("ir-toast", { key: '5f2887a505278a71805327e205be2497bcf63eaa' }), h("main", { key: '389a9c691ba3c1ef9c09074732c94b9a9af6a26c', part: "main", class: "ir-page__container" }, h("header", { key: 'f3de82171d8bb8272a23a0532d8c868791303605', part: "header", class: "tax-page__header" }, h("slot", { key: 'ce81c97320c8368a1c0fe1aa730b7e6d3aed65dc', name: "heading" }, h("div", { key: '194c4afb707f8fd1274230969dd19edebdc5605a', class: "tax-page__heading" }, h("h3", { key: 'b6f2d1d9f0d35bbafccc0cb408799e7e0b866175', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '5b93c8597ce177d7292ee8f02049dec4b43636d6', part: "description", class: "page__description" }, this.description, h("slot", { key: '4ab30b740051fd0010e4eedf15e0b60c557ab37a', name: "page-description" }))))), h("slot", { key: 'bf1c9813be3749caf5ece1b06f3975ce348fff24', name: "page-header" })), h("div", { key: '8155e809d0f2d7dc5bccfdd5c967587dfb2c1a27', part: "body", class: 'page-body' }, h("slot", { key: '7187d32b99f58f74dbfd6c627d9b0e4e799129ab' })))));
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
                "reflect": false,
                "attribute": "label"
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
                "reflect": false,
                "attribute": "description"
            }
        };
    }
}
