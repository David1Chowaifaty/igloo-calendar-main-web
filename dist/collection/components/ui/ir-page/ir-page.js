import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '76e93d9372eb36649fac008dd75191cc7981a4e5' }, h("ir-interceptor", { key: 'ac69fcd443355f869bedbffb5b04b0c7fd3d4691' }), h("ir-toast", { key: '65ba357d09a0c10df2f8d10b8d32dec957065cad' }), h("main", { key: 'be7f89f2162fa068486bea141cd67132dadb2022', class: "ir-page__container" }, h("header", { key: '1dcd9c62fa9c1f9b104c3d22cc21254eaa4ac515', class: "tax-page__header" }, h("slot", { key: '0b96aa96080b74007832f22494d182e3a4e40417', name: "heading" }, h("div", { key: 'c031101c76ab574e4edce883ba98bb824ed2fc57', class: "tax-page__heading" }, h("h3", { key: 'ec8191878a770a0a7e2d158a7e703000f02f6f92', class: "page-title" }, this.label), this.description && (h("p", { key: 'c6b8a5bab398f0f45d00c4eea1d2b9b48eb07043', class: "page__description" }, this.description, h("slot", { key: 'e4bef5fad3b52ee1fb323f052e35582187f6166b', name: "page-description" }))))), h("slot", { key: 'a4e880e92a8ecdac18d3059f6a4ea417ede4286b', name: "page-header" })), h("slot", { key: 'fa60387c249fc44d7147767f1ff15cfdea023bf6' }))));
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
