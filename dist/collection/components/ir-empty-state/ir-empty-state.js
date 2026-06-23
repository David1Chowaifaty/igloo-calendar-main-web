import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '86a6ec85b0ee9ceaa6e392a87b0f93f5e82624c6' }, h("slot", { key: 'cf29bcd3e74b4b312db5f5db970b935ab0c424c2', name: "icon" }, this.showIcon && (h("div", { key: '1e745e723776bf8a9753d8746b812affe7b8e599', class: 'icon_container' }, h("wa-icon", { key: '884786254de27d59a81ebb12af6be00cf5210308', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'fafdbc20f72f4b40aa4ad0d19693a0a56ea82543', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '95ab7be45e6acf43eaf30dee82883255dbb7685b' })));
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
