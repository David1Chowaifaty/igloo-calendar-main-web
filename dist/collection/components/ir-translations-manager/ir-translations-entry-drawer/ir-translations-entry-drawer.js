import { h } from "@stencil/core";
import { t } from "../../../services/locale/t";
/**
 * Dumb open/close shell — the nested ir-translations-entry-form owns the
 * draft, validation, and the actual save call.
 */
export class IrTranslationsEntryDrawer {
    open = false;
    formId = 'translations-entry-form';
    languages = [];
    /** The entry being edited. Null puts the drawer in create mode. */
    entry = null;
    /** Keys already used in the active table, for duplicate detection. */
    existingKeys = [];
    /** DISPLAY_ORDER a brand-new key should get — one past the highest order already in the table. */
    nextDisplayOrder = 0;
    tableName;
    ownerId;
    entryUserId;
    /** Passed through to the form — rows in other tables that share `entry`'s description. */
    duplicateSiblings = [];
    closeDrawer;
    entrySaved;
    saveDisabled = true;
    isSubmitting = false;
    render() {
        const isEditing = !!this.entry;
        return (h("ir-drawer", { key: '11beb4d9d49006c24e7abe46a8957784ee6d4024', label: isEditing ? 'Edit key' : 'New key', open: this.open, onDrawerHide: () => this.closeDrawer.emit() }, this.open && (h("ir-translations-entry-form", { key: 'c15d0066e7925d764e7db887f2ca5d40a9509666', formId: this.formId, languages: this.languages, entry: this.entry, existingKeys: this.existingKeys, nextDisplayOrder: this.nextDisplayOrder, tableName: this.tableName, ownerId: this.ownerId, entryUserId: this.entryUserId, duplicateSiblings: this.duplicateSiblings, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onEntrySaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.entrySaved.emit(e.detail);
                this.closeDrawer.emit();
            } })), h("div", { key: '430f1e62c5b653b3010624eab90da6743a16dbe8', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'f1e1a353bb56d725a8e4c3a836ced3060c465dfc', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDrawer.emit() }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '98fa1a38e01dd7bcf0de2ec4b6a20835ce1c1949', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, t('Lcz_Save', { fallback: 'Save' })))));
    }
    static get is() { return "ir-translations-entry-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-translations-entry-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-translations-entry-drawer.css"]
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
                "defaultValue": "'translations-entry-form'"
            },
            "languages": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationLanguage[]",
                    "resolved": "TranslationLanguage[]",
                    "references": {
                        "TranslationLanguage": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationLanguage",
                            "referenceLocation": "TranslationLanguage"
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
                "defaultValue": "[]"
            },
            "entry": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationEntry | null",
                    "resolved": "TranslationEntry",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The entry being edited. Null puts the drawer in create mode."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            },
            "existingKeys": {
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
                    "text": "Keys already used in the active table, for duplicate detection."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "nextDisplayOrder": {
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
                    "text": "DISPLAY_ORDER a brand-new key should get \u2014 one past the highest order already in the table."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "next-display-order",
                "defaultValue": "0"
            },
            "tableName": {
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
                "attribute": "table-name"
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
            },
            "duplicateSiblings": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DuplicateSibling[]",
                    "resolved": "DuplicateSibling[]",
                    "references": {
                        "DuplicateSibling": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::DuplicateSibling",
                            "referenceLocation": "DuplicateSibling"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Passed through to the form \u2014 rows in other tables that share `entry`'s description."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
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
                "method": "closeDrawer",
                "name": "closeDrawer",
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
                "method": "entrySaved",
                "name": "entrySaved",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "EntrySavedDetail",
                    "resolved": "EntrySavedDetail",
                    "references": {
                        "EntrySavedDetail": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::EntrySavedDetail",
                            "referenceLocation": "EntrySavedDetail"
                        }
                    }
                }
            }];
    }
}
