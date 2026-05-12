import { Host, h } from "@stencil/core";
export class IrToastItem {
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
        return (h(Host, { key: '88fafc7072425747dd451aa70b1e0f52ef221ddd', style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, h("div", { key: 'f10f6e99e584a74686a3b538cc195a04c63733ba', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("div", { key: '50f88a44790ceb7546240ab7c2bbeed194d0d3cd', part: "accent", class: "accent" }), h("div", { key: '113472fffeb2dc35295ce210f769cdfac6ef276a', part: "icon", class: "icon" }, h("slot", { key: '9335335f76cf9469db95154b88eea03f7b4a928a', name: "icon" })), h("div", { key: 'd90768a5e5c74404363120498c8460d135c1ce11', part: "content", class: "content" }, h("slot", { key: '7aa7ffc58f869303ae257d45afd21276609ce9d6' })), h("button", { key: '6d5630753f0a5dbc198aa893c5b99ac1ed8f7b1e', part: "close-button", class: "close-button", type: "button", "aria-label": "Close", onClick: this.handleClose }, h("wa-progress-ring", { key: '2fac4ecc3220f09bddcea040739f538606004993', part: "progress-ring", exportparts: "\n              base:progress-ring__base,\n              label:progress-ring__label,\n              track:progress-ring__track,\n              indicator:progress-ring__indicator\n            ", value: this.progress }, h("wa-icon", { key: 'e7ae47a5ec90f4e7347bca73dc8c6feaa0b3839f', part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))))));
    }
    static get is() { return "ir-toast-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-toast-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-toast-item.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ToastVariants",
                    "resolved": "\"brand\" | \"danger\" | \"neutral\" | \"success\" | \"warning\"",
                    "references": {
                        "ToastVariants": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-toast-item/ir-toast-item.tsx",
                            "id": "src/components/ui/ir-toast-item/ir-toast-item.tsx::ToastVariants"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'neutral'"
            },
            "duration": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "duration",
                "reflect": false,
                "defaultValue": "5000"
            }
        };
    }
    static get states() {
        return {
            "progress": {}
        };
    }
    static get events() {
        return [{
                "method": "irDismiss",
                "name": "irDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-toast-item.js.map
