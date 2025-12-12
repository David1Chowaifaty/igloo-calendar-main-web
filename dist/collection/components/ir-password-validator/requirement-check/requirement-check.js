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
        return (h("div", { key: '1d730010baee840330bc22c9383e9854473bf836', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'b6d115d50eb0247683e5ceab8f6ba026953f833f', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'a3bdb0d0624788ee2512909c97671f44e6130265' }, this.text)));
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
