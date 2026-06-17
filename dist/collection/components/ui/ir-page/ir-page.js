import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'fe96ea18cc08fa73a0ca8b0dd7542474e6cd428a' }, h("ir-interceptor", { key: 'c37234c6de364f6df4df5ba0acefa4a8828095db' }), h("ir-toast", { key: 'db3da5359010f54172d3b7c3c19406a64908f78a' }), h("main", { key: '435b1071ee9b1c12f17e31aaac841465c407ef04', class: "ir-page__container" }, h("header", { key: '9d5d59e381c66d2b28231834182c6f2e4cfae6f6', class: "tax-page__header" }, h("slot", { key: 'bb079d9eeb797eb1ded19a8b9915d6de21964b1b', name: "heading" }, h("div", { key: '8bed770904de8034bf2aef02da9bc4ffb608dc02', class: "tax-page__heading" }, h("h3", { key: '9d37b46623da50690a26f630831bb4a38c91adf5', class: "page-title" }, this.label), this.description && (h("p", { key: '441ffb65fcab7efb0d8b59bf143b2e3812ab2012', class: "page__description" }, this.description, h("slot", { key: '16cbe510d9741565cb72016c9c94cd01eaf70872', name: "page-description" }))))), h("slot", { key: '87e93a17723c992869f5bc9cfbc84963a6393404', name: "page-header" })), h("div", { key: '02b9c549ceaf7181312b53e7147b6d19953b970f', part: "body", class: 'page-body' }, h("slot", { key: '7c6b77f00176039f21b66a9d608d8a3bb52e90a6' })))));
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
