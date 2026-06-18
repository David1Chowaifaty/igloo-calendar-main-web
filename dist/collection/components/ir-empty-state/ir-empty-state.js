import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'd67c6098675f9c79c23d0d0f8bfd02bf303a8cc4' }, h("slot", { key: 'd06a3d7d8c1bb41e13842d8360b8b809a5557e1f', name: "icon" }, this.showIcon && (h("div", { key: '6986a136c2ad6d37f60cb0dc4de6112d547904f6', class: 'icon_container' }, h("wa-icon", { key: '2209ce24e8b154840f8713df70614765f3833e56', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'e9d9251468da60564367c1b7d96eb5c21e05fb53', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '9d330d3ddefcaff88df8b44b1f17955c91e68842' })));
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
