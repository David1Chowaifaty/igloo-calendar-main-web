import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'd9c02e20fd4761614a43ac47b97ae6dd0cfc521f' }, h("slot", { key: '29bc47153280f3df3837b493b58f6fc3babb06f4', name: "icon" }, h("wa-icon", { key: '6d72416d48278f776d15510a74f4fe1eef39681d', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '7684277c417766d27a9f2c1b961d25590df9be6f', part: "message", class: "message" }, "No records found"), h("slot", { key: 'f65f08d1163856cb2a6e6b4e13be8209ae7d1d28' })));
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
