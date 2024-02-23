import { h } from "@stencil/core";
export class IrLoader {
    constructor() {
        this.size = 'md';
    }
    render() {
        return (h("div", { key: '10cffa1fb9d14269cf4ac499c7c6b45f21c6c419', class: `lds-default ${this.size}` }, h("div", { key: 'fdb8c95f00d6ee0093c30afd914445d65602902d' }), h("div", { key: 'cfce1a11bd6abd051a85d59f36863332d7747562' }), h("div", { key: 'a7d75a08a9beb3ac2ee2d41d1f0f0d3a49bab256' }), h("div", { key: 'a8b3b1d8b6790905bb6b9bc6ff57e6b36823fe6e' }), h("div", { key: '9ab98fa0b3ebb6b24fc4a3716cdbc6fabd7fd188' }), h("div", { key: 'cd4864a1bf985a1aaed5b94d9ee4bdf895e604a6' }), h("div", { key: '74a9e24e4757deaabc0de96ad8de5f7f1373ce8b' }), h("div", { key: '5568efba1da13864829b2a948c05a288229a1bb8' }), h("div", { key: '29ac9453d76f525b376085eeb587830d54571306' }), h("div", { key: 'fa769949fc88fcef2548883993bf4901943e9480' }), h("div", { key: '038cd91bf74686ed9772071b266139b54acf742c' }), h("div", { key: '0645f3a79ca4e4b655a54a1cf100574903b997a4' })));
    }
    static get is() { return "ir-loader"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-loader.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-loader.css"]
        };
    }
    static get properties() {
        return {
            "size": {
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
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'md'"
            }
        };
    }
}
//# sourceMappingURL=ir-loader.js.map
