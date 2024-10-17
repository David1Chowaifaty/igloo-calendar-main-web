'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');

const irTooltipCss = ".sc-ir-tooltip-h{position:relative}.tooltip-icon.sc-ir-tooltip{margin:0 5px;padding:0}.tooltip-inner-custom.sc-ir-tooltip{min-width:max-content !important}";
const IrTooltipStyle0 = irTooltipCss;

const IrTooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'f0b2d4c295529b1f76ba61e7256363e197e5f610', class: "m-0 p-0" }, index.h("span", { key: 'c3031960a9f1fb0dda0238c53d8323f124aa97ee', onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (index.h("svg", { "data-toggle": "tooltip", "data-placement": "top", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", class: "tooltip-icon", viewBox: "0 0 512 512" }, index.h("path", { fill: "#6b6f82", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (index.h("slot", { name: "tooltip-trigger" }))), this.open && (index.h("div", { key: '6ddf441c12f99ed2141ddf4c7db524a088ea3b16', class: "tooltip bottom show position-absolute", role: "tooltip" }, index.h("div", { key: '9667a9746d8df0cc343fa84c84c366bda3151378', class: "tooltip-arrow" }), index.h("div", { key: '6eada79a000411330a54527586b9133cee86b533', class: `tooltip-inner fit ${this.customSlot && 'tooltip-inner-custom'}` }, index.h("span", { key: '2e18c4b7a7bf029d246914b5c0776f184b45979f', innerHTML: this.message }))))));
    }
};
IrTooltip.style = IrTooltipStyle0;

exports.ir_tooltip = IrTooltip;

//# sourceMappingURL=ir-tooltip.cjs.entry.js.map