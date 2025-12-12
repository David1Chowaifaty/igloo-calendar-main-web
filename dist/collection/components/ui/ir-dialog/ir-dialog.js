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
    render() {
        return (h("wa-dialog", { key: '256b552e1608551451787ae061743558aa13d5ac', "onwa-hide": this.handleWaHide.bind(this), "onwa-show": this.handleWaShow.bind(this), "onwa-after-hide": this.handleWaAfterHide.bind(this), "onwa-after-show": this.handleWaAfterShow.bind(this), label: this.label, id: "dialog-overview", open: this.open, style: { '--width': 'var(--ir-dialog-width,31rem)' }, "without-header": this.withoutHeader, lightDismiss: this.lightDismiss }, h("slot", { key: 'add2f3d0a6b759a93c43bd688cf2602a6909ba52', name: "header-actions", slot: "header-actions" }), h("slot", { key: 'a7b4d66eff2c8b1a8f505a806fbaa876c96d8734', name: "label", slot: "label" }), h("slot", { key: '6258f90d02d7cf6f9181ee389c1609c006c6c197' }), h("slot", { key: 'ff785f98810cbc8438f08a2c8c8275cc8986bc93', name: "footer", slot: "footer" })));
    }
    static get is() { return "ir-dialog"; }
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
                    "text": "The dialog's label as displayed in the header.\nYou should always include a relevant label, as it is required for proper accessibility.\nIf you need to display HTML, use the label slot instead."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": true
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
                    "text": "Indicates whether or not the dialog is open.\nToggle this attribute to show and hide the dialog."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true
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
                    "text": "Disables the header.\nThis will also remove the default close button."
                },
                "getter": false,
                "setter": false,
                "attribute": "without-header",
                "reflect": true
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
                "attribute": "light-dismiss",
                "reflect": false,
                "defaultValue": "true"
            }
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
                    "text": "Emitted when the dialog is requested to close.\nCalling event.preventDefault() will prevent the dialog from closing.\nYou can inspect event.detail.source to see which element caused the dialog to close.\nIf the source is the dialog element itself, the user has pressed Escape or the dialog has been closed programmatically.\nAvoid using this unless closing the dialog will result in destructive behavior such as data loss."
                },
                "complexType": {
                    "original": "{ source: Element }",
                    "resolved": "{ source: Element; }",
                    "references": {
                        "Element": {
                            "location": "global",
                            "id": "global::Element"
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
}
__decorate([
    OverflowRelease()
], IrDialog.prototype, "handleWaHide", null);
__decorate([
    OverflowAdd()
], IrDialog.prototype, "handleWaShow", null);
//# sourceMappingURL=ir-dialog.js.map
