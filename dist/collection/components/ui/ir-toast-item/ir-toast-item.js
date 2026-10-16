import { Host, h } from "@stencil/core";
import { t } from "../../../services/locale/t";
export class IrToastItem {
    el;
    variant = 'neutral';
    /** Auto-dismiss delay in milliseconds. Pass `0` or `Infinity` for a persistent toast. */
    duration = 5000;
    /** Whether the close button is rendered. */
    dismissible = true;
    progress = 100;
    leaving = false;
    entered = false;
    /** Emitted once the exit animation finishes and the toast should be removed from the DOM. */
    irDismiss;
    timer;
    remainingMs;
    resumedAt;
    timerStarted = false;
    hiding = false;
    hovered = false;
    focused = false;
    componentDidLoad() {
        if (!this.timerStarted) {
            this.startTimer();
        }
        // Once the enter animation has played, mark the host so re-parenting (the
        // provider moving the toast layer in/out of a modal dialog) never replays it.
        const markEntered = () => {
            clearTimeout(fallback);
            this.entered = true;
        };
        const fallback = window.setTimeout(markEntered, 500);
        this.el.shadowRoot?.querySelector('.toast-item')?.addEventListener('animationend', markEntered, { once: true });
    }
    connectedCallback() {
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
        // Re-parenting disconnects and reconnects the element; resume the countdown
        // with whatever time was left when it was paused.
        if (this.timerStarted && !this.hovered && !this.focused) {
            this.resumeTimer();
        }
    }
    disconnectedCallback() {
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        this.pauseTimer();
    }
    /** Starts the auto-dismiss countdown. Safe to call more than once. */
    async startTimer() {
        this.timerStarted = true;
        if (this.hovered || this.focused) {
            return;
        }
        this.resumeTimer();
    }
    /** Plays the exit animation, then emits `irDismiss`. */
    async hide() {
        if (this.hiding) {
            return;
        }
        this.hiding = true;
        this.pauseTimer();
        if (!this.prefersReducedMotion()) {
            this.leaving = true;
            await new Promise(resolve => {
                const done = () => {
                    clearTimeout(fallback);
                    resolve();
                };
                // Safety timeout in case animationend never fires (display:none ancestors, etc.)
                const fallback = window.setTimeout(done, 300);
                this.el.shadowRoot?.querySelector('.toast-item')?.addEventListener('animationend', done, { once: true });
            });
        }
        this.irDismiss.emit();
    }
    get hasTimer() {
        return Number.isFinite(this.duration) && this.duration > 0;
    }
    prefersReducedMotion() {
        return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    }
    // The countdown is wall-clock based so it survives pauses, re-parenting, and
    // interval throttling in background tabs without drifting.
    resumeTimer() {
        if (!this.hasTimer || this.hiding || this.timer || document.hidden) {
            return;
        }
        this.remainingMs = this.remainingMs ?? this.duration;
        this.resumedAt = Date.now();
        this.timer = window.setInterval(() => {
            const left = this.remainingMs - (Date.now() - this.resumedAt);
            this.progress = Math.max(0, (left / this.duration) * 100);
            if (left <= 0) {
                this.hide();
            }
        }, 100);
    }
    pauseTimer() {
        if (this.timer) {
            this.remainingMs = Math.max(0, this.remainingMs - (Date.now() - this.resumedAt));
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }
    handleVisibilityChange = () => {
        if (document.hidden) {
            this.pauseTimer();
        }
        else {
            this.updateInteraction();
        }
    };
    updateInteraction() {
        if (this.hovered || this.focused) {
            // Reset the countdown while the user is interacting; it restarts from
            // the full duration once they move away.
            this.pauseTimer();
            this.remainingMs = this.duration;
            this.progress = 100;
        }
        else if (this.timerStarted) {
            this.resumeTimer();
        }
    }
    handleMouseEnter = () => {
        this.hovered = true;
        this.updateInteraction();
    };
    handleMouseLeave = () => {
        this.hovered = false;
        this.updateInteraction();
    };
    handleFocusIn = () => {
        this.focused = true;
        this.updateInteraction();
    };
    handleFocusOut = () => {
        this.focused = false;
        this.updateInteraction();
    };
    handleClose = () => {
        this.hide();
    };
    render() {
        return (h(Host, { key: '95b5a9f2270885d9b8559cc78becebcabfccb697', "data-leaving": this.leaving ? 'true' : undefined, "data-entered": this.entered ? 'true' : undefined, style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, h("div", { key: 'bd39e616114318fb19f8fd101de3ba163b48e488', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocusin: this.handleFocusIn, onFocusout: this.handleFocusOut }, h("div", { key: '791af0626ff6bfada42ee20669ab091604719f01', part: "accent", class: "accent" }), h("div", { key: '7186bacb6b1741e03bea797cd1fc9d72061c58fb', part: "icon", class: "icon" }, h("slot", { key: '8079a5bc27a1322bcd170651f0a7faa51b9c1a58', name: "icon" })), h("div", { key: '21cc2e4f76e67142d7cfd612d5fa757051ede44c', part: "content", class: "content" }, h("slot", { key: '4adf4d8404a257a08b17dd083124413c74c7052a' })), this.dismissible && (h("button", { key: '00ce73ea314d684724426d7ce9e4bb902ac5c505', part: "close-button", class: "close-button", type: "button", "aria-label": t('Lcz_CloseNotification', { fallback: 'Close notification' }), onClick: this.handleClose }, this.hasTimer ? (h("wa-progress-ring", { part: "progress-ring", "aria-hidden": "true", exportparts: "\n                  base:progress-ring__base,\n                  label:progress-ring__label,\n                  track:progress-ring__track,\n                  indicator:progress-ring__indicator\n                ", value: this.progress }, h("wa-icon", { part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))) : (h("wa-icon", { part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" })))))));
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
                "reflect": false,
                "attribute": "variant",
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
                    "text": "Auto-dismiss delay in milliseconds. Pass `0` or `Infinity` for a persistent toast."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "duration",
                "defaultValue": "5000"
            },
            "dismissible": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the close button is rendered."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dismissible",
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "progress": {},
            "leaving": {},
            "entered": {}
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
                    "text": "Emitted once the exit animation finishes and the toast should be removed from the DOM."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "startTimer": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Starts the auto-dismiss countdown. Safe to call more than once.",
                    "tags": []
                }
            },
            "hide": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Plays the exit animation, then emits `irDismiss`.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
