import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    /** Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list. */
    handledEndpoints;
    render() {
        return (h(Host, { key: '527dda192942ce604d9a0a20353230b22f879c04' }, h("ir-interceptor", { key: 'f7f057779e5b482929685810416a4a8b53299c63', ...(this.handledEndpoints ? { handledEndpoints: this.handledEndpoints } : {}) }), h("ir-toast", { key: '1567ccf0fc5500a9e1e6bfc676d158c075e85cb6' }), h("main", { key: '889b7b478f895201c12f5f6cc04d1328acf5b596', part: "main", class: "ir-page__container" }, h("header", { key: 'a06c538072e1736f722f3cd386c14d1318459601', part: "header", class: "tax-page__header" }, h("slot", { key: '327fab92c16fc1047b70aa4006b0d94df3c30c5e', name: "heading" }, h("div", { key: '4427f4444400ce96f826b00c62695ee0b274de02', class: "tax-page__heading" }, h("h3", { key: 'e29912ff1d34493c3caf454563f9b4119c4575c0', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '285225caccad4e5d5d7e9726846166730d8e8e1a', part: "description", class: "page__description" }, this.description, h("slot", { key: '6ce23dcbfd1b6296fb9cce1eb9d57e532e994615', name: "page-description" }))))), h("slot", { key: 'd47b9778bf5584e32c86983531a741073660ad11', name: "page-header" })), h("div", { key: '1eeeae853a76ac5f40dcbd6e34b6b528b919e4a7', part: "body", class: 'page-body' }, h("slot", { key: '5e44ce12c8234aa295157ca0519baa50a711736d' })))));
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
            },
            "handledEndpoints": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Endpoints that show the embedded interceptor's full-page loader. Omit to keep the interceptor's default list."
                },
                "getter": false,
                "setter": false
            }
        };
    }
}
