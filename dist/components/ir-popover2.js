import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irPopoverCss = ".sc-ir-popover-h{display:block;width:100%}*.sc-ir-popover{box-sizing:border-box}.popover-trigger.sc-ir-popover{all:unset;cursor:pointer}.popover-trigger.sc-ir-popover:hover,.popover-trigger.sc-ir-popover:focus{color:#000}";
const IrPopoverStyle0 = irPopoverCss;

const IrPopover = /*@__PURE__*/ proxyCustomElement(class IrPopover extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.irPopoverLeft = '10px';
        this.placement = 'auto';
        this.trigger = 'focus';
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
        });
        this.initialized = true;
    }
    disconnectedCallback() {
        $(this.popoverTrigger).popover('dispose');
    }
    render() {
        return (h(Host, { key: '78b51d43458c235f66ba8d2d203a667d4678be38', style: { '--ir-popover-left': this.irPopoverLeft } }, this.trigger !== 'focus' ? (h("p", { ref: el => (this.popoverTrigger = el), class: "popover-title", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                cursor: 'pointer',
            } }, h("slot", null))) : (h("button", { class: "popover-trigger", ref: el => (this.popoverTrigger = el) }, h("slot", null)))));
    }
    get el() { return this; }
    static get style() { return IrPopoverStyle0; }
}, [6, "ir-popover", {
        "content": [1],
        "irPopoverLeft": [1, "ir-popover-left"],
        "placement": [1],
        "trigger": [1]
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