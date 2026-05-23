import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'e5d5fb9b804784d6ffdea3978976ad44134a36a1' }, h("ir-interceptor", { key: 'a71692e59319d20b9780708b860692d140a47d99' }), h("ir-toast", { key: '30fc0262add660e50067a98ab6c248e1a4814bdb' }), h("main", { key: '3af9f0e957ea1d3356adce0566560c94b62117f3', class: "ir-page__container" }, h("header", { key: '1c9c7931e9143983f41f3bc4b068e90bd45b872a', class: "tax-page__header" }, h("slot", { key: '55e74544a9d6360245c67d0337555e4cd775397a', name: "heading" }, h("div", { key: '245d83970f566a3af86b9becc989838770c32298', class: "tax-page__heading" }, h("h3", { key: 'db33c61b131ae5dbc2c0173e1f4888c0cf78bb89', class: "page-title" }, this.label), this.description && h("p", { key: '29b056eb0473eb6f78f02544c43e728dbb36b397', class: "tax-page__subtitle" }, this.description))), h("slot", { key: 'e2c3436aa1aabaad7d9f7bc032e1273c8dd82193', name: "page-header" })), h("slot", { key: 'a425865a42b9e40b4cc0895225b5b0f1cad7d5a4' }))));
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
