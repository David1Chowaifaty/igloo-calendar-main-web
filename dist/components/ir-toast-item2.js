import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irToastItemCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;--accent-width:4px}.accent{flex:0 0 auto;width:var(--accent-width);background:var(--accent-color)}.toast-item{display:flex;align-items:stretch;background:var(--wa-color-surface-raised);border:var(--wa-border-width-s) solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);box-shadow:var(--wa-shadow-l);overflow:hidden}.icon{display:flex;align-items:center;padding:var(--wa-space-l);padding-inline-end:0px;color:var(--accent-color);font-size:1.25em}.content{font-size:var(--wa-font-size-s);flex:1 1 auto;align-self:center;min-width:0px;padding:var(--wa-space-l);color:var(--wa-color-text-normal)}.close-button{flex:0 0 auto;display:flex;align-items:center;justify-content:center;align-self:stretch;padding-inline:var(--wa-space-l);background:transparent;border:none;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);color:var(--wa-color-neutral-on-quiet);font-size:inherit;cursor:pointer;transition:background-color var(--wa-transition-fast)}";
const IrToastItemStyle0 = irToastItemCss;

const IrToastItem = /*@__PURE__*/ proxyCustomElement(class IrToastItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.irDismiss = createEvent(this, "irDismiss", 7);
    }
    variant = 'neutral';
    duration = 5000;
    progress = 100;
    irDismiss;
    timer;
    componentDidLoad() {
        this.startTimer();
    }
    disconnectedCallback() {
        this.clearTimer();
    }
    startTimer() {
        const step = (16 / this.duration) * 100;
        this.timer = window.setInterval(() => {
            this.progress = Math.max(0, this.progress - step);
            if (this.progress <= 0) {
                this.dismiss();
            }
        }, 16);
    }
    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }
    dismiss() {
        this.clearTimer();
        this.irDismiss.emit();
    }
    handleMouseEnter = () => {
        this.clearTimer();
        this.progress = 100;
    };
    handleMouseLeave = () => {
        this.startTimer();
    };
    handleClose = () => {
        this.dismiss();
    };
    render() {
        return (h(Host, { key: '3fededdd9a50fffea4c037f21424ec416da4102e', style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, h("div", { key: 'fc65f679412dfb2f7d3e8c5f5fff3d5d26df85f5', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("div", { key: 'cf8200259a42db183c8d228c892039f7612ec8e7', part: "accent", class: "accent" }), h("div", { key: 'bb4dab55521c19e3152a4090d5e2018545156e43', part: "icon", class: "icon" }, h("slot", { key: '45d13ff3c9a99bfdfda074d78be2fdc1ffec14ae', name: "icon" })), h("div", { key: 'dbae824218abbcdd420cc6f262c4c8308af72be8', part: "content", class: "content" }, h("slot", { key: '44e427fe710560f8ac66d6c991c29d86b67c1795' })), h("button", { key: '8a31226238b8fe9a984c10fbdce7f3f450aaf079', part: "close-button", class: "close-button", type: "button", "aria-label": "Close", onClick: this.handleClose }, h("wa-progress-ring", { key: '941eba0d004de57a63b120d87d15b09c83b627a0', part: "progress-ring", exportparts: "\n              base:progress-ring__base,\n              label:progress-ring__label,\n              track:progress-ring__track,\n              indicator:progress-ring__indicator\n            ", value: this.progress }, h("wa-icon", { key: '030edf7eb764400033e90593d56aa4beb5c61d0b', part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))))));
    }
    static get style() { return IrToastItemStyle0; }
}, [1, "ir-toast-item", {
        "variant": [1],
        "duration": [2],
        "progress": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-toast-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-toast-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrToastItem);
            }
            break;
    } });
}

export { IrToastItem as I, defineCustomElement as d };

//# sourceMappingURL=ir-toast-item2.js.map