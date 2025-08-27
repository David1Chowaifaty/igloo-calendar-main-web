import { Host, h } from "@stencil/core";
export class IrLoadingScreen {
    constructor() {
        this.message = '';
    }
    render() {
        return (h(Host, { key: '5296c5ce6ed5ea0b0f1642a8c57842f35e3db1d3' }, h("span", { key: 'e4ce12766dbbb9247d20ec861aefcb156006ba08', class: "loader" })));
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
