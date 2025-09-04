import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irPopoverCss = ":host{display:block;width:100%}*{box-sizing:border-box}.popover-trigger{all:unset;cursor:pointer}.popover-trigger:hover,.popover-trigger:focus{color:#000}";
const IrPopoverStyle0 = irPopoverCss;

const IrPopover = /*@__PURE__*/ proxyCustomElement(class IrPopover extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Horizontal offset (left) of the popover from its trigger.
         * Used in inline style as `--ir-popover-left`.
         */
        this.irPopoverLeft = '10px';
        /**
         * Position of the popover relative to the trigger.
         * Options: `'top'`, `'bottom'`, `'left'`, `'right'`, `'auto'`.
         */
        this.placement = 'auto';
        /**
         * Event that triggers the popover.
         * Options: `'focus'`, `'click'`, `'hover'`.
         */
        this.trigger = 'focus';
        /**
         * Whether to treat `content` as raw HTML.
         * When true, `content` will be injected with `html: true` in jQuery popover.
         */
        this.renderContentAsHtml = false;
        /**
         * Internal flag to ensure popover is only initialized once.
         */
        this.initialized = false;
    }
    componentDidLoad() {
        if (this.initialized) {
            return;
        }
        this.initializePopover();
    }
    /**
     * Initializes the jQuery popover on the trigger element using configured props.
     */
    initializePopover() {
        $(this.popoverTrigger).popover({
            trigger: this.trigger,
            content: this.content,
            placement: this.placement,
            html: this.renderContentAsHtml,
        });
        this.initialized = true;
    }
    disconnectedCallback() {
        $(this.popoverTrigger).popover('dispose');
    }
    render() {
        return (h(Host, { key: 'da81e0eeb383a610dac71fd5940a7ef4e7c1fb66', style: { '--ir-popover-left': this.irPopoverLeft } }, this.trigger !== 'focus' ? (h("p", { ref: el => (this.popoverTrigger = el), class: "popover-title m-0 p-0", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                cursor: 'pointer',
            } }, h("slot", null))) : (h("button", { tabindex: "0", class: "popover-trigger", ref: el => (this.popoverTrigger = el) }, h("slot", null)))));
    }
    get el() { return this; }
    static get style() { return IrPopoverStyle0; }
}, [4, "ir-popover", {
        "content": [1],
        "irPopoverLeft": [1, "ir-popover-left"],
        "placement": [1],
        "trigger": [1],
        "renderContentAsHtml": [4, "render-content-as-html"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-popover":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPopover);
            }
            break;
    } });
}

export { IrPopover as I, defineCustomElement as d };

//# sourceMappingURL=ir-popover2.js.map