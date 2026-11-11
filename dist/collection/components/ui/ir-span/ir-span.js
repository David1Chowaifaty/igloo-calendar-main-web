import { h } from "@stencil/core";
export class IrSpan {
    text;
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        return (h("span", { key: 'bf54a8915d635521281312d09d5610e6c6e89b0e' }, this.text));
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
