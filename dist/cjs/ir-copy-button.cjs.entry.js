'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

const irCopyButtonCss = ".sc-ir-copy-button-h{display:inline-block}.copy-tooltip.sc-ir-copy-button{position:relative;display:inline-flex}.copy-button.sc-ir-copy-button{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:0.35rem;cursor:pointer;transition:background-color 160ms ease, color 160ms ease, transform 120ms ease;min-width:2rem;min-height:2rem;border:none}.copy-button[disabled].sc-ir-copy-button{cursor:wait}.icon-container.sc-ir-copy-button{position:relative;width:1.2rem;height:1.2rem}.icon-container.sc-ir-copy-button .icon.sc-ir-copy-button{position:absolute;inset:0;display:inline-flex;align-items:center;justify-content:center;opacity:0;transform:scale(0.92);transition:opacity 180ms ease, transform 200ms ease;color:inherit}.icon-container.sc-ir-copy-button svg.sc-ir-copy-button{width:100%;height:100%;fill:currentColor}.icon-container[data-state='idle'].sc-ir-copy-button .icon--idle.sc-ir-copy-button,.icon-container[data-state='loading'].sc-ir-copy-button .icon--loading.sc-ir-copy-button,.icon-container[data-state='success'].sc-ir-copy-button .icon--success.sc-ir-copy-button,.icon-container[data-state='failed'].sc-ir-copy-button .icon--failed.sc-ir-copy-button{opacity:1;transform:scale(1)}.spinner_P7sC.sc-ir-copy-button{transform-origin:center;animation:spinner_svv2 0.75s infinite linear}@keyframes spinner_svv2{100%{transform:rotate(360deg)}}.copy-button[data-state='success'].sc-ir-copy-button{color:#166534}.copy-button[data-state='failed'].sc-ir-copy-button{color:#991b1b}.copy-button[data-state='loading'].sc-ir-copy-button{cursor:wait}@keyframes ir-copy-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrCopyButtonStyle0 = irCopyButtonCss;

const IrCopyButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    text;
    state = null;
    tooltipId = `ir-copy-tooltip-${Math.random().toString(36).slice(2)}`;
    stateResetTimeout;
    get currentState() {
        return this.state ?? 'idle';
    }
    get tooltipMessage() {
        switch (this.currentState) {
            case 'loading':
                return 'Copying...';
            case 'success':
                return 'Copied to clipboard';
            case 'failed':
                return 'Copy failed';
            default:
                return 'Copy to clipboard';
        }
    }
    disconnectedCallback() {
        window.clearTimeout(this.stateResetTimeout);
    }
    queueStateReset(delay = 2000) {
        window.clearTimeout(this.stateResetTimeout);
        this.stateResetTimeout = window.setTimeout(() => {
            this.state = null;
        }, delay);
    }
    async copyToClipboard() {
        if (this.state === 'loading')
            return;
        this.state = 'loading';
        const value = this.text ?? '';
        try {
            if (!value)
                throw new Error('No text to copy');
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(value);
            }
            else {
                const ta = document.createElement('textarea');
                ta.value = value;
                ta.setAttribute('readonly', '');
                ta.style.position = 'fixed';
                ta.style.left = '-9999px';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.focus();
                ta.select();
                const success = document.execCommand('copy');
                document.body.removeChild(ta);
                if (!success)
                    throw new Error('execCommand failed');
            }
            await new Promise(resolve => window.setTimeout(resolve, 450));
            this.state = 'success';
            this.queueStateReset(2000);
        }
        catch {
            this.state = 'failed';
            this.queueStateReset(2200);
        }
    }
    renderIcons() {
        const state = this.currentState;
        return (index.h("span", { class: "icon-container", "data-state": state }, index.h("svg", { class: "icon icon--idle", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { d: "M480 400L288 400C279.2 400 272 392.8 272 384L272 128C272 119.2 279.2 112 288 112L421.5 112C425.7 112 429.8 113.7 432.8 116.7L491.3 175.2C494.3 178.2 496 182.3 496 186.5L496 384C496 392.8 488.8 400 480 400zM288 448L480 448C515.3 448 544 419.3 544 384L544 186.5C544 169.5 537.3 153.2 525.3 141.2L466.7 82.7C454.7 70.7 438.5 64 421.5 64L288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L368 496L368 512C368 520.8 360.8 528 352 528L160 528C151.2 528 144 520.8 144 512L144 256C144 247.2 151.2 240 160 240L176 240L176 192L160 192z" })), index.h("svg", { class: "icon icon--loading", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z", class: "spinner_P7sC" })), index.h("svg", { class: "icon icon--success", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" })), index.h("svg", { class: "icon icon--failed", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { d: "M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" }))));
    }
    render() {
        const state = this.currentState;
        return (index.h("button", { key: 'e39f2f24d43ca4fe73b61fc349228adac131892d', type: "button", class: "copy-button btn btn-outline-secondary p-0 m-0", "data-state": state, "data-tooltip-placeholder": true, "aria-label": this.tooltipMessage, "aria-describedby": this.tooltipId, "aria-busy": state === 'loading' ? 'true' : 'false', disabled: state === 'loading', onClick: () => this.copyToClipboard() }, this.renderIcons()));
    }
};
IrCopyButton.style = IrCopyButtonStyle0;

exports.ir_copy_button = IrCopyButton;

//# sourceMappingURL=ir-copy-button.cjs.entry.js.map