import { h } from "@stencil/core";
export class IrSpan {
    constructor() {
        this.text = undefined;
    }
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("span", { key: 'ca60563b22142259c8c3822c6c3a42fcf9c653ee' }, this.text));
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
                "attribute": "text",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-span.js.map
