import { r as registerInstance, c as createEvent, h } from './index-BYqrdgY9.js';
import { a as countMissing } from './utils-NDR1cITt.js';

const irTranslationsEntriesPanelCss = () => `.sc-ir-translations-entries-panel-h{display:flex;flex-direction:column;min-width:0;flex:1 1 auto;min-height:0}.entries-panel__card.sc-ir-translations-entries-panel{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background:var(--wa-color-surface-default);border:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-radius:var(--wa-border-radius-l, 0.75rem);overflow:hidden}.entries-panel__toolbar.sc-ir-translations-entries-panel{display:flex;align-items:flex-end;gap:0.5rem;padding:0.75rem 1rem}.entries-panel__search.sc-ir-translations-entries-panel{flex:1 1 12rem;min-width:0;max-width:350px}.entries-panel__status.sc-ir-translations-entries-panel{flex:0 0 11rem}.entries-panel__table-filter.sc-ir-translations-entries-panel{flex:0 0 12rem;min-width:0}.entries-panel__missing-filter.sc-ir-translations-entries-panel{flex:0 1 14rem;min-width:0;--tag-max-size:8ch}.entries-panel__search.sc-ir-translations-entries-panel::part(label),.entries-panel__search.sc-ir-translations-entries-panel [part~="label"],.entries-panel__status.sc-ir-translations-entries-panel::part(label),.entries-panel__status.sc-ir-translations-entries-panel [part~="label"],.entries-panel__table-filter.sc-ir-translations-entries-panel::part(label),.entries-panel__table-filter.sc-ir-translations-entries-panel [part~="label"],.entries-panel__missing-filter.sc-ir-translations-entries-panel::part(label),.entries-panel__missing-filter.sc-ir-translations-entries-panel [part~="label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.entries-panel__search-hint.sc-ir-translations-entries-panel{display:inline-flex;align-items:center;padding:0.05rem 0.4rem;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet);background:var(--wa-color-neutral-fill-quiet);border:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-radius:var(--wa-border-radius-s)}@media (max-width: 575px){.entries-panel__toolbar.sc-ir-translations-entries-panel{flex-wrap:wrap}.entries-panel__status.sc-ir-translations-entries-panel,.entries-panel__table-filter.sc-ir-translations-entries-panel,.entries-panel__missing-filter.sc-ir-translations-entries-panel{flex:1 1 8rem}}.entries-panel__loader-container.sc-ir-translations-entries-panel{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:3rem 1rem;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.entries-panel__loader-container.sc-ir-translations-entries-panel p.sc-ir-translations-entries-panel{margin:0}.entries-panel__footer.sc-ir-translations-entries-panel{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;padding:0.5rem 1rem;font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;color:var(--wa-color-text-quiet);border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.entries-panel__missing-link.sc-ir-translations-entries-panel{border:none;background:transparent;padding:0;font:inherit;color:var(--wa-color-warning-on-quiet, #92400e);cursor:pointer}.entries-panel__missing-link.sc-ir-translations-entries-panel:hover,.entries-panel__missing-link.sc-ir-translations-entries-panel:focus-visible{text-decoration:underline}`;

const IrTranslationsEntriesPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.createEntry = createEvent(this, "createEntry");
        this.editEntry = createEvent(this, "editEntry");
        this.duplicateEntry = createEvent(this, "duplicateEntry");
        this.deleteEntry = createEvent(this, "deleteEntry");
        this.entryChange = createEvent(this, "entryChange");
        this.reorderEntries = createEvent(this, "reorderEntries");
        this.toggleVisibility = createEvent(this, "toggleVisibility");
        this.saveOrder = createEvent(this, "saveOrder");
        this.discardOrder = createEvent(this, "discardOrder");
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
        registerInstance(this, hostRef);
        this.closeDrawer = createEvent(this, "closeDrawer");
        this.entrySaved = createEvent(this, "entrySaved");
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
    closeDrawer;
    entrySaved;
    saveDisabled = true;
    isSubmitting = false;
    render() {
        const isEditing = !!this.entry;
        return (h("ir-drawer", { key: '1c253f0297ff08ee0e18d96bc8a2316be812d282', label: isEditing ? 'Edit key' : 'New key', open: this.open, onDrawerHide: () => this.closeDrawer.emit() }, this.open && (h("ir-translations-entry-form", { key: 'ea7740b3e7b0792a8bb14df33de6c08b2d1f5d50', formId: this.formId, languages: this.languages, entry: this.entry, existingKeys: this.existingKeys, nextDisplayOrder: this.nextDisplayOrder, tableName: this.tableName, ownerId: this.ownerId, entryUserId: this.entryUserId, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onEntrySaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.entrySaved.emit();
                this.closeDrawer.emit();
            } })), h("div", { key: '5642ccc98c51fc408677b46cda3b0d25c1dff85c', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'c1b06604e1f11590ad6c81a35cc94e59511fcd79', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDrawer.emit() }, "Cancel"), h("ir-custom-button", { key: 'b8fec56ece49a512d826075191d6e52fd432e1de', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, "Save"))));
    }
};
IrTranslationsEntryDrawer.style = irTranslationsEntryDrawerCss();

const irTranslationsTableDialogCss = () => `.sc-ir-translations-table-dialog-h{--ir-dialog-width:28rem}`;

const IrTranslationsTableDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeDialog = createEvent(this, "closeDialog");
        this.tableSaved = createEvent(this, "tableSaved");
        this.tableSaveFailed = createEvent(this, "tableSaveFailed");
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
        return (h("ir-dialog", { key: '55db53ba68866c93bd774ed0ef6d7f1f80431637', label: isEditing ? 'Table details' : 'New table', ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, this.open && (h("ir-translations-table-form", { key: 'a802a54172db5dce99f40aa06937b056073766f5', formId: this.formId, mode: this.mode, table: this.table, existingNames: this.existingNames, ownerId: this.ownerId, entryUserId: this.entryUserId, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onTableSaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaved.emit(e.detail);
                this.dialogRef?.closeModal();
            }, onTableSaveFailed: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaveFailed.emit();
                this.dialogRef?.closeModal();
            } })), h("div", { key: '7c2f5ba5fb8b1c78a67cf05efb7134923bbfcb2e', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '9ca862c36702aff7a61e2e646242c5cd7452caae', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDialog.emit() }, "Cancel"), h("ir-custom-button", { key: '8df9f12b78afeca2854034871c7c9ae88522844e', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, "Save"))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrTranslationsTableDialog.style = irTranslationsTableDialogCss();

export { IrTranslationsEntriesPanel as ir_translations_entries_panel, IrTranslationsEntryDrawer as ir_translations_entry_drawer, IrTranslationsTableDialog as ir_translations_table_dialog };
