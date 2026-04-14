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
        return (h(Host, { key: 'defab566d434309931e10365e985acdbfd12ee59' }, h("ir-dialog", { key: '1af0491ab49a51f81557b37d8568464fa787777b', label: this.label, lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, h("p", { key: '372927ee7beab834f04dd09d8854e051bb5f48b1', class: "assignment-toggle-dialog__message" }, h("slot", { key: '93523191a5bfb57cf07437a0baf2075391370397', name: "message" }, this.message)), h("div", { key: '8450ae58bdd5df410b669646c690c65784677fe4', slot: "footer", class: "assignment-toggle-dialog__footer" }, h("ir-custom-button", { key: '07957afe2aa6123098d410a77c58ce070959f1c5', appearance: "filled", variant: "neutral", size: "medium", "data-dialog": "close", disabled: this.loading }, this.cancelLabel), h("ir-custom-button", { key: '652dc35b199e088eca671fd4314398c4171b17e1', variant: "brand", size: "medium", loading: this.loading, onClickHandler: () => this.confirmToggle.emit() }, this.confirmLabel)))));
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
                "attribute": "label",
                "reflect": false,
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
                "attribute": "message",
                "reflect": false
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
                "attribute": "confirm-label",
                "reflect": false,
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
                "attribute": "cancel-label",
                "reflect": false,
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
                "attribute": "loading",
                "reflect": false,
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
//# sourceMappingURL=ir-assignment-toggle-dialog.js.map
