import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '6e15de6b0e5c8956406322ac11506737751c1161' }, h("slot", { key: 'cff2a9af9db4a62653f1a63d7f17dec04553c972', name: "icon" }, h("wa-icon", { key: 'd06f59604e37488e9cf9a3eddee76a91830c8da8', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'a33b546c956b7823455a8c79469f876e83813d98', part: "message", class: "message" }, this.message), h("slot", { key: '4e4bf1508818ba05d75da4712c8aaada9d86cc02' })));
    }
    static get is() { return "ir-empty-state"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-empty-state.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-empty-state.css"]
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
                "defaultValue": "'No records found'"
            }
        };
    }
}
//# sourceMappingURL=ir-empty-state.js.map
