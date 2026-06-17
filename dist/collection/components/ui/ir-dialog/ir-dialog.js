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
import { OverflowAdd, OverflowRelease } from "../../../decorators/OverflowLock";
import { h } from "@stencil/core";
export class IrDialog {
    el;
    /**
     * The dialog's label as displayed in the header.
     * You should always include a relevant label, as it is required for proper accessibility.
     * If you need to display HTML, use the label slot instead.
     */
    label;
    /**
     * Indicates whether or not the dialog is open.
     * Toggle this attribute to show and hide the dialog.
     */
    open;
    /**
     * Disables the header.
     * This will also remove the default close button.
     */
    withoutHeader;
    /**
     * When enabled, the dialog will be closed when the user clicks outside of it.
     */
    lightDismiss = true;
    /**
     * Emitted when the dialog opens.
     */
    irDialogShow;
    /**
     * Emitted when the dialog is requested to close.
     * Calling event.preventDefault() will prevent the dialog from closing.
     * You can inspect event.detail.source to see which element caused the dialog to close.
     * If the source is the dialog element itself, the user has pressed Escape or the dialog has been closed programmatically.
     * Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
     */
    irDialogHide;
    /**
     * Emitted after the dialog opens and all animations are complete.
     */
    irDialogAfterShow;
    /**
     * Emitted after the dialog closes and all animations are complete.
     */
    irDialogAfterHide;
    slotState = new Map();
    slotObserver;
    SLOT_NAMES = ['label', 'header-actions', 'footer'];
    componentWillLoad() {
        this.updateSlotState();
    }
    componentDidLoad() {
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.removeSlotListeners();
    }
    async openModal() {
        this.open = true;
    }
    async closeModal() {
        this.open = false;
    }
    handleWaHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.open = false;
        this.irDialogHide.emit(e.detail);
    }
    handleWaShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.open = true;
        this.irDialogShow.emit();
    }
    handleWaAfterHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.irDialogAfterHide.emit();
    }
    handleWaAfterShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.irDialogAfterShow.emit();
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    render() {
        return (h("wa-dialog", { key: '239e9e1d61a0a9738d197a85df83b8c8287fb9c6', "onwa-hide": this.handleWaHide.bind(this), "onwa-show": this.handleWaShow.bind(this), "onwa-after-hide": this.handleWaAfterHide.bind(this), "onwa-after-show": this.handleWaAfterShow.bind(this), label: this.label, id: "dialog-overview", open: this.open, style: { '--width': 'var(--ir-dialog-width,31rem)' }, "without-header": this.withoutHeader, lightDismiss: this.lightDismiss, exportparts: "dialog, header, header-actions, title, close-button, close-button__base, body, footer" }, this.slotState.get('header-actions') && h("slot", { key: 'eb4d8f284a95ba59c61c8e25dbdf43d1f8f70c01', name: "header-actions", slot: "header-actions" }), this.slotState.get('label') && h("slot", { key: 'efab2bacd9ea3a589bfaa12771ca8ed951b66451', name: "label", slot: "label" }), h("slot", { key: '3a8976195917fee2d4d6a239141f030734b0c3b7' }), this.slotState.get('footer') && h("slot", { key: '39630175596c3e67b0d48efc3db89567f9db51bf', name: "footer", slot: "footer" })));
    }
    static get is() { return "ir-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dialog.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "The dialog's label as displayed in the header.\r\nYou should always include a relevant label, as it is required for proper accessibility.\r\nIf you need to display HTML, use the label slot instead."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "label"
            },
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
                    "text": "Indicates whether or not the dialog is open.\r\nToggle this attribute to show and hide the dialog."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open"
            },
            "withoutHeader": {
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
                    "text": "Disables the header.\r\nThis will also remove the default close button."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "without-header"
            },
            "lightDismiss": {
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
                    "text": "When enabled, the dialog will be closed when the user clicks outside of it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "light-dismiss",
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "slotState": {}
        };
    }
    static get events() {
        return [{
                "method": "irDialogShow",
                "name": "irDialogShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the dialog opens."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "irDialogHide",
                "name": "irDialogHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the dialog is requested to close.\r\nCalling event.preventDefault() will prevent the dialog from closing.\r\nYou can inspect event.detail.source to see which element caused the dialog to close.\r\nIf the source is the dialog element itself, the user has pressed Escape or the dialog has been closed programmatically.\r\nAvoid using this unless closing the dialog will result in destructive behavior such as data loss."
                },
                "complexType": {
                    "original": "{ source: Element }",
                    "resolved": "{ source: Element; }",
                    "references": {
                        "Element": {
                            "location": "import",
                            "path": "@stencil/core",
                            "id": "node_modules::Element",
                            "referenceLocation": "Element"
                        }
                    }
                }
            }, {
                "method": "irDialogAfterShow",
                "name": "irDialogAfterShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted after the dialog opens and all animations are complete."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "irDialogAfterHide",
                "name": "irDialogAfterHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted after the dialog closes and all animations are complete."
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
            "openModal": {
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
            "closeModal": {
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
    static get elementRef() { return "el"; }
}
__decorate([
    OverflowRelease()
], IrDialog.prototype, "handleWaHide", null);
__decorate([
    OverflowAdd()
], IrDialog.prototype, "handleWaShow", null);
