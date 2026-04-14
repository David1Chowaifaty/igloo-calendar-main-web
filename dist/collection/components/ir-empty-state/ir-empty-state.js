import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'b16c0040a1148783af061e804b49304783a332b7' }, h("slot", { key: '334cad9df413a051b47eb50121bd831f6c72922e', name: "icon" }, h("div", { key: '90421d3232ee221ab167e3eb2ae3fd7235a6a359', class: 'icon_container' }, h("wa-icon", { key: '5f6cde312b72a7a44a2d60b1d0b555e7cd828cbd', name: "ban", style: { transform: 'rotate(90deg)' } }))), h("p", { key: '83711f3dc5c6ab23490fa07623f78b2addf74286', part: "message", class: "message" }, this.message), h("slot", { key: '2d8e3a844904f820eeded02b2621487d4036df8a' })));
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
