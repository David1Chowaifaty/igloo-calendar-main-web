'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');

const irTooltipCss = ".sc-ir-tooltip-h{position:relative}.tooltip-icon.sc-ir-tooltip{margin:0 5px;padding:0}.tooltip-inner-custom.sc-ir-tooltip{min-width:max-content !important}";
const IrTooltipStyle0 = irTooltipCss;

const IrTooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        /**
         * Defines the horizontal alignment of the tooltip trigger content.
         *
         * - `'start'`: Aligns the trigger to the left within its container.
         * - `'center'`: Centers the trigger horizontally (default).
         * - `'end'`: Aligns the trigger to the right within its container.
         *
         * This alignment affects how the trigger (e.g., icon or slotted element)
         * is positioned inside the outer tooltip container.
         */
        this.alignment = 'center';
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
        const alignment = (() => {
            switch (this.alignment) {
                case 'start':
                    return 'justify-content-start';
                case 'end':
                    return 'justify-content-end';
                case 'center':
                    return 'justify-content-center';
                default:
                    return 'justify-content-center';
            }
        })();
        return (index.h(index.Host, { class: "m-0 p-0" }, index.h("span", { style: this.containerStyle, class: `m-0 p-0 d-flex align-items-center ${alignment} ${this.containerClass}`, onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (
        // <svg data-toggle="tooltip" data-placement="top" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class="tooltip-icon" viewBox="0 0 512 512">
        //   <path
        //     fill="#6b6f82"
        //     d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        //   />
        // </svg>
        index.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: 'm-0 p-0', height: "16", width: "16", viewBox: "0 0 512 512" }, index.h("path", { fill: "#6b6f82", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (index.h("slot", { name: "tooltip-trigger" }))), this.open && (index.h("div", { class: "tooltip bottom show position-absolute", role: "tooltip" }, index.h("div", { class: "tooltip-arrow" }), index.h("div", { class: `tooltip-inner fit ${this.customSlot && 'tooltip-inner-custom'}` }, index.h("span", { innerHTML: this.message }))))));
    }
};
IrTooltip.style = IrTooltipStyle0;

exports.ir_tooltip = IrTooltip;

//# sourceMappingURL=ir-tooltip.cjs.entry.js.map