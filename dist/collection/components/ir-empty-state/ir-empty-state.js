import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'dc8e3d71a40100b56e7b66883adc98fc3b61ee64' }, h("slot", { key: '4f62827d2248396431a2f036eb7c786c63e19076', name: "icon" }, this.showIcon && (h("div", { key: '6c970ed33f5c534c41a5c7abbd504a848b4e5d26', class: 'icon_container' }, h("wa-icon", { key: '41b15ad8d101d8c58048d6624947871422c68a94', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '01dac914459df245dc477e72f6c60edf7db04295', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: 'd6c3ba9d0bf12af7c9c0340ae5455b3fc41a441a' })));
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
