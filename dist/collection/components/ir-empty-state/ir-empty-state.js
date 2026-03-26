import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'f68e9d3a1d9559bd694d8fe1ea207ce74095e981' }, h("slot", { key: 'cd70e2a1dbfdd21e16e429ab61ab904814d0fd54', name: "icon" }, h("wa-icon", { key: 'bbe74357f5be951f38fc8094361df50fc67749ea', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'a5aeb48e1897cbc143d009d3deba81ca4944c598', part: "message", class: "message" }, this.message), h("slot", { key: '241bbca67382bc6c8a1bbc5ad8a0cb61ad8d778a' })));
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
