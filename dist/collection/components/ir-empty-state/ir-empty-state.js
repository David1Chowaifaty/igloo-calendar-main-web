import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '499165bfa8718d86d8580ceb28d45fc99adbd566' }, h("slot", { key: '384560da58dee6cdd8875e882eef8a9f37d75a6e', name: "icon" }, h("div", { key: '72d05b34ecf14e7e1077e85e30ab510e28e46358', class: 'icon_container' }, h("wa-icon", { key: 'e8d7e1160d4cfc1563e477df67dc4d03709c9086', name: "ban", style: { transform: 'rotate(90deg)' } }))), h("p", { key: 'd35e898413a8bf6290922a1e54a662520e121ed3', part: "message", class: "message" }, this.message), h("slot", { key: '88c48c8a89cc4dfe568a859468e84103447d5fcd' })));
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
