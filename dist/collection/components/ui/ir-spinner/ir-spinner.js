import { Host, h } from "@stencil/core";
export class IrSpinner {
    el;
    /**
     * Size of the spinner (diameter).
     * Example: `size={2}` with `unit="rem"` sets spinner to `2rem`.
     */
    size;
    /**
     * Thickness of the spinner's border.
     * Example: `borderWidth={4}` renders a `4px` or `4rem` thick border.
     */
    borderWidth;
    /**
     * CSS unit used for `size` and `borderWidth`.
     * Can be `'px'` or `'rem'`.
     */
    unit = 'rem';
    /**
     * Color of the spinner.
     * Accepts any valid CSS color string.
     */
    color;
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
    /**
     * Applies CSS custom properties based on current prop values.
     */
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
    /**
     * Helper function to set CSS custom properties on the host element.
     *
     * @param value - The CSS value to apply
     * @param key - The CSS custom property name (e.g., `--ir-spinner-size`)
     */
    applyCssElement(value, key) {
        this.el.style.setProperty(key, value);
    }
    render() {
        return (h(Host, { key: '8b31f411724d4741fc451e749dc400e31f168595' }, h("wa-spinner", { key: 'da21d0a609c811d51e813656ae0c56e0750717d9', style: { fontSize: '2rem' } })));
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
                    "text": "Size of the spinner (diameter).\nExample: `size={2}` with `unit=\"rem\"` sets spinner to `2rem`."
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
                    "text": "Thickness of the spinner's border.\nExample: `borderWidth={4}` renders a `4px` or `4rem` thick border."
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
                    "text": "CSS unit used for `size` and `borderWidth`.\nCan be `'px'` or `'rem'`."
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
                    "text": "Color of the spinner.\nAccepts any valid CSS color string."
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
