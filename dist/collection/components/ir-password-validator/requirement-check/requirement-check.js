import { h } from "@stencil/core";
export class RequirementCheck {
    /**
     * Whether this requirement has been satisfied (true/false).
     */
    isValid = false;
    /**
     * The requirement text to display (e.g. "At least one lowercase letter").
     */
    text = '';
    render() {
        return (h("div", { key: 'ecdc2d89f8627cd95f667b520b4033ac441e1d1e', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '33fe7e8239a6052d1b31055a89eb403fa309bd0b', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '78253e47823ab04e6768790253f030a8e7952166' }, this.text)));
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
                "reflect": false,
                "attribute": "is-valid",
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
                "reflect": false,
                "attribute": "text",
                "defaultValue": "''"
            }
        };
    }
}
