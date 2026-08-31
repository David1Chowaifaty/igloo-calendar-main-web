import { EventEmitter } from '../../../stencil-public-runtime';
import { EntryStatusFilter, TranslationEntry, TranslationLanguage } from '../types';
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
    shortcutHint: string | null;
    private searchInputRef?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    /** `/` jumps to search the way most keyboard-driven tools do — unlike ⌘F it doesn't fight the browser. */
    private handleGlobalKeyDown;
    private get filteredEntries();
    private get hasActiveFilters();
    private clearFilters;
    private renderToolbar;
    private renderFooter;
    private stopPropagation;
    render(): any;
}
