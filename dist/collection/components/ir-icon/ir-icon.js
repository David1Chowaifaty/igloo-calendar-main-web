import { h } from "@stencil/core";
export class IrIcon {
    constructor() {
        this.icon = 'ft-check';
    }
    render() {
        return (h("button", { key: '1000085bd4c8aa8b570c66d1825acbe068864598', class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: '2b5bd630f7185361a894cc8c6e6f69b3b892d983', name: "icon" })));
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
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "'ft-check'"
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
