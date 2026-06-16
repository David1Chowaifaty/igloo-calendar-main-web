import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '06b68aea8ac80384adcc2819cf46a08162a8f105' }, h("slot", { key: 'e228cbd8f67cecc9694a9b0cbe2363fe3e75f8ef', name: "icon" }, this.showIcon && (h("div", { key: 'b3bc02015ec4798078c5ddc3d19c2e8bd3675b02', class: 'icon_container' }, h("wa-icon", { key: 'db5fed8ff0ae46edb517a90facd35d4701c8e963', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '1c5b78dadc0d104c138143ec775e151724d33eae', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: 'a06eb149c0aa7536ef4ea1d270d184ac71b07985' })));
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
