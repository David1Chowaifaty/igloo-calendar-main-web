var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Host, h } from "@stencil/core";
import { autoUpdate, computePosition, flip, offset, shift, arrow as floatingArrow, size } from "@floating-ui/dom";
import { ClickOutside } from "../../../decorators/ClickOutside";
export class IrPopup {
    constructor() {
        /** Popper placement, e.g. "bottom-start". */
        this.placement = 'bottom-start';
        /** Positioning strategy ("absolute" or "fixed"). */
        this.strategy = 'absolute';
        /** Offset skid in pixels along the reference element. */
        this.offsetSkid = 0;
        /** Enable or disable flip behavior. */
        this.allowFlip = true;
        /** Comma-separated list of fallback placements used when flipping. */
        this.fallbackPlacements = 'top-start,bottom-end,top-end,right,left';
        /** Padding for the preventOverflow modifier. */
        this.overflowPadding = 8;
        /** Enable or disable the arrow element. */
        this.withArrow = true;
        // /** Optional aria-label for the dialog. */
        // @Prop() ariaLabel?: string;
        // /** Optional aria-labelledby id for the dialog. */
        // @Prop() ariaLabelledby?: string;
        // /** Optional aria-describedby id for the dialog. */
        // @Prop() ariaDescribedby?: string;
        /** Whether this dialog is modal. */
        this.modal = false;
        this.isOpen = false;
        this.dialogId = `ir-popup-${IrPopup.idSeed++}`;
        this.handleAnchorSlotChange = () => {
            // Don't stop propagation - let it bubble for nested components
            this.syncAnchorFromSlot();
        };
        this.handleAnchorClick = (event) => {
            // Stop the click from bubbling to prevent parent popups from closing
            event.stopPropagation();
            this.toggleDialog();
        };
    }
    componentDidLoad() {
        this.syncAnchorFromSlot();
    }
    disconnectedCallback() {
        this.destroyPopperInstance();
        this.removeAnchorListener();
    }
    handleKeyDown(event) {
        // Only handle Escape if this is the topmost open dialog
        if (event.key === 'Escape' && this.isOpen && this.dialogRef) {
            // Check if this dialog has the highest z-index among open dialogs
            const allDialogs = document.querySelectorAll('ir-popup');
            let isTopmost = true;
            allDialogs.forEach((popup) => {
                if (popup !== this.host && popup.shadowRoot) {
                    const dialog = popup.shadowRoot.querySelector('dialog');
                    if (dialog === null || dialog === void 0 ? void 0 : dialog.open) {
                        const otherZIndex = parseInt(dialog.style.zIndex || '0', 10);
                        if (otherZIndex > this.zIndex) {
                            isTopmost = false;
                        }
                    }
                }
            });
            if (isTopmost) {
                event.stopPropagation();
                this.close();
            }
        }
    }
    getDirectAnchorElement() {
        return Array.from(this.host.children).find(child => child.getAttribute('slot') === 'anchor');
    }
    syncAnchorFromSlot() {
        const nextAnchor = this.getDirectAnchorElement();
        if (nextAnchor !== this.anchorElement) {
            this.removeAnchorListener();
            this.anchorElement = nextAnchor;
            if (this.anchorElement) {
                this.anchorElement.setAttribute('aria-haspopup', 'dialog');
                this.anchorElement.setAttribute('aria-expanded', String(this.isOpen));
                this.anchorElement.setAttribute('aria-controls', this.dialogId);
            }
            this.addAnchorListener();
            if (this.popperInstance) {
                this.destroyPopperInstance();
            }
            if (this.isOpen) {
                this.createPopperInstance();
            }
        }
    }
    addAnchorListener() {
        if (this.anchorElement) {
            this.anchorElement.addEventListener('click', this.handleAnchorClick);
        }
    }
    removeAnchorListener() {
        if (this.anchorElement) {
            this.anchorElement.removeEventListener('click', this.handleAnchorClick);
        }
    }
    toggleDialog() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    async open() {
        var _a;
        if (!this.dialogRef) {
            return;
        }
        if (!this.zIndex) {
            IrPopup.zIndexSeed += 1;
            this.zIndex = IrPopup.zIndexSeed;
        }
        if (this.dialogRef) {
            this.dialogRef.style.zIndex = String(this.zIndex);
        }
        if (this.contentElement) {
            this.contentElement.style.zIndex = String(this.zIndex);
        }
        if (!this.dialogRef.open) {
            if (this.modal && this.dialogRef.showModal) {
                this.dialogRef.showModal();
            }
            else {
                this.dialogRef.show();
            }
        }
        this.isOpen = true;
        this.opened.emit();
        (_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-expanded', 'true');
        // Use a slight delay to ensure DOM is ready
        if (!this.modal) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.createPopperInstance();
                    this.dialogRef.focus();
                });
            });
        }
    }
    async close() {
        var _a, _b;
        if ((_a = this.dialogRef) === null || _a === void 0 ? void 0 : _a.open) {
            this.dialogRef.close();
        }
        this.isOpen = false;
        this.closed.emit();
        (_b = this.anchorElement) === null || _b === void 0 ? void 0 : _b.setAttribute('aria-expanded', 'false');
        this.destroyPopperInstance();
    }
    handlePopperPropsChange() {
        if (this.cleanupAutoUpdate) {
            this.updatePosition();
        }
    }
    getFloatingOptions() {
        var _a, _b;
        const effectiveDistance = (_b = (_a = this.offsetDistance) !== null && _a !== void 0 ? _a : this.distance) !== null && _b !== void 0 ? _b : 3;
        const fallbackPlacements = this.fallbackPlacements
            .split(',')
            .map(value => value.trim())
            .filter(Boolean);
        const middleware = [
            offset({
                mainAxis: effectiveDistance,
                crossAxis: this.offsetSkid || 0,
            }),
            ...(this.allowFlip ? [flip({ fallbackPlacements })] : []),
            shift({
                padding: this.overflowPadding,
                crossAxis: true,
            }),
        ];
        if (this.withArrow && this.arrow) {
            middleware.push(floatingArrow({
                element: this.arrow,
            }));
        }
        if (this.sync) {
            middleware.push(size({
                apply: ({ rects }) => {
                    const syncWidth = this.sync === 'width' || this.sync === 'both';
                    const syncHeight = this.sync === 'height' || this.sync === 'both';
                    this.contentElement.style.width = syncWidth ? `${rects.reference.width}px` : '';
                    this.contentElement.style.height = syncHeight ? `${rects.reference.height}px` : '';
                },
            }));
        }
        else {
            // Cleanup styles if we're not matching width/height
            this.contentElement.style.width = '';
            this.contentElement.style.height = '';
        }
        return {
            placement: this.placement,
            strategy: this.strategy,
            middleware,
        };
    }
    async updatePosition() {
        if (!this.anchorElement || !this.contentElement) {
            return;
        }
        const { placement, strategy, middleware } = this.getFloatingOptions();
        const { x, y, placement: computedPlacement, middlewareData, } = await computePosition(this.anchorElement, this.contentElement, {
            placement,
            strategy,
            middleware,
        });
        Object.assign(this.contentElement.style, {
            left: `${x}px`,
            top: `${y}px`,
            position: strategy,
        });
        if (this.withArrow && this.arrow) {
            const arrowData = middlewareData.arrow;
            const basePlacement = computedPlacement.split('-')[0];
            const staticSide = {
                top: 'bottom',
                right: 'left',
                bottom: 'top',
                left: 'right',
            }[basePlacement];
            Object.assign(this.arrow.style, {
                left: (arrowData === null || arrowData === void 0 ? void 0 : arrowData.x) != null ? `${arrowData.x}px` : '',
                top: (arrowData === null || arrowData === void 0 ? void 0 : arrowData.y) != null ? `${arrowData.y}px` : '',
                right: '',
                bottom: '',
                position: 'absolute',
                [staticSide]: `calc(-1 * var(--arrow-diagonal-size))`,
            });
        }
    }
    createPopperInstance() {
        if (!this.anchorElement || !this.contentElement) {
            return;
        }
        this.destroyPopperInstance();
        this.updatePosition();
        this.cleanupAutoUpdate = autoUpdate(this.anchorElement, this.contentElement, () => {
            this.updatePosition();
        });
    }
    destroyPopperInstance() {
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
            this.cleanupAutoUpdate = undefined;
        }
    }
    render() {
        return (h(Host, { key: 'ccb54ec29ceab1dd3a9fd7a200e44f5376cd1701' }, h("slot", { key: 'ab3db8f7b04db8a17c5e60f90b37b7b8f015a9b1', name: "anchor", onSlotchange: this.handleAnchorSlotChange }), h("dialog", { key: 'f572038b443bc7c020634894c6e755b7f421a2ad', id: this.dialogId, class: "dialog", role: "dialog", "aria-modal": this.modal ? 'true' : 'false',
            // aria-label={this.ariaLabel}
            // aria-labelledby={this.ariaLabelledby}
            // aria-describedby={this.ariaDescribedby}
            ref: el => (this.dialogRef = el) }, h("div", { key: '4d14b4f0d2f17047b81f8f7fd44bc154ab4c9ce3', class: "popup-content", part: "content", ref: el => (this.contentElement = el) }, this.withArrow && h("div", { key: 'b0d8a6478ec9e06525d3ab7ead82faabcdf61ad3', part: "arrow", class: "arrow", role: "presentation" }), h("div", { key: 'e8597a72192a277ed34e145633994797e4641e74', class: 'body', part: "body" }, h("slot", { key: '1fa59aa6530a5b630b37094704dafcdeafc9979d' }))))));
    }
    static get is() { return "ir-popup"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-popup.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-popup.css"]
        };
    }
    static get properties() {
        return {
            "distance": {
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
                    "text": "Distance between the anchor and popup in pixels (used when offsetDistance is not provided)."
                },
                "getter": false,
                "setter": false,
                "attribute": "distance",
                "reflect": false
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Placement",
                    "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "Placement": {
                            "location": "import",
                            "path": "@floating-ui/dom",
                            "id": "node_modules::Placement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Popper placement, e.g. \"bottom-start\"."
                },
                "getter": false,
                "setter": false,
                "attribute": "placement",
                "reflect": false,
                "defaultValue": "'bottom-start'"
            },
            "strategy": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Strategy",
                    "resolved": "\"absolute\" | \"fixed\"",
                    "references": {
                        "Strategy": {
                            "location": "import",
                            "path": "@floating-ui/dom",
                            "id": "node_modules::Strategy"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Positioning strategy (\"absolute\" or \"fixed\")."
                },
                "getter": false,
                "setter": false,
                "attribute": "strategy",
                "reflect": false,
                "defaultValue": "'absolute'"
            },
            "offsetSkid": {
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
                    "text": "Offset skid in pixels along the reference element."
                },
                "getter": false,
                "setter": false,
                "attribute": "offset-skid",
                "reflect": false,
                "defaultValue": "0"
            },
            "offsetDistance": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Offset distance in pixels away from the reference element."
                },
                "getter": false,
                "setter": false,
                "attribute": "offset-distance",
                "reflect": false
            },
            "allowFlip": {
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
                    "text": "Enable or disable flip behavior."
                },
                "getter": false,
                "setter": false,
                "attribute": "allow-flip",
                "reflect": false,
                "defaultValue": "true"
            },
            "fallbackPlacements": {
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
                    "text": "Comma-separated list of fallback placements used when flipping."
                },
                "getter": false,
                "setter": false,
                "attribute": "fallback-placements",
                "reflect": false,
                "defaultValue": "'top-start,bottom-end,top-end,right,left'"
            },
            "overflowPadding": {
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
                    "text": "Padding for the preventOverflow modifier."
                },
                "getter": false,
                "setter": false,
                "attribute": "overflow-padding",
                "reflect": false,
                "defaultValue": "8"
            },
            "withArrow": {
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
                    "text": "Enable or disable the arrow element."
                },
                "getter": false,
                "setter": false,
                "attribute": "with-arrow",
                "reflect": false,
                "defaultValue": "true"
            },
            "sync": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'width' | 'height' | 'both'",
                    "resolved": "\"both\" | \"height\" | \"width\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Syncs the popup's width or height to that of the anchor element."
                },
                "getter": false,
                "setter": false,
                "attribute": "sync",
                "reflect": false
            },
            "modal": {
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
                    "text": "Whether this dialog is modal."
                },
                "getter": false,
                "setter": false,
                "attribute": "modal",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "opened",
                "name": "opened",
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
            }, {
                "method": "closed",
                "name": "closed",
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
    static get methods() {
        return {
            "open": {
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
                    "text": "",
                    "tags": []
                }
            },
            "close": {
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
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "placement",
                "methodName": "handlePopperPropsChange"
            }, {
                "propName": "strategy",
                "methodName": "handlePopperPropsChange"
            }, {
                "propName": "offsetSkid",
                "methodName": "handlePopperPropsChange"
            }, {
                "propName": "offsetDistance",
                "methodName": "handlePopperPropsChange"
            }, {
                "propName": "allowFlip",
                "methodName": "handlePopperPropsChange"
            }, {
                "propName": "fallbackPlacements",
                "methodName": "handlePopperPropsChange"
            }, {
                "propName": "overflowPadding",
                "methodName": "handlePopperPropsChange"
            }, {
                "propName": "withArrow",
                "methodName": "handlePopperPropsChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
IrPopup.zIndexSeed = 1000;
IrPopup.idSeed = 0;
__decorate([
    ClickOutside()
], IrPopup.prototype, "close", null);
//# sourceMappingURL=ir-popup.js.map
