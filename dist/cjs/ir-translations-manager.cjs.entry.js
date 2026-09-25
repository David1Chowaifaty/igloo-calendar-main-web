'use strict';

var index = require('./index-CQkpA5n3.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var index$1 = require('./index-BVhX2bVZ.js');
var utils$1 = require('./utils-Du7akmn_.js');
var index$2 = require('./index-Dssn3hdS.js');
var duplicateSync = require('./duplicate-sync-Cly39mO6.js');
var setupMapping = require('./setup-mapping-D72fId4a.js');
var utils = require('./utils-C40PtLl1.js');
var t = require('./t-C54QV4_c.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./utils-CQGL0l4_.js');
require('./IBooking-C1lok6Tq.js');
require('./types-BlCoz3jZ.js');
require('./locales.store-BMTss6fG.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-HgC39-BR.js');
require('./booking.dto-DxxzsxJC.js');
require('./type-BRhg-bzd.js');
require('./ir-date-BLb2Vxrk.js');
require('./language-observer-DKp37LIu.js');

const irTranslationsManagerCss = () => `.sc-ir-translations-manager-h{display:block;height:100%}.tm__page-actions.sc-ir-translations-manager{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem 0.75rem}.translation-manager__page.sc-ir-translations-manager::part(body),.translation-manager__page.sc-ir-translations-manager [part~="body"]{height:100%}.tm__table-picker.sc-ir-translations-manager{display:flex;align-items:center;gap:0.35rem;min-width:0}.tm__table-select.sc-ir-translations-manager{flex:1 1 auto;min-width:0;width:15rem}.tm__table-select.sc-ir-translations-manager::part(label),.tm__table-select.sc-ir-translations-manager [part~="label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.tm__table-select.sc-ir-translations-manager::part(listbox),.tm__table-select.sc-ir-translations-manager [part~="listbox"]{max-height:300px;width:350px}.tm__search.sc-ir-translations-manager{flex:0 1 auto;min-width:0;width:14rem}.tm__missing-select.sc-ir-translations-manager{flex:0 1 auto;min-width:0;width:17rem;--tag-max-size:7ch}.tm__missing-select.sc-ir-translations-manager::part(tags),.tm__missing-select.sc-ir-translations-manager [part~="tags"]{flex-wrap:nowrap}.tm__search.sc-ir-translations-manager::part(label),.tm__search.sc-ir-translations-manager [part~="label"],.tm__missing-select.sc-ir-translations-manager::part(form-control-label),.tm__missing-select.sc-ir-translations-manager [part~="form-control-label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.tm__missing-select.sc-ir-translations-manager::part(listbox),.tm__missing-select.sc-ir-translations-manager [part~="listbox"]{max-height:300px}.tm__table-picker.sc-ir-translations-manager .tm__icon-btn.sc-ir-translations-manager,.tm__page-actions.sc-ir-translations-manager>.tm__icon-btn.sc-ir-translations-manager{flex:0 0 auto;--ir-c-btn-padding:0}@media (max-width: 575px){.tm__page-actions.sc-ir-translations-manager{width:100%}.tm__table-picker.sc-ir-translations-manager{flex:1 1 100%}.tm__table-select.sc-ir-translations-manager{width:auto}.tm__search.sc-ir-translations-manager,.tm__missing-select.sc-ir-translations-manager{flex:1 1 100%;width:auto}}.tm__loader-container.sc-ir-translations-manager{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:3rem 1rem;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.tm__loader-container.sc-ir-translations-manager p.sc-ir-translations-manager{margin:0}.tm__confirm-text.sc-ir-translations-manager{margin:0}.tm__confirm-footer.sc-ir-translations-manager{display:flex;justify-content:flex-end;gap:0.5rem}`;

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
    /** Every language this property exposes and Setup can persist — all of them are always shown. */
    languages = [];
    activeTableId = null;
    /** Hides setup tables nothing in this codebase reads. On by default — the full list is mostly noise. */
    usedTablesOnly = true;
    /** Text shown in the table picker — doubles as the option filter while typing. */
    tableQuery = '';
    entryDrawerOpen = false;
    entryDrawerEntry = null;
    tableDialogOpen = false;
    tableDialogMode = 'create';
    tableDialogTable = null;
    moveDialogOpen = false;
    moveDialogEntry = null;
    settingsDialogOpen = false;
    /** Non-source language codes pinned as columns. `null` means "not customized yet" — everything is pinned. */
    pinnedLanguageCodes = null;
    showNotesColumn = true;
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
    /** Languages being audited for missing translations. Non-empty switches the page into the cross-table view. */
    missingLanguageCodes = [];
    /**
     * The debounced, long-enough-to-be-useful query actually driving the fetch.
     * Non-empty switches the page into the cross-table view. The field's live text is
     * deliberately *not* state — see `renderPageActions`.
     */
    appliedSearchQuery = '';
    /** Rows behind the cross-table view — the missing-language union, the search hits, or their intersection. */
    crossTableEntries = [];
    /** True while a cross-table query is in flight. */
    isLoadingCrossTable = false;
    /** Entry id (`TBL_NAME::CODE_NAME`) → the rows in other used tables sharing that row's description. Empty until the duplicate scan lands. */
    duplicates = new Map();
    deleteDialogRef;
    unsavedOrderDialogRef;
    apiClientService = new ApiClient.ApiClient();
    setupService = new index$1.SetupService();
    /** Every keystroke in the header search. Debounced downstream — typing shouldn't be a query per character. */
    search$ = new index$2.cjsExports.Subject();
    /** Re-runs the cross-table query at once — language changes and post-save refetches, neither of which wants the typing debounce. */
    refresh$ = new index$2.cjsExports.Subject();
    subscription;
    componentWillLoad() {
        const debouncedSearch$ = this.search$.pipe(index$2.cjsExports.debounceTime(600), index$2.cjsExports.map(value => value.trim()), 
        // A single character matches too much to be worth a round trip.
        index$2.cjsExports.map(value => (value.length >= 2 ? value : '')), index$2.cjsExports.distinctUntilChanged(), index$2.cjsExports.tap(value => (this.appliedSearchQuery = value)));
        this.subscription = index$2.cjsExports.merge(debouncedSearch$, this.refresh$)
            .pipe(index$2.cjsExports.tap(() => (this.isLoadingCrossTable = this.isCrossTableMode)), 
        // switchMap drops the response of any query a newer one has already superseded.
        index$2.cjsExports.switchMap(() => index$2.cjsExports.from(this.fetchCrossTableEntries()).pipe(index$2.cjsExports.catchError(() => index$2.cjsExports.of([])))))
            .subscribe(entries => {
            this.crossTableEntries = entries;
            this.isLoadingCrossTable = false;
        });
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.loadLanguages();
            this.loadTables();
            this.loadDuplicatedSetupEntriesAcrossTables();
        }
        this.usedTablesOnly = JSON.parse(localStorage.getItem(utils.USED_TABLES_LOCAL_STORAGE_NAME)) ?? true;
        const storedPinnedCodes = localStorage.getItem(utils.PINNED_LANG_LOCAL_STORAGE_NAME);
        this.pinnedLanguageCodes = storedPinnedCodes ? JSON.parse(storedPinnedCodes) : null;
        this.showNotesColumn = JSON.parse(localStorage.getItem(utils.SHOW_NOTES_LOCAL_STORAGE_NAME)) ?? true;
    }
    disconnectedCallback() {
        this.subscription?.unsubscribe();
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
            this.apiClientService.setApiClient(newValue);
            this.loadLanguages();
            this.loadTables();
            this.loadDuplicatedSetupEntriesAcrossTables();
        }
    }
    // #region Loading
    /**
     * Which languages this property actually wants translated, and their
     * display names, come from Setup's exposed-language catalog rather than a
     * hardcoded list — narrowed to the codes Setup can persist.
     */
    async loadLanguages() {
        try {
            this.languages = setupMapping.exposedLanguagesToTranslationLanguages(await this.setupService.getExposedLanguages());
        }
        finally {
        }
    }
    /**
     * One scan of every description shared by more than one setup table, flattened
     * into a per-row lookup (see `buildDuplicateMap`). Loaded once — it describes the
     * whole setup, not the table currently on screen — and refreshed after a drawer
     * save, since a key rename changes the id a row is filed under. A failure leaves
     * the badges off and edits un-propagated rather than taking the page down with it.
     */
    async loadDuplicatedSetupEntriesAcrossTables() {
        try {
            this.duplicates = utils.buildDuplicateMap(await this.setupService.getDuplicatedSetupEntriesAcrossTables());
        }
        catch (error) {
            console.error(error);
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
            this.setActiveTable(sessionStorage.getItem(utils.SESSION_CURRENT_TABLE) ?? this.visibleTables[0]?.id ?? null);
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
            const rows = await this.setupService.getSetupEntriesByTableName(tableId);
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
    /** Table-qualified id → entry, so two result sets can be intersected without re-deriving ids. */
    indexEntries(rows) {
        const byId = new Map();
        for (const row of rows) {
            const entry = setupMapping.setupEntryToTranslationEntry(row);
            if (!byId.has(entry.id)) {
                byId.set(entry.id, entry);
            }
        }
        return byId;
    }
    /**
     * The cross-table result set, from either header control or both.
     *
     * Get_Missing_Setup_Entries only takes one language, so the audited languages are
     * queried in parallel and *unioned* — a row missing AR *or* FR needs attention. The
     * search is a second, independent filter, so when both are set the two sets are
     * *intersected*: only rows that match the query and are still untranslated.
     */
    async fetchCrossTableEntries() {
        const query = this.appliedSearchQuery;
        const codes = this.missingLanguageCodes;
        if (!this.ticket || (codes.length === 0 && !query)) {
            return [];
        }
        const [missingRows, searchRows] = await Promise.all([
            codes.length > 0 ? Promise.all(codes.map(code => this.setupService.getMissingSetupEntries({ language: code.toUpperCase() }))) : Promise.resolve(null),
            query ? this.setupService.searchSetupByDescription({ query }) : Promise.resolve(null),
        ]);
        const missing = missingRows ? this.indexEntries(missingRows.flat()) : null;
        const found = searchRows ? this.indexEntries(searchRows) : null;
        const combined = missing && found ? new Map([...found].filter(([id]) => missing.has(id))) : (missing ?? found ?? new Map());
        // Sorted by table so the entries table can open a group header whenever the name changes.
        return [...combined.values()].sort((a, b) => (a.tableName ?? '').localeCompare(b.tableName ?? '') || (a.meta?.displayOrder ?? 0) - (b.meta?.displayOrder ?? 0));
    }
    // #endregion
    // #region Derived state
    get activeTable() {
        return this.tables.find(table => table.id === this.activeTableId);
    }
    get orderedLanguages() {
        return utils.orderLanguages(this.languages);
    }
    /**
     * Languages worth auditing for missing text. The source language is what
     * everything else is translated *from*, so "missing in English" is not a
     * question either filter should offer.
     */
    get auditableLanguages() {
        const sourceCode = utils.getSourceLanguage(this.languages)?.code;
        return this.languages.filter(language => language.code !== sourceCode);
    }
    /** True when a table survives the "used in this codebase" filter. */
    isTableAllowed(name) {
        return !this.usedTablesOnly || !name || utils.USED_SETUP_TABLE_SET.has(name);
    }
    /** The tables the picker offers — every one Setup reports, or only those the app reads. */
    get visibleTables() {
        return this.usedTablesOnly ? this.tables.filter(table => this.isTableAllowed(table.name)) : this.tables;
    }
    /** Cross-table results narrowed by the same filter, so search and audits can't surface a table the picker hides. */
    get allowedCrossTableEntries() {
        return this.usedTablesOnly ? this.crossTableEntries.filter(entry => this.isTableAllowed(entry.tableName)) : this.crossTableEntries;
    }
    /** Non-source language codes currently shown as columns. Defaults to every one until the user unpins something. */
    get effectivePinnedLanguageCodes() {
        if (this.pinnedLanguageCodes) {
            return this.pinnedLanguageCodes;
        }
        const sourceCode = utils.getSourceLanguage(this.languages)?.code;
        return this.languages.filter(language => language.code !== sourceCode).map(language => language.code);
    }
    /** True once either header control is engaged — the grid then shows rows from every table. */
    get isCrossTableMode() {
        return this.missingLanguageCodes.length > 0 || this.appliedSearchQuery.length > 0;
    }
    /** Whatever the entries panel is currently showing: the cross-table missing set, or the active table's keys. */
    get displayedEntries() {
        return this.isCrossTableMode ? this.allowedCrossTableEntries : (this.activeTable?.entries ?? []);
    }
    /**
     * Columns for the grid. The cross-table view narrows to the reference language
     * plus the ones being audited, so the missing cells are on screen without
     * scrolling past every other language.
     */
    get displayedLanguages() {
        // Only a language audit has columns worth narrowing to; a plain search says nothing about which ones matter.
        if (this.missingLanguageCodes.length === 0) {
            const pinned = new Set(this.effectivePinnedLanguageCodes);
            return this.orderedLanguages.filter(language => language.code === utils.getSourceLanguage(this.languages)?.code || pinned.has(language.code));
        }
        const source = utils.getSourceLanguage(this.languages);
        const audited = this.languages.filter(language => this.missingLanguageCodes.includes(language.code));
        const seen = new Set();
        return [...(source ? [source] : []), ...audited].filter(language => {
            if (seen.has(language.code)) {
                return false;
            }
            seen.add(language.code);
            return true;
        });
    }
    /** Names the control that came up empty, so the user knows which one to loosen. */
    get crossTableEmptyMessage() {
        const query = this.appliedSearchQuery;
        const hasLanguages = this.missingLanguageCodes.length > 0;
        if (query && hasLanguages) {
            return `No keys matching “${query}” are still missing a translation in the selected languages.`;
        }
        if (query) {
            return `No keys match “${query}” in any table.`;
        }
        return 'Nothing is missing a translation in the selected languages.';
    }
    /** Distinct tables represented in the missing set, in the order they appear — the panel's table filter options. */
    get crossTableNames() {
        return [...new Set(this.allowedCrossTableEntries.map(entry => entry.tableName).filter((name) => !!name))];
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
        const tables = this.visibleTables;
        const query = this.tableQuery.trim().toLowerCase();
        if (!query || query === this.activeTable?.name.toLowerCase()) {
            return tables;
        }
        return tables.filter(table => table.name.toLowerCase().includes(query));
    }
    // #endregion
    updateActiveTable(update) {
        const activeId = this.activeTableId;
        this.tables = this.tables.map(table => (table.id === activeId ? update(table) : table));
    }
    /** The table a row is written back to — its own in the cross-table view, the active one otherwise. */
    tableNameFor(entry) {
        return entry.tableName ?? this.activeTable?.name;
    }
    /**
     * Writes back into whichever collection is on screen. `tableId` pins a table-mode
     * write to the table it started against, so a rollback landing after a table
     * switch can't corrupt the newly-selected one.
     */
    patchEntries(update, tableId) {
        if (this.isCrossTableMode) {
            this.crossTableEntries = update(this.crossTableEntries);
            return;
        }
        const targetId = tableId ?? this.activeTableId;
        this.tables = this.tables.map(table => (table.id === targetId ? { ...table, entries: update(table.entries) } : table));
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
        sessionStorage.setItem(utils.SESSION_CURRENT_TABLE, id);
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
    /**
     * The entry form saved (and possibly soft-deleted/recreated) directly against Setup,
     * with the row's duplicates in the same batch — refetch to pick up the result. The
     * duplicate map is reloaded too: a key rename changes the id a row is filed under.
     */
    handleEntrySaved = (event) => {
        const { syncedCount } = event.detail;
        if (syncedCount > 0) {
            utils$1.showToast({ type: 'success', title: `Also updated ${syncedCount} duplicate ${syncedCount === 1 ? 'row' : 'rows'}` });
        }
        if (this.isCrossTableMode) {
            this.refresh$.next();
        }
        else if (this.activeTableId) {
            this.loadTableEntries(this.activeTableId);
        }
        this.loadDuplicatedSetupEntriesAcrossTables();
    };
    async handleEntryChange(updatedEntry) {
        const tableName = this.tableNameFor(updatedEntry);
        if (!tableName) {
            return;
        }
        const tableId = this.activeTableId;
        const previousEntries = this.displayedEntries;
        // Optimistic — the cell already shows the new value before the write lands.
        this.patchEntries(entries => entries.map(entry => (entry.id === updatedEntry.id ? updatedEntry : entry)), tableId);
        this.isMutating = true;
        try {
            const primary = setupMapping.buildEditSetupParams({
                tableName,
                key: updatedEntry.key,
                values: updatedEntry.values,
                meta: updatedEntry.meta,
                touch: false,
            });
            // A duplicated row's twins ride in the same Edit_Setup_Many as the row itself —
            // one write however many tables it touches. Only when the row has none, or its
            // twins can't be read, does it fall back to a plain Edit_Setup: the user's own
            // change must not be held hostage by a sibling lookup.
            const previous = previousEntries.find(entry => entry.id === updatedEntry.id);
            let syncFailed = false;
            const sync = await duplicateSync.planDuplicateSync(this.setupService, {
                siblings: this.duplicates.get(updatedEntry.id)?.siblings ?? [],
                changedValues: utils.diffValues(previous?.values, updatedEntry.values),
                ownerId: this.propertyid,
                entryUserId: this.userId,
                touch: false,
            }).catch((error) => {
                console.error(error);
                syncFailed = true;
                return { params: [], entries: [] };
            });
            if (sync.params.length > 0) {
                await this.setupService.editSetupMany([primary, ...sync.params]);
            }
            else {
                await this.setupService.editSetup(primary);
            }
            const savedEntry = setupMapping.setupEntryToTranslationEntry(primary);
            this.patchEntries(entries => entries.map(entry => (entry.id === savedEntry.id ? savedEntry : entry)), tableId);
            // The cross-table view may have some of the synced rows on screen.
            const syncedById = new Map(sync.entries.map(entry => [entry.id, entry]));
            if (this.crossTableEntries.some(entry => syncedById.has(entry.id))) {
                this.crossTableEntries = this.crossTableEntries.map(entry => syncedById.get(entry.id) ?? entry);
            }
            const synced = sync.entries.length;
            if (syncFailed) {
                utils$1.showToast({ type: 'error', title: 'Saved, but its duplicate rows could not be updated' });
            }
            else {
                utils$1.showToast({
                    type: 'success',
                    title: synced > 0 ? `Saved — also updated ${synced} duplicate ${synced === 1 ? 'row' : 'rows'}` : t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }),
                });
            }
        }
        catch (error) {
            this.patchEntries(() => previousEntries, tableId);
        }
        finally {
            this.isMutating = false;
        }
    }
    /** Flips ISVISIBLE for one entry — a deliberate settings change, so it stamps a fresh ENTRY_DATE like any other content edit. */
    async handleToggleVisibility(entry) {
        const tableName = this.tableNameFor(entry);
        if (!tableName) {
            return;
        }
        const tableId = this.activeTableId;
        const nextVisible = !(entry.meta?.isVisible ?? true);
        const previousEntries = this.displayedEntries;
        this.patchEntries(entries => entries.map(item => (item.id === entry.id && item.meta ? { ...item, meta: { ...item.meta, isVisible: nextVisible } } : item)), tableId);
        this.isMutating = true;
        try {
            const saved = await this.setupService.editSetup(setupMapping.buildEditSetupParams({
                tableName,
                key: entry.key,
                values: entry.values,
                meta: entry.meta ? { ...entry.meta, isVisible: nextVisible } : entry.meta,
                touch: true,
            }));
            const savedEntry = setupMapping.setupEntryToTranslationEntry(saved);
            this.patchEntries(entries => entries.map(item => (item.id === savedEntry.id ? savedEntry : item)), tableId);
            utils$1.showToast({ type: 'success', title: nextVisible ? 'Key shown in app' : 'Key hidden from app' });
        }
        catch (error) {
            this.patchEntries(() => previousEntries, tableId);
        }
        finally {
            this.isMutating = false;
        }
    }
    /** A row drag finished — reindex every row's display order locally and flag it unsaved. */
    handleReorderEntries(orderedEntries) {
        // Order is a per-table concept — the cross-table view has no single table to reindex.
        if (this.isCrossTableMode) {
            return;
        }
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
        if (!table || this.isCrossTableMode) {
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
        if (this.activeTableId && !this.isCrossTableMode) {
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
    openMoveEntry(entry) {
        // Same guard as the header search — a move refetches rows, which would silently drop an unsaved reorder.
        if (this.orderDirty) {
            utils$1.showToast({ type: 'error', title: 'Save or discard the pending order first' });
            return;
        }
        this.moveDialogEntry = { ...entry, tableName: this.tableNameFor(entry) };
        this.moveDialogOpen = true;
    }
    /** Move_Setup_Entry already re-homed the row — drop it from whatever is on screen and let the destination refetch when it's next selected. */
    handleEntryMoved({ entry }) {
        this.moveDialogOpen = false;
        this.moveDialogEntry = null;
        this.patchEntries(entries => entries.filter(item => item.id !== entry.id));
        if (this.isCrossTableMode) {
            // The row still matches the query — refetch so it reappears under its new table's header.
            this.refresh$.next();
        }
        // Duplicate badges are keyed by `TBL_NAME::CODE_NAME`, so the moved row's id just changed.
        this.loadDuplicatedSetupEntriesAcrossTables();
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
    async confirmDelete() {
        if (!this.deleteTarget) {
            return;
        }
        this.isMutating = true;
        try {
            if (this.deleteTarget.type === 'entry') {
                const entry = this.displayedEntries.find(item => item.id === this.deleteTarget.id);
                const tableName = entry ? this.tableNameFor(entry) : undefined;
                if (entry && tableName) {
                    await this.setupService.editSetup(setupMapping.buildEditSetupParams({
                        tableName,
                        key: entry.key,
                        values: entry.values,
                        meta: entry.meta,
                        isDeleted: true,
                        touch: true,
                    }));
                    this.patchEntries(entries => entries.filter(item => item.id !== entry.id));
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
    /**
     * Either header control takes the grid cross-table, so the table picker stops
     * selecting and the panel's own table filter takes over narrowing.
     */
    handleMissingLanguagesChange(codes) {
        this.missingLanguageCodes = codes;
        this.refresh$.next();
    }
    handleSearchQueryChange(query) {
        this.search$.next(query);
    }
    /** The settings dialog only ever reports its state on Save — apply the used-tables filter, pins, and notes visibility together. */
    handleSaveSettings(payload) {
        this.usedTablesOnly = payload.usedTablesOnly;
        localStorage.setItem(utils.USED_TABLES_LOCAL_STORAGE_NAME, String(payload.usedTablesOnly));
        this.pinnedLanguageCodes = payload.pinnedCodes;
        localStorage.setItem(utils.PINNED_LANG_LOCAL_STORAGE_NAME, JSON.stringify(payload.pinnedCodes));
        this.showNotesColumn = payload.showNotes;
        localStorage.setItem(utils.SHOW_NOTES_LOCAL_STORAGE_NAME, String(payload.showNotes));
        this.settingsDialogOpen = false;
        // Narrowing the list can strand the active table off it — fall back to the first one still on offer.
        if (this.usedTablesOnly && this.activeTable && !this.isTableAllowed(this.activeTable.name)) {
            this.setActiveTable(this.visibleTables[0]?.id ?? null);
        }
    }
    renderPageActions() {
        // const activeTable = this.activeTable;
        return (index.h("div", { slot: "page-header", class: "tm__page-actions" }, index.h("div", { class: "tm__table-picker" }, index.h("ir-autocomplete", { class: "tm__table-select", size: "s", label: "Table", placeholder: "Select table", value: this.isCrossTableMode ? 'All tables' : this.tableQuery, disabled: this.isCrossTableMode, emitOnSameValue: false, withClear: true, "onText-change": (e) => (this.tableQuery = e.detail ?? ''), "onCombobox-change": (e) => this.requestActiveTableChange(e.detail), onFocusout: () => this.restoreTableQuery() }, index.h("wa-icon", { name: "table", slot: "start" }), this.filteredTables.map(table => (index.h("ir-autocomplete-option", { key: table.id, label: table.name, value: table.id }, table.name))))), index.h("wa-input", { class: "tm__search", size: "s", "with-clear": true, label: "Search eng in all tables", placeholder: "Search eng in all tables\u2026", autocomplete: "off", spellcheck: false, disabled: this.orderDirty, title: this.orderDirty ? 'Save or discard the pending order first' : undefined, oninput: (e) => this.handleSearchQueryChange(e.target.value) }, index.h("wa-icon", { name: "magnifying-glass", slot: "start", "aria-hidden": "true" })), index.h("wa-select", { class: "tm__missing-select", size: "s", multiple: true, "with-clear": true, "max-options-visible": 1, label: "Missing language in all tables\u2026", placeholder: "Missing language in all tables\u2026", value: this.missingLanguageCodes, disabled: this.orderDirty, title: this.orderDirty ? 'Save or discard the pending order first' : undefined, onchange: (e) => this.handleMissingLanguagesChange([...(e.target.value ?? [])]) }, this.auditableLanguages.map(language => (index.h("wa-option", { key: language.code, value: language.code }, language.name)))), index.h("ir-custom-button", { class: "tm__icon-btn", appearance: "outlined", variant: "neutral", onClickHandler: () => (this.settingsDialogOpen = true) }, index.h("wa-icon", { name: "gear", label: "Table settings" }))));
    }
    render() {
        const activeTable = this.activeTable;
        const languages = this.orderedLanguages;
        const sourceCode = utils.getSourceLanguage(this.languages)?.code;
        // In the cross-table view the drawer follows the row being edited, not the picker.
        const drawerTableName = this.entryDrawerEntry?.tableName ?? activeTable?.name;
        return (index.h(index.Host, { key: '795fac970c2a62eb939d448aec11221007edf07d' }, index.h("ir-page", { key: '66660bd11d0f45e42a4aed22a455d8616e660213', class: 'translation-manager__page', label: "Setup Entries" }, this.renderPageActions(), this.isLoading ? (index.h("div", { class: "tm__loader-container" }, index.h("ir-spinner", null), index.h("p", null, "Loading translation tables\u2026"))) : !activeTable && !this.isCrossTableMode ? (index.h("ir-empty-state", { message: "No translation tables yet \u2014 create one to start translating strings." }, index.h("ir-custom-button", { variant: "brand", appearance: "filled", onClickHandler: () => this.openCreateTable() }, "New table"))) : this.isCrossTableMode && !this.isLoadingCrossTable && this.allowedCrossTableEntries.length === 0 ? (index.h("ir-empty-state", { message: this.crossTableEmptyMessage })) : (index.h("ir-translations-entries-panel", { entries: this.displayedEntries, languages: this.displayedLanguages, sourceCode: sourceCode, isLoading: this.isLoadingEntries || this.isLoadingCrossTable, disableActions: this.isMutating, groupByTable: this.isCrossTableMode, tableNames: this.crossTableNames, disableCreate: this.isCrossTableMode, hasPendingOrder: this.orderDirty, changedEntryIds: this.changedEntryIds, duplicates: this.duplicates, showNotes: this.showNotesColumn, onCreateEntry: () => this.openCreateEntry(), onEditEntry: (e) => this.openEditEntry(e.detail),
            // onDuplicateEntry={(e: CustomEvent<TranslationEntry>) => this.handleDuplicateEntry(e.detail)}
            onMoveEntry: (e) => this.openMoveEntry(e.detail), onDeleteEntry: (e) => this.requestDeleteEntry(e.detail), onEntryChange: (e) => this.handleEntryChange(e.detail), onToggleVisibility: (e) => this.handleToggleVisibility(e.detail), onReorderEntries: (e) => this.handleReorderEntries(e.detail), onSaveOrder: () => this.handleSaveOrder(), onDiscardOrder: () => this.handleDiscardOrder() }))), index.h("ir-translations-entry-drawer", { key: 'f5e99a260d8d81415838b97495a086dd4417fddc', open: this.entryDrawerOpen, languages: languages, entry: this.entryDrawerEntry, duplicateSiblings: this.entryDrawerEntry ? (this.duplicates.get(this.entryDrawerEntry.id)?.siblings ?? []) : [], existingKeys: this.displayedEntries.filter(entry => entry.tableName === drawerTableName).map(entry => entry.key), nextDisplayOrder: this.nextDisplayOrder, tableName: drawerTableName, ownerId: this.propertyid, entryUserId: this.userId, onEntrySaved: this.handleEntrySaved, onCloseDrawer: () => {
                this.entryDrawerOpen = false;
                this.entryDrawerEntry = null;
            } }), index.h("ir-translations-move-dialog", { key: '30e3d67d48735e4923a57721c898a0e449d77d56', open: this.moveDialogOpen, entry: this.moveDialogEntry, tables: this.visibleTables, sourceCode: sourceCode, onEntryMoved: (e) => this.handleEntryMoved(e.detail), onCloseDialog: () => {
                this.moveDialogOpen = false;
                this.moveDialogEntry = null;
            } }), index.h("ir-translations-settings-dialog", { key: 'd8e6aecfcfb89d475ccbe4f0c565c9b38d797985', open: this.settingsDialogOpen, usedTablesOnly: this.usedTablesOnly, languages: this.languages, sourceCode: sourceCode, pinnedCodes: this.effectivePinnedLanguageCodes, showNotes: this.showNotesColumn, onSaveSettings: (e) => this.handleSaveSettings(e.detail), onCloseDialog: () => (this.settingsDialogOpen = false) }), index.h("ir-translations-table-dialog", { key: '76fbe959b887a31ac9693e012d57b7b32c09a380', open: this.tableDialogOpen, mode: this.tableDialogMode, table: this.tableDialogTable, existingNames: this.tables.map(table => table.name), ownerId: this.propertyid, entryUserId: this.userId, onTableSaved: (e) => this.handleTableSaved(e.detail), onTableSaveFailed: this.handleTableSaveFailed, onCloseDialog: () => (this.tableDialogOpen = false) }), index.h("ir-dialog", { key: '3c85d2e3e6525711d5d2edd5b4a275f2f37a2faa', label: this.deleteTarget?.type === 'table' ? 'Delete table' : 'Delete key', ref: el => (this.deleteDialogRef = el), onIrDialogAfterHide: () => (this.deleteTarget = null) }, index.h("p", { key: 'b85c8a13d37553c55fe038adf750e0ed9e1fd91f', class: "tm__confirm-text" }, t.t('Lcz_Delete', { fallback: 'Delete' }), index.h("strong", { key: '8249d88031b5b99c5864d5d525b01095c0e72818' }, this.deleteTarget?.label), "? ", this.deleteTarget?.detail, " This cannot be undone."), index.h("div", { key: '2ba8df2ce743910173225a917d0c9e08dfcf3d71', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'e4a3c08617a1e5b6a79fd68de33d4a3ae4163f06', size: "m", appearance: "outlined", variant: "neutral", onClickHandler: () => this.deleteDialogRef?.closeModal() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '96bbf9e7cdd01228cff253763f8277ab6a3ff5ec', size: "m", appearance: "accent", variant: "danger", loading: this.isMutating, onClickHandler: () => this.confirmDelete() }, t.t('Lcz_Delete', { fallback: 'Delete' })))), index.h("ir-dialog", { key: '001d0f196d356db0ce0289799c25e1fd96fde2dd', label: "Unsaved order", ref: el => (this.unsavedOrderDialogRef = el), onIrDialogAfterHide: () => {
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
            } }, index.h("p", { key: 'bb11e672773190327589923d40779f41daddec2b', class: "tm__confirm-text" }, "You reordered keys in this table but haven't saved it yet. Save the new order, or discard it and switch tables?"), index.h("div", { key: 'df27dfcd60f51d4b38b9f274520f38d362148c6b', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '7ca2debce5ffeb8b2b5af8eedb9819bea9263569', size: "m", appearance: "outlined", variant: "neutral", onClickHandler: () => this.unsavedOrderDialogRef?.closeModal() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'd12590b52771ef9e3775d4ef6edb5c914b3385e6', size: "m", appearance: "outlined", variant: "danger", disabled: this.isMutating, onClickHandler: () => this.discardOrderAndSwitchTable() }, "Discard"), index.h("ir-custom-button", { key: '77dc8d4867c9f274689ca38e4a6b0061ac884b15', size: "m", appearance: "accent", variant: "brand", loading: this.isMutating, onClickHandler: () => this.saveOrderAndSwitchTable() }, t.t('Lcz_Save', { fallback: 'Save' }))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrTranslationsManager.style = irTranslationsManagerCss();

exports.ir_translations_manager = IrTranslationsManager;
