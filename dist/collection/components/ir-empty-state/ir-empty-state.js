import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '83b316886a5f50813932f57e1299f1ae25795ec0' }, h("slot", { key: 'cbf9130b71717cbb51132460295428fe24fa3534', name: "icon" }, h("wa-icon", { key: '6a2dbff92c1c509d14c98589929ef654f9fd8f50', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '01cc5e936cd5f94382f45459edc3bcbfab3f528d', part: "message", class: "message" }, "No records found"), h("slot", { key: '1e28fc4396fa07060721b0ad21eb0b8d761543b8' })));
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
