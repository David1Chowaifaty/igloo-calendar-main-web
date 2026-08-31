import { TranslationEntry, TranslationLanguage, TranslationTable } from './types';
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
    /** Languages currently shown — a subset of `languageCatalog` toggled via the language dialog. */
    languages: TranslationLanguage[];
    /** Every language this property exposes and Setup can persist, regardless of current visibility. */
    languageCatalog: TranslationLanguage[];
    activeTableId: string | null;
    /** Text shown in the table picker — doubles as the option filter while typing. */
    tableQuery: string;
    entryDrawerOpen: boolean;
    entryDrawerEntry: TranslationEntry | null;
    tableDialogOpen: boolean;
    tableDialogMode: 'create' | 'edit';
    tableDialogTable: TranslationTable | null;
    languageDialogOpen: boolean;
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
    private deleteDialogRef;
    private unsavedOrderDialogRef;
    private tokenService;
    private setupService;
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    /**
     * Which languages this property actually wants translated, and their
     * display names, come from Setup's exposed-language catalog rather than a
     * hardcoded list — narrowed to the codes Setup can persist. All exposed
     * languages start visible; hiding one only affects `languages`, so the
     * catalog stays the reference list the language dialog re-offers from.
     */
    private loadLanguages;
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
    private get activeTable();
    private get orderedLanguages();
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
    private handleAddLanguage;
    private handleRemoveLanguage;
    private handleSetSourceLanguage;
    private confirmDelete;
    private renderPageActions;
    render(): any;
}
export {};
