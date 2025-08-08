import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irInteractiveTitleCss = ".sc-ir-interactive-title-h{display:block;width:100%;--hk-green:green}*.sc-ir-interactive-title{box-sizing:border-box}.popover-title.sc-ir-interactive-title{position:relative;width:100%;height:100%;margin:0;padding:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:10;left:0;display:flex;align-items:center}.popover-container.sc-ir-interactive-title{position:absolute;bottom:0px;left:var(--ir-popover-left, 10px);background:rgb(0, 0, 0);color:white;min-width:100%;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;z-index:9999;padding:3.5px 7px;border-radius:5px;pointer-events:none;opacity:0;transition:all 100ms ease;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;font-style:normal;font-weight:400;line-height:1.45;text-decoration:none;text-shadow:none;font-size:0.875rem}.popover-container[data-state='show'].sc-ir-interactive-title{opacity:1}.hk-dot.sc-ir-interactive-title{inset:0;position:absolute;display:flex;align-items:center;justify-content:center;width:fit-content;padding:4px;left:auto;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;padding-inline:var(--ir-popover-left);background:var(--ir-interactive-hk-bg, white);color:var(--dot-color, black)}";
const IrInteractiveTitleStyle0 = irInteractiveTitleCss;

const IrInteractiveTitle = /*@__PURE__*/ proxyCustomElement(class IrInteractiveTitle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * The full title string that may be cropped in the UI.
         */
        this.popoverTitle = '';
        /**
         * CSS offset for the left position of the popover.
         * Used as a CSS variable `--ir-popover-left`.
         */
        this.irPopoverLeft = '10px';
        /**
         * Whether to show the housekeeping (HK) status dot.
         */
        this.hkStatus = false;
        /**
         * The number of characters to display before cropping the title with ellipsis.
         */
        this.cropSize = 20;
        /**
         * Reference to track if we've initialized popover for current render
         */
        this.lastRenderedTitle = '';
    }
    /**
     * Initialize popover with overflow detection
     */
    initializePopoverIfNeeded(titleContainer, title) {
        // Only initialize if title changed or first time
        if (this.lastRenderedTitle === title && this.popoverInstance) {
            return;
        }
        this.disposePopover();
        const tempSpan = document.createElement('span');
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.style.whiteSpace = 'nowrap';
        tempSpan.textContent = title;
        document.body.appendChild(tempSpan);
        const textWidth = tempSpan.offsetWidth;
        document.body.removeChild(tempSpan);
        const containerWidth = titleContainer.clientWidth;
        const iconWidth = this.hkStatus ? 20 : 0;
        const willOverflow = textWidth + iconWidth > containerWidth;
        if (willOverflow && typeof $ !== 'undefined') {
            try {
                this.popoverInstance = $(titleContainer).popover({
                    trigger: 'hover',
                    content: title,
                    placement: 'top',
                    html: false,
                    sanitize: true,
                    delay: { show: 300, hide: 100 },
                });
            }
            catch (error) {
                console.error('Failed to initialize popover:', error);
            }
        }
        this.lastRenderedTitle = title;
    }
    disposePopover() {
        if (this.popoverInstance && typeof $ !== 'undefined') {
            try {
                $(this.titleContainerRef).popover('dispose');
                this.popoverInstance = null;
            }
            catch (error) {
                console.error('Failed to dispose popover:', error);
            }
        }
    }
    disconnectedCallback() {
        this.disposePopover();
    }
    render() {
        const title = this.popoverTitle || '';
        const shouldCrop = title.length > this.cropSize;
        const displayTitle = shouldCrop ? title.slice(0, this.cropSize) + '...' : title;
        return (h(Host, { key: '0fc4249f23d8c64b75af50dfca1c5aff4f7503d4', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: 'c04ba51adb26ef5328f942acbb2264bda4e48482', ref: el => {
                this.titleContainerRef = el;
                if (el && title) {
                    setTimeout(() => this.initializePopoverIfNeeded(el, title), 0);
                }
            }, class: "popover-title", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
            } }, h("span", { key: '68a953b536264d1ca7f0ef73405fcfba44a989d1', class: "cropped-title", style: {
                flexShrink: '1',
                minWidth: '0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            } }, displayTitle), this.hkStatus && (h("div", { key: 'b65605732aab825bebafc8f83edbe4133de86c62', title: "This unit is dirty", class: "hk-dot", style: { flexShrink: '0' } }, h("svg", { key: 'e48b508aa4ea6097e2bbee34ae6b292df210011c', xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { key: 'b65acd2c667e5260dc84471a1ea86e4ac3e0346f', fill: "currentColor", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" })))))));
    }
    get el() { return this; }
    static get style() { return IrInteractiveTitleStyle0; }
}, [2, "ir-interactive-title", {
        "popoverTitle": [1, "popover-title"],
        "irPopoverLeft": [1, "ir-popover-left"],
        "hkStatus": [4, "hk-status"],
        "cropSize": [2, "crop-size"]
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