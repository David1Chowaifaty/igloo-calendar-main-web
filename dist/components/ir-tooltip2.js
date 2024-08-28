import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irTooltipCss = ".sc-ir-tooltip-h{position:relative}.tooltip-icon.sc-ir-tooltip{margin:0 5px;padding:0}.tooltip-inner-custom.sc-ir-tooltip{min-width:max-content !important}";
const IrTooltipStyle0 = irTooltipCss;

const IrTooltip = /*@__PURE__*/ proxyCustomElement(class IrTooltip extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.message = undefined;
        this.withHtml = true;
        this.customSlot = false;
        this.open = undefined;
    }
    toggleOpen(shouldOpen) {
        if (this.tooltipTimeout) {
            clearTimeout(this.tooltipTimeout);
        }
        if (shouldOpen) {
            this.tooltipTimeout = setTimeout(() => {
                this.open = true;
            }, 300);
        }
        else {
            this.open = false;
        }
    }
    render() {
        return (h(Host, { key: 'b350152ebfba582a2dc8581a15833a5e8777199b', class: "m-0 p-0" }, h("span", { key: 'fd3963a706034ed7df18e6a926b51d27fc38a355', onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (h("svg", { "data-toggle": "tooltip", "data-placement": "top", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", class: "tooltip-icon", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (h("slot", { name: "tooltip-trigger" }))), this.open && (h("div", { key: '8fe446e1016dc31b51ed19e26125fa4dd7a1c071', class: "tooltip bottom show position-absolute", role: "tooltip" }, h("div", { key: 'f05029ac549a2cbff4b8b37121e230547d340933', class: "tooltip-arrow" }), h("div", { key: '9829bfba7d40ad55e0da1fd766bed6f6a94182db', class: `tooltip-inner fit ${this.customSlot && 'tooltip-inner-custom'}` }, h("span", { key: 'c3ef3dd1b0f64607a417956791f87e4f51305a2d', innerHTML: this.message }))))));
    }
    static get style() { return IrTooltipStyle0; }
}, [6, "ir-tooltip", {
        "message": [513],
        "withHtml": [4, "with-html"],
        "customSlot": [4, "custom-slot"],
        "open": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTooltip);
            }
            break;
    } });
}

export { IrTooltip as I, defineCustomElement as d };

//# sourceMappingURL=ir-tooltip2.js.map