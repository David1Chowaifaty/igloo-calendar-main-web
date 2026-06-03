import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '648f7dfa45e4e6ef83e6930d1808b6ed00cbe95e' }, h("slot", { key: '8dbda3f20f2da4d1950225282bc9ccd1795a396b', name: "icon" }, this.showIcon && (h("div", { key: '1a9b91111cb9c3d93f0da9966bdfb4606ee5f328', class: 'icon_container' }, h("wa-icon", { key: '6e23e87ae4f9df809342bf24ef1d17cc7d48b18f', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '7d13deb8ebc5085e4bbd7b307bdf8acd4bfb434a', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '169eb1ce97d33aa1232c42a96c810c7922f6bf85' })));
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
                "attribute": "show-icon",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
}
//# sourceMappingURL=ir-empty-state.js.map
