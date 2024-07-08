import { h } from "@stencil/core";
import Modal from "../../../utils/modal";
import { v4 } from "uuid";
import { lockBodyScrolling, unlockBodyScrolling } from "../../../utils/scroll";
import { hasSlot } from "../../../utils/slot";
export class IrDrawer {
    constructor() {
        this.componentId = `drawer-${v4()}`;
        this.willShow = false;
        this.willHide = false;
        this.handleCloseClick = () => {
            this.hide();
        };
        this.handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                this.hide();
            }
        };
        this.handleOverlayClick = () => {
            const sixOverlayDismiss = this.sixOverlayDismiss.emit();
            if (!sixOverlayDismiss.defaultPrevented) {
                this.hide();
            }
        };
        this.handleSlotChange = () => {
            this.hasFooter = hasSlot(this.host, 'footer');
        };
        this.handleTransitionEnd = (event) => {
            const target = event.target;
            // Ensure we only emit one event when the target element is no longer visible
            if (event.propertyName === 'transform' && target.classList.contains('drawer__panel')) {
                this.resetTransitionVariables();
            }
        };
        this.hasFooter = false;
        this.isVisible = false;
        this.open = false;
        this.label = '';
        this.placement = 'right';
        this.contained = false;
        this.noHeader = false;
    }
    handleOpenChange() {
        this.open ? this.show() : this.hide();
    }
    connectedCallback() {
        this.modal = new Modal(this.host, {
            onFocusOut: () => { var _a; return (this.contained ? null : (_a = this.panel) === null || _a === void 0 ? void 0 : _a.focus()); },
        });
    }
    componentWillLoad() {
        this.handleSlotChange();
        // Show on init if open
        if (this.open) {
            this.show();
            // if the sidebar is open by default we need to manually reset the
            // transition variables since there will be no transition event
            this.resetTransitionVariables();
        }
    }
    disconnectedCallback() {
        unlockBodyScrolling(this.host);
    }
    async show() {
        if (this.willShow || this.modal == null || this.panel == null || this.drawer == null) {
            return;
        }
        const panel = this.panel;
        const sixShow = this.sixShow.emit();
        if (sixShow.defaultPrevented) {
            this.open = false;
            return;
        }
        this.willShow = true;
        this.isVisible = true;
        this.open = true;
        // Lock body scrolling only if the drawer isn't contained
        if (!this.contained) {
            this.modal.activate();
            lockBodyScrolling(this.host);
        }
        if (this.open) {
            // Wait for the next frame before setting initial focus so the dialog is technically visible
            requestAnimationFrame(() => {
                const sixInitialFocus = this.sixInitialFocus.emit();
                if (!sixInitialFocus.defaultPrevented) {
                    panel.focus({ preventScroll: true });
                }
            });
        }
    }
    async hide() {
        if (this.willHide || this.modal == null) {
            return;
        }
        const sixHide = this.sixHide.emit();
        if (sixHide.defaultPrevented) {
            this.open = true;
            return;
        }
        this.willHide = true;
        this.open = false;
        this.modal.deactivate();
        unlockBodyScrolling(this.host);
    }
    resetTransitionVariables() {
        this.isVisible = this.open;
        this.willShow = false;
        this.willHide = false;
        this.open ? this.sixAfterShow.emit() : this.sixAfterHide.emit();
    }
    render() {
        return (h("div", { key: '72ae1d5594845113b209456cff022edcb8f78473', ref: el => (this.drawer = el), part: "base", class: {
                'drawer': true,
                'drawer--open': this.open,
                'drawer--visible': this.isVisible,
                'drawer--top': this.placement === 'top',
                'drawer--right': this.placement === 'right',
                'drawer--bottom': this.placement === 'bottom',
                'drawer--left': this.placement === 'left',
                'drawer--contained': this.contained,
                'drawer--fixed': !this.contained,
                'drawer--has-footer': this.hasFooter,
            }, onKeyDown: this.handleKeyDown, onTransitionEnd: this.handleTransitionEnd }, h("div", { key: '70b70acb820dcd2abbbc3c9fd175d0f511a5670c', part: "overlay", class: "drawer__overlay", onClick: this.handleOverlayClick, tabIndex: -1 }), h("div", { key: '4aa27870f060cb4695a00a4c0c48674ff96db4f1', ref: el => (this.panel = el), part: "panel", class: "drawer__panel", role: "dialog", "aria-modal": "true", "aria-hidden": this.open ? 'false' : 'true', "aria-label": this.noHeader ? this.label : null, "aria-labelledby": !this.noHeader ? `${this.componentId}-title` : null, tabIndex: 0 }, !this.noHeader && (h("header", { key: '1688235e3114505fd4cc51b86c4996a5e279bdd5', part: "header", class: "drawer__header" }, h("span", { key: '2df352082f19719fa1dc5934ee0796746028c7f4', part: "title", class: "drawer__title", id: `${this.componentId}-title` }, h("slot", { key: 'a6310b74f227677a5efe2e28ca85456d7d5a765b', name: "label" }, this.label || String.fromCharCode(65279))), h("six-icon-button", { key: 'a1bfc76f7d3e6f318dc2041ef1b43f003d61542a', exportparts: "base:close-button", class: "drawer__close", name: "close", onClick: this.handleCloseClick }))), h("div", { key: '57e738bd0f79362ac07f81a50f532a0feac5c325', part: "body", class: "drawer__body" }, h("slot", { key: '53860d460f191b1fa75fdcac6f5015cde95d41dc' })), h("footer", { key: 'a97b6b528f0c700d5c31465b844f9be9c69a7fb0', part: "footer", class: "drawer__footer" }, h("slot", { key: 'e458d9171d02908ddc3c0f9e18a2a76194ec5afe', name: "footer", onSlotchange: this.handleSlotChange })))));
    }
    static get is() { return "ir-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-drawer.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            },
            "label": {
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
                    "text": ""
                },
                "attribute": "label",
                "reflect": false,
                "defaultValue": "''"
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'top' | 'right' | 'bottom' | 'left'",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "placement",
                "reflect": false,
                "defaultValue": "'right'"
            },
            "contained": {
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
                    "text": ""
                },
                "attribute": "contained",
                "reflect": false,
                "defaultValue": "false"
            },
            "noHeader": {
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
                    "text": ""
                },
                "attribute": "no-header",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "hasFooter": {},
            "isVisible": {}
        };
    }
    static get events() {
        return [{
                "method": "sixShow",
                "name": "six-drawer-show",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "sixAfterShow",
                "name": "six-drawer-after-show",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted after the drawer opens and all transitions are complete."
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "sixHide",
                "name": "six-drawer-hide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the drawer closes. Calling `event.preventDefault()` will prevent it from being closed."
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "sixAfterHide",
                "name": "six-drawer-after-hide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted after the drawer closes and all transitions are complete."
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "sixInitialFocus",
                "name": "six-drawer-initial-focus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the drawer opens and the panel gains focus. Calling `event.preventDefault()` will prevent focus and\r\nallow you to set it on a different element in the drawer, such as an input or button."
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "sixOverlayDismiss",
                "name": "six-drawer-overlay-dismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the overlay is clicked. Calling `event.preventDefault()` will prevent the drawer from closing."
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
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
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
//# sourceMappingURL=ir-drawer.js.map
