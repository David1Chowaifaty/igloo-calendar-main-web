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
        return (h(Host, { key: '6905039fc1f369c15cf93e432fef777a95373201' }, h("dialog", { key: '11bbd9964c4629a0468e24ce610abd259a04411d', ref: el => (this.dialogEl = el), class: "dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": labelledBy, "aria-describedby": describedBy }, h("div", { key: '3832e1695c54e1c0722c9c6231e86859db642a4c', class: "dialog__content", role: "document" }, h("header", { key: 'ee8772c2c8759a2e397857256697ce5693006313', class: "dialog__header", id: labelledBy }, h("slot", { key: '59186a1745ce91cae3b3e39de520dd1609137e68', name: "modal-title", onSlotchange: this.onTitleSlotChange }), h("button", { key: '37d5b968c4dda306372b3edf2ec8dbc7efb75a97', type: "button", class: "dialog__close-button", onClick: this.onCloseButtonClick, "aria-label": "Close dialog" }, h("slot", { key: 'e5dae479f0ecd20d7bf7f0a119dfb4301075bd6e', name: "close-icon" }, h("svg", { key: '3033e087db520460dbe969abaf13c5d68deb7594', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 18, width: 18, "aria-hidden": "true", focusable: "false" }, h("path", { key: 'c35320ab30fbbc57d53987d82704e284988d3086', fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))), h("section", { key: '8d7e250218008348eec9c74906a00381f02e8dbc', class: "dialog__body", id: describedBy }, h("slot", { key: '0b72438a99cac1b573d55de9547c8ea06346d424', name: "modal-body", onSlotchange: this.onBodySlotChange })), h("footer", { key: '4c5113181e95034865c2255dd0b8065373cebca1', class: "dialog__footer" }, h("slot", { key: '1920ea21549f2e85e07ae81189bfad767060471a', name: "modal-footer" }))))));
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
