import { Host, h } from "@stencil/core";
import { t } from "../../../services/locale/t";
export class IrAssignmentToggleDialog {
    /** Dialog header title */
    label = t('Lcz_AreYouSure', { fallback: 'Are you sure?' });
    /** Message shown inside the dialog */
    message;
    /** Confirm button label */
    confirmLabel;
    /** Cancel button label */
    cancelLabel;
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
        return (h(Host, { key: 'a96d1d36293e57ea523bf1715c97ba21b37c9d75' }, h("ir-dialog", { key: '9c72bc8ad5f7f1d1ebdeea8ca4c915d4067c2344', label: this.label, lightDismiss: false, ref: el => (this.dialogRef = el), onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, h("p", { key: '1c5181b0c1f6c506f8419ab747d936611a6fde19', class: "assignment-toggle-dialog__message" }, h("slot", { key: '3971d14b35160e09deba83d55849f4a12dcefe23', name: "message" }, this.message)), h("div", { key: '9265b9f3c91165946ce6a3c8be67167606c6a5e5', slot: "footer", class: "assignment-toggle-dialog__footer" }, h("ir-custom-button", { key: 'e7610552a32e87ddaa8b90ca1a0789a2d35651e1', appearance: "filled", variant: "neutral", size: "m", "data-dialog": "close", disabled: this.loading }, this.cancelLabel || t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '33fb611b9734379bcbacd37df1095d1c42d3ddbc', variant: "brand", size: "m", loading: this.loading, onClickHandler: () => this.confirmToggle.emit() }, this.confirmLabel || t('Lcz_Confirm', { fallback: 'Confirm' }))))));
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
                "defaultValue": "t('Lcz_AreYouSure', { fallback: 'Are you sure?' })"
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
                "attribute": "confirm-label"
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
                "attribute": "cancel-label"
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
