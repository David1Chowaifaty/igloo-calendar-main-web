import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'ad6d5a9150f3b7c66a1b461469572a6d7e969fd2' }, h("slot", { key: '7a582dacf4feca266289a666fc6405a6c29d432d', name: "icon" }, this.showIcon && (h("div", { key: '79e0ee1357804646a406feb3295ea1cb51c605e9', class: 'icon_container' }, h("wa-icon", { key: 'ee3b28b5d0df870d3e95df3f85a5438e21d912b9', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'ffd54418672d440abd75cb722fab4582b07bab06', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '2eb2593fcf96bea837628a8ce1b13c3618567d82' })));
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
