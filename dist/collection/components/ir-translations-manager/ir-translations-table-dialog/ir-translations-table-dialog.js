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
        return (h("ir-dialog", { key: 'e7b0f04e819e4d1339bba141a0bc3788a417807f', label: isEditing ? 'Table details' : 'New table', ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, this.open && (h("ir-translations-table-form", { key: 'fdcfbc6e22d2db73181344d2e2c7cb478e2f9500', formId: this.formId, mode: this.mode, table: this.table, existingNames: this.existingNames, ownerId: this.ownerId, entryUserId: this.entryUserId, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onTableSaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaved.emit(e.detail);
                this.dialogRef?.closeModal();
            }, onTableSaveFailed: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaveFailed.emit();
                this.dialogRef?.closeModal();
            } })), h("div", { key: 'e0cb7b93db26d60bbe0b7692d440b24946425b99', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '53e18059b95f26e5266137e260262c91b60c4841', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDialog.emit() }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'ea9482ef72153d044f8ff1ffd3e3759999ec96b1', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, t('Lcz_Save', { fallback: 'Save' })))));
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
