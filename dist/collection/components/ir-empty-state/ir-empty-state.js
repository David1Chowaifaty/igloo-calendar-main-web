import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    render() {
        return (h(Host, { key: 'f954604d38fe2ac7384c7e178f51236587fedce3' }, h("slot", { key: '6bc1b29effce34547395b9ad54467709ad7736f6', name: "icon" }, h("div", { key: '1d2077829b956cbd82c9df0c8940634f4d7ac3cf', class: 'icon_container' }, h("wa-icon", { key: '9e1655bcd469f3ff72e13e6feb0cd8e855ef74e8', name: "ban", style: { transform: 'rotate(90deg)' } }))), h("p", { key: 'f42711296225569e0da3463782a8e63c4bd47b23', part: "message", class: "message" }, this.message), h("slot", { key: 'dca2f7cfe576046acb01c2c220b97a6d6e411e68' })));
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
