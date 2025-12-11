import { h } from "@stencil/core";
export class IrSpan {
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("span", { key: 'b09fd043954b57ffc33380f213815c65a0f2f34d' }, this.text));
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
