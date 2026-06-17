import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'faad3e6e03c8a436b0779b669e4a61beca1fe886' }, h("slot", { key: '95e8ff40fcd456f47cc4b2dd08ec08283af947b7', name: "icon" }, this.showIcon && (h("div", { key: '2f84147af3f65bd672704599e6cf875c2bc8af32', class: 'icon_container' }, h("wa-icon", { key: '320ecc88cef2f7a5374476468bbca30d889ec11a', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'fe7960aee819ef33d50a61a125bd82c518434f3e', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '4dec6bdb79f3c984173864fee40521fcca811e0e' })));
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
