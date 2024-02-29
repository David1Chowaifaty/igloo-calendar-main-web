import { h } from "@stencil/core";
export class IrLoader {
    constructor() {
        this.size = 'md';
    }
    render() {
        return (h("div", { key: 'c9002c1ba6d4b1d8fe91240a875ae734886b738a', class: `lds-default ${this.size}` }, h("div", { key: '6a5b4f76af31ffbfd70239889cc4a7d17a03e3af' }), h("div", { key: 'b604c1d0493968e7ddccf2466484926a769e30ad' }), h("div", { key: 'd9e4d0c97fb0d49f7418ed54d2535721198bc428' }), h("div", { key: '7c500dd4b1e7865ccd844b24171ee69cd53f0467' }), h("div", { key: 'dd80eec9a6c033aa40fb7a0be47c4e1152dd2ea2' }), h("div", { key: 'bdc5e753038f6a2a30b05a92aabafb2774cb063b' }), h("div", { key: '35da8ba96c77250d80c9cfb9620613a0a68fb2e3' }), h("div", { key: 'f19c10742fc51964ef2adbead33c9c08286ba46a' }), h("div", { key: '3830d49c975b940c2cc3d6999d23bab3583e8e7d' }), h("div", { key: 'a7713daf3db1689c297356dc3266355b6e69f77c' }), h("div", { key: '9731846bbef4bb37249a9be6577ce4815c77ae11' }), h("div", { key: 'ff2f2be3a5095f53d60f9f28d2eb9ba8235a4ea6' })));
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
