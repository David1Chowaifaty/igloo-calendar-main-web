import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'f793c4edb7ab526ac33468b3793b6f44df81f4ea' }, h("ir-interceptor", { key: '71733dc55ff2dcaf2d7faf28f06e609ba26ef5b8' }), h("ir-toast", { key: '98999c1656927e896a01e353a1d4406e13c6257b' }), h("main", { key: '517572141c9cb6a9ddc8254f8cf5e366dde38021', class: "ir-page__container" }, h("header", { key: 'd9b867978e94cd5122d2f74702ed1d258922c6ce', class: "tax-page__header" }, h("slot", { key: 'ef668ba411b5d391e0ea646f0c4fb694ce8a2c3d', name: "heading" }, h("div", { key: '48292f2e8a22f51d9a1a975e6ff3b8482853d90f', class: "tax-page__heading" }, h("h3", { key: '540e812f7f7468af0a60baf3ff8662bcf64628e4', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: 'd470460b58857a8ce3324d2bfec849959397a404', part: "description", class: "page__description" }, this.description, h("slot", { key: '5494fdec769725e67d41ea8b23b654e06071e4ea', name: "page-description" }))))), h("slot", { key: '72b27e9fe3e78b64b2f2e7608c89a91ecba8e5e4', name: "page-header" })), h("div", { key: '3d55a96ea413868733ffdbec22446dea876d9c6a', part: "body", class: 'page-body' }, h("slot", { key: '3729eb390dfdb8253be32dd737d1e374d85a4f19' })))));
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
