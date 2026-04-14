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
        return (index.h(index.Host, { key: 'ba215642161fd2e1baf8e771535f78774e1545da', style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, index.h("div", { key: 'ac5b804fde0413c07b6542128d74e3a57652c352', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, index.h("div", { key: 'fed674064ace5506debeed13243d3f08b96afdec', part: "accent", class: "accent" }), index.h("div", { key: 'c8146afae39ee4bd0b599a204b37b94462bb5621', part: "icon", class: "icon" }, index.h("slot", { key: '7c7027d21d7a97b9757253b139dbb791462de4b1', name: "icon" })), index.h("div", { key: 'f3a4bb16a24da35210d96c14f5ee60e75e845998', part: "content", class: "content" }, index.h("slot", { key: '816caae66e4dca1bb45c238a5bbbf2a0ce504fb5' })), index.h("button", { key: '183c470d4a0ee4b67160866c0e829978307fed22', part: "close-button", class: "close-button", type: "button", "aria-label": "Close", onClick: this.handleClose }, index.h("wa-progress-ring", { key: '38ed9bab47720d9013d458d47efaed6f0a1df401', part: "progress-ring", exportparts: "\n              base:progress-ring__base,\n              label:progress-ring__label,\n              track:progress-ring__track,\n              indicator:progress-ring__indicator\n            ", value: this.progress }, index.h("wa-icon", { key: '8660f2b4d1828232ead3141b9b52384c4c20e421', part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))))));
    }
};
IrToastItem.style = IrToastItemStyle0;

exports.ir_toast_item = IrToastItem;

//# sourceMappingURL=ir-toast-item.cjs.entry.js.map