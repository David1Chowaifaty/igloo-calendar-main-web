import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '0ae8eb57088ccc41094e12eae145327690c02342' }, h("ir-interceptor", { key: '12bf6a979f2048841fc22eed5fc56b54db72a78b' }), h("ir-toast", { key: '1681d73b0cc808b9e3590c73b09c4dfb7dc8c674' }), h("main", { key: 'a5e0d1f7437bf5c76225a06298f14ca4bc7513de', class: "ir-page__container" }, h("header", { key: 'add93675ea46cffa1e316f97bbae630687aad8cb', class: "tax-page__header" }, h("slot", { key: '0e541a076dfb1980b8bbeb6d366c4de2978e3d4c', name: "heading" }, h("div", { key: '0166c2dc414c1694dc559cd89a9cd2d6bec228d3', class: "tax-page__heading" }, h("h3", { key: 'a64ff5c13a0c98e05286f3e48295a71b5aed89ed', class: "page-title" }, this.label), this.description && (h("p", { key: '0670cbe9838cf15fec3b5fd96225692889404d42', class: "page__description" }, this.description, h("slot", { key: '5be2d3c07235b27f7a6b33516fa281b9df367223', name: "page-description" }))))), h("slot", { key: '7e8f50bfb7a2274aaaed5dab0a2de2a78d41eae9', name: "page-header" })), h("div", { key: '0cee7cef44b342f87b4d9c160685474babb17aed', part: "body", class: 'page-body' }, h("slot", { key: '9780eb1b24cb8ec026d4009c548e198a68287cca' })))));
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
