import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irDialogCss = ":host{display:block;box-sizing:border-box;font:inherit;color:inherit}.dialog{border:none;margin:auto;padding:0;background:transparent;color:inherit;width:min(90vw, var(--ir-dialog-max-width, 40rem));max-width:var(--ir-dialog-max-width, 40rem);min-width:var(--ir-dialog-min-width, auto)}.dialog::backdrop{background:rgba(0, 0, 0, 0.35);backdrop-filter:blur(2px);animation:overlayShow 160ms cubic-bezier(0.16, 1, 0.3, 1)}.dialog__content{box-sizing:border-box;display:flex;flex-direction:column;background:#ffffff;border-radius:8px;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;max-height:min(85vh, 100%);overflow:hidden;padding:1rem}.dialog[open] .dialog__content{animation:contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)}.dialog__header,.dialog__body,.dialog__footer{padding:0}.dialog__header{display:flex;align-items:flex-start;gap:16px}.dialog__header slot[name='modal-title']::slotted(*){margin:0}.dialog__body{flex:1 1 auto;overflow:auto;padding-bottom:2rem}.dialog__body ::slotted(*){font-size:14px;font-weight:400;color:#475467;margin:0}.dialog__footer{display:flex;align-items:center;justify-content:flex-end;gap:12px}.dialog__footer ::slotted(*){--ir-btn-width:auto}.dialog__close-button{margin-left:auto;border:none;background:transparent;padding:4px;border-radius:999px;color:#104064;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}.dialog__close-button:hover{background:rgba(16, 64, 100, 0.08)}.dialog__close-button:focus-visible{outline:2px solid #104064;outline-offset:2px}.dialog__close-button svg{display:block}.dialog__header slot[name='modal-title']::slotted(*){font-size:18px;font-weight:600;color:#101828}@keyframes overlayShow{from{opacity:0}to{opacity:1}}@keyframes contentShow{from{opacity:0;transform:translateY(-8px) scale(0.98)}to{opacity:1;transform:translateY(0) scale(1)}}";
const IrDialogStyle0 = irDialogCss;

const IrDialog = /*@__PURE__*/ proxyCustomElement(class IrDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.openChange = createEvent(this, "openChange", 7);
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
        return (h(Host, { key: '57096e29aba8cf58356b99729a9bff8dc76b9f69' }, h("dialog", { key: 'd63376fce6482cbdf84a7fe8d6a241c3462525d7', ref: el => (this.dialogEl = el), class: "dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": labelledBy, "aria-describedby": describedBy }, h("div", { key: '58c07bc39228ab1233724d683a3884312c27469a', class: "dialog__content", role: "document" }, h("header", { key: '1e2e8c16ce5c8ba0524b4cdb8e7d6c939d440790', class: "dialog__header", id: labelledBy }, h("slot", { key: 'b98eb18256a62dbe00727c7a2783429332be7d6e', name: "modal-title", onSlotchange: this.onTitleSlotChange }), h("button", { key: '5d314b15ab4b94b7de3a9710bce34d164d27e642', type: "button", class: "dialog__close-button", onClick: this.onCloseButtonClick, "aria-label": "Close dialog" }, h("slot", { key: 'fc3c6259829c19bd70507a6ffd671afbeb2f03d6', name: "close-icon" }, h("svg", { key: 'ebaa318b2c73c828baa59d54983ba94ba47b6801', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 18, width: 18, "aria-hidden": "true", focusable: "false" }, h("path", { key: '1ed741ddb91672784268ab0e9645c3c18e8420c5', fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))), h("section", { key: 'e7fe77fa7f038d646992272a29a719486291fbd0', class: "dialog__body", id: describedBy }, h("slot", { key: '199cae4176467a8d084d8501288e36c4ed435a7e', name: "modal-body", onSlotchange: this.onBodySlotChange })), h("footer", { key: '2be1c7715a866ace2da8cda517d6f974e310438d', class: "dialog__footer" }, h("slot", { key: '9c2935d761351d639bcdf76414c802c7fd75b91e', name: "modal-footer" }))))));
    }
    get hostEl() { return this; }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
    static get style() { return IrDialogStyle0; }
}, [1, "ir-dialog", {
        "open": [1540],
        "hasTitleSlot": [32],
        "hasBodySlot": [32],
        "openModal": [64],
        "closeModal": [64]
    }, undefined, {
        "open": ["handleOpenChange"]
    }]);
IrDialog.dialogIds = 0;
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDialog);
            }
            break;
    } });
}

export { IrDialog as I, defineCustomElement as d };

//# sourceMappingURL=ir-dialog2.js.map