import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '78509332d78daba3e8ac1cc00be7a248416c5fb8' }, h("ir-interceptor", { key: '58fee75b4ed0035653a5f42378f0afd9e82de48c' }), h("ir-toast", { key: 'e42df8e4086b0167db82314756ad58699749322f' }), h("main", { key: 'bb9fa9808f1fa159355baac667cd29a08950616d', class: "ir-page__container" }, h("header", { key: '54ed2c712acb93b917e6796b21b877262ed86370', class: "tax-page__header" }, h("slot", { key: '90f2e79df1c841770e5aea61e844c49b8b6d5954', name: "heading" }, h("div", { key: '4d80056b47b92913eafad8597ed6538e5b64539c', class: "tax-page__heading" }, h("h3", { key: '099b0a67881b3f5a75f17eaa049dc36c66d1dfb7', class: "page-title" }, this.label), this.description && h("p", { key: '628c7b32d17bbea16de41525c7354e674500016e', class: "tax-page__subtitle" }, this.description))), h("slot", { key: 'ca8842e4913d8b2ef9af01e287ab6ac6a39f3620', name: "page-header" })), h("slot", { key: 'fc16b3ba6d56d18cd175ae6f7db81366c99b345c' }))));
    }
    static get is() { return "ir-page"; }
    static get encapsulation() { return "scoped"; }
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
