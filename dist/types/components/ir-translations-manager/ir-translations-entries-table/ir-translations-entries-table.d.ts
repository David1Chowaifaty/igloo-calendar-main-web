import { EventEmitter } from '../../../stencil-public-runtime';
import { TranslationEntry, TranslationLanguage } from '../types';
type EditingCell = {
    entryId: string;
    languageCode: string;
};
export declare class IrTranslationsEntriesTable {
    /** Rows to render, already filtered by the parent. */
    entries: TranslationEntry[];
    /** Column order — the source language is expected first. */
    languages: TranslationLanguage[];
    /** Code of the reference language, marked in the header. */
    sourceCode?: string;
    compact: boolean;
    /** True when the parent's filters hid every row, so the empty state can say so. */
    filtered: boolean;
    /** False while a search/status filter is active — reordering a filtered subset can't map cleanly onto the full list. */
    reorderEnabled: boolean;
    /** Ids of rows whose position differs from the last-loaded/saved order — highlighted while a reorder is pending. */
    changedEntryIds: Set<string>;
    entryChange: EventEmitter<TranslationEntry>;
    editEntry: EventEmitter<TranslationEntry>;
    duplicateEntry: EventEmitter<TranslationEntry>;
    deleteEntry: EventEmitter<TranslationEntry>;
    clearFilters: EventEmitter<void>;
    reorderEntries: EventEmitter<TranslationEntry[]>;
    toggleVisibility: EventEmitter<TranslationEntry>;
    editingCell: EditingCell | null;
    /** Working copy of `entries`, live-reordered while a drag is in progress. */
    dragEntries: TranslationEntry[];
    draggingId: string | null;
    /** `.table--container`'s current content-box width — language columns stretch to fill it instead of sitting fixed. */
    containerWidth: number;
    private cellInputRef?;
    private lastFocusKey;
    /** Live text of the cell being edited. Deliberately not @State — keystrokes must not re-render the grid. */
    private draft;
    private containerRef?;
    private containerResizeObserver?;
    /** Latest pointer Y during a drag, read by the auto-scroll loop — not @State, it'd re-render on every dragover. */
    private dragClientY;
    private autoScrollRaf;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /** A drag in progress owns row order locally — only resync from the parent once it's idle. */
    handleEntriesChange(newEntries: TranslationEntry[]): void;
    componentDidRender(): void;
    private startEditing;
    private commitDraft;
    /**
     * Moves the edit caret through the grid, wrapping across row ends so Tab
     * walks the whole table the way a spreadsheet does.
     */
    private moveEditing;
    private handleCellKeyDown;
    private handleCellBlur;
    private handleRowAction;
    private handleDragStart;
    /** Live-shifts the dragged row to the position of whichever row it's currently hovering. */
    private handleDragOver;
    /** Catches dragover over the container's own padding/gaps (not just row cells) so the pointer Y stays fresh for auto-scroll. */
    private handleContainerDragOver;
    private handleDragEnd;
    /**
     * Native HTML5 drag has no scroll-follow of its own, so a row dragged past
     * the container's top/bottom edge would otherwise strand the user there —
     * nudge `.table--container`'s own scroll position each frame while the
     * pointer sits in either edge zone, faster the closer it is to the edge.
     */
    private startAutoScroll;
    private stopAutoScroll;
    private renderDragHandle;
    private renderValueCell;
    private renderKeyCell;
    private renderLangHead;
    private renderActionsCell;
    private buildColumns;
    private renderCell;
    private renderRow;
    private renderEmptyState;
    render(): any;
}
export {};
