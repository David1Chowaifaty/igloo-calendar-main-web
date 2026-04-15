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
        return (h(Host, { key: 'ed6f5667e906678f05af497c2483080e950559fb', style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, h("div", { key: 'e736f057f816d2d4058912cd63df1b803786d698', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("div", { key: 'e5abbb4e7af51786a00644258fa4b3e16da08359', part: "accent", class: "accent" }), h("div", { key: '823d4095cfc2d45bb391b77d5f3bede494327289', part: "icon", class: "icon" }, h("slot", { key: '116ce2d9bbbf23e23443ab8c493f43fea423e729', name: "icon" })), h("div", { key: '5def4c951677fadf46b915bb7b6506046295b877', part: "content", class: "content" }, h("slot", { key: '8f92d0f0a3a6f7b9c086b5b9d887b80595164e94' })), h("button", { key: '26fe564fb7e1a9a857626530c9042bda9d3d1cc0', part: "close-button", class: "close-button", type: "button", "aria-label": "Close", onClick: this.handleClose }, h("wa-progress-ring", { key: 'e2c1cbc1dc1b70361e000d8914fb5379ddd791e9', part: "progress-ring", exportparts: "\n              base:progress-ring__base,\n              label:progress-ring__label,\n              track:progress-ring__track,\n              indicator:progress-ring__indicator\n            ", value: this.progress }, h("wa-icon", { key: '8de2d972fc9316c2e5d1660f36d53f3bcc6f891f', part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))))));
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
