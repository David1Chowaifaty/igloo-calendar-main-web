import { h } from "@stencil/core";
export class IrIcon {
    constructor() {
        this.icon = 'ft-check';
        this.type = 'button';
    }
    render() {
        return (h("button", { key: '5ae23f90d0b3e25f2051b261b3c948d8455a2d62', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: '8b13ee45f756e30655c6bbeef19a8fa6b62b6c2f', name: "icon" })));
    }
    static get is() { return "ir-icon"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-icon.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-icon.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
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
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "'ft-check'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'button' | 'submit' | 'reset'",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
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
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'button'"
            }
        };
    }
    static get events() {
        return [{
                "method": "iconClickHandler",
                "name": "iconClickHandler",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-icon.js.map
