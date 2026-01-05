import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: '5bc245eb9b8ceff60884b0ca22f46acb514fd83f' }, h("slot", { key: 'fa3d0d5cbbba36d0dd98cdf7251256d7a15e0c2e', name: "icon" }, h("wa-icon", { key: '1cafc7752d2d787bc32bde9f931cff8d4c0b2db3', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '2fea2809c629a1e6faeee8bbf4508b1156080f06', part: "message", class: "message" }, this.message), h("slot", { key: 'e4d2ae3931bb77e6910efcc3144532f38898a7db' })));
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
