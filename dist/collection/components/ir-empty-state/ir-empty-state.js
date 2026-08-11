import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'b358b33ce3cdd1a723d689fd976ee9110f89c359' }, h("slot", { key: '9b7a621fe9950cfd65ad9253dc986d3dff052828', name: "icon" }, this.showIcon && (h("div", { key: '3de595e677a1d69e3f3e9d57a0fb872c2f1b2637', class: 'icon_container' }, h("wa-icon", { key: '131f726326cf7b6c3b43102e9669541903ab275f', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '2b153cb48150c0617c652980d827074b73ec0a33', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '29912baa515d20e4d1dc9da96cc21ffa242e142b' })));
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
