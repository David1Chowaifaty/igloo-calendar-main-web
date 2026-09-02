import { h } from "@stencil/core";
import { countMissing } from "../utils";
/**
 * Owns the entries table plus its client-side search/status filtering — the
 * parent manager just hands it one table's raw entries and listens for the
 * CRUD intents it emits.
 */
export class IrTranslationsEntriesPanel {
    /** The active table's unfiltered entries — filtered internally for display. */
    entries = [];
    languages = [];
    sourceCode;
    /** True while the active table's keys are still loading. */
    isLoading = false;
    /** Disables the "New key" action, e.g. while another write is in flight. */
    disableActions = false;
    /** True once a drag reorder is applied locally but not yet saved — shows the Save/Discard order buttons. */
    hasPendingOrder = false;
    /** Ids of rows whose position differs from the last-loaded/saved order — marked in the table while a reorder is pending. */
    changedEntryIds = new Set();
    /** True when `entries` span several setup tables — adds the table filter and hands the table its grouped rendering. */
    groupByTable = false;
    /** Distinct table names present in `entries`, in display order — the table filter's options. */
    tableNames = [];
    /** Disables the "New key" action outright, e.g. in the cross-table view where there is no single table to create into. */
    disableCreate = false;
    /** Entry id → the tables sharing that row's description; rows present here get a duplicate badge. */
    duplicates = new Map();
    createEntry;
    editEntry;
    duplicateEntry;
    deleteEntry;
    entryChange;
    reorderEntries;
    toggleVisibility;
    saveOrder;
    discardOrder;
    searchTerm = '';
    statusFilter = 'all';
    /** Table name to narrow to, or 'all'. Only surfaced while `groupByTable` is on. */
    tableFilter = 'all';
    /** Language codes to audit within the rows on screen — a row survives if it's untranslated in any of them. */
    missingLanguageFilter = [];
    shortcutHint = null;
    searchInputRef;
    componentWillLoad() {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (!isTouchDevice) {
            this.shortcutHint = '/';
        }
        document.addEventListener('keydown', this.handleGlobalKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleGlobalKeyDown);
    }
    /** A new result set (e.g. the language selection changed) can drop the table that was filtered on — don't strand the user on an empty grid. */
    handleTableNamesChange(newNames) {
        if (this.tableFilter !== 'all' && !newNames.includes(this.tableFilter)) {
            this.tableFilter = 'all';
        }
    }
    /** Hiding a language (or narrowing the grid in the cross-table view) must not leave an invisible filter applied. */
    handleLanguagesChange(newLanguages) {
        if (this.missingLanguageFilter.length === 0) {
            return;
        }
        const visible = new Set(newLanguages.filter(language => language.code !== this.sourceCode).map(language => language.code));
        const next = this.missingLanguageFilter.filter(code => visible.has(code));
        if (next.length !== this.missingLanguageFilter.length) {
            this.missingLanguageFilter = next;
        }
    }
    /** `/` jumps to search the way most keyboard-driven tools do — unlike ⌘F it doesn't fight the browser. */
    handleGlobalKeyDown = (event) => {
        if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) {
            return;
        }
        const target = event.target;
        if (target?.closest('input, textarea, [contenteditable="true"], wa-input, wa-textarea, wa-select')) {
            return;
        }
        event.preventDefault();
        this.searchInputRef?.focus();
    };
    /** The source language is what everything else is translated from, so "untranslated in English" isn't a useful filter. */
    get auditableLanguages() {
        return this.languages.filter(language => language.code !== this.sourceCode);
    }
    get filteredEntries() {
        const term = this.searchTerm.trim().toLowerCase();
        // Resolved once rather than per row; empty means the language filter is off.
        const audited = this.missingLanguageFilter.length > 0 ? this.languages.filter(language => this.missingLanguageFilter.includes(language.code)) : [];
        return this.entries.filter(entry => {
            if (term && !entry.key.toLowerCase().includes(term) && !Object.values(entry.values).some(value => value.toLowerCase().includes(term))) {
                return false;
            }
            if (this.tableFilter !== 'all' && entry.tableName !== this.tableFilter) {
                return false;
            }
            // Untranslated in *any* audited language is enough — same union rule the header's cross-table filter uses.
            if (audited.length > 0 && countMissing(entry, audited) === 0) {
                return false;
            }
            if (this.statusFilter === 'all') {
                return true;
            }
            if (this.statusFilter === 'hidden') {
                return entry.meta?.isVisible === false;
            }
            const missing = countMissing(entry, this.languages);
            return this.statusFilter === 'missing' ? missing > 0 : missing === 0;
        });
    }
    get hasActiveFilters() {
        return this.searchTerm.trim().length > 0 || this.statusFilter !== 'all' || this.tableFilter !== 'all' || this.missingLanguageFilter.length > 0;
    }
    clearFilters = (e) => {
        this.stopPropagation(e);
        this.searchTerm = '';
        this.statusFilter = 'all';
        this.tableFilter = 'all';
        this.missingLanguageFilter = [];
    };
    renderToolbar() {
        return (h("div", { class: "entries-panel__toolbar" }, h("wa-input", { class: "entries-panel__search", size: "s", "with-clear": true, label: "Search keys and translations", value: this.searchTerm, placeholder: "Search keys and translations", autocomplete: "off", spellcheck: false, ref: el => (this.searchInputRef = el), oninput: (e) => (this.searchTerm = e.target.value) }, h("wa-icon", { name: "magnifying-glass", slot: "start", "aria-hidden": "true" }), this.shortcutHint && !this.searchTerm && (h("span", { slot: "end", class: "entries-panel__search-hint", "aria-hidden": "true" }, this.shortcutHint))), h("wa-select", { class: "entries-panel__status", size: "s", label: "Status", value: this.statusFilter, onchange: (e) => (this.statusFilter = e.target.value) }, h("wa-option", { value: "all" }, "All keys"), h("wa-option", { value: "missing" }, "Needs translation"), h("wa-option", { value: "complete" }, "Complete"), h("wa-option", { value: "hidden" }, "Hidden from app")), this.auditableLanguages.length > 0 && (h("wa-select", { class: "entries-panel__missing-filter", size: "s", multiple: true, "with-clear": true, "max-options-visible": 1, label: "Untranslated in", placeholder: "Untranslated in\u2026", value: this.missingLanguageFilter, onchange: (e) => (this.missingLanguageFilter = [...(e.target.value ?? [])]) }, this.auditableLanguages.map(language => (h("wa-option", { key: language.code, value: language.code }, language.name))))), this.groupByTable && this.tableNames.length > 1 && (h("wa-select", { class: "entries-panel__table-filter", size: "s", label: "Table", value: this.tableFilter, onchange: (e) => (this.tableFilter = e.target.value) }, h("wa-option", { value: "all" }, "All tables"), this.tableNames.map(name => (h("wa-option", { key: name, value: name }, name))))), this.hasPendingOrder && (h("ir-custom-button", { style: { marginInlineStart: 'auto' }, variant: "neutral", appearance: "outlined", disabled: this.disableActions, onClickHandler: () => this.discardOrder.emit() }, "Discard")), this.hasPendingOrder && (h("ir-custom-button", { variant: "brand", appearance: "accent", disabled: this.disableActions, loading: this.disableActions, onClickHandler: () => this.saveOrder.emit() }, "Save")), h("ir-custom-button", { style: { marginInlineStart: this.hasPendingOrder ? null : 'auto' }, variant: "brand", appearance: "filled", disabled: this.disableActions || this.isLoading || this.disableCreate, onClickHandler: () => this.createEntry.emit() }, h("wa-icon", { name: "plus", slot: "start", "aria-hidden": "true" }), "New key")));
    }
    renderFooter(shown, total, missing, tables) {
        return (h("div", { class: "entries-panel__footer", "aria-live": "polite" }, h("span", null, shown === total ? `${total} key${total === 1 ? '' : 's'}` : `${shown} of ${total} keys`, this.groupByTable && tables > 0 && ` · ${tables} table${tables === 1 ? '' : 's'}`), missing > 0 && (h("button", { type: "button", class: "entries-panel__missing-link", onClick: () => (this.statusFilter = this.statusFilter === 'missing' ? 'all' : 'missing') }, missing, " need", missing === 1 ? 's' : '', " translation"))));
    }
    stopPropagation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
    }
    render() {
        const filteredEntries = this.filteredEntries;
        const total = this.entries.length;
        const missing = this.entries.filter(entry => countMissing(entry, this.languages) > 0).length;
        const shownTables = new Set(filteredEntries.map(entry => entry.tableName)).size;
        return (h("div", { key: '4a2fc3b2e4d104068cc38fcb1936d636a153f2e8', class: "entries-panel__card" }, this.renderToolbar(), this.isLoading ? (h("div", { class: "entries-panel__loader-container" }, h("ir-spinner", null), h("p", null, "Loading keys\u2026"))) : (h("ir-translations-entries-table", { entries: filteredEntries, languages: this.languages, sourceCode: this.sourceCode, compact: false, filtered: this.hasActiveFilters, groupByTable: this.groupByTable, reorderEnabled: !this.hasActiveFilters && !this.groupByTable, changedEntryIds: this.changedEntryIds, duplicates: this.duplicates, onEntryChange: (e) => {
                this.stopPropagation(e);
                this.entryChange.emit(e.detail);
            }, onEditEntry: (e) => {
                this.stopPropagation(e);
                this.editEntry.emit(e.detail);
            }, onDuplicateEntry: (e) => {
                this.stopPropagation(e);
                this.duplicateEntry.emit(e.detail);
            }, onDeleteEntry: (e) => {
                this.stopPropagation(e);
                this.deleteEntry.emit(e.detail);
            }, onClearFilters: this.clearFilters, onReorderEntries: (e) => {
                this.stopPropagation(e);
                this.reorderEntries.emit(e.detail);
            }, onToggleVisibility: (e) => {
                this.stopPropagation(e);
                this.toggleVisibility.emit(e.detail);
            } })), !this.isLoading && total > 0 && this.renderFooter(filteredEntries.length, total, missing, shownTables)));
    }
    static get is() { return "ir-translations-entries-panel"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-translations-entries-panel.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-translations-entries-panel.css"]
        };
    }
    static get properties() {
        return {
            "entries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TranslationEntry[]",
                    "resolved": "TranslationEntry[]",
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
                    "text": "The active table's unfiltered entries \u2014 filtered internally for display."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
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
            "isLoading": {
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
                    "text": "True while the active table's keys are still loading."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-loading",
                "defaultValue": "false"
            },
            "disableActions": {
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
                    "text": "Disables the \"New key\" action, e.g. while another write is in flight."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disable-actions",
                "defaultValue": "false"
            },
            "hasPendingOrder": {
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
                    "text": "True once a drag reorder is applied locally but not yet saved \u2014 shows the Save/Discard order buttons."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "has-pending-order",
                "defaultValue": "false"
            },
            "changedEntryIds": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Set<string>",
                    "resolved": "Set<string>",
                    "references": {
                        "Set": {
                            "location": "global",
                            "id": "global::Set"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Ids of rows whose position differs from the last-loaded/saved order \u2014 marked in the table while a reorder is pending."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "new Set()"
            },
            "groupByTable": {
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
                    "text": "True when `entries` span several setup tables \u2014 adds the table filter and hands the table its grouped rendering."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "group-by-table",
                "defaultValue": "false"
            },
            "tableNames": {
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
                    "text": "Distinct table names present in `entries`, in display order \u2014 the table filter's options."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "disableCreate": {
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
                    "text": "Disables the \"New key\" action outright, e.g. in the cross-table view where there is no single table to create into."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disable-create",
                "defaultValue": "false"
            },
            "duplicates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Map<string, DuplicateInfo>",
                    "resolved": "Map<string, DuplicateInfo>",
                    "references": {
                        "Map": {
                            "location": "global",
                            "id": "global::Map"
                        },
                        "DuplicateInfo": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::DuplicateInfo",
                            "referenceLocation": "DuplicateInfo"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Entry id \u2192 the tables sharing that row's description; rows present here get a duplicate badge."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "new Map()"
            }
        };
    }
    static get states() {
        return {
            "searchTerm": {},
            "statusFilter": {},
            "tableFilter": {},
            "missingLanguageFilter": {},
            "shortcutHint": {}
        };
    }
    static get events() {
        return [{
                "method": "createEntry",
                "name": "createEntry",
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
                "method": "editEntry",
                "name": "editEntry",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationEntry",
                    "resolved": "TranslationEntry",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                }
            }, {
                "method": "duplicateEntry",
                "name": "duplicateEntry",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationEntry",
                    "resolved": "TranslationEntry",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                }
            }, {
                "method": "deleteEntry",
                "name": "deleteEntry",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationEntry",
                    "resolved": "TranslationEntry",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                }
            }, {
                "method": "entryChange",
                "name": "entryChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationEntry",
                    "resolved": "TranslationEntry",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                }
            }, {
                "method": "reorderEntries",
                "name": "reorderEntries",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationEntry[]",
                    "resolved": "TranslationEntry[]",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                }
            }, {
                "method": "toggleVisibility",
                "name": "toggleVisibility",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "TranslationEntry",
                    "resolved": "TranslationEntry",
                    "references": {
                        "TranslationEntry": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-translations-manager/types.ts::TranslationEntry",
                            "referenceLocation": "TranslationEntry"
                        }
                    }
                }
            }, {
                "method": "saveOrder",
                "name": "saveOrder",
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
                "method": "discardOrder",
                "name": "discardOrder",
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
                "propName": "tableNames",
                "methodName": "handleTableNamesChange"
            }, {
                "propName": "languages",
                "methodName": "handleLanguagesChange"
            }];
    }
}
