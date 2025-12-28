import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irInteractiveTitleCss = ".sc-ir-interactive-title-h{display:block;width:100%;--hk-green:green}*.sc-ir-interactive-title{box-sizing:border-box}.popover-title.sc-ir-interactive-title{position:relative;width:100%;height:100%;margin:0;padding:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:10;left:0;display:flex;align-items:center}.popover-container.sc-ir-interactive-title{position:absolute;bottom:0px;left:var(--ir-popover-left, 10px);background:rgb(0, 0, 0);color:white;min-width:100%;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;z-index:9999;padding:3.5px 7px;border-radius:5px;pointer-events:none;opacity:0;transition:all 100ms ease;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;font-style:normal;font-weight:400;line-height:1.45;text-decoration:none;text-shadow:none;font-size:0.875rem}.popover-container[data-state='show'].sc-ir-interactive-title{opacity:1}.hk-dot.sc-ir-interactive-title{inset:0;position:absolute;display:flex;align-items:center;justify-content:center;width:fit-content;padding:4px;left:auto;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;padding-inline:var(--ir-popover-left);background:var(--ir-interactive-hk-bg, var(--wa-color-surface-default));color:var(--dot-color, var(--wa-color-text-normal))}.hk-dot.sc-ir-interactive-title-s>*[name='end']{height:12px}";
const IrInteractiveTitleStyle0 = irInteractiveTitleCss;

const IrInteractiveTitle = /*@__PURE__*/ proxyCustomElement(class IrInteractiveTitle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    get el() { return this; }
    /**
     * The full title string that may be cropped in the UI.
     */
    popoverTitle = '';
    /**
     * CSS offset for the left position of the popover.
     * Used as a CSS variable `--ir-popover-left`.
     */
    irPopoverLeft = '10px';
    /**
     * Whether to show the housekeeping (HK) status dot.
     */
    hkStatus = false;
    /**
     * The number of characters to display before cropping the title with ellipsis.
     */
    cropSize = 20;
    /**
     * The message shown when hovering over the broom svg if provided.
     * @requires hkStatus to be true
     */
    broomTooltip;
    /**
     * Reference to track if we've initialized popover for current render
     */
    lastRenderedTitle = '';
    titleContainerRef;
    popoverInstance;
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
        return (h(Host, { key: '716f3f0094632b0a03a91a12e9fa72f974cd0cc2', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: '6c0b236894fd91f98f5d2982d8181beb942308fa', ref: el => {
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
            } }, h("span", { key: '6190fac22f4c8e6cae803a5929b41a4db67deb1a', class: "cropped-title", style: {
                flexShrink: '1',
                minWidth: '0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            } }, displayTitle), this.hkStatus && (h("div", { key: 'e34533906bc68a789a4ac202aaeb3e49470ba80c', title: this.broomTooltip, class: "hk-dot", style: { flexShrink: '0' } }, h("slot", { key: 'b8346081006b0a7de5cfe1380458b490c8cc5f35', name: "end" }))))));
    }
    static get style() { return IrInteractiveTitleStyle0; }
}, [6, "ir-interactive-title", {
        "popoverTitle": [1, "popover-title"],
        "irPopoverLeft": [1, "ir-popover-left"],
        "hkStatus": [4, "hk-status"],
        "cropSize": [2, "crop-size"],
        "broomTooltip": [1, "broom-tooltip"]
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