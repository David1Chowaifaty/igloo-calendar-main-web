import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

const irPreviewScreenDialogCss = ":host{display:block}.ir-fullscreen-dialog::part(dialog){width:100vw;height:100vh;max-width:none;max-height:none;margin:0;border-radius:0}@media print{.ir-fullscreen-dialog::part(header){display:none !important}}";
const IrPreviewScreenDialogStyle0 = irPreviewScreenDialogCss;

const IrPreviewScreenDialog = /*@__PURE__*/ proxyCustomElement(class IrPreviewScreenDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.previewAction = createEvent(this, "previewAction", 7);
        this.openChanged = createEvent(this, "openChanged", 7);
    }
    actionIconByType = {
        print: 'file-pdf',
        download: 'download',
    };
    /**
     * The dialog's label as displayed in the header.
     * Required for accessibility and announced by assistive technologies.
     */
    label = 'Preview';
    /**
     * Indicates whether or not the preview dialog is open.
     * Toggle this attribute or use {@link openDialog} / {@link closeDialog} to control visibility.
     */
    open = false;
    /**
     * Determines which built-in action is rendered in the header.
     * `print` triggers `window.print()` while `download` downloads the configured URL.
     */
    action = 'print';
    /**
     * URL used when the action is set to `download`.
     * Can be overridden per invocation via {@link triggerAction}.
     */
    downloadUrl;
    /**
     * Suggested file name for downloaded previews.
     */
    downloadFileName;
    /**
     * When `true`, hides the default header action button so a custom implementation can be slotted.
     */
    hideDefaultAction = false;
    /**
     * Accessible label used for the default header action button.
     * Falls back to context-sensitive defaults when omitted.
     */
    actionButtonLabel;
    /**
     * Fired whenever the preview action is executed, either via the header button or programmatically.
     */
    previewAction;
    openChanged;
    /**
     * Opens the preview dialog.
     */
    async openDialog() {
        this.open = true;
    }
    /**
     * Closes the preview dialog.
     */
    async closeDialog() {
        this.open = false;
    }
    /**
     * Executes the configured preview action.
     *
     * @param action Optional override of the default action type.
     * @param url Optional URL used for downloads. Falls back to the `downloadUrl` prop.
     * @param fileName Optional file name suggestion for downloads.
     * @returns Resolves with `true` when the action was attempted, `false` when prerequisites are missing.
     */
    async triggerAction(action = this.action, url, fileName) {
        const resolvedUrl = url ?? this.downloadUrl;
        const resolvedFileName = fileName ?? this.downloadFileName;
        let result = false;
        if (action === 'print') {
            result = this.runPrintAction();
        }
        else {
            result = this.runDownloadAction(resolvedUrl, resolvedFileName);
        }
        this.previewAction.emit({ action, url: resolvedUrl });
        return result;
    }
    runPrintAction() {
        if (typeof window === 'undefined' || typeof window.print !== 'function') {
            console.warn('[ir-preview-screen-dialog] window.print is not available in this environment.');
            return false;
        }
        window.print();
        return true;
    }
    runDownloadAction(url, fileName) {
        if (!url) {
            console.warn('[ir-preview-screen-dialog] No download URL was provided.');
            return false;
        }
        if (typeof document === 'undefined') {
            console.warn('[ir-preview-screen-dialog] document is not available in this environment.');
            return false;
        }
        const anchor = document.createElement('a');
        anchor.href = url;
        if (fileName) {
            anchor.download = fileName;
        }
        anchor.target = '_blank';
        anchor.rel = 'noopener';
        anchor.style.display = 'none';
        const parent = document.body || document.documentElement;
        parent?.appendChild(anchor);
        anchor.click();
        anchor.remove();
        return true;
    }
    getActionLabel() {
        if (this.actionButtonLabel) {
            return this.actionButtonLabel;
        }
        return this.action === 'print' ? 'Print preview' : 'Download preview';
    }
    shouldDisableActionButton() {
        return this.action === 'download' && !this.downloadUrl;
    }
    handleActionButtonClick = () => {
        this.triggerAction();
    };
    render() {
        return (h("ir-dialog", { key: 'f6a3cf3bce6bd3f52fb16727084072933cb97101', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openChanged.emit(false);
            }, label: this.label, open: this.open, class: "ir-fullscreen-dialog" }, !this.hideDefaultAction && (h("ir-custom-button", { key: 'fd84a753207e98e35258c41c645a65c18dab78e6', size: "medium", slot: "header-actions", variant: "neutral", appearance: "plain", onClickHandler: this.handleActionButtonClick, disabled: this.shouldDisableActionButton() }, h("wa-icon", { key: 'b9171722a304636db6888ba448180c51f43944f8', name: this.actionIconByType[this.action], label: this.getActionLabel(), "aria-label": this.getActionLabel() }))), h("slot", { key: '4dfa774218229b3aacb38287b5e0977e8d9596d9' })));
    }
    static get style() { return IrPreviewScreenDialogStyle0; }
}, [1, "ir-preview-screen-dialog", {
        "label": [513],
        "open": [1540],
        "action": [1],
        "downloadUrl": [1, "download-url"],
        "downloadFileName": [1, "download-file-name"],
        "hideDefaultAction": [4, "hide-default-action"],
        "actionButtonLabel": [1, "action-button-label"],
        "openDialog": [64],
        "closeDialog": [64],
        "triggerAction": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-preview-screen-dialog", "ir-custom-button", "ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPreviewScreenDialog);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPreviewScreenDialog as I, defineCustomElement as d };

//# sourceMappingURL=ir-preview-screen-dialog2.js.map