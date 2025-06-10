import { h } from "@stencil/core";
export class IrSpan {
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("span", { key: 'c3d6ffffc11d47f73f1ef8e65838f6a959f8da79' }, this.text));
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
