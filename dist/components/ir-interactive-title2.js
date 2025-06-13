import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irInteractiveTitleCss = ".sc-ir-interactive-title-h{display:block;width:100%;--hk-green:green}*.sc-ir-interactive-title{box-sizing:border-box}.popover-title.sc-ir-interactive-title{position:relative;width:100%;height:100%;margin:0;padding:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:10;left:0;display:flex;align-items:center}.popover-container.sc-ir-interactive-title{position:absolute;bottom:0px;left:var(--ir-popover-left, 10px);background:rgb(0, 0, 0);color:white;min-width:100%;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;z-index:9999;padding:3.5px 7px;border-radius:5px;pointer-events:none;opacity:0;transition:all 100ms ease;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;font-style:normal;font-weight:400;line-height:1.45;text-decoration:none;text-shadow:none;font-size:0.875rem}.popover-container[data-state='show'].sc-ir-interactive-title{opacity:1}.hk-dot.sc-ir-interactive-title{inset:0;position:absolute;display:flex;align-items:center;justify-content:center;width:fit-content;padding:4px;left:auto;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;padding-inline:var(--ir-popover-left);background:var(--ir-interactive-hk-bg, white);color:var(--dot-color, black)}";
const IrInteractiveTitleStyle0 = irInteractiveTitleCss;

const IrInteractiveTitle = /*@__PURE__*/ proxyCustomElement(class IrInteractiveTitle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * CSS offset for the left position of the popover.
         * Used as a CSS variable `--ir-popover-left`.
         */
        this.irPopoverLeft = '10px';
        /**
         * The number of characters to display before cropping the title with ellipsis.
         */
        this.cropSize = 15;
    }
    componentWillLoad() {
        this.croppedTitle = this.popoverTitle;
    }
    componentDidLoad() {
        this.initializePopover();
    }
    disconnectedCallback() {
        this.disposePopover();
    }
    handleTitleChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.disposePopover();
            this.croppedTitle = newValue;
            this.initializePopover(newValue);
        }
    }
    /**
     * Measures the width of the title and icon to determine if the text overflows.
     * If it does, crops the title and attaches a popover to the title element.
     * Otherwise, removes any existing popover.
     */
    initializePopover(title) {
        const titleElement = this.el.querySelector('.popover-title');
        const iconElement = this.el.querySelector('.hk-dot');
        const cropped_title = title !== null && title !== void 0 ? title : this.croppedTitle;
        if (!titleElement || !this.croppedTitleEl) {
            return;
        }
        const containerWidth = titleElement.offsetWidth;
        const textWidth = this.croppedTitleEl.scrollWidth;
        const iconWidth = iconElement ? iconElement.offsetWidth : 0;
        const isOverflowing = textWidth + iconWidth > containerWidth;
        if (isOverflowing) {
            this.croppedTitle = this.popoverTitle.slice(0, this.cropSize) + '...';
            this.croppedTitleEl.innerHTML = cropped_title;
            // this.render();
            $(titleElement).popover({
                trigger: 'hover',
                content: this.popoverTitle,
                placement: 'top',
            });
        }
        else {
            $(titleElement).popover('dispose');
        }
    }
    /**
     * Disposes of the Bootstrap popover associated with the `.popover-title` element.
     */
    disposePopover() {
        const titleElement = this.el.querySelector('.popover-title');
        if (titleElement) {
            $(titleElement).popover('dispose');
        }
    }
    render() {
        return (h(Host, { key: 'd49d0f8f023b30453ac18d523c5d76a12e52617c', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: '34429c0b4f5d039effd5900e814648bf55e1e29b', class: "popover-title", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            } }, h("span", { key: '420e43509ffb1a5ad4c44716916d157a8f20d256', ref: el => (this.croppedTitleEl = el), class: "croppedTitle" }, this.croppedTitle), this.hkStatus && (h("div", { key: '87979c449c03e0f9cff6270c49c910ba9945af66', title: "This unit is dirty", class: `hk-dot` }, h("svg", { key: '347ca2b7e1494b344f0260a61b299c4352666416', xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512" }, h("path", { key: '8f8936f858d49409e6215cadba47d45de2bd864b', fill: "currentColor", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" })))))));
    }
    get el() { return this; }
    static get watchers() { return {
        "popoverTitle": ["handleTitleChange"]
    }; }
    static get style() { return IrInteractiveTitleStyle0; }
}, [2, "ir-interactive-title", {
        "popoverTitle": [513, "popover-title"],
        "irPopoverLeft": [1, "ir-popover-left"],
        "hkStatus": [4, "hk-status"],
        "cropSize": [2, "crop-size"]
    }, undefined, {
        "popoverTitle": ["handleTitleChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-interactive-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-interactive-title":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrInteractiveTitle);
            }
            break;
    } });
}

export { IrInteractiveTitle as I, defineCustomElement as d };

//# sourceMappingURL=ir-interactive-title2.js.map