import { h } from "@stencil/core";
/**
 * Settings for the entries grid — which tables the pickers offer, which
 * non-source languages show up as columns, and whether the notes column is
 * shown. Every control here edits a local draft only; nothing reaches the
 * parent (and nothing is persisted) until Save is clicked. Cancel — or
 * dismissing the dialog any other way — drops the draft entirely.
 */
export class IrTranslationsSettingsDialog {
    open = false;
    /** Hides setup tables nothing in this codebase reads — the same filter the table pickers apply. */
    usedTablesOnly = true;
    /** Every language this property exposes; the pin list only ever applies to the non-source ones. */
    languages = [];
    sourceCode;
    /** Non-source language codes currently shown as columns. */
    pinnedCodes = [];
    showNotes = true;
    /** Emitted once, only when Save is clicked. */
    saveSettings;
    closeDialog;
    /** Working copies — edited freely, applied only on Save. */
    draftUsedTablesOnly = true;
    draftPinnedCodes = [];
    draftShowNotes = true;
    dialogRef;
    handleOpenChange(open) {
        if (open) {
            // Re-seed the draft from the live values every time it opens, so a
            // cancelled edit never leaks into the next time the dialog is used.
            this.draftUsedTablesOnly = this.usedTablesOnly;
            this.draftPinnedCodes = [...this.pinnedCodes];
            this.draftShowNotes = this.showNotes;
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    get pinnableLanguages() {
        return this.languages.filter(language => language.code !== this.sourceCode);
    }
    toggleDraftLanguage(code, pinned) {
        const current = new Set(this.draftPinnedCodes);
        if (pinned) {
            current.add(code);
        }
        else {
            current.delete(code);
        }
        this.draftPinnedCodes = [...current];
    }
    handleSave = () => {
        this.saveSettings.emit({ usedTablesOnly: this.draftUsedTablesOnly, pinnedCodes: this.draftPinnedCodes, showNotes: this.draftShowNotes });
    };
    renderUsedTablesSection() {
        return (h("section", { class: "settings-dialog__section" }, h("wa-checkbox", { defaultChecked: this.draftUsedTablesOnly, checked: this.draftUsedTablesOnly, onchange: (e) => (this.draftUsedTablesOnly = e.target.checked) }, "Only show tables used in the app")));
    }
    renderLanguagesSection() {
        const languages = this.pinnableLanguages;
        if (languages.length === 0) {
            return null;
        }
        const pinned = new Set(this.draftPinnedCodes);
        return (h("section", { class: "settings-dialog__section" }, h("p", { class: "settings-dialog__section-hint" }, "Pin the languages you want shown in the table."), h("ul", { class: "settings-dialog__language-list" }, languages.map(language => (h("li", { key: language.code, class: "settings-dialog__language-item" }, h("wa-checkbox", { defaultChecked: pinned.has(language.code), checked: pinned.has(language.code), onchange: (e) => this.toggleDraftLanguage(language.code, e.target.checked) }, language.name, " ", h("span", { class: "settings-dialog__language-code" }, "(", language.code.toUpperCase(), ")"))))))));
    }
    renderNotesSection() {
        return (h("section", { class: "settings-dialog__section" }, h("wa-checkbox", { defaultChecked: this.draftShowNotes, checked: this.draftShowNotes, onchange: (e) => (this.draftShowNotes = e.target.checked) }, "Show the notes column")));
    }
    render() {
        return (h("ir-dialog", { key: 'aed404d22a6e131f3d5f54f4615735ec12f7c472', label: "Table settings", ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, h("div", { key: 'd025865e9b881488de55bebc832138ae64210318', class: "settings-dialog__body" }, this.renderUsedTablesSection(), this.renderLanguagesSection(), this.renderNotesSection()), h("div", { key: 'e8712c4edfa8c5f2b61ec665bf4da16af14093a8', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'd840636cb932744f3cc48430a159c00435a968b1', appearance: "filled", size: "m", variant: "neutral", onClickHandler: () => this.closeDialog.emit() }, "Cancel"), h("ir-custom-button", { key: 'b2f6f7749bd602e242959620b10538de516bc214', appearance: "accent", size: "m", variant: "brand", onClickHandler: this.handleSave }, "Save"))));
    }
    static get is() { return "ir-translations-settings-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-translations-settings-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-translations-settings-dialog.css"]
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
            "usedTablesOnly": {
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
                    "text": "Hides setup tables nothing in this codebase reads \u2014 the same filter the table pickers apply."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "used-tables-only",
                "defaultValue": "true"
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
                    "text": "Every language this property exposes; the pin list only ever applies to the non-source ones."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "sourceCode": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "source-code"
            },
            "pinnedCodes": {
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
                    "text": "Non-source language codes currently shown as columns."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "showNotes": {
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
                "attribute": "show-notes",
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "draftUsedTablesOnly": {},
            "draftPinnedCodes": {},
            "draftShowNotes": {}
        };
    }
    static get events() {
        return [{
                "method": "saveSettings",
                "name": "saveSettings",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted once, only when Save is clicked."
                },
                "complexType": {
                    "original": "TranslationsSettingsSaved",
                    "resolved": "TranslationsSettingsSaved",
                    "references": {
                        "TranslationsSettingsSaved": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-translations-manager/ir-translations-settings-dialog/ir-translations-settings-dialog.tsx",
                            "id": "src/components/ir-translations-manager/ir-translations-settings-dialog/ir-translations-settings-dialog.tsx::TranslationsSettingsSaved"
                        }
                    }
                }
            }, {
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
            }];
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
