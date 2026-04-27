import { h } from "@stencil/core";
export class IrLoadingScreen {
    message = '';
    render() {
        return (h("div", { key: '1c296cb80a42ab6a5355f5a86f7502fdca90dce6', class: "loader__container", "data-testid": "loading-screen" }, h("wa-spinner", { key: '4a76ea7b0c04816de6acbd6aa8c7c900edbf2e7e', style: { fontSize: '2.5rem' } })));
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
