import { h } from "@stencil/core";
export class IrSpan {
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("span", { key: '4328898dcebb7643f1a8f389b78f7b8682ad2103' }, this.text));
    }
    static get is() { return "ir-span"; }
    static get properties() {
        return {
            "text": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                "attribute": "text",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-span.js.map
