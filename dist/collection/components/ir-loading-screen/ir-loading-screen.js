import { Host, h } from "@stencil/core";
export class IrLoadingScreen {
    constructor() {
        this.message = '';
    }
    render() {
        return (h(Host, { key: '0b5b4c3ecdad5e6b7399630e5cc9f52d5e9be7ad' }, h("div", { key: '5e85af39df8c54fd499226c8bfddac88a3667eaa', class: "loaderContainer" }, h("span", { key: '4aed808b1469e6107cff3843d5a1dddd5324905d', class: "loader" }))));
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
                "attribute": "message",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
}
//# sourceMappingURL=ir-loading-screen.js.map
