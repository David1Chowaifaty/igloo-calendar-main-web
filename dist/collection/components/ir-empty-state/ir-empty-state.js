import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '3f1686ed39a58c8e45adb2ecb9e28526b44bb316' }, h("slot", { key: '4a510a23e65a58f6031e7b879a1d8f8ed5ccddc3', name: "icon" }, this.showIcon && (h("div", { key: '13d046e676e18752d2e25dc74032a1697256570f', class: 'icon_container' }, h("wa-icon", { key: '1dac02de6f90fd9e8f0aa6928164f37d9e5659cd', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '6ab03ba9f97e89dd7867765bebbc427eaf2cc20b', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: 'a5184245f2595cd86073a8923d1bfe6eabcdd318' })));
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
                "reflect": false,
                "attribute": "message",
                "defaultValue": "'No records found'"
            },
            "showIcon": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": false,
                "attribute": "show-icon",
                "defaultValue": "true"
            }
        };
    }
}
