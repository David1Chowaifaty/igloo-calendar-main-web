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
        return (index.h(index.Host, { key: 'ca7ed7e0e1495bca7a2b58dd6790b1e0f81307b3', style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, index.h("div", { key: '43db6f774bcde26fa15f814e94aab031b414029c', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, index.h("div", { key: '862df35ee632b993eb47ff4801c5bd9a76b1fd64', part: "accent", class: "accent" }), index.h("div", { key: '37b02a6c0c7ad2848e92a694577d6c5819345824', part: "icon", class: "icon" }, index.h("slot", { key: 'bfe40d2a38ea9c804fedd9fe06469f7bce21f90f', name: "icon" })), index.h("div", { key: '556c365bfc82f6af75509d511bdf582a4654b185', part: "content", class: "content" }, index.h("slot", { key: 'bbfb2658841c85cfac6953b4ff919fa0b55b4ad6' })), index.h("button", { key: '98635fef09728ccbcac89df2b5ff09bc00b50b4d', part: "close-button", class: "close-button", type: "button", "aria-label": "Close", onClick: this.handleClose }, index.h("wa-progress-ring", { key: 'cb147b25af4ab8359838d9549e0ec0e7e9116477', part: "progress-ring", exportparts: "\n              base:progress-ring__base,\n              label:progress-ring__label,\n              track:progress-ring__track,\n              indicator:progress-ring__indicator\n            ", value: this.progress }, index.h("wa-icon", { key: 'fc6dba923da6efd2cc784247ecf3f572d846c0e3', part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))))));
    }
};
IrToastItem.style = IrToastItemStyle0;

exports.ir_toast_item = IrToastItem;

//# sourceMappingURL=ir-toast-item.cjs.entry.js.map