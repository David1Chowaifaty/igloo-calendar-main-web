import { h } from "@stencil/core";
export class IrSkeleton {
    render() {
        return h("div", { key: '7b2b210365c5fa3ce0664961c5de49eda6275f04', class: Object.assign({ 'animate block': true, [this.customClasses]: true }, this.styles) });
    }
    static get is() { return "ir-skeleton"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-skeleton.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-skeleton.css"]
        };
    }
    static get properties() {
        return {
            "customClasses": {
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
                "attribute": "custom-classes",
                "reflect": false
            },
            "styles": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{\r\n    [className: string]: boolean;\r\n  }",
                    "resolved": "{ [className: string]: boolean; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
}
//# sourceMappingURL=ir-skeleton.js.map
