import { Host, h } from "@stencil/core";
export class IrAssignmentToggleDialog {
    /** Dialog header title */
    label = 'Are you sure?';
    /** Message shown inside the dialog */
    message;
    /** Confirm button label */
    confirmLabel = 'Confirm';
    /** Cancel button label */
    cancelLabel = 'Cancel';
    /** Controls the loading spinner on the confirm button — set by the parent while the async operation runs */
    loading = false;
    /** Emitted when the user clicks confirm */
    confirmToggle;
    dialogRef;
    async openModal() {
        this.dialogRef?.openModal();
    }
    async closeModal() {
        this.dialogRef?.closeModal();
    }
    render() {
        return (h(Host, { key: '159093c80e0c6799d6b03573f2e5a8756696fb62' }, h("ir-dialog", { key: '78dd6d50da436ce2d996641dd3031c305c36a0cf', label: this.label, lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, h("p", { key: '0d4b1d0ea0c1602c06dcd35b1028b240f2789a05', class: "assignment-toggle-dialog__message" }, h("slot", { key: '717811db1909bf8642d8bb8b2ab98e1a73ff6e9a', name: "message" }, this.message)), h("div", { key: 'd822387c1ad222df20aceac3afe82b7b561e701b', slot: "footer", class: "assignment-toggle-dialog__footer" }, h("ir-custom-button", { key: 'fb76e1b171b6f2d5db2d2753ccb97ca74f64db05', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close", disabled: this.loading }, this.cancelLabel), h("ir-custom-button", { key: '549509e286f45013f60c94c6a6661e8c8d9b8e8f', variant: "brand", size: "medium", loading: this.loading, onClickHandler: () => this.confirmToggle.emit() }, this.confirmLabel)))));
    }
    static get is() { return "ir-assignment-toggle-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-assignment-toggle-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-assignment-toggle-dialog.css"]
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
                    "text": "Dialog header title"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Are you sure?'"
            },
            "message": {
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
                    "text": "Message shown inside the dialog"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "message"
            },
            "confirmLabel": {
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
                    "text": "Confirm button label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "confirm-label",
                "defaultValue": "'Confirm'"
            },
            "cancelLabel": {
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
                    "text": "Cancel button label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "cancel-label",
                "defaultValue": "'Cancel'"
            },
            "loading": {
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
                    "text": "Controls the loading spinner on the confirm button \u2014 set by the parent while the async operation runs"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "loading",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "confirmToggle",
                "name": "confirmToggle",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the user clicks confirm"
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
