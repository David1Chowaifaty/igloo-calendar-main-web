import { Host, h } from "@stencil/core";
export class IrLoadingScreen {
    constructor() {
        this.message = '';
    }
    render() {
        return (h(Host, { key: '5fd3fe4fe29c193ff2abfbbc89356f4b242319e6' }, h("span", { key: 'ed88bf2faef53c5e6f573645a8eca2b88df30fd1', class: "loader" })));
    }
    static get is() { return "ir-loading-screen"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-loading-screen.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-loading-screen.css"]
        };
    }
    static get properties() {
        return {
            "message": {
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
                "attribute": "message",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
}
//# sourceMappingURL=ir-loading-screen.js.map
