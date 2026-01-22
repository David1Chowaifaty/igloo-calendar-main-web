import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'bbf849c0b3805a184df2370739e3fb1872aa88c1' }, h("slot", { key: '90b76561c06542d1fd042dcd9d9dceeb85bb5d51', name: "icon" }, h("wa-icon", { key: '9f126d79cf227ea62c13b1d2acec56c1bc27d07d', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '1c5b35ff8d88333408e763b4b6fb97cd974ba369', part: "message", class: "message" }, this.message), h("slot", { key: '5396ea7bd5c43c69368d043321ebefbd2dcf062c' })));
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
