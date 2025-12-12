import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '9a1b942b93530bf303d460e49e855f06f57d5595' }, h("slot", { key: '840f849f9d1eab4745d567bce6cb7a6d9b84ac9f', name: "icon" }, h("wa-icon", { key: 'eb7a01377e4768fade0eba3f094f2c0d470f85fc', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '3ded84a621fe54d5767019c4dd63f793e0a29f56', part: "message", class: "message" }, "No records found"), h("slot", { key: '7588c29df7262d3096002d38814adefd1cdefff3' })));
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
