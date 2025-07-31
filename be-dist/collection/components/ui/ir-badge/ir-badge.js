import { h } from "@stencil/core";
export class IrBadge {
    constructor() {
        this.variant = 'default';
        this.size = 'sm';
        this.backgroundShown = true;
    }
    render() {
        return h("p", { key: 'be38168763586c9e20e8f23aa1c857646d4b76d7', class: `size-${this.size} badge ${this.variant} ${this.backgroundShown ? '' : 'transparent'}` }, this.label);
    }
    static get is() { return "ir-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-badge.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-badge.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                "attribute": "label",
                "reflect": false
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'error' | 'pending' | 'success'",
                    "resolved": "\"default\" | \"error\" | \"pending\" | \"success\"",
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
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'default'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
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
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'sm'"
            },
            "withDot": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "''",
                    "resolved": "\"\"",
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
                "attribute": "with-dot",
                "reflect": false
            },
            "backgroundShown": {
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
                "attribute": "background-shown",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
}
//# sourceMappingURL=ir-badge.js.map
