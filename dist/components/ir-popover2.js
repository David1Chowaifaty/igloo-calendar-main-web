import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irPopoverCss = ":host{display:block;width:100%}*{box-sizing:border-box}.popover-trigger{all:unset;cursor:pointer}.popover-trigger:hover,.popover-trigger:focus{color:#000}";
const IrPopoverStyle0 = irPopoverCss;

const IrPopover = /*@__PURE__*/ proxyCustomElement(class IrPopover extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.irPopoverLeft = '10px';
        this.placement = 'auto';
        this.trigger = 'focus';
        this.renderContentAsHtml = false;
        this.initialized = false;
    }
    componentDidLoad() {
        if (this.initialized) {
            return;
        }
        this.initializePopover();
    }
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
        return (h(Host, { key: '7aead9481f8eee2deca5fa0a207af40e93e38cfa', style: { '--ir-popover-left': this.irPopoverLeft } }, this.trigger !== 'focus' ? (h("p", { ref: el => (this.popoverTrigger = el), class: "popover-title m-0 p-0", style: {
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