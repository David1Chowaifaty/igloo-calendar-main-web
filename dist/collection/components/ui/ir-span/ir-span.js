import { h } from "@stencil/core";
export class IrSpan {
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("span", { key: '65f2b4eeff135c28d8310b4adbc19872d861b956' }, this.text));
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
