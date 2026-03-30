import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'ed70e7cad5caa3c6149d33e454ca6a57bfcbade5' }, h("slot", { key: 'b65a956381aa0a3d23aab7fcf61a2f8cad66a3ec', name: "icon" }, h("wa-icon", { key: 'b5e03e3308a7ef0593940e8362bba88d7a7f61ab', name: "ban", style: { transform: 'rotate(90deg)', fontSize: '2rem' } })), h("p", { key: '50d07b3c1071b33b52575daaba96098572b3f14f', part: "message", class: "message" }, this.message), h("slot", { key: 'dadf67ef2b8933eed1bec47746db7674a6f63f61' })));
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
