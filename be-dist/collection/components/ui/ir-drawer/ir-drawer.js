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
        return (h("div", { key: '8b58fb4b3d1a816a3f0ea76fe7b20f36453f40a4', ref: el => (this.drawer = el), part: "base", class: {
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
            }, onKeyDown: this.handleKeyDown, onTransitionEnd: this.handleTransitionEnd }, h("div", { key: '6b5810702f861217f51da6dee20f3658a40c7089', part: "overlay", class: "drawer__overlay", onClick: this.handleOverlayClick, tabIndex: -1 }), h("div", { key: 'b14253960cb18333b49ff58e6cdc45ced1ef5007', ref: el => (this.panel = el), part: "panel", class: "drawer__panel", role: "dialog", "aria-modal": "true", "aria-hidden": this.open ? 'false' : 'true', "aria-label": this.noHeader ? this.label : null, "aria-labelledby": !this.noHeader ? `${this.componentId}-title` : null, tabIndex: 0 }, !this.noHeader && (h("header", { key: '4734b6fe49ee12a1a0026437db93b72006c1074d', part: "header", class: "drawer__header" }, h("span", { key: '5283f80bdf7a11b1d5b671d92ca1918fde7862d4', part: "title", class: "drawer__title", id: `${this.componentId}-title` }, h("slot", { key: 'b64fd542a814696556f49fd8f652f58505eaf823', name: "label" }, this.label || String.fromCharCode(65279))), h("six-icon-button", { key: 'db608f18334af499613fe7b89770cd5334436b9d', exportparts: "base:close-button", class: "drawer__close", name: "close", onClick: this.handleCloseClick }))), h("div", { key: 'a5a76bb0ad19e6e28ad0ab077587c3175f999b76', part: "body", class: "drawer__body" }, h("slot", { key: '2e235e0f70d143bb53d8eae4fb82948dad9f5462' })), h("footer", { key: '34f74d90112793f70a9028a992e3cb95737c1bc7', part: "footer", class: "drawer__footer" }, h("slot", { key: '3d849970a40b1413caac58f4465b4209886f1a30', name: "footer", onSlotchange: this.handleSlotChange })))));
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
