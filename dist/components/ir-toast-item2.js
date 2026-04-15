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
        return (h(Host, { key: 'ed6f5667e906678f05af497c2483080e950559fb', style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, h("div", { key: 'e736f057f816d2d4058912cd63df1b803786d698', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("div", { key: 'e5abbb4e7af51786a00644258fa4b3e16da08359', part: "accent", class: "accent" }), h("div", { key: '823d4095cfc2d45bb391b77d5f3bede494327289', part: "icon", class: "icon" }, h("slot", { key: '116ce2d9bbbf23e23443ab8c493f43fea423e729', name: "icon" })), h("div", { key: '5def4c951677fadf46b915bb7b6506046295b877', part: "content", class: "content" }, h("slot", { key: '8f92d0f0a3a6f7b9c086b5b9d887b80595164e94' })), h("button", { key: '26fe564fb7e1a9a857626530c9042bda9d3d1cc0', part: "close-button", class: "close-button", type: "button", "aria-label": "Close", onClick: this.handleClose }, h("wa-progress-ring", { key: 'e2c1cbc1dc1b70361e000d8914fb5379ddd791e9', part: "progress-ring", exportparts: "\n              base:progress-ring__base,\n              label:progress-ring__label,\n              track:progress-ring__track,\n              indicator:progress-ring__indicator\n            ", value: this.progress }, h("wa-icon", { key: '8de2d972fc9316c2e5d1660f36d53f3bcc6f891f', part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))))));
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