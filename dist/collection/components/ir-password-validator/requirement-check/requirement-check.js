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
        return (h("div", { key: 'a3ff0654c6881ad56dd7bb1bcaa83e100db44ed2', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'bd4a3a4f06de212b7ab6ebf6d8b98a6051c9468f', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'a4067ea07f394d647cd75a7967161083bece9784' }, this.text)));
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
