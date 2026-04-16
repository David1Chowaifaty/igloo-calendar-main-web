import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'e2c2d24e70059b8d21d78c57ddfb1d39e7fbe10b' }, h("slot", { key: 'ff165e105e3f8629d2fdfe93be247e34e87826a5', name: "icon" }, h("div", { key: 'a3733f2ee11fcee7d1e45dbd038b85efacd68c42', class: 'icon_container' }, h("wa-icon", { key: '8fd6d5ae2bd7dce619bd4e5e09e0b7e37a8fe932', name: "ban", style: { transform: 'rotate(90deg)' } }))), h("p", { key: 'a1be634038da21af8e9984cd766a1df8cdb0563f', part: "message", class: "message" }, this.message), h("slot", { key: '90fd5a4b3abbba917bfc6f82dcea9246785f7da7' })));
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
