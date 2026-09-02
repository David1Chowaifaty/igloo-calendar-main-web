import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '4a548f54209aed15c355c693af038dc4876d8523' }, h("slot", { key: 'ed15df45c5a887a721f1b3cef06ca45243d15d6a', name: "icon" }, this.showIcon && (h("div", { key: 'f49b3847bb4bc1146ca6fa76524f2e8ea88d79e5', class: 'icon_container' }, h("wa-icon", { key: 'dae9feaccef31c5f0290fe99d24f841b54177331', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'c621303050e9f0ef467f8f9e61912c173eecaa6b', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: 'ee6b1d3fa4169850b3cb02be380f93f669fec2df' })));
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
