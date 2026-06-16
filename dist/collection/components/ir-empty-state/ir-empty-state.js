import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'f4d34bf4a3d301f3fc0f1dfefd8b0ae8fd9c173e' }, h("slot", { key: '0d3ede669bdc681308fa4998c631df0717e0f045', name: "icon" }, this.showIcon && (h("div", { key: 'ebd290a7a2e6588b0f038ac5e9eb44ce16d56cc3', class: 'icon_container' }, h("wa-icon", { key: '9063bdca84a3c8979dc4c8fd73f3bedaea47ce53', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: 'd4aa5d1aec34ebada96b703c2ca944ee86e024f0', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: 'fcdd70a43217922dc9494f97aac81549a379ae94' })));
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
