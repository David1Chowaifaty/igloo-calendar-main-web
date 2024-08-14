import { h } from "@stencil/core";
export class IrSkeleton {
    constructor() {
        this.customClasses = undefined;
        this.styles = undefined;
    }
    render() {
        return h("div", { key: '68bd12bc04799417594eb56eb4329cdb9403981a', class: Object.assign({ 'animate block': true, [this.customClasses]: true }, this.styles) });
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
                }
            }
        };
    }
}
//# sourceMappingURL=ir-skeleton.js.map
