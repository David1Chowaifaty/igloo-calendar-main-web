import { h } from "@stencil/core";
export class IrLoadingScreen {
    message = '';
    render() {
        return (h("div", { key: 'aef6b2a1cd414df7b51d4d079ed7867b2ad393f2', class: "loader__container", "data-testid": "loading-screen" }, h("wa-spinner", { key: '3e0957609220004ab3ec27fcea3e19c40d015617', style: { 'fontSize': '2.5rem', '--track-width': '3.5px' } })));
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
