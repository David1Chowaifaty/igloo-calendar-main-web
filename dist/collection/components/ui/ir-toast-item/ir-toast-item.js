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
        return (h(Host, { key: '3fededdd9a50fffea4c037f21424ec416da4102e', style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, h("div", { key: 'fc65f679412dfb2f7d3e8c5f5fff3d5d26df85f5', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("div", { key: 'cf8200259a42db183c8d228c892039f7612ec8e7', part: "accent", class: "accent" }), h("div", { key: 'bb4dab55521c19e3152a4090d5e2018545156e43', part: "icon", class: "icon" }, h("slot", { key: '45d13ff3c9a99bfdfda074d78be2fdc1ffec14ae', name: "icon" })), h("div", { key: 'dbae824218abbcdd420cc6f262c4c8308af72be8', part: "content", class: "content" }, h("slot", { key: '44e427fe710560f8ac66d6c991c29d86b67c1795' })), h("button", { key: '8a31226238b8fe9a984c10fbdce7f3f450aaf079', part: "close-button", class: "close-button", type: "button", "aria-label": "Close", onClick: this.handleClose }, h("wa-progress-ring", { key: '941eba0d004de57a63b120d87d15b09c83b627a0', part: "progress-ring", exportparts: "\n              base:progress-ring__base,\n              label:progress-ring__label,\n              track:progress-ring__track,\n              indicator:progress-ring__indicator\n            ", value: this.progress }, h("wa-icon", { key: '030edf7eb764400033e90593d56aa4beb5c61d0b', part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))))));
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
