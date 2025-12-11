import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'ebf9d571cfbb50f8d622b8a66b4419ccee5bd45f' }, h("slot", { key: 'd1a4dae564d07057d0560b63ea9dd54015f66011', name: "icon" }, h("wa-icon", { key: '2cbe571c41ea0a28a58ea2c6e1c16fd093fa0002', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '4baf1858b5fc66590d4870ceb48d01a439245695', part: "message", class: "message" }, "No records found"), h("slot", { key: '18a3726e272b2f768b349ea8e148e7b84cacc83e' })));
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
