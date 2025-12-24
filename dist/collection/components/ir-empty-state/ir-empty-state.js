import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '7198b4a3e9a5dd3b913fefe319c27c600d952344' }, h("slot", { key: '1d876fddd6fc03225200139e397c774fedf728a9', name: "icon" }, h("wa-icon", { key: '50dc8e21546f8dd5136eb71aa613bf48877d5193', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '4d6f26ccca639bb1b9b8c6819056ac085eebd48c', part: "message", class: "message" }, "No records found"), h("slot", { key: 'c617bab94c380f8a401704fda451322beb6af369' })));
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
