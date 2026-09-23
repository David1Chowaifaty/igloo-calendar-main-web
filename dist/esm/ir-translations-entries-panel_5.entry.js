import { r as registerInstance, c as createEvent, h } from './index-CeHdrJeH.js';
import { j as countMissing } from './utils-Btr0LXV6.js';
import { t } from './t-Bk78Wumj.js';
import { S as SetupService } from './index-Er1rf3LB.js';
import { d as showToast } from './utils-Ddj2LxLs.js';
import './locales.store-CXJn6ls-.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './utils-el9-8HZ4.js';
import './IBooking-BEkHqAPo.js';
import './types-BWKgfE54.js';
import './moment-Mki5YqAR.js';
import './calendar-data-BmpcWihW.js';
import './booking.dto-xX-uaIxb.js';
import './type-DahsFfOq.js';
import './ir-date-BngUhoPp.js';
import './language-observer-CHgzsZkY.js';

const irTranslationsEntriesPanelCss = () => `.sc-ir-translations-entries-panel-h{display:flex;flex-direction:column;min-width:0;flex:1 1 auto;min-height:0}.entries-panel__card.sc-ir-translations-entries-panel{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background:var(--wa-color-surface-default);border:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-radius:var(--wa-border-radius-l, 0.75rem);overflow:hidden}.entries-panel__toolbar.sc-ir-translations-entries-panel{display:flex;align-items:flex-end;gap:0.5rem;padding:0.75rem 1rem}.entries-panel__search.sc-ir-translations-entries-panel{flex:1 1 12rem;min-width:0;max-width:350px}.entries-panel__status.sc-ir-translations-entries-panel{flex:0 0 11rem}.entries-panel__table-filter.sc-ir-translations-entries-panel{flex:0 0 12rem;min-width:0}.entries-panel__missing-filter.sc-ir-translations-entries-panel{flex:0 1 14rem;min-width:0;--tag-max-size:8ch}.entries-panel__search.sc-ir-translations-entries-panel::part(label),.entries-panel__search.sc-ir-translations-entries-panel [part~="label"],.entries-panel__status.sc-ir-translations-entries-panel::part(label),.entries-panel__status.sc-ir-translations-entries-panel [part~="label"],.entries-panel__table-filter.sc-ir-translations-entries-panel::part(label),.entries-panel__table-filter.sc-ir-translations-entries-panel [part~="label"],.entries-panel__missing-filter.sc-ir-translations-entries-panel::part(label),.entries-panel__missing-filter.sc-ir-translations-entries-panel [part~="label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.entries-panel__search-hint.sc-ir-translations-entries-panel{display:inline-flex;align-items:center;padding:0.05rem 0.4rem;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet);background:var(--wa-color-neutral-fill-quiet);border:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-radius:var(--wa-border-radius-s)}@media (max-width: 575px){.entries-panel__toolbar.sc-ir-translations-entries-panel{flex-wrap:wrap}.entries-panel__status.sc-ir-translations-entries-panel,.entries-panel__table-filter.sc-ir-translations-entries-panel,.entries-panel__missing-filter.sc-ir-translations-entries-panel{flex:1 1 8rem}}.entries-panel__loader-container.sc-ir-translations-entries-panel{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:3rem 1rem;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.entries-panel__loader-container.sc-ir-translations-entries-panel p.sc-ir-translations-entries-panel{margin:0}.entries-panel__footer.sc-ir-translations-entries-panel{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;padding:0.5rem 1rem;font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;color:var(--wa-color-text-quiet);border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.entries-panel__missing-link.sc-ir-translations-entries-panel{border:none;background:transparent;padding:0;font:inherit;color:var(--wa-color-warning-on-quiet, #92400e);cursor:pointer}.entries-panel__missing-link.sc-ir-translations-entries-panel:hover,.entries-panel__missing-link.sc-ir-translations-entries-panel:focus-visible{text-decoration:underline}`;

const IrTranslationsEntriesPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.createEntry = createEvent(this, "createEntry");
        this.editEntry = createEvent(this, "editEntry");
        this.duplicateEntry = createEvent(this, "duplicateEntry");
        this.moveEntry = createEvent(this, "moveEntry");
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
    /** Whether the notes column is included at all. */
    showNotes = true;
    createEntry;
    editEntry;
    duplicateEntry;
    moveEntry;
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
        return (h("div", { class: "entries-panel__toolbar" }, h("wa-input", { class: "entries-panel__search", size: "s", "with-clear": true, label: "Search keys and translations", value: this.searchTerm, placeholder: "Search keys and translations", autocomplete: "off", spellcheck: false, ref: el => (this.searchInputRef = el), oninput: (e) => (this.searchTerm = e.target.value) }, h("wa-icon", { name: "magnifying-glass", slot: "start", "aria-hidden": "true" }), this.shortcutHint && !this.searchTerm && (h("span", { slot: "end", class: "entries-panel__search-hint", "aria-hidden": "true" }, this.shortcutHint))), h("wa-select", { class: "entries-panel__status", size: "s", label: t('Lcz_Status', { fallback: 'Status' }), value: this.statusFilter, onchange: (e) => (this.statusFilter = e.target.value) }, h("wa-option", { value: "all" }, "All keys"), h("wa-option", { value: "missing" }, "Needs translation"), h("wa-option", { value: "complete" }, "Complete"), h("wa-option", { value: "hidden" }, "Hidden from app")), this.auditableLanguages.length > 0 && (h("wa-select", { class: "entries-panel__missing-filter", size: "s", multiple: true, "with-clear": true, "max-options-visible": 1, label: "Untranslated in", placeholder: "Untranslated in\u2026", value: this.missingLanguageFilter, onchange: (e) => (this.missingLanguageFilter = [...(e.target.value ?? [])]) }, this.auditableLanguages.map(language => (h("wa-option", { key: language.code, value: language.code }, language.name))))), this.groupByTable && this.tableNames.length > 1 && (h("wa-select", { class: "entries-panel__table-filter", size: "s", label: "Table", value: this.tableFilter, onchange: (e) => (this.tableFilter = e.target.value) }, h("wa-option", { value: "all" }, "All tables"), this.tableNames.map(name => (h("wa-option", { key: name, value: name }, name))))), this.hasPendingOrder && (h("ir-custom-button", { style: { marginInlineStart: 'auto' }, variant: "neutral", appearance: "outlined", disabled: this.disableActions, onClickHandler: () => this.discardOrder.emit() }, "Discard")), this.hasPendingOrder && (h("ir-custom-button", { variant: "brand", appearance: "accent", disabled: this.disableActions, loading: this.disableActions, onClickHandler: () => this.saveOrder.emit() }, t('Lcz_Save', { fallback: 'Save' }))), h("ir-custom-button", { style: { marginInlineStart: this.hasPendingOrder ? null : 'auto' }, variant: "brand", appearance: "filled", disabled: this.disableActions || this.isLoading || this.disableCreate, onClickHandler: () => this.createEntry.emit() }, h("wa-icon", { name: "plus", slot: "start", "aria-hidden": "true" }), "New key")));
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
        return (h("div", { key: '12f6f0689227e37281979db4713ac149ddf66e4e', class: "entries-panel__card" }, this.renderToolbar(), this.isLoading ? (h("div", { class: "entries-panel__loader-container" }, h("ir-spinner", null), h("p", null, "Loading keys\u2026"))) : (h("ir-translations-entries-table", { entries: filteredEntries, languages: this.languages, sourceCode: this.sourceCode, compact: false, filtered: this.hasActiveFilters, groupByTable: this.groupByTable, reorderEnabled: !this.hasActiveFilters && !this.groupByTable, changedEntryIds: this.changedEntryIds, duplicates: this.duplicates, showNotes: this.showNotes, onEntryChange: (e) => {
                this.stopPropagation(e);
                this.entryChange.emit(e.detail);
            }, onEditEntry: (e) => {
                this.stopPropagation(e);
                this.editEntry.emit(e.detail);
            }, onDuplicateEntry: (e) => {
                this.stopPropagation(e);
                this.duplicateEntry.emit(e.detail);
            }, onMoveEntry: (e) => {
                this.stopPropagation(e);
                this.moveEntry.emit(e.detail);
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
    /** Passed through to the form — rows in other tables that share `entry`'s description. */
    duplicateSiblings = [];
    closeDrawer;
    entrySaved;
    saveDisabled = true;
    isSubmitting = false;
    render() {
        const isEditing = !!this.entry;
        return (h("ir-drawer", { key: '2a1996aa2c45b387b577a7002bf43aa30185ed36', label: isEditing ? 'Edit key' : 'New key', open: this.open, onDrawerHide: () => this.closeDrawer.emit() }, this.open && (h("ir-translations-entry-form", { key: 'c460a816c5175d25b86b0bf38f892cf57999fba3', formId: this.formId, languages: this.languages, entry: this.entry, existingKeys: this.existingKeys, nextDisplayOrder: this.nextDisplayOrder, tableName: this.tableName, ownerId: this.ownerId, entryUserId: this.entryUserId, duplicateSiblings: this.duplicateSiblings, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onEntrySaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.entrySaved.emit(e.detail);
                this.closeDrawer.emit();
            } })), h("div", { key: 'fd11563fbf85cf30ea2fae94bd11866f5ddfb4f0', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '4f9976aafe9251e2cd8cb4be8d11836d2bee4247', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDrawer.emit() }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'a53ac8077d93996e1e9a16f5c75d80f2e2787d86', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrTranslationsEntryDrawer.style = irTranslationsEntryDrawerCss();

const irTranslationsMoveDialogCss = () => `.sc-ir-translations-move-dialog-h{--ir-dialog-width:32rem}.move-dialog__body.sc-ir-translations-move-dialog{display:flex;flex-direction:column;gap:1.25rem}.move-dialog__summary.sc-ir-translations-move-dialog{display:flex;flex-direction:column;gap:0.25rem}.move-dialog__key.sc-ir-translations-move-dialog{align-self:flex-start;padding:0.15rem 0.4rem;border-radius:var(--wa-border-radius-s, 4px);background:var(--wa-color-neutral-fill-quiet, #f1f5f9);font-family:var(--wa-font-family-code, ui-monospace, SFMono-Regular, Menlo, monospace);font-size:var(--wa-font-size-s);color:var(--wa-color-text-normal)}.move-dialog__value.sc-ir-translations-move-dialog{margin:0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-normal)}.move-dialog__hint.sc-ir-translations-move-dialog,.move-dialog__empty.sc-ir-translations-move-dialog{margin:0;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet)}.move-dialog__locked.sc-ir-translations-move-dialog{margin:0.25rem 0 0;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-danger-on-quiet, #b91c1c)}.move-dialog__tables.sc-ir-translations-move-dialog{display:flex;flex-direction:column;gap:0.6rem;padding-top:1rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.move-dialog__list.sc-ir-translations-move-dialog{max-height:18rem;overflow-y:auto;padding-inline:0.25rem}`;

const IrTranslationsMoveDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeDialog = createEvent(this, "closeDialog");
        this.entryMoved = createEvent(this, "entryMoved");
    }
    open = false;
    /** The row being moved. Its `tableName` is the source table. */
    entry = null;
    /** Candidate destinations — the tables the header picker shows. */
    tables = [];
    /** Language whose value is shown next to the key, so the user can tell rows with similar keys apart. */
    sourceCode;
    closeDialog;
    /** Emitted once the API confirmed the move. The parent owns closing the dialog and updating its rows. */
    entryMoved;
    query = '';
    targetId = null;
    isSubmitting = false;
    dialogRef;
    setupService = new SetupService();
    handleOpenChange(open) {
        if (open) {
            // Start clean every time — a destination picked for one row must not carry over to the next.
            this.query = '';
            this.targetId = null;
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    /** Every table but the one the row already lives in, narrowed by the search text. */
    get candidateTables() {
        const source = this.entry?.tableName;
        const query = this.query.trim().toLowerCase();
        return this.tables.filter(table => table.name !== source && (!query || table.name.toLowerCase().includes(query)));
    }
    /** Mirrors the Edit action's rule — a row Setup won't let us update can't be re-homed either. */
    get isLocked() {
        return this.entry?.meta?.isUpdateable === false;
    }
    handleMove = async () => {
        const entry = this.entry;
        const toTable = this.targetId;
        const fromTable = entry?.tableName;
        if (!entry || !fromTable || !toTable || this.isLocked) {
            return;
        }
        this.isSubmitting = true;
        try {
            // A code already used by the destination is a business exception — the interceptor toasts it and the dialog stays open.
            await this.setupService.moveSetupEntry({ old_tbl_name: fromTable, code_name: entry.key, new_tbl_name: toTable });
            showToast({ type: 'success', title: `Moved ${entry.key} to ${toTable}` });
            this.entryMoved.emit({ entry, fromTable, toTable });
        }
        finally {
            this.isSubmitting = false;
        }
    };
    renderSummary() {
        const entry = this.entry;
        if (!entry) {
            return null;
        }
        const sourceValue = this.sourceCode ? entry.values[this.sourceCode] : undefined;
        return (h("section", { class: "move-dialog__summary" }, h("code", { class: "move-dialog__key" }, entry.key), sourceValue && h("p", { class: "move-dialog__value" }, sourceValue), h("p", { class: "move-dialog__hint" }, "Currently in ", h("strong", null, entry.tableName)), this.isLocked && (h("p", { class: "move-dialog__locked", role: "alert" }, "This key is locked by Setup and cannot be moved."))));
    }
    renderTableList() {
        const tables = this.candidateTables;
        return (h("section", { class: "move-dialog__tables" }, h("wa-input", { class: "move-dialog__search", size: "s", "with-clear": true, label: "Move to", placeholder: "Search tables\u2026", autocomplete: "off", spellcheck: false, oninput: (e) => (this.query = e.target.value ?? '') }, h("wa-icon", { name: "magnifying-glass", slot: "start", "aria-hidden": "true" })), tables.length === 0 ? (h("p", { class: "move-dialog__empty" }, "No tables match.")) : (h("wa-radio-group", { class: "move-dialog__list", size: "s", orientation: "vertical", value: this.targetId ?? '', onchange: (e) => (this.targetId = e.target.value || null) }, tables.map(table => (h("wa-radio", { key: table.id, value: table.id }, table.name)))))));
    }
    render() {
        return (h("ir-dialog", { key: '4b6544869f2a12dd0c5bf6e210c6373b4c121017', label: "Move key", ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, this.open && (h("div", { key: '4bd0967784a9fae4d551964a9119974fcae75d94', class: "move-dialog__body" }, this.renderSummary(), this.renderTableList())), h("div", { key: '392d12bc4ad7b44118bcad18ba55b4bd0e5f73ec', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '37e24d027c51570d5f2c93f71f133922e54967da', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDialog.emit() }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '8d545721f8d92e5d5ac6c7a6be22e251169d312d', size: "m", appearance: "accent", variant: "brand", disabled: !this.targetId || this.isLocked || this.isSubmitting, loading: this.isSubmitting, onClickHandler: this.handleMove }, "Move"))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrTranslationsMoveDialog.style = irTranslationsMoveDialogCss();

const irTranslationsSettingsDialogCss = () => `.sc-ir-translations-settings-dialog-h{--ir-dialog-width:42rem}.settings-dialog__body.sc-ir-translations-settings-dialog{display:flex;flex-direction:column;gap:1.25rem}.settings-dialog__section.sc-ir-translations-settings-dialog+.settings-dialog__section.sc-ir-translations-settings-dialog{padding-top:1rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.settings-dialog__section-title.sc-ir-translations-settings-dialog{margin:0 0 0.5rem;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-normal)}.settings-dialog__section-hint.sc-ir-translations-settings-dialog{margin:0 0 0.6rem;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet)}.settings-dialog__language-list.sc-ir-translations-settings-dialog{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.5rem;max-height:16rem;overflow-y:auto}.settings-dialog__language-code.sc-ir-translations-settings-dialog{color:var(--wa-color-text-quiet);font-size:0.9em}.settings-dialog__footer.sc-ir-translations-settings-dialog{display:flex;justify-content:flex-end}`;

const IrTranslationsSettingsDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.saveSettings = createEvent(this, "saveSettings");
        this.closeDialog = createEvent(this, "closeDialog");
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
        return (h("ir-dialog", { key: '067551419b8239609845ff740d6df6f4a7dbee00', label: "Table settings", ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, h("div", { key: 'd164b1112cf4fbbb1af6dc08d3fcd3333309f0b2', class: "settings-dialog__body" }, this.renderUsedTablesSection(), this.renderLanguagesSection(), this.renderNotesSection()), h("div", { key: 'd9e6889748b3465d14ca7cb38272bcdfc21e71ea', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '759cb8ce6803709a6b49703aebcdbe6b6c85c6d0', appearance: "filled", size: "m", variant: "neutral", onClickHandler: () => this.closeDialog.emit() }, "Cancel"), h("ir-custom-button", { key: '61d5a1d890dd0e6d3f2d05b1b955222d5de5eeba', appearance: "accent", size: "m", variant: "brand", onClickHandler: this.handleSave }, "Save"))));
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
        return (h("ir-dialog", { key: 'c7430b3c65b24164d221f8e1a9252f675e43dad4', label: isEditing ? 'Table details' : 'New table', ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, this.open && (h("ir-translations-table-form", { key: '2a74b6f3284277fa6e0a461d64a0e5c4c1f3ceef', formId: this.formId, mode: this.mode, table: this.table, existingNames: this.existingNames, ownerId: this.ownerId, entryUserId: this.entryUserId, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onTableSaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaved.emit(e.detail);
                this.dialogRef?.closeModal();
            }, onTableSaveFailed: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaveFailed.emit();
                this.dialogRef?.closeModal();
            } })), h("div", { key: '46c48466dde2a9999c437bd981e40cb6792ec722', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '773e4c14e7ed4c6470bb91ce060fa60c1c36e73b', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDialog.emit() }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'f78f704a1448aa962addb835d3f2dfb77f66f6d7', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, t('Lcz_Save', { fallback: 'Save' })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrTranslationsTableDialog.style = irTranslationsTableDialogCss();

export { IrTranslationsEntriesPanel as ir_translations_entries_panel, IrTranslationsEntryDrawer as ir_translations_entry_drawer, IrTranslationsMoveDialog as ir_translations_move_dialog, IrTranslationsSettingsDialog as ir_translations_settings_dialog, IrTranslationsTableDialog as ir_translations_table_dialog };
