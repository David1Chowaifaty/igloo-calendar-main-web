import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'cab926b29783439382e4329e5e8c3868deec47ac' }, h("slot", { key: '007ca287ab9bd9ccf5a05ed44b9b0435fb5321d8', name: "icon" }, this.showIcon && (h("div", { key: 'bd6aacd6d6ceb024ceca0e82b8d8991ae8fd451c', class: 'icon_container' }, h("wa-icon", { key: '5605159840b86389c3c4ae195096239e7eb67463', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '77c90fe0663e7d2e7c19bdc2c81096c8403341ff', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '9b05ed8193400c09b1363c2d65c903267fc97f7f' })));
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
