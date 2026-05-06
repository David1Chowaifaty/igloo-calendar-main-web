import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '013cc1aaabf7e667fc2afdfc97c22060b4daa076' }, h("slot", { key: '21013d8af0a6b61301148439cf485f2051a3bf25', name: "icon" }, h("div", { key: 'abbb1464da7ed48e5387d3eb5de911723f04bda7', class: 'icon_container' }, h("wa-icon", { key: '0ff5c4252ff9192e4cc8a3873d5f4892f155ba9d', name: "ban", style: { transform: 'rotate(90deg)' } }))), h("p", { key: 'bc5c94fa54af2c76036aee435955eb02f39849b0', part: "message", class: "message" }, this.message), h("slot", { key: '5e0941f9615679431b9c6806558aa0c74d979b00' })));
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
