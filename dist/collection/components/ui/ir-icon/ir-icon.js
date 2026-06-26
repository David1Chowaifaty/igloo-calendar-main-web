import { h } from "@stencil/core";
export class IrIcon {
    icon = 'ft-check';
    type = 'button';
    iconClickHandler;
    render() {
        return (h("button", { key: 'bd53ca1b8026fb0360be2e8bbd1ed3ec8e04b6fa', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: 'e3207b6796c0ddc67879e1b2bd0ba6050dbbdf74', name: "icon" })));
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
                "reflect": false,
                "attribute": "icon",
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
                "reflect": false,
                "attribute": "type",
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
