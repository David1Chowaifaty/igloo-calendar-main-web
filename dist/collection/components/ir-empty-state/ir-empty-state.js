import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '976b553314c52cbeb5ecf74f151a14dcc50f128d' }, h("slot", { key: '376e0c0ed4fa06d8becd7af50a1f35dc20ddf340', name: "icon" }, h("wa-icon", { key: '0fb8b52c26fa1a793b6a7c1461d2ffbf14177c58', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '20bae3fe42890ebb5d7e9fddf68da99bcbc1c1b0', part: "message", class: "message" }, this.message), h("slot", { key: '3c38c0d8a4d7a3b8a0824f044b07dd23a0f6a971' })));
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
