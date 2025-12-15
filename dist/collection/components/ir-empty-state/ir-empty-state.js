import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'fe5f9beba7adcc3b8f088ea7c0aba1e720190fc7' }, h("slot", { key: '53fac2ac391ae34ebc8adcb4ecb99f8f97b2f563', name: "icon" }, h("wa-icon", { key: '5bdeb69706ab01cfb6d27cc61773bc8d4d5ca933', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'd52ab778453a3bfd1911ab457012413be736d6a4', part: "message", class: "message" }, "No records found"), h("slot", { key: '85314c744dd8b1d76a87f36b50b7c8634f553612' })));
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
