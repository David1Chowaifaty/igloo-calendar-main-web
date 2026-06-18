import { h } from "@stencil/core";
export class IrSpan {
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("span", { key: '053f5f14ac35a751edea2cf155d2c87692616d70' }, this.text));
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
                "reflect": false,
                "attribute": "text"
            }
        };
    }
}
