import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'cf2297dc4a3013416995dd4c48d88aa7e9df99d4' }, h("slot", { key: 'ba2cf54cdc3348ade64d63c7dcef06d6911a2599', name: "icon" }, this.showIcon && (h("div", { key: '9cc4d35b55073bd4d7b15c3f8bc1495fe23885cf', class: 'icon_container' }, h("wa-icon", { key: '95a3c4005493865cebca06e4a49c41927be90156', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '4a4d93ecae7ecd80281c2c334ad2b38e75b0a3e6', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: 'fce8bdda59195e73498f32d11d5e1f7e2aa7bb2d' })));
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
