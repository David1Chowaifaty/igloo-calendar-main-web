import { Host, h } from "@stencil/core";
let accId = 0;
export class IrAccordion {
    constructor() {
        /** Start expanded */
        this.defaultExpanded = false;
        /** Show caret icon */
        this.showCaret = true;
        /** Caret icon name */
        this.caretIcon = 'angle-down';
        this._expanded = false;
        // private triggerBtn?: HTMLButtonElement;
        this.contentId = `ir-accordion-content-${++accId}`;
        this.isAnimating = false;
        this.onTriggerClick = () => {
            // Don't allow clicks during animation
            if (this.isAnimating) {
                return;
            }
            const nextExpanded = !this._expanded;
            // For controlled components, just emit the event
            if (this.expanded !== undefined) {
                this.irToggle.emit({ expanded: nextExpanded });
            }
            else {
                // For uncontrolled components, update state and emit
                this.updateExpansion(nextExpanded, true);
            }
        };
        this.onTriggerKeyDown = (ev) => {
            // Allow keyboard toggle with Enter/Space
            if ((ev.key === 'Enter' || ev.key === ' ') && !this.isAnimating) {
                ev.preventDefault();
                this.onTriggerClick();
            }
        };
    }
    componentWillLoad() {
        var _a;
        this._expanded = (_a = this.expanded) !== null && _a !== void 0 ? _a : this.defaultExpanded;
    }
    disconnectedCallback() {
        // Clean up any ongoing animation
        if (this.cleanupAnimation) {
            this.cleanupAnimation();
        }
    }
    watchExpanded(newValue) {
        if (newValue !== undefined && newValue !== this._expanded) {
            this.updateExpansion(newValue, false); // Don't emit event for external changes
        }
    }
    updateExpansion(expanded, shouldEmit = true) {
        // Prevent multiple simultaneous animations
        if (this.isAnimating) {
            return;
        }
        const wasExpanded = this._expanded;
        this._expanded = expanded;
        // Only animate if the state actually changed
        if (wasExpanded !== expanded) {
            if (expanded) {
                this.openWithAnimation();
            }
            else {
                this.closeWithAnimation();
            }
            if (shouldEmit) {
                this.irToggle.emit({ expanded });
            }
        }
    }
    openWithAnimation() {
        console.log('openWithAnimation called', { detailsEl: !!this.detailsEl, contentEl: !!this.contentEl, isAnimating: this.isAnimating });
        if (!this.detailsEl || !this.contentEl || this.isAnimating) {
            console.log('openWithAnimation aborted - missing elements or already animating');
            return;
        }
        this.isAnimating = true;
        this.cleanupPreviousAnimation();
        // Set initial state
        const startHeight = this.detailsEl.offsetHeight;
        console.log('Start height:', startHeight);
        this.detailsEl.style.height = `${startHeight}px`;
        this.detailsEl.style.overflow = 'hidden';
        // Make content visible and measure target height
        this.detailsEl.setAttribute('data-expanded', 'true');
        const targetHeight = this.contentEl.scrollHeight;
        console.log('Target height:', targetHeight);
        // Use requestAnimationFrame to ensure the browser has processed the initial state
        requestAnimationFrame(() => {
            if (!this.detailsEl || !this.isAnimating) {
                console.log('requestAnimationFrame aborted');
                return;
            }
            console.log('Setting height to:', targetHeight);
            this.detailsEl.style.height = `${targetHeight}px`;
            const handleTransitionEnd = (event) => {
                console.log('Transition end event:', event.propertyName, event.target === this.detailsEl);
                // Make sure this is the height transition and not a child element
                if (event.target === this.detailsEl && event.propertyName === 'height') {
                    this.finishOpenAnimation();
                }
            };
            this.cleanupAnimation = () => {
                if (this.detailsEl) {
                    this.detailsEl.removeEventListener('transitionend', handleTransitionEnd);
                }
            };
            this.detailsEl.addEventListener('transitionend', handleTransitionEnd);
            // Fallback timeout in case transitionend doesn't fire
            setTimeout(() => {
                if (this.isAnimating) {
                    console.log('Fallback timeout triggered for open animation');
                    this.finishOpenAnimation();
                }
            }, 250);
        });
    }
    closeWithAnimation() {
        if (!this.detailsEl || !this.contentEl || this.isAnimating)
            return;
        this.isAnimating = true;
        this.cleanupPreviousAnimation();
        // Set initial height to current scrollHeight
        const startHeight = this.detailsEl.scrollHeight;
        this.detailsEl.style.height = `${startHeight}px`;
        this.detailsEl.style.overflow = 'hidden';
        // Force reflow then animate to 0
        requestAnimationFrame(() => {
            if (!this.detailsEl || !this.isAnimating)
                return;
            this.detailsEl.style.height = '0px';
            const handleTransitionEnd = (event) => {
                // Make sure this is the height transition and not a child element
                if (event.target === this.detailsEl && event.propertyName === 'height') {
                    this.finishCloseAnimation();
                }
            };
            this.cleanupAnimation = () => {
                if (this.detailsEl) {
                    this.detailsEl.removeEventListener('transitionend', handleTransitionEnd);
                }
            };
            this.detailsEl.addEventListener('transitionend', handleTransitionEnd);
            // Fallback timeout
            setTimeout(() => {
                if (this.isAnimating) {
                    this.finishCloseAnimation();
                }
            }, 250);
        });
    }
    finishOpenAnimation() {
        if (this.cleanupAnimation) {
            this.cleanupAnimation();
            this.cleanupAnimation = undefined;
        }
        if (this.detailsEl) {
            this.detailsEl.style.height = '';
            this.detailsEl.style.overflow = '';
        }
        this.isAnimating = false;
    }
    finishCloseAnimation() {
        if (this.cleanupAnimation) {
            this.cleanupAnimation();
            this.cleanupAnimation = undefined;
        }
        if (this.detailsEl) {
            this.detailsEl.style.height = '';
            this.detailsEl.style.overflow = '';
            this.detailsEl.removeAttribute('data-expanded');
        }
        this.isAnimating = false;
    }
    cleanupPreviousAnimation() {
        if (this.cleanupAnimation) {
            this.cleanupAnimation();
            this.cleanupAnimation = undefined;
        }
        // Always reset isAnimating when cleaning up
        this.isAnimating = false;
    }
    render() {
        const isOpen = this._expanded;
        console.log(isOpen);
        return (h(Host, { key: '512315a15a1a6690aadf6402bdf1eef37a8640b6' }, h("div", { key: 'ca5a5b9cd233dfbd7e6cd86442caa0da5c77970f', class: "ir-accordion", "data-open": isOpen ? 'true' : 'false' }, h("button", { key: '9bcee8c400d9c082d79a3ad6029e61708b417fdb', type: "button", class: "ir-accordion__trigger", "aria-expanded": isOpen ? 'true' : 'false', "aria-controls": this.contentId, "aria-busy": this.isAnimating ? 'true' : 'false', onClick: this.onTriggerClick, onKeyDown: this.onTriggerKeyDown,
            // ref={el => (this.triggerBtn = el as HTMLButtonElement)}
            disabled: this.isAnimating }, this.showCaret && h("ir-icons", { key: '8164064d5fb12f9ce1bfed89971e01efde21dfc3', name: 'angle-down', class: `ir-accordion__caret ${isOpen ? 'is-open' : ''}`, "aria-hidden": "true" }), h("div", { key: '41ef0077b8cc670b5af31aa5862c256ab59e9649', class: "ir-accordion__trigger-content" }, h("slot", { key: 'd0dd6b41b8177b0b57d0685c889776ffe4cdbb7e', name: "trigger" }))), h("div", { key: '2389aa0047f5b5442d30615239837b87e49bf042', class: "ir-accordion__content", id: this.contentId, ref: el => (this.detailsEl = el), "data-expanded": isOpen ? 'true' : null, role: "region", "aria-hidden": isOpen ? 'false' : 'true' }, h("div", { key: '564cbe3611396dcaffc4a3e63c6b9405e0910d73', class: "ir-accordion__content-inner", ref: el => (this.contentEl = el) }, h("slot", { key: 'fe762287c9ce74b9d7101b3ce6688dbf5b9bc4c9', name: "body" }))))));
    }
    static get is() { return "ir-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-accordion.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-accordion.css"]
        };
    }
    static get properties() {
        return {
            "defaultExpanded": {
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
                    "text": "Start expanded"
                },
                "getter": false,
                "setter": false,
                "attribute": "default-expanded",
                "reflect": false,
                "defaultValue": "false"
            },
            "expanded": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional controlled prop: when provided, component follows this value"
                },
                "getter": false,
                "setter": false,
                "attribute": "expanded",
                "reflect": false
            },
            "showCaret": {
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
                    "text": "Show caret icon"
                },
                "getter": false,
                "setter": false,
                "attribute": "show-caret",
                "reflect": false,
                "defaultValue": "true"
            },
            "caretIcon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Caret icon name"
                },
                "getter": false,
                "setter": false,
                "attribute": "caret-icon",
                "reflect": false,
                "defaultValue": "'angle-down'"
            }
        };
    }
    static get states() {
        return {
            "_expanded": {}
        };
    }
    static get events() {
        return [{
                "method": "irToggle",
                "name": "irToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired after expansion state changes"
                },
                "complexType": {
                    "original": "{ expanded: boolean }",
                    "resolved": "{ expanded: boolean; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "expanded",
                "methodName": "watchExpanded"
            }];
    }
}
//# sourceMappingURL=ir-accordion.js.map
