import { h } from "@stencil/core";
export class IrLoadingScreen {
    message = '';
    render() {
        return (h("div", { key: '9b98bfe70d6aa65e4eb2a27c0196bc6b284ba680', class: "loader__container", "data-testid": "loading-screen" }, h("wa-spinner", { key: '5a449a680e4f1cd26d0916f44b74f1a4013c4fe5', style: { fontSize: '2.5rem' } })));
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
