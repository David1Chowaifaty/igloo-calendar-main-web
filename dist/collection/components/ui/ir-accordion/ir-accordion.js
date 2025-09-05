import { Host, h } from "@stencil/core";
let accId = 0;
export class IrAccordion {
    constructor() {
        /** Start expanded */
        this.defaultExpanded = false;
        /** Show caret icon */
        this.caret = true;
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
            this.irToggle.emit({ expanded: nextExpanded });
            this.updateExpansion(nextExpanded, true);
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
                this.show();
            }
            else {
                this.hide();
            }
            if (shouldEmit) {
                this.irToggle.emit({ expanded });
            }
        }
    }
    async show() {
        if (!this.detailsEl || !this.contentEl || this.isAnimating)
            return;
        this.isAnimating = true;
        this.cleanupPreviousAnimation();
        // Set initial state
        const startHeight = this.detailsEl.offsetHeight;
        this.detailsEl.style.height = `${startHeight}px`;
        this.detailsEl.style.overflow = 'hidden';
        // Make content visible and measure target height
        this.detailsEl.setAttribute('data-expanded', 'true');
        const targetHeight = this.contentEl.scrollHeight;
        // Use requestAnimationFrame to ensure the browser has processed the initial state
        requestAnimationFrame(() => {
            if (!this.detailsEl)
                return;
            this.detailsEl.style.height = `${targetHeight}px`;
            const handleTransitionEnd = (event) => {
                // Make sure this is the height transition and not a child element
                if (event.target === this.detailsEl && event.propertyName === 'height') {
                    this.finishOpenAnimation();
                }
            };
            this.cleanupAnimation = () => {
                if (this.detailsEl) {
                    this.detailsEl.removeEventListener('transitionend', handleTransitionEnd);
                }
                this.isAnimating = false;
            };
            this.detailsEl.addEventListener('transitionend', handleTransitionEnd);
            // Fallback timeout in case transitionend doesn't fire
            setTimeout(() => {
                if (this.isAnimating) {
                    this.finishOpenAnimation();
                }
            }, 300); // Should match your CSS transition duration
        });
    }
    async hide() {
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
            if (!this.detailsEl)
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
                this.isAnimating = false;
            };
            this.detailsEl.addEventListener('transitionend', handleTransitionEnd);
            // Fallback timeout
            setTimeout(() => {
                if (this.isAnimating) {
                    this.finishCloseAnimation();
                }
            }, 300);
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
        this.expanded = true;
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
        this.expanded = false;
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
        return (h(Host, { key: '554c1f6a1e01eb650dc55cc21b673c5d0dd80a87' }, h("div", { key: 'a09b8ef46050bf82eab4bf5540adadb27ff216f0', part: "base", class: "ir-accordion", "data-open": isOpen ? 'true' : 'false' }, h("button", { key: '9b5c579a5a1e8467d571e852fe0878435b57386a', type: "button", class: "ir-accordion__trigger", "aria-expanded": isOpen ? 'true' : 'false', "aria-controls": this.contentId, "aria-busy": this.isAnimating ? 'true' : 'false', onClick: this.onTriggerClick, onKeyDown: this.onTriggerKeyDown, disabled: this.isAnimating, part: "trigger" }, this.caret && h("ir-icons", { key: '5241ab159e2c868920764065264c019729454818', name: 'angle-down', class: `ir-accordion__caret ${isOpen ? 'is-open' : ''}`, "aria-hidden": "true" }), h("div", { key: '602f7cefdda4396578b373eb980a85e2d05e63dd', class: "ir-accordion__trigger-content" }, h("slot", { key: 'c8b19e439e5e73f176fc35e63251bf466be8b770', name: "trigger" }))), h("div", { key: '7ac9ac585adddad0e7cff1cb9889985e23e3da0e', class: "ir-accordion__content", id: this.contentId, ref: el => (this.detailsEl = el), "data-expanded": isOpen ? 'true' : null, role: "region", "aria-hidden": isOpen ? 'false' : 'true' }, h("div", { key: '2220e3ffc281110bae4beb466077049af9ca7973', class: "ir-accordion__content-inner", part: "content", ref: el => (this.contentEl = el) }, h("slot", { key: '31d5481c89073502a21bf0bb44e55b0b00a4ea48' }))))));
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
                "mutable": true,
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
                "reflect": true
            },
            "caret": {
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
                "attribute": "caret",
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
                "name": "ir-toggle",
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
    static get methods() {
        return {
            "show": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "TransitionEvent": {
                            "location": "global",
                            "id": "global::TransitionEvent"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
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
                        },
                        "TransitionEvent": {
                            "location": "global",
                            "id": "global::TransitionEvent"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
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
