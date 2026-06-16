import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'ae81508e06cad04b1e636f28894633d3fb58f232' }, h("slot", { key: '65ecbd8732f232bd98be3762faae3de303f4fb3e', name: "icon" }, this.showIcon && (h("div", { key: '7bfde73d449608fc96f99b82ea687fcc11efb806', class: 'icon_container' }, h("wa-icon", { key: '4761288f3c7bd868def18cbd33df1d1b6cf13262', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '10ba4724de0c778b6b491b7e6c5a012971cbb75a', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '89d286aed71b842f7ea5d179dc0d2bf19f8918f1' })));
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
