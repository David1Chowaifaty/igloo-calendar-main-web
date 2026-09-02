import { EventEmitter } from '../../../stencil-public-runtime';
import { DuplicateInfo, EntryStatusFilter, TranslationEntry, TranslationLanguage } from '../types';
/**
 * Owns the entries table plus its client-side search/status filtering — the
 * parent manager just hands it one table's raw entries and listens for the
 * CRUD intents it emits.
 */
export declare class IrTranslationsEntriesPanel {
    /** The active table's unfiltered entries — filtered internally for display. */
    entries: TranslationEntry[];
    languages: TranslationLanguage[];
    sourceCode?: string;
    /** True while the active table's keys are still loading. */
    isLoading: boolean;
    /** Disables the "New key" action, e.g. while another write is in flight. */
    disableActions: boolean;
    /** True once a drag reorder is applied locally but not yet saved — shows the Save/Discard order buttons. */
    hasPendingOrder: boolean;
    /** Ids of rows whose position differs from the last-loaded/saved order — marked in the table while a reorder is pending. */
    changedEntryIds: Set<string>;
    /** True when `entries` span several setup tables — adds the table filter and hands the table its grouped rendering. */
    groupByTable: boolean;
    /** Distinct table names present in `entries`, in display order — the table filter's options. */
    tableNames: string[];
    /** Disables the "New key" action outright, e.g. in the cross-table view where there is no single table to create into. */
    disableCreate: boolean;
    /** Entry id → the tables sharing that row's description; rows present here get a duplicate badge. */
    duplicates: Map<string, DuplicateInfo>;
    createEntry: EventEmitter<void>;
    editEntry: EventEmitter<TranslationEntry>;
    duplicateEntry: EventEmitter<TranslationEntry>;
    deleteEntry: EventEmitter<TranslationEntry>;
    entryChange: EventEmitter<TranslationEntry>;
    reorderEntries: EventEmitter<TranslationEntry[]>;
    toggleVisibility: EventEmitter<TranslationEntry>;
    saveOrder: EventEmitter<void>;
    discardOrder: EventEmitter<void>;
    searchTerm: string;
    statusFilter: EntryStatusFilter;
    /** Table name to narrow to, or 'all'. Only surfaced while `groupByTable` is on. */
    tableFilter: string;
    /** Language codes to audit within the rows on screen — a row survives if it's untranslated in any of them. */
    missingLanguageFilter: string[];
    shortcutHint: string | null;
    private searchInputRef?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    /** A new result set (e.g. the language selection changed) can drop the table that was filtered on — don't strand the user on an empty grid. */
    handleTableNamesChange(newNames: string[]): void;
    /** Hiding a language (or narrowing the grid in the cross-table view) must not leave an invisible filter applied. */
    handleLanguagesChange(newLanguages: TranslationLanguage[]): void;
    /** `/` jumps to search the way most keyboard-driven tools do — unlike ⌘F it doesn't fight the browser. */
    private handleGlobalKeyDown;
    /** The source language is what everything else is translated from, so "untranslated in English" isn't a useful filter. */
    private get auditableLanguages();
    private get filteredEntries();
    private get hasActiveFilters();
    private clearFilters;
    private renderToolbar;
    private renderFooter;
    private stopPropagation;
    render(): any;
}
