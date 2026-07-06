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
        return (h(Host, { key: 'a0c09ad3d3d290bba03f8c5fcd54c349705769ac' }, h("ir-dialog", { key: '3f58301530c86a43e52788bd9e3579ca3edb5663', label: this.label, lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, h("p", { key: 'd32248cd538aa01fbec84ebbb0ad14e039154ef6', class: "assignment-toggle-dialog__message" }, h("slot", { key: '71f3853073b0fb3c6fff7458ec574d7d2fe499ac', name: "message" }, this.message)), h("div", { key: '8bc2f759478c41279dcc825508b7d13c569c00c2', slot: "footer", class: "assignment-toggle-dialog__footer" }, h("ir-custom-button", { key: 'd727320965113184bd466d9b516ae51dbfc047dd', appearance: "filled", variant: "neutral", size: "m", "data-dialog": "close", disabled: this.loading }, this.cancelLabel), h("ir-custom-button", { key: '09fbaf708c89745582717a4d418ce7d55c8d789c', variant: "brand", size: "m", loading: this.loading, onClickHandler: () => this.confirmToggle.emit() }, this.confirmLabel)))));
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
