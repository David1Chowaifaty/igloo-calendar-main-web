import { Host, h } from "@stencil/core";
export class IrDialog {
    constructor() {
        /**
         * Controls whether the dialog is open. Reflects to the host attribute for CSS hooks.
         */
        this.open = false;
        this.hasTitleSlot = false;
        this.hasBodySlot = false;
        this.previouslyFocused = null;
        this.instanceId = ++IrDialog.dialogIds;
        this.handleCancel = (event) => {
            event.preventDefault();
            this.closeModal();
        };
        this.handleNativeClose = () => {
            if (this.open) {
                // Ensure the public prop stays in sync when the native dialog closes (e.g. via form submission).
                this.open = false;
                return;
            }
            this.hideDialog(false);
        };
        this.onTitleSlotChange = (event) => {
            const slot = event.target;
            this.hasTitleSlot = slot.assignedNodes({ flatten: true }).length > 0;
        };
        this.onBodySlotChange = (event) => {
            const slot = event.target;
            this.hasBodySlot = slot.assignedNodes({ flatten: true }).length > 0;
        };
        this.onCloseButtonClick = () => {
            this.closeModal();
        };
    }
    get titleId() {
        return `ir-dialog-title-${this.instanceId}`;
    }
    get descriptionId() {
        return `ir-dialog-description-${this.instanceId}`;
    }
    componentDidLoad() {
        if (!this.dialogEl) {
            return;
        }
        this.dialogEl.addEventListener('cancel', this.handleCancel);
        this.dialogEl.addEventListener('close', this.handleNativeClose);
        this.syncSlotState();
        if (this.open) {
            this.showDialog(false);
        }
    }
    disconnectedCallback() {
        if (this.dialogEl) {
            this.dialogEl.removeEventListener('cancel', this.handleCancel);
            this.dialogEl.removeEventListener('close', this.handleNativeClose);
        }
        this.restoreFocus();
    }
    handleOpenChange(open) {
        if (open) {
            this.showDialog();
        }
        else {
            this.hideDialog();
        }
    }
    /**
     * Opens the dialog programmatically using the native `showModal` API.
     */
    async openModal() {
        this.open = true;
    }
    /**
     * Closes the dialog programmatically and restores focus to the previously active element.
     */
    async closeModal() {
        this.open = false;
    }
    showDialog(emit = true) {
        if (!this.dialogEl || this.dialogEl.open) {
            return;
        }
        this.previouslyFocused = document.activeElement;
        if (typeof this.dialogEl.showModal === 'function') {
            this.dialogEl.showModal();
        }
        else {
            this.dialogEl.setAttribute('open', '');
        }
        if (emit) {
            this.openChange.emit(true);
        }
    }
    hideDialog(emit = true) {
        if (!this.dialogEl) {
            return;
        }
        if (this.dialogEl.open) {
            this.dialogEl.close();
        }
        this.restoreFocus();
        if (emit) {
            this.openChange.emit(false);
        }
    }
    restoreFocus() {
        if (this.previouslyFocused && typeof this.previouslyFocused.focus === 'function') {
            this.previouslyFocused.focus({ preventScroll: true });
        }
        this.previouslyFocused = null;
    }
    syncSlotState() {
        if (!this.dialogEl) {
            return;
        }
        const titleSlot = this.dialogEl.querySelector('slot[name="modal-title"]');
        const bodySlot = this.dialogEl.querySelector('slot[name="modal-body"]');
        if (titleSlot) {
            this.hasTitleSlot = titleSlot.assignedNodes({ flatten: true }).length > 0;
        }
        if (bodySlot) {
            this.hasBodySlot = bodySlot.assignedNodes({ flatten: true }).length > 0;
        }
    }
    render() {
        const labelledBy = this.hasTitleSlot ? this.titleId : undefined;
        const describedBy = this.hasBodySlot ? this.descriptionId : undefined;
        return (h(Host, { key: '8c9e890a165bd82bd200fa418df400db7ab57924' }, h("dialog", { key: 'f2cd6446cfc09c2934f627161ef3285913b58fac', ref: el => (this.dialogEl = el), class: "dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": labelledBy, "aria-describedby": describedBy }, h("div", { key: '36499ec862c53ad7cb4290c73664d22260146ddf', class: "dialog__content", role: "document" }, h("header", { key: 'ded3f793ec54679ec0c26ec97290b923003b6487', class: "dialog__header", id: labelledBy }, h("slot", { key: '3bdcbbd1c4ebf66de0fe72b6d08062ab9c37bf85', name: "modal-title", onSlotchange: this.onTitleSlotChange }), h("button", { key: 'eedef8bb46caf8d1aea0d06530504957db0a4ffd', type: "button", class: "dialog__close-button", onClick: this.onCloseButtonClick, "aria-label": "Close dialog" }, h("slot", { key: 'c5f4e53e6e8975fce0b452d4f678b633d1c7a65e', name: "close-icon" }, h("svg", { key: '8a3ebab9d2c3d59100de911a75b08f67a5bafa74', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 18, width: 18, "aria-hidden": "true", focusable: "false" }, h("path", { key: 'b1e4b54641c7ba476fce9189a6336b36183d48a4', fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))), h("section", { key: '3e24aff29a96ad0cb07f7ba769edb65aa7256e2e', class: "dialog__body", id: describedBy }, h("slot", { key: '36965856da300bfd457c063cae8b65054a9abbf4', name: "modal-body", onSlotchange: this.onBodySlotChange })), h("footer", { key: 'c5ffe8fe50d1fe55bd23e195ea485a0420d5df51', class: "dialog__footer" }, h("slot", { key: 'a1efabe10a4c08e23fd027877cb9fdb0c9453b3f', name: "modal-footer" }))))));
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
                    "text": "Controls whether the dialog is open. Reflects to the host attribute for CSS hooks."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "hasTitleSlot": {},
            "hasBodySlot": {}
        };
    }
    static get events() {
        return [{
                "method": "openChange",
                "name": "openChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when the open state changes due to user interaction or programmatic control."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                    "text": "Opens the dialog programmatically using the native `showModal` API.",
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
                    "text": "Closes the dialog programmatically and restores focus to the previously active element.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostEl"; }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
IrDialog.dialogIds = 0;
//# sourceMappingURL=ir-dialog.js.map
