import { Fragment, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrPreviewScreenDialog {
    el;
    actionIconByType = {
        print: 'file-pdf',
        download: 'download',
    };
    printContainer;
    printPlaceholder;
    isPrintLayoutActive = false;
    handleBeforePrint = () => {
        if (!this.open) {
            return;
        }
        this.preparePrintLayout();
    };
    handleAfterPrint = () => {
        this.restorePrintLayout();
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
    _id = `download_btn_${v4()}`;
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
        this.preparePrintLayout();
        try {
            window.print();
        }
        finally {
            this.restorePrintLayout();
        }
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
    handleActionButtonClick() {
        this.triggerAction();
    }
    preparePrintLayout() {
        if (typeof document === 'undefined' || this.printContainer || this.isPrintLayoutActive) {
            return;
        }
        const contentNodes = Array.from(this.el.children).filter((child) => !child.hasAttribute('slot'));
        if (!contentNodes.length) {
            return;
        }
        const placeholder = document.createComment('ir-preview-print-placeholder');
        this.el.insertBefore(placeholder, contentNodes[0]);
        const container = document.createElement('div');
        container.className = 'ir-preview-print-container';
        contentNodes.forEach(node => {
            container.appendChild(node);
        });
        document.body.appendChild(container);
        document.body.classList.add('ir-preview-dialog-print-mode');
        this.printPlaceholder = placeholder;
        this.printContainer = container;
        this.isPrintLayoutActive = true;
    }
    restorePrintLayout() {
        if (!this.printContainer || !this.printPlaceholder || typeof document === 'undefined') {
            return;
        }
        const targetParent = this.printPlaceholder.parentNode;
        if (targetParent) {
            while (this.printContainer.firstChild) {
                targetParent.insertBefore(this.printContainer.firstChild, this.printPlaceholder);
            }
        }
        this.printPlaceholder.remove();
        this.printContainer.remove();
        document.body.classList.remove('ir-preview-dialog-print-mode');
        this.printPlaceholder = undefined;
        this.printContainer = undefined;
        this.isPrintLayoutActive = false;
    }
    componentDidLoad() {
        if (typeof window === 'undefined') {
            return;
        }
        window.addEventListener('beforeprint', this.handleBeforePrint);
        window.addEventListener('afterprint', this.handleAfterPrint);
    }
    disconnectedCallback() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('beforeprint', this.handleBeforePrint);
            window.removeEventListener('afterprint', this.handleAfterPrint);
        }
        this.restorePrintLayout();
    }
    render() {
        return (h("ir-dialog", { key: 'cbd0525cc80e1da10f6a6a2c73e9c72d94a547ea', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openChanged.emit(false);
            }, label: this.label, open: this.open, class: "ir-fullscreen-dialog" }, h("div", { key: 'acafb2e52874449db7063b9a7e4574e129fb380e', slot: "header-actions", class: "ir-fullscreen-dialog__header-actions" }, h("slot", { key: 'b46402af9f6dd4beabe1a0bafa0e22d6c5b0771b', name: "header-actions" }), !this.hideDefaultAction && (h(Fragment, { key: '0803ead4e230e901b9092b77d138f30daa35e03f' }, h("wa-tooltip", { key: '30090cd8d89f20e5b664263367dae669d0b52663', for: this._id }, "Print PDF"), h("ir-custom-button", { key: '2ce628d37b569abc3e1b9478e46a846624894277', id: this._id, size: "medium", variant: "neutral", appearance: "plain", onClickHandler: this.handleActionButtonClick.bind(this), disabled: this.shouldDisableActionButton() }, h("wa-icon", { key: 'c906ee078c31fdfff1973a8c7b2add334b9fa77b', name: this.actionIconByType[this.action], label: this.getActionLabel(), "aria-label": this.getActionLabel() }))))), h("slot", { key: '2f0c4bd38c5f83dac9476e27942ca51e95bec3d1' })));
    }
    static get is() { return "ir-preview-screen-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-preview-screen-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-preview-screen-dialog.css"]
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
                    "text": "The dialog's label as displayed in the header.\nRequired for accessibility and announced by assistive technologies."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": true,
                "defaultValue": "'Preview'"
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
                    "text": "Indicates whether or not the preview dialog is open.\nToggle this attribute or use {@link openDialog} / {@link closeDialog} to control visibility."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true,
                "defaultValue": "false"
            },
            "action": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PreviewAction",
                    "resolved": "\"download\" | \"print\"",
                    "references": {
                        "PreviewAction": {
                            "location": "global",
                            "id": "global::PreviewAction"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Determines which built-in action is rendered in the header.\n`print` triggers `window.print()` while `download` downloads the configured URL."
                },
                "getter": false,
                "setter": false,
                "attribute": "action",
                "reflect": false,
                "defaultValue": "'print'"
            },
            "downloadUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "URL used when the action is set to `download`.\nCan be overridden per invocation via {@link triggerAction}."
                },
                "getter": false,
                "setter": false,
                "attribute": "download-url",
                "reflect": false
            },
            "downloadFileName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Suggested file name for downloaded previews."
                },
                "getter": false,
                "setter": false,
                "attribute": "download-file-name",
                "reflect": false
            },
            "hideDefaultAction": {
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
                    "text": "When `true`, hides the default header action button so a custom implementation can be slotted."
                },
                "getter": false,
                "setter": false,
                "attribute": "hide-default-action",
                "reflect": false,
                "defaultValue": "false"
            },
            "actionButtonLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Accessible label used for the default header action button.\nFalls back to context-sensitive defaults when omitted."
                },
                "getter": false,
                "setter": false,
                "attribute": "action-button-label",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "previewAction",
                "name": "previewAction",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired whenever the preview action is executed, either via the header button or programmatically."
                },
                "complexType": {
                    "original": "{ action: PreviewAction; url?: string }",
                    "resolved": "{ action: PreviewAction; url?: string; }",
                    "references": {
                        "PreviewAction": {
                            "location": "global",
                            "id": "global::PreviewAction"
                        }
                    }
                }
            }, {
                "method": "openChanged",
                "name": "openChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
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
            "openDialog": {
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
                    "text": "Opens the preview dialog.",
                    "tags": []
                }
            },
            "closeDialog": {
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
                    "text": "Closes the preview dialog.",
                    "tags": []
                }
            },
            "triggerAction": {
                "complexType": {
                    "signature": "(action?: PreviewAction, url?: string, fileName?: string) => Promise<boolean>",
                    "parameters": [{
                            "name": "action",
                            "type": "\"print\" | \"download\"",
                            "docs": "Optional override of the default action type."
                        }, {
                            "name": "url",
                            "type": "string",
                            "docs": "Optional URL used for downloads. Falls back to the `downloadUrl` prop."
                        }, {
                            "name": "fileName",
                            "type": "string",
                            "docs": "Optional file name suggestion for downloads."
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "PreviewAction": {
                            "location": "global",
                            "id": "global::PreviewAction"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Executes the configured preview action.",
                    "tags": [{
                            "name": "param",
                            "text": "action Optional override of the default action type."
                        }, {
                            "name": "param",
                            "text": "url Optional URL used for downloads. Falls back to the `downloadUrl` prop."
                        }, {
                            "name": "param",
                            "text": "fileName Optional file name suggestion for downloads."
                        }, {
                            "name": "returns",
                            "text": "Resolves with `true` when the action was attempted, `false` when prerequisites are missing."
                        }]
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-preview-screen-dialog.js.map
