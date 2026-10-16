'use strict';

var index = require('./index-Bp205iz4.js');
var utils = require('./utils-DKNnifel.js');

const irTranslationsEntriesPanelCss = () => `.sc-ir-translations-entries-panel-h{display:flex;flex-direction:column;min-width:0;flex:1 1 auto;min-height:0}.entries-panel__card.sc-ir-translations-entries-panel{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background:var(--wa-color-surface-default);border:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-radius:var(--wa-border-radius-l, 0.75rem);overflow:hidden}.entries-panel__toolbar.sc-ir-translations-entries-panel{display:flex;align-items:flex-end;gap:0.5rem;padding:0.75rem 1rem}.entries-panel__search.sc-ir-translations-entries-panel{flex:1 1 12rem;min-width:0;max-width:350px}.entries-panel__status.sc-ir-translations-entries-panel{flex:0 0 11rem}.entries-panel__table-filter.sc-ir-translations-entries-panel{flex:0 0 12rem;min-width:0}.entries-panel__missing-filter.sc-ir-translations-entries-panel{flex:0 1 14rem;min-width:0;--tag-max-size:8ch}.entries-panel__search.sc-ir-translations-entries-panel::part(label),.entries-panel__search.sc-ir-translations-entries-panel [part~="label"],.entries-panel__status.sc-ir-translations-entries-panel::part(label),.entries-panel__status.sc-ir-translations-entries-panel [part~="label"],.entries-panel__table-filter.sc-ir-translations-entries-panel::part(label),.entries-panel__table-filter.sc-ir-translations-entries-panel [part~="label"],.entries-panel__missing-filter.sc-ir-translations-entries-panel::part(label),.entries-panel__missing-filter.sc-ir-translations-entries-panel [part~="label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.entries-panel__search-hint.sc-ir-translations-entries-panel{display:inline-flex;align-items:center;padding:0.05rem 0.4rem;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet);background:var(--wa-color-neutral-fill-quiet);border:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-radius:var(--wa-border-radius-s)}@media (max-width: 575px){.entries-panel__toolbar.sc-ir-translations-entries-panel{flex-wrap:wrap}.entries-panel__status.sc-ir-translations-entries-panel,.entries-panel__table-filter.sc-ir-translations-entries-panel,.entries-panel__missing-filter.sc-ir-translations-entries-panel{flex:1 1 8rem}}.entries-panel__loader-container.sc-ir-translations-entries-panel{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:3rem 1rem;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.entries-panel__loader-container.sc-ir-translations-entries-panel p.sc-ir-translations-entries-panel{margin:0}.entries-panel__footer.sc-ir-translations-entries-panel{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;padding:0.5rem 1rem;font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;color:var(--wa-color-text-quiet);border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.entries-panel__missing-link.sc-ir-translations-entries-panel{border:none;background:transparent;padding:0;font:inherit;color:var(--wa-color-warning-on-quiet, #92400e);cursor:pointer}.entries-panel__missing-link.sc-ir-translations-entries-panel:hover,.entries-panel__missing-link.sc-ir-translations-entries-panel:focus-visible{text-decoration:underline}`;

const IrTranslationsEntriesPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.createEntry = index.createEvent(this, "createEntry");
        this.editEntry = index.createEvent(this, "editEntry");
        this.duplicateEntry = index.createEvent(this, "duplicateEntry");
        this.deleteEntry = index.createEvent(this, "deleteEntry");
        this.entryChange = index.createEvent(this, "entryChange");
        this.reorderEntries = index.createEvent(this, "reorderEntries");
        this.toggleVisibility = index.createEvent(this, "toggleVisibility");
        this.saveOrder = index.createEvent(this, "saveOrder");
        this.discardOrder = index.createEvent(this, "discardOrder");
    }
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
    /** Whether the notes column is included at all. */
    showNotes = true;
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
            if (audited.length > 0 && utils.countMissing(entry, audited) === 0) {
                return false;
            }
            if (this.statusFilter === 'all') {
                return true;
            }
            if (this.statusFilter === 'hidden') {
                return entry.meta?.isVisible === false;
            }
            const missing = utils.countMissing(entry, this.languages);
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
        return (index.h("div", { class: "entries-panel__toolbar" }, index.h("wa-input", { class: "entries-panel__search", size: "s", "with-clear": true, label: "Search keys and translations", value: this.searchTerm, placeholder: "Search keys and translations", autocomplete: "off", spellcheck: false, ref: el => (this.searchInputRef = el), oninput: (e) => (this.searchTerm = e.target.value) }, index.h("wa-icon", { name: "magnifying-glass", slot: "start", "aria-hidden": "true" }), this.shortcutHint && !this.searchTerm && (index.h("span", { slot: "end", class: "entries-panel__search-hint", "aria-hidden": "true" }, this.shortcutHint))), index.h("wa-select", { class: "entries-panel__status", size: "s", label: "Status", value: this.statusFilter, onchange: (e) => (this.statusFilter = e.target.value) }, index.h("wa-option", { value: "all" }, "All keys"), index.h("wa-option", { value: "missing" }, "Needs translation"), index.h("wa-option", { value: "complete" }, "Complete"), index.h("wa-option", { value: "hidden" }, "Hidden from app")), this.auditableLanguages.length > 0 && (index.h("wa-select", { class: "entries-panel__missing-filter", size: "s", multiple: true, "with-clear": true, "max-options-visible": 1, label: "Untranslated in", placeholder: "Untranslated in\u2026", value: this.missingLanguageFilter, onchange: (e) => (this.missingLanguageFilter = [...(e.target.value ?? [])]) }, this.auditableLanguages.map(language => (index.h("wa-option", { key: language.code, value: language.code }, language.name))))), this.groupByTable && this.tableNames.length > 1 && (index.h("wa-select", { class: "entries-panel__table-filter", size: "s", label: "Table", value: this.tableFilter, onchange: (e) => (this.tableFilter = e.target.value) }, index.h("wa-option", { value: "all" }, "All tables"), this.tableNames.map(name => (index.h("wa-option", { key: name, value: name }, name))))), this.hasPendingOrder && (index.h("ir-custom-button", { style: { marginLeft: 'auto' }, variant: "neutral", appearance: "outlined", disabled: this.disableActions, onClickHandler: () => this.discardOrder.emit() }, "Discard")), this.hasPendingOrder && (index.h("ir-custom-button", { variant: "brand", appearance: "accent", disabled: this.disableActions, loading: this.disableActions, onClickHandler: () => this.saveOrder.emit() }, "Save")), index.h("ir-custom-button", { style: { marginLeft: this.hasPendingOrder ? null : 'auto' }, variant: "brand", appearance: "filled", disabled: this.disableActions || this.isLoading || this.disableCreate, onClickHandler: () => this.createEntry.emit() }, index.h("wa-icon", { name: "plus", slot: "start", "aria-hidden": "true" }), "New key")));
    }
    renderFooter(shown, total, missing, tables) {
        return (index.h("div", { class: "entries-panel__footer", "aria-live": "polite" }, index.h("span", null, shown === total ? `${total} key${total === 1 ? '' : 's'}` : `${shown} of ${total} keys`, this.groupByTable && tables > 0 && ` · ${tables} table${tables === 1 ? '' : 's'}`), missing > 0 && (index.h("button", { type: "button", class: "entries-panel__missing-link", onClick: () => (this.statusFilter = this.statusFilter === 'missing' ? 'all' : 'missing') }, missing, " need", missing === 1 ? 's' : '', " translation"))));
    }
    stopPropagation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
    }
    render() {
        const filteredEntries = this.filteredEntries;
        const total = this.entries.length;
        const missing = this.entries.filter(entry => utils.countMissing(entry, this.languages) > 0).length;
        const shownTables = new Set(filteredEntries.map(entry => entry.tableName)).size;
        return (index.h("div", { key: 'fc7808d9077609f1c77e159e459445fe0ef2eafa', class: "entries-panel__card" }, this.renderToolbar(), this.isLoading ? (index.h("div", { class: "entries-panel__loader-container" }, index.h("ir-spinner", null), index.h("p", null, "Loading keys\u2026"))) : (index.h("ir-translations-entries-table", { entries: filteredEntries, languages: this.languages, sourceCode: this.sourceCode, compact: false, filtered: this.hasActiveFilters, groupByTable: this.groupByTable, reorderEnabled: !this.hasActiveFilters && !this.groupByTable, changedEntryIds: this.changedEntryIds, duplicates: this.duplicates, showNotes: this.showNotes, onEntryChange: (e) => {
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
    static get watchers() { return {
        "tableNames": [{
                "handleTableNamesChange": 0
            }],
        "languages": [{
                "handleLanguagesChange": 0
            }]
    }; }
};
IrTranslationsEntriesPanel.style = irTranslationsEntriesPanelCss();

const irTranslationsEntryDrawerCss = () => `.sc-ir-translations-entry-drawer-h{--ir-drawer-width:32rem}`;

const IrTranslationsEntryDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer");
        this.entrySaved = index.createEvent(this, "entrySaved");
    }
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
        return (index.h("ir-drawer", { key: 'c1904509f2200509ba8c4a1add5eab7ab75f42a3', label: isEditing ? 'Edit key' : 'New key', open: this.open, onDrawerHide: () => this.closeDrawer.emit() }, this.open && (index.h("ir-translations-entry-form", { key: '10686e0ba9c2cd19ed13cbfbda176b8426d64333', formId: this.formId, languages: this.languages, entry: this.entry, existingKeys: this.existingKeys, nextDisplayOrder: this.nextDisplayOrder, tableName: this.tableName, ownerId: this.ownerId, entryUserId: this.entryUserId, duplicateSiblings: this.duplicateSiblings, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onEntrySaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.entrySaved.emit(e.detail);
                this.closeDrawer.emit();
            } })), index.h("div", { key: 'cd766af29a94a5d7527dcf4cd614b544cec2c6ed', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: 'adbf761ed7f8a24d57dac838fab2ca4abb6842e5', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDrawer.emit() }, "Cancel"), index.h("ir-custom-button", { key: '36aa060d7f418feb3b276ca72779d7350e16d7a0', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, "Save"))));
    }
};
IrTranslationsEntryDrawer.style = irTranslationsEntryDrawerCss();

const irTranslationsSettingsDialogCss = () => `.sc-ir-translations-settings-dialog-h{--ir-dialog-width:42rem}.settings-dialog__body.sc-ir-translations-settings-dialog{display:flex;flex-direction:column;gap:1.25rem}.settings-dialog__section.sc-ir-translations-settings-dialog+.settings-dialog__section.sc-ir-translations-settings-dialog{padding-top:1rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.settings-dialog__section-title.sc-ir-translations-settings-dialog{margin:0 0 0.5rem;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-normal)}.settings-dialog__section-hint.sc-ir-translations-settings-dialog{margin:0 0 0.6rem;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet)}.settings-dialog__language-list.sc-ir-translations-settings-dialog{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.5rem;max-height:16rem;overflow-y:auto}.settings-dialog__language-code.sc-ir-translations-settings-dialog{color:var(--wa-color-text-quiet);font-size:0.9em}.settings-dialog__footer.sc-ir-translations-settings-dialog{display:flex;justify-content:flex-end}`;

const IrTranslationsSettingsDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.saveSettings = index.createEvent(this, "saveSettings");
        this.closeDialog = index.createEvent(this, "closeDialog");
    }
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
        return (index.h("section", { class: "settings-dialog__section" }, index.h("wa-checkbox", { defaultChecked: this.draftUsedTablesOnly, checked: this.draftUsedTablesOnly, onchange: (e) => (this.draftUsedTablesOnly = e.target.checked) }, "Only show tables used in the app")));
    }
    renderLanguagesSection() {
        const languages = this.pinnableLanguages;
        if (languages.length === 0) {
            return null;
        }
        const pinned = new Set(this.draftPinnedCodes);
        return (index.h("section", { class: "settings-dialog__section" }, index.h("p", { class: "settings-dialog__section-hint" }, "Pin the languages you want shown in the table."), index.h("ul", { class: "settings-dialog__language-list" }, languages.map(language => (index.h("li", { key: language.code, class: "settings-dialog__language-item" }, index.h("wa-checkbox", { defaultChecked: pinned.has(language.code), checked: pinned.has(language.code), onchange: (e) => this.toggleDraftLanguage(language.code, e.target.checked) }, language.name, " ", index.h("span", { class: "settings-dialog__language-code" }, "(", language.code.toUpperCase(), ")"))))))));
    }
    renderNotesSection() {
        return (index.h("section", { class: "settings-dialog__section" }, index.h("wa-checkbox", { defaultChecked: this.draftShowNotes, checked: this.draftShowNotes, onchange: (e) => (this.draftShowNotes = e.target.checked) }, "Show the notes column")));
    }
    render() {
        return (index.h("ir-dialog", { key: '801d4db5cf397db57eda150a9e91cabf6810d061', label: "Table settings", ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, index.h("div", { key: 'ecd5a0074b9818c77834a2fc7c6a042d54abeda2', class: "settings-dialog__body" }, this.renderUsedTablesSection(), this.renderLanguagesSection(), this.renderNotesSection()), index.h("div", { key: '0e2f9d99ac11bed10b8bebd25f5545ab6cbce9be', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'f70fa2bb971d49b59361c6a9768e56f551dadab9', appearance: "filled", size: "m", variant: "neutral", onClickHandler: () => this.closeDialog.emit() }, "Cancel"), index.h("ir-custom-button", { key: '009ca02bdaf8a05358847d938b42dbbedb555b46', appearance: "accent", size: "m", variant: "brand", onClickHandler: this.handleSave }, "Save"))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrTranslationsSettingsDialog.style = irTranslationsSettingsDialogCss();

const irTranslationsTableDialogCss = () => `.sc-ir-translations-table-dialog-h{--ir-dialog-width:28rem}`;

const IrTranslationsTableDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDialog = index.createEvent(this, "closeDialog");
        this.tableSaved = index.createEvent(this, "tableSaved");
        this.tableSaveFailed = index.createEvent(this, "tableSaveFailed");
    }
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
        return (index.h("ir-dialog", { key: '44d18f97c2ad03fa4f8ceafdf075416610fcd6ea', label: isEditing ? 'Table details' : 'New table', ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, this.open && (index.h("ir-translations-table-form", { key: 'b9e19a2c70b038b6c8bc9071401f2255d55d4e67', formId: this.formId, mode: this.mode, table: this.table, existingNames: this.existingNames, ownerId: this.ownerId, entryUserId: this.entryUserId, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onTableSaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaved.emit(e.detail);
                this.dialogRef?.closeModal();
            }, onTableSaveFailed: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaveFailed.emit();
                this.dialogRef?.closeModal();
            } })), index.h("div", { key: '432de3bad3fc3f3cd62a477dfad3d28a88235525', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'b2e9f2088f934edf2698c9bfd27b68f6240997d4', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDialog.emit() }, "Cancel"), index.h("ir-custom-button", { key: '477ebfd75d719d9c6511f25d9155402ba101a037', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, "Save"))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrTranslationsTableDialog.style = irTranslationsTableDialogCss();

exports.ir_translations_entries_panel = IrTranslationsEntriesPanel;
exports.ir_translations_entry_drawer = IrTranslationsEntryDrawer;
exports.ir_translations_settings_dialog = IrTranslationsSettingsDialog;
exports.ir_translations_table_dialog = IrTranslationsTableDialog;
