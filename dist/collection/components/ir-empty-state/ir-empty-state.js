import { Host, h } from "@stencil/core";
export class IrEmptyState {
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: 'e1e12c5b963b7567af2df6c067b4eb1d124585c6' }, h("slot", { key: '2ea6c1f1b1ca6e3f5161dd4ddcb9f785408bc433', name: "icon" }, this.showIcon && (h("div", { key: '8636d73c814b6c9a8fcd6b983bd35b4ea51eb41e', class: 'icon_container' }, h("wa-icon", { key: '605070af909313a9ee06e3dbe6d283af3e8cfaf3', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '11dd49cbaf0a8ad593b5c02ef3f75018a8c709d0', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '28db19d43f106bb7b224c35ea563b289a690c2e1' })));
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
