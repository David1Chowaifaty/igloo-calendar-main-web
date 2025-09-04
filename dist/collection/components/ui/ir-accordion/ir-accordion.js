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
        return (h(Host, { key: 'd81d6941539848723f0d859d054f7333bc7b5141' }, h("div", { key: '305b7b4f723ce2354862a4bcbd35300112b97cfe', class: "ir-accordion", "data-open": isOpen ? 'true' : 'false' }, h("button", { key: '7c25744654d687af2db7d210203f89f060edbc9a', type: "button", class: "ir-accordion__trigger", "aria-expanded": isOpen ? 'true' : 'false', "aria-controls": this.contentId, "aria-busy": this.isAnimating ? 'true' : 'false', onClick: this.onTriggerClick, onKeyDown: this.onTriggerKeyDown,
            // ref={el => (this.triggerBtn = el as HTMLButtonElement)}
            disabled: this.isAnimating }, this.showCaret && h("ir-icons", { key: 'db68a8212d344da37bd19c974306bd708362ef06', name: 'angle-down', class: `ir-accordion__caret ${isOpen ? 'is-open' : ''}`, "aria-hidden": "true" }), h("div", { key: '5236c81205688cc57d8759db6cd2497bd0448790', class: "ir-accordion__trigger-content" }, h("slot", { key: '86c799d064fa9b75f62d81241676809924e67bcd', name: "trigger" }))), h("div", { key: '6570f8742ea5b529a67df23749be6a451bfb6631', class: "ir-accordion__content", id: this.contentId, ref: el => (this.detailsEl = el), "data-expanded": isOpen ? 'true' : null, role: "region", "aria-hidden": isOpen ? 'false' : 'true' }, h("div", { key: 'ef20adb812e6d549f8ef43506fd4ab6260bf0e6d', class: "ir-accordion__content-inner", ref: el => (this.contentEl = el) }, h("slot", { key: '255b54d5ac0b6a0648d8d5e3e9287faf039d0bc0', name: "body" }))))));
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
