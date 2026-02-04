import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'b26767b00ad5f224b31c258ad9952aa4799217c2' }, h("slot", { key: 'b1446d7a995a59ca66753a0095ae0793733868d0', name: "icon" }, h("wa-icon", { key: '87a53ba9988bee13748cc76d7a8f2ad59db91973', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: 'fb78dfab6971672f5474b7870f1ce4b3d65673a6', part: "message", class: "message" }, this.message), h("slot", { key: 'c482e8efb759092319a850d5447a8b831dfe5282' })));
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
