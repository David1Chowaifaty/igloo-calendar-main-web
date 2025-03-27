import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irTooltipCss = ".sc-ir-tooltip-h{position:relative}.tooltip-icon.sc-ir-tooltip{margin:0 5px;padding:0}.tooltip-inner-custom.sc-ir-tooltip{min-width:max-content !important}";

const IrTooltip = /*@__PURE__*/ proxyCustomElement(class IrTooltip extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.withHtml = true;
        this.customSlot = false;
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
        return (h(Host, { key: '28e2a42011d345eccdc06504a55e4d038bc83c7e', class: "m-0 p-0" }, h("span", { key: 'f6ba858b7f515dba8c34a4a2717566508ee24a82', class: 'm-0 p-0 d-flex align-items-center justify-content-center', onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (
        // <svg data-toggle="tooltip" data-placement="top" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class="tooltip-icon" viewBox="0 0 512 512">
        //   <path
        //     fill="#6b6f82"
        //     d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        //   />
        // </svg>
        h("svg", { xmlns: "http://www.w3.org/2000/svg", class: 'm-0 p-0', height: "16", width: "16", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (h("slot", { name: "tooltip-trigger" }))), this.open && (h("div", { key: 'c5834e0e07ba2993e72a93a9d7f9dbebb8779529', class: "tooltip bottom show position-absolute", role: "tooltip" }, h("div", { key: '1a8271ff91e8eed7bf4d729dcdea0940bbd07182', class: "tooltip-arrow" }), h("div", { key: '266484742292605adec6b0b9dcd4be80b94df6e0', class: `tooltip-inner fit ${this.customSlot && 'tooltip-inner-custom'}` }, h("span", { key: '2004a1dfa9b27cfc4f1c58bd538780b33739d782', innerHTML: this.message }))))));
    }
    static get style() { return irTooltipCss; }
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

//# sourceMappingURL=ir-tooltip2.js.map