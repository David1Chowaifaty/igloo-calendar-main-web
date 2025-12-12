import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { O as OverflowRelease, a as OverflowAdd } from './OverflowLock.js';

const irDialogCss = ":host{display:block;box-sizing:border-box;font:inherit;color:inherit}.dialog{border:none;margin:auto;padding:0;background:transparent;color:inherit;width:min(90vw, var(--ir-dialog-max-width, 40rem));max-width:var(--ir-dialog-max-width, 40rem);min-width:var(--ir-dialog-min-width, auto)}.dialog::backdrop{background:rgba(0, 0, 0, 0.35);backdrop-filter:blur(2px);animation:overlayShow 160ms cubic-bezier(0.16, 1, 0.3, 1)}.ir-dialog__footer{display:flex;align-items:center;gap:0.5rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}.dialog__content{box-sizing:border-box;display:flex;flex-direction:column;background:#ffffff;border-radius:8px;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;max-height:min(85vh, 100%);overflow:hidden;padding:1rem}.dialog[open] .dialog__content{animation:contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)}.dialog__header,.dialog__body,.dialog__footer{padding:0}.dialog__header{display:flex;align-items:flex-start;gap:16px}.dialog__header slot[name='modal-title']::slotted(*){margin:0}.dialog__body{flex:1 1 auto;overflow:auto;padding-bottom:2rem}.dialog__body ::slotted(*){font-size:14px;font-weight:400;color:#475467;margin:0}.dialog__footer{display:flex;align-items:center;justify-content:flex-end;gap:12px}.dialog__footer ::slotted(*){--ir-btn-width:auto}.dialog__close-button{margin-left:auto;border:none;background:transparent;padding:4px;border-radius:999px;color:#104064;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}.dialog__close-button:hover{background:rgba(16, 64, 100, 0.08)}.dialog__close-button:focus-visible{outline:2px solid #104064;outline-offset:2px}.dialog__close-button svg{display:block}.dialog__header slot[name='modal-title']::slotted(*){font-size:18px;font-weight:600;color:#101828}@keyframes overlayShow{from{opacity:0}to{opacity:1}}@keyframes contentShow{from{opacity:0;transform:translateY(-8px) scale(0.98)}to{opacity:1;transform:translateY(0) scale(1)}}";
const IrDialogStyle0 = irDialogCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrDialog = /*@__PURE__*/ proxyCustomElement(class IrDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.irDialogShow = createEvent(this, "irDialogShow", 7);
        this.irDialogHide = createEvent(this, "irDialogHide", 7);
        this.irDialogAfterShow = createEvent(this, "irDialogAfterShow", 7);
        this.irDialogAfterHide = createEvent(this, "irDialogAfterHide", 7);
    }
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
    static get style() { return IrDialogStyle0; }
}, [4, "ir-dialog", {
        "label": [513],
        "open": [1540],
        "withoutHeader": [516, "without-header"],
        "lightDismiss": [4, "light-dismiss"],
        "openModal": [64],
        "closeModal": [64]
    }]);
__decorate([
    OverflowRelease()
], IrDialog.prototype, "handleWaHide", null);
__decorate([
    OverflowAdd()
], IrDialog.prototype, "handleWaShow", null);
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