import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '3d228e09248633afb71d3f37eb5a23f29433f229' }, h("ir-interceptor", { key: '09c1eec684d537e53f0cc9b8b4a7da89da7799f3' }), h("ir-toast", { key: '847d5aadf65ecced44050571179aa8cb49338010' }), h("main", { key: 'd05ee7dd590a39938906f22939341229b7269a29', class: "ir-page__container" }, h("header", { key: '30e712c6728528a6fb038f49622dd7d1b487b11d', class: "tax-page__header" }, h("slot", { key: 'ad499bfb354ad56e72a09667e8d5541d76eef02b', name: "heading" }, h("div", { key: '6ecbcae7d62081842c84feef2bfea05c97993554', class: "tax-page__heading" }, h("h3", { key: '06643eaf449297080e45a729a498db89a27c2438', class: "page-title" }, this.label), this.description && h("p", { key: '5c7ddb2cc72854aba82a2a70d8affd0e1dd25002', class: "tax-page__subtitle" }, this.description))), h("slot", { key: 'ef4bb53e846a54519caf34ca5679ef71c3fed5f3', name: "page-header" })), h("slot", { key: '67e5acfac9900f02b4fcd37bb4dd9816450b1e36' }))));
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
