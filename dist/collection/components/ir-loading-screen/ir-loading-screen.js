import { h } from "@stencil/core";
export class IrLoadingScreen {
    message = '';
    render() {
        return (h("div", { key: 'd41d18392591a3a5b64ccdd0a60b9adb7f76ec68', class: "loader__container", "data-testid": "loading-screen" }, h("wa-spinner", { key: '4c80fc2289e91098c043776ef3915cb7c156131d', style: { 'fontSize': '2.5rem', '--track-width': '3.5px' } })));
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
                "reflect": false,
                "attribute": "message",
                "defaultValue": "''"
            }
        };
    }
}
