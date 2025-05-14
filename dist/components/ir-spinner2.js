import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irSpinnerCss = ":host{width:var(--ir-spinner-size, 1.25rem);height:var(--ir-spinner-size, 1.25rem);border:var(--ir-spinner-border-width, 2.5px) solid var(--ir-spinner-color, #3f3f3f);border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrSpinnerStyle0 = irSpinnerCss;

const IrSpinner = /*@__PURE__*/ proxyCustomElement(class IrSpinner extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return h(Host, { key: 'a39cb5bc674ff2e1cd69d2d10caca6da26de97d0' });
    }
    get el() { return this; }
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