'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irToastItemCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;--accent-width:4px}.accent{flex:0 0 auto;width:var(--accent-width);background:var(--accent-color)}.toast-item{display:flex;align-items:stretch;background:var(--wa-color-surface-raised);border:var(--wa-border-width-s) solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);box-shadow:var(--wa-shadow-l);overflow:hidden}.icon{display:flex;align-items:center;padding:var(--wa-space-l);padding-inline-end:0px;color:var(--accent-color);font-size:1.25em}.content{font-size:var(--wa-font-size-s);flex:1 1 auto;align-self:center;min-width:0px;padding:var(--wa-space-l);color:var(--wa-color-text-normal)}.close-button{flex:0 0 auto;display:flex;align-items:center;justify-content:center;align-self:stretch;padding-inline:var(--wa-space-l);background:transparent;border:none;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);color:var(--wa-color-neutral-on-quiet);font-size:inherit;cursor:pointer;transition:background-color var(--wa-transition-fast)}";
const IrToastItemStyle0 = irToastItemCss;

const IrToastItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irDismiss = index.createEvent(this, "irDismiss", 7);
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
        return (index.h(index.Host, { key: 'f2dbe018b3132d809e2c7acfb30ef79d4a38d727', style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, index.h("div", { key: 'de8cdf40dbdb8102b2478d27597c7d8fb614c35d', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, index.h("div", { key: '0fe00f31cd03a672358aaadd4c1a2ddb0291a74c', part: "accent", class: "accent" }), index.h("div", { key: '396b90264ec9d398cd05eb9292c9742579d8344a', part: "icon", class: "icon" }, index.h("slot", { key: '7e6de1c3e794dc06361aa7b3c5a3663258dd96d2', name: "icon" })), index.h("div", { key: '765e15345e19cc1de3af043074b6d33f9acca3f0', part: "content", class: "content" }, index.h("slot", { key: 'b497cb79b23c4436c65f2a36255f094eb8b3690d' })), index.h("button", { key: 'df7d68e9ce67ad55dc1048042f050a553f8baee6', part: "close-button", class: "close-button", type: "button", "aria-label": "Close", onClick: this.handleClose }, index.h("wa-progress-ring", { key: '7c986d958953e9a51ab7d1b544c67c0760e232e9', part: "progress-ring", exportparts: "\n              base:progress-ring__base,\n              label:progress-ring__label,\n              track:progress-ring__track,\n              indicator:progress-ring__indicator\n            ", value: this.progress }, index.h("wa-icon", { key: 'c0be7178654510108270b32efacf6c846272cd0f', part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))))));
    }
};
IrToastItem.style = IrToastItemStyle0;

exports.ir_toast_item = IrToastItem;

//# sourceMappingURL=ir-toast-item.cjs.entry.js.map