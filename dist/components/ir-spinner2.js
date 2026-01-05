import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irSpinnerCss = "";
const IrSpinnerStyle0 = irSpinnerCss;

const IrSpinner = /*@__PURE__*/ proxyCustomElement(class IrSpinner extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get el() { return this; }
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
        return (h(Host, { key: '062f4caf0e787d315146a2343faf802865f2f9f4' }, h("wa-spinner", { key: 'abacb2ad81255bfc5b06a0b7def33d4b28b6fdce', style: { fontSize: '2rem' } })));
    }
    static get watchers() { return {
        "size": ["handleSpinnerSizeChange"],
        "borderWidth": ["handleSpinnerBorderWidthChange"],
        "unit": ["handleSpinnerUnitChange"],
        "color": ["handleSpinnerColorChange"]
    }; }
    static get style() { return IrSpinnerStyle0; }
}, [1, "ir-spinner", {
        "size": [2],
        "borderWidth": [2, "border-width"],
        "unit": [1],
        "color": [1]
    }, undefined, {
        "size": ["handleSpinnerSizeChange"],
        "borderWidth": ["handleSpinnerBorderWidthChange"],
        "unit": ["handleSpinnerUnitChange"],
        "color": ["handleSpinnerColorChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSpinner);
            }
            break;
    } });
}

export { IrSpinner as I, defineCustomElement as d };

//# sourceMappingURL=ir-spinner2.js.map