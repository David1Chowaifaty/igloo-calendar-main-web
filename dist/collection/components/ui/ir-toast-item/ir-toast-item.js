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
        return (h(Host, { key: 'ca7ed7e0e1495bca7a2b58dd6790b1e0f81307b3', style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, h("div", { key: '43db6f774bcde26fa15f814e94aab031b414029c', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("div", { key: '862df35ee632b993eb47ff4801c5bd9a76b1fd64', part: "accent", class: "accent" }), h("div", { key: '37b02a6c0c7ad2848e92a694577d6c5819345824', part: "icon", class: "icon" }, h("slot", { key: 'bfe40d2a38ea9c804fedd9fe06469f7bce21f90f', name: "icon" })), h("div", { key: '556c365bfc82f6af75509d511bdf582a4654b185', part: "content", class: "content" }, h("slot", { key: 'bbfb2658841c85cfac6953b4ff919fa0b55b4ad6' })), h("button", { key: '98635fef09728ccbcac89df2b5ff09bc00b50b4d', part: "close-button", class: "close-button", type: "button", "aria-label": "Close", onClick: this.handleClose }, h("wa-progress-ring", { key: 'cb147b25af4ab8359838d9549e0ec0e7e9116477', part: "progress-ring", exportparts: "\n              base:progress-ring__base,\n              label:progress-ring__label,\n              track:progress-ring__track,\n              indicator:progress-ring__indicator\n            ", value: this.progress }, h("wa-icon", { key: 'fc6dba923da6efd2cc784247ecf3f572d846c0e3', part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))))));
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
