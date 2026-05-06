import { h } from "@stencil/core";
export class IrLoadingScreen {
    message = '';
    render() {
        return (h("div", { key: '19ef42af8e8f95430685d761a70628b917db0584', class: "loader__container", "data-testid": "loading-screen" }, h("wa-spinner", { key: 'eda406917a1d28e578ce5d7e57627cec369bb7ec', style: { fontSize: '2.5rem' } })));
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
