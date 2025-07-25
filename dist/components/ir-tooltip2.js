import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irTooltipCss = ".sc-ir-tooltip-h{position:relative}.tooltip-icon.sc-ir-tooltip{margin:0 5px;padding:0}.tooltip-inner-custom.sc-ir-tooltip{min-width:max-content !important}";
const IrTooltipStyle0 = irTooltipCss;

const IrTooltip = /*@__PURE__*/ proxyCustomElement(class IrTooltip extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Whether the tooltip content should be rendered using `innerHTML`.
         * If false, treats message as plain text.
         */
        this.withHtml = true;
        /**
         * When true, allows a custom element to trigger the tooltip using a named slot.
         * If false, a default info icon is used.
         */
        this.customSlot = false;
    }
    /**
     * Handles showing or hiding the tooltip.
     *
     * - If `shouldOpen` is `true`, the tooltip is shown after a 300ms delay.
     * - If `false`, the tooltip is hidden immediately.
     *
     * @param shouldOpen - whether the tooltip should be shown or hidden.
     *
     * Example:
     * ```ts
     * this.toggleOpen(true);  // show tooltip
     * this.toggleOpen(false); // hide tooltip
     * ```
     */
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
        return (h(Host, { key: 'bdd09f305151fb0ef6a75babe9b2edd052176f55', class: "m-0 p-0" }, h("span", { key: '7489ce7179827a9443526395762ff0b5f41cf6cd', style: this.containerStyle, class: 'm-0 p-0 d-flex align-items-center justify-content-center', onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (
        // <svg data-toggle="tooltip" data-placement="top" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class="tooltip-icon" viewBox="0 0 512 512">
        //   <path
        //     fill="#6b6f82"
        //     d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        //   />
        // </svg>
        h("svg", { xmlns: "http://www.w3.org/2000/svg", class: 'm-0 p-0', height: "16", width: "16", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (h("slot", { name: "tooltip-trigger" }))), this.open && (h("div", { key: '5ff983ac664a242c16455ec88d5d97194a6d7e03', class: "tooltip bottom show position-absolute", role: "tooltip" }, h("div", { key: 'e8c837f54c347be05bc0735b84c8f5edbd46185f', class: "tooltip-arrow" }), h("div", { key: 'e828d364e25c5c9fc631deeeacae20e91b02cf4f', class: `tooltip-inner fit ${this.customSlot && 'tooltip-inner-custom'}` }, h("span", { key: 'e46d024453ba426f576410addee38dccd58f5c2d', innerHTML: this.message }))))));
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