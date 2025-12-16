import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'c1dcf7ca44406b92e038e6fbadf5bbd345cdaf85' }, h("slot", { key: '8fe9e070f7c9090690a69e71d47ae8ab29f58876', name: "icon" }, h("wa-icon", { key: 'b12e93c12e2063ae8afefb064a9d9a63016d2b2e', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '3f14c2385ca708537517e7270b799fb8a2312146', part: "message", class: "message" }, "No records found"), h("slot", { key: 'e1b4c2f7a4b02c662dbbef739aab927802e334d1' })));
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
