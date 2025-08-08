import { h } from "@stencil/core";
export class IrSpan {
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("span", { key: '1ad60673eaa6b635137c32530293c92079324f81' }, this.text));
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
