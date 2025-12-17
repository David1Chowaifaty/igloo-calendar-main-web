import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'cf6c107c7418f4dc0385d84ede726b780acdde6b' }, h("slot", { key: 'f73293c1dcd0b2e04d98e49f7de8c61486212e0c', name: "icon" }, h("wa-icon", { key: '3d8a857b5dbb6509616c9e85076c9ace54d7f49f', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'ead507baa2e00a5d7c37f525885a8b9a346c917f', part: "message", class: "message" }, "No records found"), h("slot", { key: '7bd5fe357bd4504c234407046a9675780646fd39' })));
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
