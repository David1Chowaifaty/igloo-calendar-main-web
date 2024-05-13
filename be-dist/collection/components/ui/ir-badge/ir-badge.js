import { h } from "@stencil/core";
export class IrBadge {
    constructor() {
        this.label = undefined;
        this.variant = 'default';
        this.size = 'sm';
        this.withDot = undefined;
    }
    render() {
        return h("p", { key: 'd529f2571399fafbc7e70032ad64260be03fcbe0', class: `size-${this.size} badge ${this.variant}` }, this.label);
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
                "attribute": "with-dot",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-badge.js.map
