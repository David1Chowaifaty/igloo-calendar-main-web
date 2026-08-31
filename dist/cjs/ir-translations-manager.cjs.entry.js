'use strict';

var index = require('./index-DN8J4ULi.js');
var Token = require('./Token-mN7PQKGF.js');
var setupMapping = require('./setup-mapping-BmySVapc.js');
var utils$1 = require('./utils-t-vm9_Z2.js');
var utils = require('./utils-DGikCG8C.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-CLqkDPTC.js');
require('./IBooking-BtFRLVyo.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-CdMMPf5M.js');
require('./locales.store-QRiel1Gy.js');
require('./type-Dy9pVS4V.js');

const irTranslationsManagerCss = () => `.sc-ir-translations-manager-h{display:block;height:100%}.tm__page-actions.sc-ir-translations-manager{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem 0.75rem}.translation-manager__page.sc-ir-translations-manager::part(body),.translation-manager__page.sc-ir-translations-manager [part~="body"]{height:100%}.tm__table-picker.sc-ir-translations-manager{display:flex;align-items:center;gap:0.35rem;min-width:0}.tm__table-select.sc-ir-translations-manager{flex:1 1 auto;min-width:0;width:15rem}.tm__table-select.sc-ir-translations-manager::part(label),.tm__table-select.sc-ir-translations-manager [part~="label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.tm__table-select.sc-ir-translations-manager::part(listbox),.tm__table-select.sc-ir-translations-manager [part~="listbox"]{max-height:300px;width:350px}.tm__table-picker.sc-ir-translations-manager .tm__icon-btn.sc-ir-translations-manager{flex:0 0 auto;--ir-c-btn-padding:0}.tm__lang-count.sc-ir-translations-manager{display:inline-flex;align-items:center;padding:0.05rem 0.35rem;font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;color:var(--wa-color-text-quiet);background:var(--wa-color-neutral-fill-quiet);border-radius:var(--wa-border-radius-s)}@media (max-width: 575px){.tm__page-actions.sc-ir-translations-manager{width:100%}.tm__table-picker.sc-ir-translations-manager{flex:1 1 100%}.tm__table-select.sc-ir-translations-manager{width:auto}}.tm__loader-container.sc-ir-translations-manager{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:3rem 1rem;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.tm__loader-container.sc-ir-translations-manager p.sc-ir-translations-manager{margin:0}.tm__confirm-text.sc-ir-translations-manager{margin:0}.tm__confirm-footer.sc-ir-translations-manager{display:flex;justify-content:flex-end;gap:0.5rem}`;

const IrTranslationsManager = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Auth ticket for the Setup API, following the same pattern as other feature roots. */
    ticket;
    /** Owning property id, sent as OWNER_ID on every write. */
    propertyid;
    /** Acting user id, sent as ENTRY_USER_ID on every write. */
    userId;
    tables = [];
    /** Languages currently shown — a subset of `languageCatalog` toggled via the language dialog. */
    languages = [];
    /** Every language this property exposes and Setup can persist, regardless of current visibility. */
    languageCatalog = [];
    activeTableId = null;
    /** Text shown in the table picker — doubles as the option filter while typing. */
    tableQuery = '';
    entryDrawerOpen = false;
    entryDrawerEntry = null;
    tableDialogOpen = false;
    tableDialogMode = 'create';
    tableDialogTable = null;
    languageDialogOpen = false;
    deleteTarget = null;
    /** True while the distinct table list is loading. */
    isLoading = false;
    /** True while the active table's keys are loading — set on every table switch. */
    isLoadingEntries = false;
    /** True while any write is in flight — guards against overlapping edits. */
    isMutating = false;
    /** True once a drag reorder is applied locally but not yet persisted. */
    orderDirty = false;
    /** Table the user picked while an order was still unsaved — held until they resolve the prompt. */
    pendingTableSwitchId = null;
    /** Entry ids in the active table's last-loaded (or last-saved) order — the yardstick `changedEntryIds` diffs against. */
    baselineOrderIds = [];
    deleteDialogRef;
    unsavedOrderDialogRef;
    tokenService = new Token.Token();
    setupService = new setupMapping.SetupService();
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.loadLanguages();
            this.loadTables();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
            this.tokenService.setToken(newValue);
            this.loadLanguages();
            this.loadTables();
        }
    }
    // #region Loading
    /**
     * Which languages this property actually wants translated, and their
     * display names, come from Setup's exposed-language catalog rather than a
     * hardcoded list — narrowed to the codes Setup can persist. All exposed
     * languages start visible; hiding one only affects `languages`, so the
     * catalog stays the reference list the language dialog re-offers from.
     */
    async loadLanguages() {
        try {
            const exposed = await this.setupService.getExposedLanguages();
            this.languageCatalog = setupMapping.exposedLanguagesToTranslationLanguages(exposed);
            this.languages = this.languageCatalog;
        }
        finally {
        }
    }
    /**
     * Only the distinct table names are fetched up front, to fill the picker —
     * a table's keys aren't loaded until it's actually selected.
     */
    async loadTables() {
        this.isLoading = true;
        try {
            const tableNames = await this.setupService.getDistinctSetupTables();
            this.tables = tableNames.map(name => ({ id: name, name, entries: [] }));
            this.setActiveTable(this.tables[0]?.id ?? null);
            // this.setActiveTable(this.tables.find(t => t.name === 'BLAbLA')?.id ?? null);
        }
        finally {
            this.isLoading = false;
        }
    }
    /**
     * Fetches one table's keys. Runs every time a table becomes active — including
     * a table that was just created locally and doesn't exist on the backend yet.
     * Skipped without a ticket so purely-local interactions (e.g. the demo page)
     * never fire a real, doomed-to-fail request.
     */
    async loadTableEntries(tableId) {
        if (!this.ticket) {
            return;
        }
        this.isLoadingEntries = true;
        try {
            const rows = await this.setupService.getSetupEntriesByTblName({ TBL_NAME: tableId });
            const entries = utils.sortByDisplayOrder(rows.map(setupMapping.setupEntryToTranslationEntry));
            this.tables = this.tables.map(table => (table.id === tableId ? { ...table, entries } : table));
            // A fresh fetch is always the authoritative order — any pending local reorder is moot now.
            this.orderDirty = false;
            this.baselineOrderIds = entries.map(entry => entry.id);
        }
        finally {
            this.isLoadingEntries = false;
        }
    }
    // #endregion
    // #region Derived state
    get activeTable() {
        return this.tables.find(table => table.id === this.activeTableId);
    }
    get orderedLanguages() {
        return utils.orderLanguages(this.languages);
    }
    /** One past the highest DISPLAY_ORDER in the active table — where a brand-new key should land. */
    get nextDisplayOrder() {
        const entries = this.activeTable?.entries ?? [];
        return entries.reduce((max, entry) => Math.max(max, entry.meta?.displayOrder ?? 0), -1) + 1;
    }
    /** Ids of rows whose position no longer matches the last-loaded/saved order — empty unless a reorder is pending. */
    get changedEntryIds() {
        if (!this.orderDirty || !this.activeTable) {
            return new Set();
        }
        const changed = new Set();
        this.activeTable.entries.forEach((entry, index) => {
            if (this.baselineOrderIds[index] !== entry.id) {
                changed.add(entry.id);
            }
        });
        return changed;
    }
    /**
     * Options for the table picker. While the field still shows the selected
     * table's name the whole list is offered, so reopening the picker doesn't
     * narrow it down to the one table already chosen.
     */
    get filteredTables() {
        const query = this.tableQuery.trim().toLowerCase();
        if (!query || query === this.activeTable?.name.toLowerCase()) {
            return this.tables;
        }
        return this.tables.filter(table => table.name.toLowerCase().includes(query));
    }
    // #endregion
    updateActiveTable(update) {
        const activeId = this.activeTableId;
        this.tables = this.tables.map(table => (table.id === activeId ? update(table) : table));
    }
    /**
     * Selecting a table always re-labels the picker, so the field never drifts
     * from what's shown, and always (re)fetches that table's keys — there's no
     * per-table cache, so switching back to an already-seen table hits the API again.
     */
    setActiveTable(id) {
        this.activeTableId = id;
        this.tableQuery = this.tables.find(table => table.id === id)?.name ?? '';
        this.orderDirty = false;
        if (id) {
            this.loadTableEntries(id);
        }
    }
    /**
     * ir-autocomplete has no "closed without choosing" event, so abandoned search
     * text would otherwise sit in the field labelling the wrong table. Deferring a
     * frame lets a pending option click land first, which makes this a no-op.
     */
    restoreTableQuery() {
        setTimeout(() => {
            const name = this.activeTable?.name ?? '';
            if (this.tableQuery !== name) {
                this.tableQuery = name;
            }
        }, 0);
    }
    /** Picking a table from the header autocomplete goes through here so an unsaved drag reorder can't be silently discarded. */
    requestActiveTableChange(id) {
        if (this.orderDirty && id !== this.activeTableId) {
            this.pendingTableSwitchId = id;
            this.unsavedOrderDialogRef?.openModal();
            return;
        }
        this.setActiveTable(id);
    }
    discardOrderAndSwitchTable() {
        const target = this.pendingTableSwitchId;
        this.pendingTableSwitchId = null;
        this.unsavedOrderDialogRef?.closeModal();
        if (target) {
            this.setActiveTable(target);
        }
    }
    /** Saves the current table's order first — only switches once that write actually lands. */
    async saveOrderAndSwitchTable() {
        await this.handleSaveOrder();
        if (this.orderDirty) {
            // handleSaveOrder already toasted the failure — leave the prompt open so the user can retry or discard instead.
            return;
        }
        const target = this.pendingTableSwitchId;
        this.pendingTableSwitchId = null;
        this.unsavedOrderDialogRef?.closeModal();
        if (target) {
            this.setActiveTable(target);
        }
    }
    // #region Entry CRUD
    openCreateEntry() {
        this.entryDrawerEntry = null;
        this.entryDrawerOpen = true;
    }
    openEditEntry(entry) {
        this.entryDrawerEntry = entry;
        this.entryDrawerOpen = true;
    }
    /** The entry form saved (and possibly soft-deleted/recreated) directly against Setup — refetch to pick up the result. */
    handleEntrySaved = () => {
        if (this.activeTableId) {
            this.loadTableEntries(this.activeTableId);
        }
    };
    async handleEntryChange(updatedEntry) {
        const table = this.activeTable;
        if (!table) {
            return;
        }
        const previousEntries = table.entries;
        // Optimistic — the cell already shows the new value before the write lands.
        this.updateActiveTable(current => ({ ...current, entries: current.entries.map(entry => (entry.id === updatedEntry.id ? updatedEntry : entry)) }));
        this.isMutating = true;
        try {
            const saved = await this.setupService.editSetup(setupMapping.buildEditSetupParams({
                tableName: table.name,
                key: updatedEntry.key,
                values: updatedEntry.values,
                meta: updatedEntry.meta,
                touch: false,
            }));
            const savedEntry = setupMapping.setupEntryToTranslationEntry(saved);
            this.updateActiveTable(current => ({ ...current, entries: current.entries.map(entry => (entry.id === savedEntry.id ? savedEntry : entry)) }));
            utils$1.showToast({ type: 'success', title: 'Saved Successfully' });
        }
        catch (error) {
            this.tables = this.tables.map(t => (t.id === table.id ? { ...t, entries: previousEntries } : t));
        }
        finally {
            this.isMutating = false;
        }
    }
    /** Flips ISVISIBLE for one entry — a deliberate settings change, so it stamps a fresh ENTRY_DATE like any other content edit. */
    async handleToggleVisibility(entry) {
        const table = this.activeTable;
        if (!table) {
            return;
        }
        const nextVisible = !(entry.meta?.isVisible ?? true);
        const previousEntries = table.entries;
        this.updateActiveTable(current => ({
            ...current,
            entries: current.entries.map(item => (item.id === entry.id && item.meta ? { ...item, meta: { ...item.meta, isVisible: nextVisible } } : item)),
        }));
        this.isMutating = true;
        try {
            const saved = await this.setupService.editSetup(setupMapping.buildEditSetupParams({
                tableName: table.name,
                key: entry.key,
                values: entry.values,
                meta: entry.meta ? { ...entry.meta, isVisible: nextVisible } : entry.meta,
                touch: true,
            }));
            const savedEntry = setupMapping.setupEntryToTranslationEntry(saved);
            this.updateActiveTable(current => ({ ...current, entries: current.entries.map(item => (item.id === savedEntry.id ? savedEntry : item)) }));
            utils$1.showToast({ type: 'success', title: nextVisible ? 'Key shown in app' : 'Key hidden from app' });
        }
        catch (error) {
            this.tables = this.tables.map(t => (t.id === table.id ? { ...t, entries: previousEntries } : t));
        }
        finally {
            this.isMutating = false;
        }
    }
    /** A row drag finished — reindex every row's display order locally and flag it unsaved. */
    handleReorderEntries(orderedEntries) {
        const reordered = orderedEntries.map((entry, index) => ({
            ...entry,
            meta: { ...entry.meta, displayOrder: index },
        }));
        this.updateActiveTable(current => ({ ...current, entries: reordered }));
        this.orderDirty = true;
    }
    /** Persists the locally-reindexed order — every row in the table is rewritten, matching the bulk-write shape used for table delete. */
    async handleSaveOrder() {
        const table = this.activeTable;
        if (!table) {
            return;
        }
        this.isMutating = true;
        try {
            await this.setupService.editSetupMany(table.entries.map(entry => setupMapping.buildEditSetupParams({ tableName: table.name, key: entry.key, values: entry.values, meta: entry.meta })));
            this.orderDirty = false;
            this.baselineOrderIds = table.entries.map(entry => entry.id);
            utils$1.showToast({ type: 'success', title: 'Order saved' });
        }
        finally {
            this.isMutating = false;
        }
    }
    /** Drops the local reorder and refetches — the same "fresh fetch is authoritative" path `loadTableEntries` already resets order state through. */
    handleDiscardOrder() {
        if (this.activeTableId) {
            this.loadTableEntries(this.activeTableId);
        }
    }
    // private async handleDuplicateEntry(entry: TranslationEntry) {
    //   const table = this.activeTable;
    //   if (!table) {
    //     return;
    //   }
    //   const existingKeys = new Set(table.entries.map(item => item.key));
    //   let copyKey = `${entry.key}_copy`;
    //   let suffix = 2;
    //   while (existingKeys.has(copyKey)) {
    //     copyKey = `${entry.key}_copy_${suffix++}`;
    //   }
    //   this.isMutating = true;
    //   try {
    //     const saved = await this.setupService.editSetup(
    //       buildEditSetupParams({ ownerId: this.propertyid, entryUserId: this.userId, tableName: table.name, key: copyKey, values: entry.values }),
    //     );
    //     const savedEntry = setupEntryToTranslationEntry(saved);
    //     this.updateActiveTable(current => {
    //       const index = current.entries.findIndex(item => item.id === entry.id);
    //       const entries = [...current.entries];
    //       entries.splice(index + 1, 0, savedEntry);
    //       return { ...current, entries };
    //     });
    //   } catch (error) {
    //     console.error(error);
    //     showToast({ type: 'error', title: 'Unable to duplicate key' });
    //   } finally {
    //     this.isMutating = false;
    //   }
    // }
    requestDeleteEntry(entry) {
        this.deleteTarget = { type: 'entry', id: entry.id, label: entry.key || 'this key' };
        this.deleteDialogRef?.openModal();
    }
    // #endregion
    // #region Table CRUD
    openCreateTable() {
        this.tableDialogMode = 'create';
        this.tableDialogTable = null;
        this.tableDialogOpen = true;
    }
    // private openEditTable(table: TranslationTable) {
    //   this.tableDialogMode = 'edit';
    //   this.tableDialogTable = table;
    //   this.tableDialogOpen = true;
    // }
    /** The table form saved (create, empty-table rename, or bulk rename) directly against Setup — reconcile local state with what it reports. */
    handleTableSaved = (saved) => {
        if (saved.mode === 'create') {
            const newTable = { id: saved.id, name: saved.name, entries: [] };
            this.tables = [...this.tables, newTable];
            this.setActiveTable(newTable.id);
            return;
        }
        const oldTable = this.tableDialogTable;
        if (!oldTable) {
            return;
        }
        this.tables = this.tables.map(t => (t.id === oldTable.id ? { id: saved.id, name: saved.name, entries: [] } : t));
        if (this.activeTableId === oldTable.id) {
            // Fetches the rows just written rather than trusting the write responses.
            this.setActiveTable(saved.id);
        }
    };
    /** The table form's bulk rename partially failed — reload everything rather than trust a half-applied local state. */
    handleTableSaveFailed = () => {
        this.loadTables();
    };
    // private async handleDuplicateTable(table: TranslationTable) {
    //   let name = `${table.name} (copy)`;
    //   let suffix = 2;
    //   while (this.tables.some(t => t.name === name)) {
    //     name = `${table.name} (copy ${suffix++})`;
    //   }
    //   if (table.entries.length === 0) {
    //     const copy: TranslationTable = { id: name, name, entries: [] };
    //     this.tables = [...this.tables, copy];
    //     this.setActiveTable(copy.id);
    //     return;
    //   }
    //   this.isMutating = true;
    //   try {
    //     await Promise.all(
    //       table.entries.map(entry =>
    //         this.setupService.editSetup(buildEditSetupParams({ ownerId: this.propertyid, entryUserId: this.userId, tableName: name, key: entry.key, values: entry.values })),
    //       ),
    //     );
    //     const copy: TranslationTable = { id: name, name, entries: [] };
    //     this.tables = [...this.tables, copy];
    //     // Fetches the rows just written rather than trusting the write responses.
    //     this.setActiveTable(copy.id);
    //     showToast({ type: 'success', title: 'Table duplicated' });
    //   } catch (error) {
    //     console.error(error);
    //     showToast({ type: 'error', title: 'Unable to duplicate table' });
    //   } finally {
    //     this.isMutating = false;
    //   }
    // }
    // private requestDeleteTable(table: TranslationTable) {
    //   const count = table.entries.length;
    //   this.deleteTarget = {
    //     type: 'table',
    //     id: table.id,
    //     label: table.name,
    //     detail: count > 0 ? `${count} key${count === 1 ? '' : 's'} will be deleted with it.` : undefined,
    //   };
    //   this.deleteDialogRef?.openModal();
    // }
    // #endregion
    // #region Language visibility
    //
    // Setup always carries all nine CODE_VALUE_* columns on every row — adding or
    // removing a language here only changes which columns this manager displays.
    // It never touches saved translation text, so no confirmation step is needed.
    handleAddLanguage(language) {
        const isFirst = this.languages.length === 0;
        this.languages = [...this.languages, { ...language, isSource: isFirst }];
    }
    handleRemoveLanguage(code) {
        const wasSource = this.languages.find(language => language.code === code)?.isSource;
        this.languages = this.languages.filter(language => language.code !== code);
        if (wasSource && this.languages.length > 0) {
            this.languages = this.languages.map((language, index) => ({ ...language, isSource: index === 0 }));
        }
    }
    handleSetSourceLanguage(code) {
        this.languages = this.languages.map(language => ({ ...language, isSource: language.code === code }));
    }
    // #endregion
    async confirmDelete() {
        if (!this.deleteTarget) {
            return;
        }
        this.isMutating = true;
        try {
            if (this.deleteTarget.type === 'entry') {
                const table = this.activeTable;
                const entry = table?.entries.find(item => item.id === this.deleteTarget.id);
                if (table && entry) {
                    await this.setupService.editSetup(setupMapping.buildEditSetupParams({
                        tableName: table.name,
                        key: entry.key,
                        values: entry.values,
                        meta: entry.meta,
                        isDeleted: true,
                        touch: true,
                    }));
                    this.updateActiveTable(current => ({ ...current, entries: current.entries.filter(item => item.id !== entry.id) }));
                }
            }
            else {
                const table = this.tables.find(item => item.id === this.deleteTarget.id);
                if (table) {
                    await this.setupService.editSetupMany(table.entries.map(entry => setupMapping.buildEditSetupParams({
                        tableName: table.name,
                        key: entry.key,
                        values: entry.values,
                        meta: entry.meta,
                        isDeleted: true,
                    })));
                    this.tables = this.tables.filter(item => item.id !== table.id);
                    if (this.activeTableId === table.id) {
                        this.setActiveTable(this.tables[0]?.id ?? null);
                    }
                }
            }
            this.deleteDialogRef?.closeModal();
        }
        finally {
            this.isMutating = false;
        }
    }
    renderPageActions() {
        // const activeTable = this.activeTable;
        return (index.h("div", { slot: "page-header", class: "tm__page-actions" }, index.h("div", { class: "tm__table-picker" }, index.h("ir-autocomplete", { class: "tm__table-select", size: "s", label: "Table", placeholder: "Select table", value: this.tableQuery, emitOnSameValue: false, withClear: true, "onText-change": (e) => (this.tableQuery = e.detail ?? ''), "onCombobox-change": (e) => this.requestActiveTableChange(e.detail), onFocusout: () => this.restoreTableQuery() }, index.h("wa-icon", { name: "table", slot: "start" }), this.filteredTables.map(table => (index.h("ir-autocomplete-option", { key: table.id, label: table.name, value: table.id }, table.name))))), index.h("ir-custom-button", { appearance: "outlined", variant: "neutral", onClickHandler: () => (this.languageDialogOpen = true) }, index.h("wa-icon", { name: "language", slot: "start", "aria-hidden": "true" }), "Languages", index.h("span", { slot: "end", class: "tm__lang-count" }, this.languages.length))));
    }
    render() {
        const activeTable = this.activeTable;
        const languages = this.orderedLanguages;
        const sourceCode = utils.getSourceLanguage(this.languages)?.code;
        return (index.h(index.Host, { key: '029f2359618fe09d06f50a227bee7b8b8a61cd14' }, index.h("ir-page", { key: 'a458538a3f637bb9ecf512a4582e97daa058f2c7', class: 'translation-manager__page', label: "Setup Entries" }, this.renderPageActions(), this.isLoading ? (index.h("div", { class: "tm__loader-container" }, index.h("ir-spinner", null), index.h("p", null, "Loading translation tables\u2026"))) : !activeTable ? (index.h("ir-empty-state", { message: "No translation tables yet \u2014 create one to start translating strings." }, index.h("ir-custom-button", { variant: "brand", appearance: "filled", onClickHandler: () => this.openCreateTable() }, "New table"))) : (index.h("ir-translations-entries-panel", { entries: activeTable.entries, languages: languages, sourceCode: sourceCode, isLoading: this.isLoadingEntries, disableActions: this.isMutating, hasPendingOrder: this.orderDirty, changedEntryIds: this.changedEntryIds, onCreateEntry: () => this.openCreateEntry(), onEditEntry: (e) => this.openEditEntry(e.detail),
            // onDuplicateEntry={(e: CustomEvent<TranslationEntry>) => this.handleDuplicateEntry(e.detail)}
            onDeleteEntry: (e) => this.requestDeleteEntry(e.detail), onEntryChange: (e) => this.handleEntryChange(e.detail), onToggleVisibility: (e) => this.handleToggleVisibility(e.detail), onReorderEntries: (e) => this.handleReorderEntries(e.detail), onSaveOrder: () => this.handleSaveOrder(), onDiscardOrder: () => this.handleDiscardOrder() }))), index.h("ir-translations-entry-drawer", { key: '88626e0dc267be83dda9c2553f2f9a4a87d216a7', open: this.entryDrawerOpen, languages: languages, entry: this.entryDrawerEntry, existingKeys: activeTable?.entries.map(entry => entry.key) ?? [], nextDisplayOrder: this.nextDisplayOrder, tableName: activeTable?.name, ownerId: this.propertyid, entryUserId: this.userId, onEntrySaved: this.handleEntrySaved, onCloseDrawer: () => {
                this.entryDrawerOpen = false;
                this.entryDrawerEntry = null;
            } }), index.h("ir-translations-table-dialog", { key: 'c8f58afe3daac023d4c02c0610380aff2876a310', open: this.tableDialogOpen, mode: this.tableDialogMode, table: this.tableDialogTable, existingNames: this.tables.map(table => table.name), ownerId: this.propertyid, entryUserId: this.userId, onTableSaved: (e) => this.handleTableSaved(e.detail), onTableSaveFailed: this.handleTableSaveFailed, onCloseDialog: () => (this.tableDialogOpen = false) }), index.h("ir-translations-language-dialog", { key: '2471aef015330160f51518c07429e989c076f4bf', open: this.languageDialogOpen, languages: languages, catalog: this.languageCatalog, entries: activeTable?.entries ?? [], onAddLanguage: (e) => this.handleAddLanguage(e.detail), onRemoveLanguage: (e) => this.handleRemoveLanguage(e.detail), onSetSourceLanguage: (e) => this.handleSetSourceLanguage(e.detail), onCloseDialog: () => (this.languageDialogOpen = false) }), index.h("ir-dialog", { key: 'ee25f587efd1aabb9d38bb4ff871abb9122d2ca0', label: this.deleteTarget?.type === 'table' ? 'Delete table' : 'Delete key', ref: el => (this.deleteDialogRef = el), onIrDialogAfterHide: () => (this.deleteTarget = null) }, index.h("p", { key: 'c6c74022467a86df12921fa570ec12728fd5b43d', class: "tm__confirm-text" }, "Delete ", index.h("strong", { key: '99e38f26b9f7b3055e858ccb6897c0edb581b943' }, this.deleteTarget?.label), "? ", this.deleteTarget?.detail, " This cannot be undone."), index.h("div", { key: '56f11907786fae9627559782903c0896f9ce0fa2', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'f3333f59728bf6512d442d947bd649f280519f1e', size: "m", appearance: "outlined", variant: "neutral", onClickHandler: () => this.deleteDialogRef?.closeModal() }, "Cancel"), index.h("ir-custom-button", { key: '98f397a987455640390bf106e27fe9450e4b1799', size: "m", appearance: "accent", variant: "danger", loading: this.isMutating, onClickHandler: () => this.confirmDelete() }, "Delete"))), index.h("ir-dialog", { key: '29263a041a1c6bbac63e2852436980a94e52e03f', label: "Unsaved order", ref: el => (this.unsavedOrderDialogRef = el), onIrDialogAfterHide: () => {
                // Only true if neither Save nor Discard resolved it — i.e. the picker already
                // optimistically wrote the newly-clicked option's label straight into its own
                // input DOM node, bypassing our `value` prop. Since `tableQuery` itself never
                // actually changed, reassigning it wouldn't touch that DOM node — force a
                // real prop change (even momentarily) so ir-autocomplete's own value watcher fires.
                if (this.pendingTableSwitchId) {
                    this.tableQuery = '';
                    requestAnimationFrame(() => (this.tableQuery = this.activeTable?.name ?? ''));
                }
                this.pendingTableSwitchId = null;
            } }, index.h("p", { key: '6906c2b35eaef2bc5159f701fe9743519c3c4328', class: "tm__confirm-text" }, "You reordered keys in this table but haven't saved it yet. Save the new order, or discard it and switch tables?"), index.h("div", { key: '390e0b20107f0acb4e0979ed3a0544c55b2ea6c5', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'e896f8649a513043a4a0aca6e456390d59a63608', size: "m", appearance: "outlined", variant: "neutral", onClickHandler: () => this.unsavedOrderDialogRef?.closeModal() }, "Cancel"), index.h("ir-custom-button", { key: 'd9583ba5fe895ec605dfd3932d22484cedc2248c', size: "m", appearance: "outlined", variant: "danger", disabled: this.isMutating, onClickHandler: () => this.discardOrderAndSwitchTable() }, "Discard"), index.h("ir-custom-button", { key: '457f1c4588fe8009995e166a370647465f1cfa3d', size: "m", appearance: "accent", variant: "brand", loading: this.isMutating, onClickHandler: () => this.saveOrderAndSwitchTable() }, "Save")))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrTranslationsManager.style = irTranslationsManagerCss();

exports.ir_translations_manager = IrTranslationsManager;
