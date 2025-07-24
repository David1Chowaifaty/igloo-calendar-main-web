import { h } from "@stencil/core";
export class RequirementCheck {
    constructor() {
        /**
         * Whether this requirement has been satisfied (true/false).
         */
        this.isValid = false;
        /**
         * The requirement text to display (e.g. "At least one lowercase letter").
         */
        this.text = '';
    }
    render() {
        return (h("div", { key: 'c95e0d3e03a3e21176f0ad7d340cecd5d88e5ca0', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'fa4b55052bfd8be0f04ad39c4e667fafc2011c5a', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'aeea9017c0b29d7f677c88e2fff0a1690614abf6' }, this.text)));
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
                "attribute": "text",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
}
//# sourceMappingURL=requirement-check.js.map
