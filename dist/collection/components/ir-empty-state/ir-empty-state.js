import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'aabdd60fef2ec023560d7ce8cd8e5e477fec2572' }, h("slot", { key: 'aa366196e72056d0e82645463a921e501b7e09a5', name: "icon" }, h("wa-icon", { key: 'f8eab4c69b02e305e1977af2a204cd2e42647a83', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'adf7d0daa92647e854d5491279f24cf6ef5756d2', part: "message", class: "message" }, "No records found"), h("slot", { key: '1340a5e55015bba76e4a463d7576007dd477a865' })));
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
