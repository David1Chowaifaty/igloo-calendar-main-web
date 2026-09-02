import { DuplicateInfo, TranslationEntry, TranslationLanguage, TranslationTable } from './types';
type DeleteTarget = {
    type: 'entry' | 'table';
    id: string;
    label: string;
    detail?: string;
};
export declare class IrTranslationsManager {
    /** Auth ticket for the Setup API, following the same pattern as other feature roots. */
    ticket: string;
    /** Owning property id, sent as OWNER_ID on every write. */
    propertyid: number;
    /** Acting user id, sent as ENTRY_USER_ID on every write. */
    userId: number;
    tables: TranslationTable[];
    /** Every language this property exposes and Setup can persist — all of them are always shown. */
    languages: TranslationLanguage[];
    activeTableId: string | null;
    /** Hides setup tables nothing in this codebase reads. On by default — the full list is mostly noise. */
    usedTablesOnly: boolean;
    /** Text shown in the table picker — doubles as the option filter while typing. */
    tableQuery: string;
    entryDrawerOpen: boolean;
    entryDrawerEntry: TranslationEntry | null;
    tableDialogOpen: boolean;
    tableDialogMode: 'create' | 'edit';
    tableDialogTable: TranslationTable | null;
    deleteTarget: DeleteTarget | null;
    /** True while the distinct table list is loading. */
    isLoading: boolean;
    /** True while the active table's keys are loading — set on every table switch. */
    isLoadingEntries: boolean;
    /** True while any write is in flight — guards against overlapping edits. */
    isMutating: boolean;
    /** True once a drag reorder is applied locally but not yet persisted. */
    orderDirty: boolean;
    /** Table the user picked while an order was still unsaved — held until they resolve the prompt. */
    pendingTableSwitchId: string | null;
    /** Entry ids in the active table's last-loaded (or last-saved) order — the yardstick `changedEntryIds` diffs against. */
    baselineOrderIds: string[];
    /** Languages being audited for missing translations. Non-empty switches the page into the cross-table view. */
    missingLanguageCodes: string[];
    /**
     * The debounced, long-enough-to-be-useful query actually driving the fetch.
     * Non-empty switches the page into the cross-table view. The field's live text is
     * deliberately *not* state — see `renderPageActions`.
     */
    appliedSearchQuery: string;
    /** Rows behind the cross-table view — the missing-language union, the search hits, or their intersection. */
    crossTableEntries: TranslationEntry[];
    /** True while a cross-table query is in flight. */
    isLoadingCrossTable: boolean;
    /** Entry id (`TBL_NAME::CODE_NAME`) → the tables sharing that row's description. Empty until the duplicate scan lands. */
    duplicates: Map<string, DuplicateInfo>;
    private deleteDialogRef;
    private unsavedOrderDialogRef;
    private tokenService;
    private setupService;
    /** Every keystroke in the header search. Debounced downstream — typing shouldn't be a query per character. */
    private search$;
    /** Re-runs the cross-table query at once — language changes and post-save refetches, neither of which wants the typing debounce. */
    private refresh$;
    private subscription;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    /**
     * Which languages this property actually wants translated, and their
     * display names, come from Setup's exposed-language catalog rather than a
     * hardcoded list — narrowed to the codes Setup can persist.
     */
    private loadLanguages;
    /**
     * One scan of every description shared by more than one setup table, flattened
     * from the API's per-description grouping into a per-row lookup keyed by the same
     * `TBL_NAME::CODE_NAME` id the entries carry. Loaded once — it describes the whole
     * setup, not the table currently on screen. Purely decorative, so a failure leaves
     * the badges off rather than taking the page down with it.
     */
    private loadDuplicatedSetupEntriesAcrossTables;
    /**
     * Only the distinct table names are fetched up front, to fill the picker —
     * a table's keys aren't loaded until it's actually selected.
     */
    private loadTables;
    /**
     * Fetches one table's keys. Runs every time a table becomes active — including
     * a table that was just created locally and doesn't exist on the backend yet.
     * Skipped without a ticket so purely-local interactions (e.g. the demo page)
     * never fire a real, doomed-to-fail request.
     */
    private loadTableEntries;
    /** Table-qualified id → entry, so two result sets can be intersected without re-deriving ids. */
    private indexEntries;
    /**
     * The cross-table result set, from either header control or both.
     *
     * Get_Missing_Setup_Entries only takes one language, so the audited languages are
     * queried in parallel and *unioned* — a row missing AR *or* FR needs attention. The
     * search is a second, independent filter, so when both are set the two sets are
     * *intersected*: only rows that match the query and are still untranslated.
     */
    private fetchCrossTableEntries;
    private get activeTable();
    private get orderedLanguages();
    /**
     * Languages worth auditing for missing text. The source language is what
     * everything else is translated *from*, so "missing in English" is not a
     * question either filter should offer.
     */
    private get auditableLanguages();
    /** True when a table survives the "used in this codebase" switch. */
    private isTableAllowed;
    /** The tables the picker offers — every one Setup reports, or only those the app reads. */
    private get visibleTables();
    /** Cross-table results narrowed by the same switch, so search and audits can't surface a table the picker hides. */
    private get allowedCrossTableEntries();
    /** True once either header control is engaged — the grid then shows rows from every table. */
    private get isCrossTableMode();
    /** Whatever the entries panel is currently showing: the cross-table missing set, or the active table's keys. */
    private get displayedEntries();
    /**
     * Columns for the grid. The cross-table view narrows to the reference language
     * plus the ones being audited, so the missing cells are on screen without
     * scrolling past every other language.
     */
    private get displayedLanguages();
    /** Names the control that came up empty, so the user knows which one to loosen. */
    private get crossTableEmptyMessage();
    /** Distinct tables represented in the missing set, in the order they appear — the panel's table filter options. */
    private get crossTableNames();
    /** One past the highest DISPLAY_ORDER in the active table — where a brand-new key should land. */
    private get nextDisplayOrder();
    /** Ids of rows whose position no longer matches the last-loaded/saved order — empty unless a reorder is pending. */
    private get changedEntryIds();
    /**
     * Options for the table picker. While the field still shows the selected
     * table's name the whole list is offered, so reopening the picker doesn't
     * narrow it down to the one table already chosen.
     */
    private get filteredTables();
    private updateActiveTable;
    /** The table a row is written back to — its own in the cross-table view, the active one otherwise. */
    private tableNameFor;
    /**
     * Writes back into whichever collection is on screen. `tableId` pins a table-mode
     * write to the table it started against, so a rollback landing after a table
     * switch can't corrupt the newly-selected one.
     */
    private patchEntries;
    /**
     * Selecting a table always re-labels the picker, so the field never drifts
     * from what's shown, and always (re)fetches that table's keys — there's no
     * per-table cache, so switching back to an already-seen table hits the API again.
     */
    private setActiveTable;
    /**
     * ir-autocomplete has no "closed without choosing" event, so abandoned search
     * text would otherwise sit in the field labelling the wrong table. Deferring a
     * frame lets a pending option click land first, which makes this a no-op.
     */
    private restoreTableQuery;
    /** Picking a table from the header autocomplete goes through here so an unsaved drag reorder can't be silently discarded. */
    private requestActiveTableChange;
    private discardOrderAndSwitchTable;
    /** Saves the current table's order first — only switches once that write actually lands. */
    private saveOrderAndSwitchTable;
    private openCreateEntry;
    private openEditEntry;
    /** The entry form saved (and possibly soft-deleted/recreated) directly against Setup — refetch to pick up the result. */
    private handleEntrySaved;
    private handleEntryChange;
    /** Flips ISVISIBLE for one entry — a deliberate settings change, so it stamps a fresh ENTRY_DATE like any other content edit. */
    private handleToggleVisibility;
    /** A row drag finished — reindex every row's display order locally and flag it unsaved. */
    private handleReorderEntries;
    /** Persists the locally-reindexed order — every row in the table is rewritten, matching the bulk-write shape used for table delete. */
    private handleSaveOrder;
    /** Drops the local reorder and refetches — the same "fresh fetch is authoritative" path `loadTableEntries` already resets order state through. */
    private handleDiscardOrder;
    private requestDeleteEntry;
    private openCreateTable;
    /** The table form saved (create, empty-table rename, or bulk rename) directly against Setup — reconcile local state with what it reports. */
    private handleTableSaved;
    /** The table form's bulk rename partially failed — reload everything rather than trust a half-applied local state. */
    private handleTableSaveFailed;
    private confirmDelete;
    /**
     * Either header control takes the grid cross-table, so the table picker stops
     * selecting and the panel's own table filter takes over narrowing.
     */
    private handleMissingLanguagesChange;
    private handleSearchQueryChange;
    /** Narrowing the list can strand the active table off it — fall back to the first one still on offer. */
    private handleUsedTablesOnlyChange;
    private renderPageActions;
    render(): any;
}
export {};
