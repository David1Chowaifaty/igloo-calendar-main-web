import { h } from "@stencil/core";
export class RequirementCheck {
    constructor() {
        this.isValid = false;
        this.text = '';
    }
    render() {
        return (h("div", { key: '600a03ebfd74f67a8b0772c44ae3217a35a1960d', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '23bee2bfc5b0324cd45dfbcd197d3b1a3d09f968', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'bda5ac48e18185e4a1c8aa4753bf811f12f20099' }, this.text)));
    }
    static get is() { return "requirement-check"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["requirement-check.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["requirement-check.css"]
        };
    }
    static get properties() {
        return {
            "isValid": {
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
                    "text": "Whether this requirement has been satisfied (true/false)."
                },
                "attribute": "is-valid",
                "reflect": false,
                "defaultValue": "false"
            },
            "text": {
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
                    "text": "The requirement text to display (e.g. \"At least one lowercase letter\")."
                },
                "attribute": "text",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
}
//# sourceMappingURL=requirement-check.js.map
