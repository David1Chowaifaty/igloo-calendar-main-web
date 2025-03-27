import { Host, h } from "@stencil/core";
export class IrSpinner {
    constructor() {
        this.unit = 'rem';
    }
    componentWillLoad() {
        this.initStyles();
    }
    handleSpinnerSizeChange() {
        this.initStyles();
    }
    handleSpinnerBorderWidthChange() {
        this.initStyles();
    }
    handleSpinnerUnitChange() {
        this.initStyles();
    }
    handleSpinnerColorChange() {
        this.initStyles();
    }
    initStyles() {
        if (this.size) {
            this.applyCssElement(`${this.size}${this.unit}`, '--ir-spinner-size');
        }
        if (this.borderWidth) {
            this.applyCssElement(`${this.borderWidth}${this.unit}`, '--ir-spinner-size');
        }
        if (this.color) {
            this.applyCssElement(`${this.color}`, '--ir-spinner-color');
        }
    }
    applyCssElement(value, key) {
        this.el.style.setProperty(key, value);
    }
    render() {
        return h(Host, { key: 'dc553acf8daecea2019e90000316826f68e1e3b0' });
    }
    static get is() { return "ir-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-spinner.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-spinner.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "reflect": false
            },
            "borderWidth": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "border-width",
                "reflect": false
            },
            "unit": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'px' | 'rem'",
                    "resolved": "\"px\" | \"rem\"",
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
                "attribute": "unit",
                "reflect": false,
                "defaultValue": "'rem'"
            },
            "color": {
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
                "attribute": "color",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "handleSpinnerSizeChange"
            }, {
                "propName": "borderWidth",
                "methodName": "handleSpinnerBorderWidthChange"
            }, {
                "propName": "unit",
                "methodName": "handleSpinnerUnitChange"
            }, {
                "propName": "color",
                "methodName": "handleSpinnerColorChange"
            }];
    }
}
//# sourceMappingURL=ir-spinner.js.map
