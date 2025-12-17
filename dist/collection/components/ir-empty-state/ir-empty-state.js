import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '362bd639be3ebe59f3a1c37f35bd1dc45691a623' }, h("slot", { key: 'de6890473f003d96b8a070f100e25870f446af33', name: "icon" }, h("wa-icon", { key: '15bc1a8dc48701c48545ea0d0c400808ce343746', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'ecf53c786196ec2a6002a2582591f3002a6c9614', part: "message", class: "message" }, "No records found"), h("slot", { key: '8760375214d5bf237d91c1cc8bf25ae439c48f15' })));
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
