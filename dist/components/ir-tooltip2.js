import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irTooltipCss = ".sc-ir-tooltip-h{position:relative}.tooltip-icon.sc-ir-tooltip{margin:0 5px;padding:0}.tooltip-inner-custom.sc-ir-tooltip{min-width:max-content !important}";
const IrTooltipStyle0 = irTooltipCss;

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
        return (h(Host, { key: '26bdf9fa0eb6786b6be064261761110db741cb42', class: "m-0 p-0" }, h("span", { key: '452cbe0a5ec67a67b4b83d8c856cd9d7c75c73a4', style: this.containerStyle, class: 'm-0 p-0 d-flex align-items-center justify-content-center', onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (
        // <svg data-toggle="tooltip" data-placement="top" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class="tooltip-icon" viewBox="0 0 512 512">
        //   <path
        //     fill="#6b6f82"
        //     d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        //   />
        // </svg>
        h("svg", { xmlns: "http://www.w3.org/2000/svg", class: 'm-0 p-0', height: "16", width: "16", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (h("slot", { name: "tooltip-trigger" }))), this.open && (h("div", { key: 'f0ed81f637d16a30c9c2deb78e36ce1f71be9e2e', class: "tooltip bottom show position-absolute", role: "tooltip" }, h("div", { key: '4b74038325441bd1c805f2f1986c3b74d6b5b089', class: "tooltip-arrow" }), h("div", { key: 'f6f4d744629cc1007766c87e6b55d68bfc39642e', class: `tooltip-inner fit ${this.customSlot && 'tooltip-inner-custom'}` }, h("span", { key: 'c068b7df6d8b735494686c2fb6b61f53f6fbaca6', innerHTML: this.message }))))));
    }
    static get style() { return IrTooltipStyle0; }
}, [6, "ir-tooltip", {
        "message": [513],
        "withHtml": [4, "with-html"],
        "customSlot": [4, "custom-slot"],
        "containerStyle": [16],
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