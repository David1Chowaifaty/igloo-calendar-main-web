import { h } from "@stencil/core";
export class IrLoadingScreen {
    message = '';
    render() {
        return (h("div", { key: 'b6ad1e985bc323436540d7d9b99e23b1a015a4fa', class: "loader__container", "data-testid": "loading-screen" }, h("wa-spinner", { key: '243befb9c2f3fbeac28054a33674409a4d7eed68', style: { 'fontSize': '2.5rem', '--track-width': '3.5px' } })));
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
