import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '446aec5631895e7228e0bfa30fdac83e9a97b47d' }, h("slot", { key: '5adc252f905cc8faf371d2ada5be02effa2918d7', name: "icon" }, h("wa-icon", { key: '2b7793c46f792017d8901b347d72904a60b6b991', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'eb17f83e42002252dcd2848ee0bf5eddbb0a291e', part: "message", class: "message" }, this.message), h("slot", { key: 'f3e4f976f69d914ef49e731f8135861f15433ee0' })));
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
