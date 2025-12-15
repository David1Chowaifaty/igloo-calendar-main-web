import { h } from "@stencil/core";
export class IrPreviewScreenDialog {
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
}
//# sourceMappingURL=ir-preview-screen-dialog.js.map
