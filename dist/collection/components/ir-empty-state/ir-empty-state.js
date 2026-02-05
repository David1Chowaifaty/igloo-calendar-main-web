import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'c315ce794fa98062132bbca1a8d3c51d93b7d40b' }, h("slot", { key: 'fd2fda0c42bcb9b59d040c3ee927d826502ce99f', name: "icon" }, h("wa-icon", { key: '92da15b2fcbb3e92c0df028245a492d0c2866626', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'b12d0068d7f0d914b9493dfeb0c7ef4e56378e03', part: "message", class: "message" }, this.message), h("slot", { key: 'dda717a2b96cc2780616a48a5a2be5aed558e4c8' })));
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
