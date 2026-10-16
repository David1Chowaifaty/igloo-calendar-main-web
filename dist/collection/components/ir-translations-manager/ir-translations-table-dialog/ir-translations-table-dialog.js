import { h } from "@stencil/core";
import { t } from "../../../services/locale/t";
/**
 * Dumb open/close shell — the nested ir-translations-table-form owns the
 * draft, validation, and the actual save call.
 */
export class IrTranslationsTableDialog {
    open = false;
    formId = 'translations-table-form';
    mode = 'create';
    table = null;
    /** Names of the other tables, for duplicate detection. */
    existingNames = [];
    ownerId;
    entryUserId;
    closeDialog;
    tableSaved;
    tableSaveFailed;
    saveDisabled = true;
    isSubmitting = false;
    dialogRef;
    handleOpenChange(open) {
        if (open) {
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    render() {
        const isEditing = this.mode === 'edit';
        return (h("ir-dialog", { key: '5e4acee07d938f02703b1c505730a029bc72ab81', label: isEditing ? 'Table details' : 'New table', ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, this.open && (h("ir-translations-table-form", { key: 'c4afedc3640f266c9a74859130477eca95c3e889', formId: this.formId, mode: this.mode, table: this.table, existingNames: this.existingNames, ownerId: this.ownerId, entryUserId: this.entryUserId, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onTableSaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaved.emit(e.detail);
                this.dialogRef?.closeModal();
            }, onTableSaveFailed: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaveFailed.emit();
                this.dialogRef?.closeModal();
            } })), h("div", { key: '79373f8109ffdc0501f0e528c514906f59fc867b', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'cb9c0150d842f88f7cdba48ebf0366abd7756722', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDialog.emit() }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '0d8cfd177e5b72eb0e82307b131f0b0e49872adc', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, t('Lcz_Save', { fallback: 'Save' })))));
    }
    static get is() { return "ir-translations-table-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-translations-table-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-translations-table-dialog.css"]
        };
    }
    static get properties() {
        return {
            "open": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "open",
                "defaultValue": "false"
            },
            "formId": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "form-id",
                "defaultValue": "'translations-table-form'"
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'create' | 'edit'",
                    "resolved": "\"create\" | \"edit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mode",
                "defaultValue": "'create'"
            },
            "table": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationTable | null",
                    "resolved": "TranslationTable",
                    "references": {
                        "TranslationTable": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationTable",
                            "referenceLocation": "TranslationTable"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            },
            "existingNames": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Names of the other tables, for duplicate detection."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "ownerId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "owner-id"
            },
            "entryUserId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "entry-user-id"
            }
        };
    }
    static get states() {
        return {
            "saveDisabled": {},
            "isSubmitting": {}
        };
    }
    static get events() {
        return [{
                "method": "closeDialog",
                "name": "closeDialog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "tableSaved",
                "name": "tableSaved",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ id: string; name: string; mode: 'create' | 'edit' }",
                    "resolved": "{ id: string; name: string; mode: \"edit\" | \"create\"; }",
                    "references": {}
                }
            }, {
                "method": "tableSaveFailed",
                "name": "tableSaveFailed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
